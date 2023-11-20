/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const { getActionCards, getSectionInfos } = require('./mongo-service.ts');

router.get('/sectionInfo', getSectionInfos );

router.get('/actionCard', getActionCards);

module.exports = router;
