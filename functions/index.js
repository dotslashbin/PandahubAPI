// /index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const eventController = require('./src/controllers/eventController');

// Define Cloud Functions for HTTP triggers
exports.getAllEvents = functions.https.onRequest(eventController.getAllEvents);
exports.getEventById = functions.https.onRequest(eventController.getEventById);
exports.createEvent = functions.https.onRequest(eventController.createEvent);
exports.updateEvent = functions.https.onRequest(eventController.updateEvent);
exports.deleteEvent = functions.https.onRequest(eventController.deleteEvent);
