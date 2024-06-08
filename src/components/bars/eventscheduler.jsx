import React, { useState } from 'react';

const EventScheduler = ({ currentDate, events, onAddEvent, onDeleteEvent }) => {
  const [newEvent, setNewEvent] = useState('');

  const handleAddEvent = () => {
    if (newEvent.trim()) {
      onAddEvent(currentDate.format('YYYY-MM-DD'), newEvent.trim());
      setNewEvent('');
    }
  };

  const handleDeleteEvent = (date, event) => {
    onDeleteEvent(date, event);
  };

  const renderEvents = (events) => {
    return events.map((event, index) => (
      <div key={index} className="flex items-center justify-between mb-2">
        <span>{event}</span>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDeleteEvent(currentDate.format('YYYY-MM-DD'), event)}
        >
          Delete
        </button>
      </div>
    ));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Events for {currentDate.format('MMMM DD, YYYY')}</h2>
      <div>{renderEvents(events)}</div>
      <div className="mt-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-2 py-1 mr-2"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          placeholder="Add new event"
        />
        <button
          className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
          onClick={handleAddEvent}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default EventScheduler;