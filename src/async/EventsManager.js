import messagingClient from './Messaging';

import companionService from '../services/CompanionService';


/**
 * Where we set up and configure our Solace subscriptions and attach event listeners
 */
class EventsManager {
    constructor() {
    }

    initialize() {
        // First, connect to the Solace Message Broker
        messagingClient.connectWithPromise().then(response => {
            console.log("Succesfully connected to Solace Cloud.", response);

            // Now that we are successfully connected, register our message handler
            messagingClient.registerMessageHandler(app.messageHandler.bind(this));
        }).catch(error => {
            console.log("Unable to establish connection with Solace Cloud", error);
        });
    }

    messageHandler(topicString, messageString) {
        console.log("New message on topic:", topicString, "::", messageString);
        // Here is where you add code to handle the message
        switch (topicString) {
            case 'CompanionLocation': {
                const message = JSON.parse(messageString);
                console.log("Buddy location update:", message);
                const lat = Number(message.location[0]);
                const long = Number(message.location[1]);
                companionService.updateCompanionLocation(
                    message.companionId,
                    [ lat, long ]
                )
                    .catch(err => console.log(err));
                break;
            }
            case 'TripDispatch': {
                const message = JSON.parse(messageString);
                console.log("Message as object", message);
                break;
            }
            default: {
                console.warn("Unexpected topic", topicString);
                break;
            }
        }
    }

    publishMessage(topic, message) {
        messagingClient.publish(topic, message);
    }

    subscribeToTopic(topic) {
        messagingClient.subscribe(topic);
    }
}

const app = new EventsManager();
export default app;