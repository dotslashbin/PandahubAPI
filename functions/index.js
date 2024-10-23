// Imports
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize the app
admin.initializeApp();

const eventController = require('./src/controllers/eventController');

// Cloud fuunction
exports.getAllEvents = functions.https.onRequest(eventController.getAllEvents);
exports.getEventById = functions.https.onRequest(eventController.getEventById);
exports.createEvent = functions.https.onRequest(eventController.createEvent);
exports.updateEvent = functions.https.onRequest(eventController.updateEvent);
exports.deleteEvent = functions.https.onRequest(eventController.deleteEvent);
