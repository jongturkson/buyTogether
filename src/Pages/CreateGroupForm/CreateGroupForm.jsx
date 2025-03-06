import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const CreateGroupPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('10:00');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create a New Group
        </h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="groupTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Group Title
            </label>
            <input
              type="text"
              id="groupTitle"
              className="mt-1 p-2 w-full border rounded-md focus:ring-rose-500 focus:border-rose-500"
              placeholder="e.g., Book Club, Hiking Group"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 p-2 w-full border rounded-md focus:ring-rose-500 focus:border-rose-500"
              placeholder="e.g., Online, City Park, Local Cafe"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              Ending Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="mt-1 p-2 w-full border rounded-md focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Time
            </label>
            <TimePicker
              onChange={setSelectedTime}
              value={selectedTime}
              className="mt-1 p-2 w-full border rounded-md focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Group Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:ring-rose-500 focus:border-rose-500"
              placeholder="Tell us about your group..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-500 text-white p-2 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroupPage;