const admin = require('firebase-admin');
const db = admin.firestore();
const COLLECTION = 'events';

const getAllEvents = async () => {
    const snapshot = await db.collection(COLLECTION).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getEventById = async (id) => {
    const eventDoc = await db.collection(COLLECTION).doc(id).get();
    if (!eventDoc.exists) throw new Error('Event not found');
    return { id: eventDoc.id, ...eventDoc.data() };
};

module.exports = { getAllEvents, getEventById };