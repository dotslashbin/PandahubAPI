const { successResponse, errorResponse } = require('../utils/responseHelper');
const eventQueryService = require('../services/read/eventQueryService');
const eventCommandService = require('../services/write/eventCommandService');
const { validateEvent } = require('../validators/eventValidator');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await eventQueryService.getAllEvents();
        return successResponse(res, events);
    } catch (error) {
        return errorResponse(res, error);
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await eventQueryService.getEventById(req.params[0]);
        return successResponse(res, event);
    } catch (error) {
        return errorResponse(res, error);
    }
};

exports.createEvent = async (req, res) => {
    try {
        const validation = validateEvent(req.body);
        if (!validation.isValid) return errorResponse(res, validation.errors, 400);

        const eventId = await eventCommandService.createEvent(req.body);
        return successResponse(res, { id: eventId }, 201);
    } catch (error) {
        return errorResponse(res, error);
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const updatedEventData = req.body;

        const validation = validateEvent(updatedEventData);
        if (!validation.isValid) return errorResponse(res, validation.errors, 400);

        await eventCommandService.updateEvent(req.params[0], updatedEventData);
        return successResponse(res, { message: 'Event updated' });
    } catch (error) {
        return errorResponse(res, error);
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        await eventCommandService.deleteEvent(req.params[0]);
        return successResponse(res, { message: 'Event deleted' });
    } catch (error) {
        return errorResponse(res, error);
    }
};