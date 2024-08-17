import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });
  const [reminder1, setReminder1] = useState(null);
  const [reminder2, setReminder2] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://server-dcc.onrender.com/api/tasks');
        const formattedEvents = response.data.flatMap(event => {
          const baseEvent = {
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
          };

          const eventsArray = [baseEvent];

          if (event.reminder1) {
            eventsArray.push({
              ...baseEvent,
              start: new Date(event.reminder1),
              end: new Date(event.reminder1),
              title: `${event.title} - Reminder 1`,
              reminder: true,
            });
          }

          if (event.reminder2) {
            eventsArray.push({
              ...baseEvent,
              start: new Date(event.reminder2),
              end: new Date(event.reminder2),
              title: `${event.title} - Reminder 2`,
              reminder: true,
            });
          }

          return eventsArray;
        });
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddEvent = async () => {
    if (!newEvent.title) {
      toast.error('Please enter a title for the task');
      return;
    }

    try {
      const response = await axios.post('https://server-dcc.onrender.com/api/tasks', {
        ...newEvent,
        reminder1,
        reminder2,
      });

      const addedEvent = {
        ...response.data,
        start: new Date(response.data.start),
        end: new Date(response.data.end),
      };

      const newEvents = [addedEvent];

      if (response.data.reminder1) {
        newEvents.push({
          ...addedEvent,
          start: new Date(response.data.reminder1),
          end: new Date(response.data.reminder1),
          title: `${response.data.title} - Reminder 1`,
          reminder: true,
        });
      }

      if (response.data.reminder2) {
        newEvents.push({
          ...addedEvent,
          start: new Date(response.data.reminder2),
          end: new Date(response.data.reminder2),
          title: `${response.data.title} - Reminder 2`,
          reminder: true,
        });
      }

      setEvents([...events, ...newEvents]);
      toast.success('Task added to the calendar');
    } catch (error) {
      console.error('Error adding task:', error);
      toast.error('Error adding task');
    }
  };

  const handleDeleteEvent = async (event) => {
    try {
      await axios.delete(`https://server-dcc.onrender.com/api/task/${event._id}`);
      setEvents(events.filter(e => e._id !== event._id));
      toast.success('Task deleted from the calendar');
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Error deleting task');
    }
  };

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.reminder ? 'red' : '#3788d8',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
      cursor: 'pointer',
    };
    return { style };
  };

  return (
    <div className="container bg bg-white p-4 m-3 ml-3 mr-2 rounded">
      <h2 className="text-center mb-4">Task Calendar</h2>

      <div className="mb-10 bg-white p-3 rounded form-area text-black">
        <input
          type="text"
          placeholder="Task Title"
          className="form-control mb-2"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start, end: start })}
          showTimeSelect
          className="form-control mb-2"
          placeholderText="Start Date and Time"
        />
        <DatePicker
          selected={reminder1}
          onChange={(date) => setReminder1(date)}
          showTimeSelect
          className="form-control mb-2"
          placeholderText="Set Reminder 1"
        />
        <DatePicker
          selected={reminder2}
          onChange={(date) => setReminder2(date)}
          showTimeSelect
          className="form-control mb-2"
          placeholderText="Set Reminder 2"
        />
        <button onClick={handleAddEvent} className="btn btn-primary w-100">
          Add Task with Reminders
        </button>
      </div>
      <hr></hr>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={(event) => {
          if (window.confirm(`Are you sure you want to delete the task "${event.title}"?`)) {
            handleDeleteEvent(event);
          }
        }}
      />
      <ToastContainer />
    </div>
  );
};

export default CalendarComponent;
