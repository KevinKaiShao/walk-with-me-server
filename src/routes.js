import express from 'express';

import eventsManager from './async/EventsManager';
import companionService from './services/CompanionService';
import { confirmTrip } from './services/TripService';

const router = express.Router();

const MAXDISTANCE = 1000;

// Companion endpoints
// Get all companions
router.get('/companions/', async (req, res) => {
    const companions = await companionService.companionList();
    return res.status(200).json({
        companions
    });
});


// Request a trip 
router.post('/requesttrip/', async (req, res) => {
    // find nearest companions
    console.log(req.body);
    const lat = Number(req.body.startingCoordinates[0]);
    const long = Number(req.body.startingCoordinates[1]);
    companionService.findClosest([lat, long], MAXDISTANCE)
        .then(companions => {
            // Send trip request to closest companion if 1 is found
            //broadcast summoning request to Companion in TripDispatch channel
            if (companions.length === 0) 
                return res.send('No nearby companions found!');

            eventsManager.publishMessage('TripDispatch', JSON.stringify({
                "companionId": companions[0]._id,
                "travelerId": req.body.travelerId,
                "topic": req.body.travelerId,
                "startingCoordinates": req.body.startingCoordinates,
                "destinationCoordinates": req.body.destinationCoordinates
            }));
            
            return res.status(200).json({ companions });
        })
        .catch(err => console.log(err));
});

// Companion confirm a trip
router.post('/trips/', async (req, res) => {

});


export default router;
