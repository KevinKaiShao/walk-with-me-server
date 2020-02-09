import mongoose from 'mongoose';

/** Companion schema */
const companionSchema = mongoose.Schema({
	userId: { type: String, unique: true, required: true, trim: true },
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
companionSchema.index({"location": "2dsphere", userId: 1});

/** Companion Entity */
const Companion = mongoose.model('Companion', companionSchema);