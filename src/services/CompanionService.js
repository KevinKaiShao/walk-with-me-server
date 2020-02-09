import mongoose from 'mongoose';
import Companion from '../models/Companion';

class CompanionService {
    constructor(){
    }

    // Returns a list of all active Companions with locations
    companionList() {
        return Companion.find({
            status: 'Active'
        })
        .exec()
        .catch( err => console.log(err));
    }
}

const companionService = new CompanionService();
export default companionService;