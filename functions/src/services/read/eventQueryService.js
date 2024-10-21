const eventQueryRepository = require('../../repositories/read/eventQueryRepository');

const getAllEvents = async () => {
    return await eventQueryRepository.getAllEvents();
};

const getEventById = async (id) => {
    return await eventQueryRepository.getEventById(id);
};

module.exports = { getAllEvents, getEventById };