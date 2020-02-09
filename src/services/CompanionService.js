import mongoose from 'mongoose';
import Companion from '../models/Companion';

class CompanionService {
    constructor() {
    }

    // Returns a list of all active Companions with locations
    companionList() {
        return Companion.find({
            status: 'Active'
        })
            .exec()
            .catch(err => console.log(err));
    }

    // Updates a Companion's location in database
    async updateCompanionLocation(id, coordinates) {
        const companion = await Companion.findById(id);
        companion.location.coordinates = coordinates;
        await companion.save();
    }

    // Finds closest Companions with a maxDistance, ordered by distance
    async findClosest(coordinates, maxDistance) {
        return Companion.find({
            status: 'Active',
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: coordinates
                    },
                    $maxDistance: maxDistance
                }
            }
        })
            .exec()
            .catch(error => {
                console.log(error);
            });
    }
}

const companionService = new CompanionService();
export default companionService;