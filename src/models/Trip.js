import mongoose from 'mongoose';

const tripSchema = mongoose.Schema({
    tripId: { type: String },
    travelerId: { type: String, required: true, trim: true },
    companionId: { type: String },
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
