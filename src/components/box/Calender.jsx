import React, { useState } from 'react';
import moment from 'moment';
import EventScheduler from '../bars/eventscheduler';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});

  const handleAddEvent = (date, event) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [date]: [...(prevEvents[date] || []), event],
    }));
  };

  const handleDeleteEvent = (date, event) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [date]: prevEvents[date].filter((e) => e !== event),
    }));
  };

  const renderDays = () => {
    const startDay = currentDate.clone().startOf('month').startOf('week');
    const daysInMonth = currentDate.daysInMonth();
    const days = [];

    for (let i = 0; i < daysInMonth; i++) {
      const day = startDay.clone().add(i, 'days');
      days.push(
        <div
          key={day.format('YYYYMMDD')}
          className={`w-14 h-14 flex items-center justify-center relative cursor-pointer ${day.isSame(selectedDate, 'day') ? 'bg-blue-500 text-white rounded-md' : ''
            } hover:bg-gray-200 rounded-md`}
          onClick={() => {
            setSelectedDate(day.clone());
            setCurrentDate(day.clone());
          }}
        >
          {day.date()}
          {events[day.format('YYYY-MM-DD')] && (
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              {
                events[day.format('YYYY-MM-DD')] && events[day.format('YYYY-MM-DD')].length > 0 && (
                  <span className="bg-red-500 text-white text-xs px-1 rounded-sm">
                    {events[day.format('YYYY-MM-DD')].length}
                  </span>
                )
              }
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <EventScheduler
          currentDate={currentDate}
          events={events[currentDate.format('YYYY-MM-DD')] || []}
          onAddEvent={handleAddEvent}
          onDeleteEvent={handleDeleteEvent}
        />
      </div>
      <div className="w-2/3 p-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setCurrentDate(currentDate.clone().subtract(1, 'month'))}
            >
              &lt; Prev
            </button>
            <h2 className="text-lg font-semibold">
              {currentDate.format('MMMM YYYY')}
            </h2>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setCurrentDate(currentDate.clone().add(1, 'month'))}
            >
              Next &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-gray-500">
                {day}
              </div>
            ))}
            {renderDays()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;