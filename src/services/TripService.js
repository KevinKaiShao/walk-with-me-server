import mongoose from 'mongoose';

import Trip from '../models/Trip';
import eventsManager from '../async/EventsManager';

export const confirmTrip = async (
    travelerId,
    companionId,
    startingCoordinates,
    destinationCoordinates
) => {
    await Trip.create({
        travelerId,
        companionId,
        startingLocation: {
            type: "Point",
            coordinates: startingCoordinates,
        },
        destinationLocation: {
            type: "Point",
            coordinates: destinationCoordinates,
        },
    }, (err) => {
        if (err) console.log(err);
    }); 

    eventsManager.publishMessage(companionId, "Trip confirmed!");
}