const admin = require('firebase-admin');
const db = admin.firestore();
const COLLECTION = 'events';

const createEvent = async (event) => {
    // TODO: implement
};

const updateEvent = async (id, event) => {
    // TODO: implement
};

const deleteEvent = async (id) => {
    // TODO: implement
};

module.exports = { createEvent, updateEvent, deleteEvent };