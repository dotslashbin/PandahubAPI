const admin = require('firebase-admin');
const db = admin.firestore();
const COLLECTION = 'events';

const createEvent = async (event) => {
    const eventRef = await db.collection(COLLECTION).add(Object.assign({}, event));
    return eventRef.id;
};

const updateEvent = async (id, event) => {
    const eventRef = db.collection(COLLECTION).doc(id);
    await eventRef.update({ ...event, updatedAt: new Date() });
};

const deleteEvent = async (id) => {
    await db.collection(COLLECTION).doc(id).delete();
};

module.exports = { createEvent, updateEvent, deleteEvent };