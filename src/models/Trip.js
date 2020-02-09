import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
    travelerId: {
        type: mongoose.ObjectId,
        ref: 'Traveler',
        required: true
    },
    companionId: mongoose.ObjectId,
    startingLocation: {
        type: {
            type: String,
            required: true,
            default: "Point"
        },
        coordinates: [Number],
        address: { type: String }
    },
    destinationLocation: {
        type: {
            type: String,
            required: true,
            default: "Point"
        },
        coordinates: [Number],
        address: { type: String }
    },
    // status: {
    //     type: String,
    //     required: true,
    //     enum: [
    //         'Requested',
    //         'Confirmed',
    //         'Completed',
    //     ],
    //     default: 'Default'
    // },
});

// Represents a Trip
const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
