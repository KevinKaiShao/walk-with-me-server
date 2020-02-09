import mongoose from 'mongoose';

/** Traveler schema */
const travelerSchema = mongoose.Schema({
	userId: { type: String, unique: true, required: true, trim: true },
	firstName: { type: String, trim: true },
	lastName: { type: String, trim: true },
	// phone: { type: String },
    // email: { type: String, unique: true },
	location: {
		type: {
			type: String,
			required: true,
			default: "Point"
		},
		address: { type: String },
		coordinates: [ Number ],
	}
});

// Create index on location to allow geo-querying
travelerSchema.index({"location": "2dsphere", userId: 1});

/** Traveler Entity */
const Traveler = mongoose.model('Traveler', travelerSchema);