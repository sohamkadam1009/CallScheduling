import React, { useState, useRef, useEffect, useContext } from "react";
import { ChevronRight, ChevronLeft, Calendar } from "lucide-react";
import "./ScheduleComponent.css";
import { Navigate, useNavigate } from "react-router-dom";
import { DetailsContext } from "./contexts/Details";
import { time } from "framer-motion";

const ScheduleComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef(null);
  const navigate = useNavigate();

  const { data, setData } = useContext(DetailsContext);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const handleConfirm = () => {
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    // Format the date HERE before storing in context
    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    setData((prev) => ({
      ...prev,
      time: selectedTime, // already a string
      date: formattedDate, // IMPORTANT: now it's a string (safe)
    }));

    navigate("/emailDetails");
  };

  const isSunday = (date) => date.getDay() === 0;

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      );
    }

    return days;
  };

  const handleDateClick = (date) => {
    if (date && !isSunday(date) && !isPast(date)) {
      setSelectedDate(date);
      setShowCalendar(false);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const calendarDays = generateCalendarDays();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const formatDate = (date) => {
    if (!date) return null;
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div style={styles.wrapper}>
      <div className="schedule-wrapper">
        <div className="header">
          <h2>Select date and time</h2>
        </div>

        <div className="date-picker-container" ref={calendarRef}>
          <label className="date-label">Select a date:</label>

          <button
            className={`date-input ${showCalendar ? "active" : ""}`}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div className="date-input-content">
              <Calendar size={20} className="date-input-icon" />
              <span
                className={`date-input-text ${
                  !selectedDate ? "placeholder" : ""
                }`}
              >
                {selectedDate ? formatDate(selectedDate) : "Choose your date"}
              </span>
            </div>
            <ChevronRight size={20} className="date-input-arrow" />
          </button>

          {showCalendar && (
            <div className="calendar-dropdown">
              <div className="calendar-header">
                <button className="nav-btn" onClick={handlePrevMonth}>
                  <ChevronLeft size={18} />
                </button>
                <span className="month-year">{monthName}</span>
                <button className="nav-btn" onClick={handleNextMonth}>
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="day-names-grid">
                {dayNames.map((day) => (
                  <div key={day} className="day-name">
                    {day}
                  </div>
                ))}
              </div>

              <div className="days-grid">
                {calendarDays.map((date, idx) => {
                  const isDisabled = !date || isSunday(date) || isPast(date);
                  const isSelected =
                    selectedDate &&
                    date &&
                    selectedDate.toDateString() === date.toDateString();
                  const isTodayDate = date && isToday(date);

                  return (
                    <button
                      key={idx}
                      className={`day ${
                        isTodayDate && !isDisabled ? "today" : ""
                      } ${isSelected ? "selected" : ""}`}
                      onClick={() => handleDateClick(date)}
                      disabled={isDisabled}
                    >
                      {date ? date.getDate() : ""}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="duration-info">
          <div className="dot"></div>
          <span className="duration-text">
            45 min call (Indian Standard Time)
          </span>
        </div>

        <div className="time-section">
          <div className="time-grid">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`time-btn ${selectedTime === time ? "active" : ""}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="info-box">
          <div className="icon">💡</div>
          <span className="info-text">
            1,943 users scheduled free meeting with Dezerv in the past month
          </span>
        </div>

        <button className="confirm-btn" onClick={() => handleConfirm()}>
          Confirm time slot
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    backgroundColor: "#1a1a1a",
  },
};

export default ScheduleComponent;
