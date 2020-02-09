import express from 'express';

import companionService from './services/CompanionService';

const router = express.Router();

// Companion endpoints
router.get('/companions/', async (req, res) => {
    const companions = await companionService.companionList();
    return res.status(200).json({
        companions
    });
});

export default router;
