import mongoose from 'mongoose';

/** Companion schema */
const companionSchema = new mongoose.Schema({
	firstName: { type: String, trim: true },
	lastName: { type: String, trim: true },
	// phone: { type: String },
    // email: { type: String, unique: true },
    status: {type: String, required: true, enum: ['Active', 'Inactive'], default: 'Active'},
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
companionSchema.index({"location": "2dsphere"});

/** Companion Entity */
const Companion = mongoose.model('Companion', companionSchema);

export default Companion;