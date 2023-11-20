/* eslint-disable @typescript-eslint/no-var-requires */
const InfoSectionCollection = require('./schemas/info-section.ts');
const ActionCardCollection = require('./schemas/action-card.ts');

module.exports.getSectionInfos = async (req, res) => {
    try {
        const sectionInfo = await InfoSectionCollection.find({});
        console.log('<< [SECTION INFO] GET OK >>', sectionInfo);
        return res.json(sectionInfo);
    } catch (error) {
        console.log('<< [SECTION INFO] GET ERROR >>', error);
        return res.mongoError(error);
    }
}

module.exports.getActionCards = async (req, res) => {
    try {
        const actionCards = await ActionCardCollection.find({});
        console.log('<< [ACTION CARD] GET OK >>', actionCards);
        return res.json(actionCards);
    } catch (error) {
        console.error('<< [ACTION CARD] GET ERROR >>');
        return res.mongoError(error);
    }
}
