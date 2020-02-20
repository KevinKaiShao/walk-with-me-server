# walk-with-me-server
## Inspiration
The inconvenience of scheduling a University Campus foot-patrol buddy in the current system, which is manual and pre-scheduled during office hours. This is at odds with the natural demand pattern for this kind service, which is unpredictable and most needed during late hours.

## What it does
A real-time mobile app that let's a user see active patrol buddies around them and request escorted walks to destinations - like our favorite ride sharing apps, but on foot.

## How I built it
Real-time messaging is achieved through a managed Pub/Sub service provided by Solace Cloud. Companions will publish their location data every 15 seconds to the 'CompanionLocation' topic, which Travelers can subscribe to get location updates of all available Travelers within their vicinity. 

The backend buddy-matching and persistence services are done with a Node.js server backed by MongoDB.

## Usage 

TODO: Dockerize MongoDB instance for easier dev experience.

After installing dependencies (including running Mongo instance):

run ``npm run dev`` to boot up local server. 
