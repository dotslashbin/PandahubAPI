const eventCommandRepository = require('../../repositories/write/eventCommandRepository');
const { Event } = require('../../models/eventModel');

const createEvent = async (eventData) => {
    const event = new Event({
        title: eventData.title,
        description: eventData.description,
        date: eventData.date,
        location: eventData.location,
        organizer: eventData.organizer,
        eventType: eventData.eventType
    });
    return await eventCommandRepository.createEvent(event);
};

const updateEvent = async (id, eventData) => {
    const event = new Event({
        title: eventData.title,
        description: eventData.description,
        date: eventData.date,
        location: eventData.location,
        organizer: eventData.organizer,
        eventType: eventData.eventType
    });
    return await eventCommandRepository.updateEvent(id, event);
};

const deleteEvent = async (id) => {
    return await eventCommandRepository.deleteEvent(id);
};

module.exports = { createEvent, updateEvent, deleteEvent };