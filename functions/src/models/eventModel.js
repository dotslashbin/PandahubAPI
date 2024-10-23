class Event {
    constructor({ title, description, date, location, organizer, eventType }) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.organizer = organizer;
        this.eventType = eventType;
        this.updatedAt = new Date();
    }
}

module.exports = { Event };