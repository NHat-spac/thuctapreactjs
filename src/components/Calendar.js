import React, { useState } from 'react';
import './Calendar.css'; 

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek.map((day, index) => (
      <div key={index} className="day-of-week">
        {day}
      </div>
    ));
  };

  const renderDays = () => {
    const days = [];
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const totalDays = daysInMonth(currentMonth, currentYear);

    // Add empty slots for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty" />);
    }

    // Add days of the month
    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <div key={day} className={`day ${day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() ? 'today' : ''}`}>
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>Prev</button>
        <h2>
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
        </h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="days-of-week">{renderDaysOfWeek()}</div>
      <div className="days-grid">{renderDays()}</div>
    </div>
  );
};

export default Calendar;