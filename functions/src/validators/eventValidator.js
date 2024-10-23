const validateEvent = (eventData) => {
    const errors = [];
    if (!eventData.title) errors.push('Title is required.');
    if (!eventData.date) errors.push('Date is required.');
    if (!eventData.organizer) errors.push('Organizer is required.');

    return {
        isValid: errors.length === 0,
        errors
    };
};

module.exports = { validateEvent };