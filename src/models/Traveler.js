import mongoose from 'mongoose';

/** Traveler schema */
const travelerSchema = new mongoose.Schema({
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

/** Traveler Entity */
const Traveler = mongoose.model('Traveler', travelerSchema);

export default Traveler;