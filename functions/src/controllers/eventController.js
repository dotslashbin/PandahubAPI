const { successResponse, errorResponse } = require('../utils/responseHelper');
const eventQueryService = require('../services/read/eventQueryService');
const eventCommandService = require('../services/write/eventCommandService');
const { validateEvent } = require('../validators/eventValidator');

exports.getAllEvents = async (req, res) => {
    // TODO: implement
};

exports.getEventById = async (req, res) => {
    // TODO: implement
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
        const validation = validateEvent(req.body);
        if (!validation.isValid) return errorResponse(res, validation.errors, 400);

        await eventCommandService.updateEvent(req.params.id, req.body);
        return successResponse(res, { message: 'Event updated' });
    } catch (error) {
        return errorResponse(res, error);
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        await eventCommandService.deleteEvent(req.params.id);
        return successResponse(res, { message: 'Event deleted' });
    } catch (error) {
        return errorResponse(res, error);
    }
};