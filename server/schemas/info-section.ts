const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoCardSchema = new Schema({
    title: { type: String },
    subtitle: { type: String },
    description: { type: [String], required: true },
    imageUrl: { type: String },
    imageAlt: { type: String },
});

const listItemSchema = new Schema({
    label: { type: String, required: true },
    imageUrl: { type: String },
    imageAlt: { type: String },
});

const subListItemSchema = new Schema({
    subtitle: { type: String },
    listItems: [ listItemSchema ],
});

const listCardSchema = new Schema({
    title: { type: String },
    subListItems: [ subListItemSchema ],
});

const sectionSchema = new Schema({
    sectionTitle: { type: String, required: true },
    infoCardData: [ infoCardSchema ],
    listCardData: [ listCardSchema ],
    priority: { type: Number, required: true }
});

module.exports = mongoose.model('Section', sectionSchema);