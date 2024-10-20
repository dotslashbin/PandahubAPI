const admin = require('firebase-admin');
const db = admin.firestore();
const COLLECTION = 'events';

const getAllEvents = async () => {
    // TODO: implement
};

const getEventById = async (id) => {
    // TODO: implement
};

module.exports = { getAllEvents, getEventById };