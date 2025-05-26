import React, { useState, useEffect } from "react";
import { Link, useLocation ,useNavigate } from "react-router-dom";

function gendocAppoinment() {
  const [dates, setDates] = useState([]);
  const [hospitalName, setHospitalName] = useState();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [Number, setNumber] = useState("");
  const [PName, setPName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  const [isOpd, setIsOpd] = useState(false);

  const handleEmergencyChange = () => {
    setIsEmergency(true);
    setIsOpd(false);
  };

  const handleOpdChange = () => {
    setIsOpd(true);
    setIsEmergency(false);
  };

  const locations = useLocation();
  const { charges, name, hospital, location } = locations.state || {};

  useEffect(() => {
    const characters = hospital.split("");
    let HospName = "";
    for (let index = 0; index < characters.length; index++) {
      if (characters[index] === ",") {
        break;
      }
      HospName = HospName + characters[index];
    }
    setHospitalName(HospName);
  }, [hospital]);

  const [times, setTimes] = useState([]);
  const [timetable, setTimeTable] = useState([]);

  useEffect(() => {
    const options = { month: "short", day: "numeric" };
    const today = new Date();
    const CurrentDate = Intl.DateTimeFormat("en-US", options).format(today);
    setTimeTable(CurrentDate);
  }, []);

  useEffect(() => {
    const formatTime = (date) => {
      const options = { hour: "2-digit", minute: "2-digit", hour12: true };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    const now = new Date();
    const currentTime = new Date(now.getTime());
    const startTime = new Date();
    startTime.setHours(11, 30, 0, 0);

    const timeArray = [];
    let timeSlot = startTime;

    while (timeSlot.getTime() <= currentTime.getTime()) {
      timeSlot = new Date(timeSlot.getTime() + 30 * 60 * 1000);
    }

    while (timeSlot.getTime() < currentTime.getTime() + 6 * 60 * 60 * 1000) {
      timeArray.push({
        label: formatTime(timeSlot),
        value: timeSlot.toISOString(),
      });
      timeSlot = new Date(timeSlot.getTime() + 30 * 60 * 1000);
    }

    setTimes(timeArray);
  }, []);

  useEffect(() => {
    const formatDate = (date) => {
      const options = { weekday: "short", month: "short", day: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    const generateDates = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const dateArray = [{ label: formatDate(today), value: today.toISOString() }];
      for (let i = 1; i <= 5; i++) {
        const nextDate = new Date();
        nextDate.setDate(today.getDate() + i);
        nextDate.setHours(0, 0, 0, 0);
        dateArray.push({ label: formatDate(nextDate), value: nextDate.toISOString() });
      }
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      return dateArray.filter((date) => new Date(date.value) >= currentDate);
    };

    setDates(generateDates());
    const intervalId = setInterval(() => {
      setDates(generateDates());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Ensure useNavigate is imported

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation to ensure all required fields are filled
    if (!selectedDate || !selectedTime || !PName || !Number || !isValid || (!isEmergency && !isOpd)) {
      alert("Please fill all required fields");
      return;
    }
  
    // Save appointment data in localStorage
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const newAppointment = {
      PName,
      Number,
      selectedDate,
      selectedTime,
      hospitalName,
      charges,
      isEmergency,
      isOpd,
      name,
      location,
    };
  
    localStorage.setItem("appointments", JSON.stringify([...appointments, newAppointment]));
  
    // Navigate to the next page
    navigate("/Confirm", {
      state: {
        charges,
        hospitalName,
        selectedTime,
        selectedDate,
        name,
        location,
        Number,
        isEmergency,
        isOpd,
      },
    });
  };
  

  const handleInputChanges = (e) => {
    const value = e.target.value;
    setNumber(value);
    if (value.length === 10 || value.length === 11) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form>
      <div className="flex justify-center bg-white font-poppins mb-24">
        <div style={{ backgroundColor: "#f0f9f6" }} className="w-[60%] p-8 rounded-md mt-4">
          <div className="flex justify-start w-full">
            <h1 className="tracking-wide font-extrabold text-[18px]">
              Get <span style={{ color: "#4ca585" }}>Confirmed</span> Appointment Online
            </h1>
          </div>
          <div className="mt-4 leading-6 bg-white p-3 rounded-md border-2 border-green-500 text-[15px]">
            <h1 className="underline font-semibold">{hospitalName}</h1>
            <p className="text-[13px]">Rs. {charges}</p>
            <h1 className="text-[14px] mb-4">Available from {timetable} - 12:00 PM - 09:00 PM</h1>
            <h2 className="text-slate-400 text-[13px] font-semibold">{location}</h2>
          </div>
          <div className="flex mt-4">
            <span className="text-[13px] bg-black text-white font-bold rounded-full flex h-[22px] w-[22px] justify-center items-center content-center">2</span>
            <span className="font-bold tracking-wide text-[13px] ml-4">Select Date & Time</span>
          </div>
          <div className="flex justify-evenly mt-2">
            <div className="w-1/2 pr-2">
              <select
                required
                id="dateDropdown"
                className="border-[1px] border-green-500 focus:outline-none rounded-md p-1 w-full"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="">Select Date</option>
                {dates.map((date, index) => (
                  <option key={index} value={date.label}>
                    {date.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <select
                required
                id="timeDropdown"
                className="border-[1px] border-green-500 focus:outline-none rounded-md p-1 w-full"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {times.length === 0 ? (
                  <option value="">No available times</option>
                ) : (
                  times.map((time, index) => (
                    <option key={index} value={time.label} className="rounded-3xl text-red-700">
                      {time.label}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div className="patientDetails flex justify-evenly mt-4">
            <div className="number w-1/2 pr-2 flex">
              <div className="bg-slate-200 flex justify-center content-center items-center pr-4 pl-2 border-l-[1px] border-t-[1px] border-b-[1px] border-green-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4854/4854998.png"
                  alt=""
                  className="h-[18px] w-[18px]"
                />
                <p className="text-[13px] pl-1">+92</p>
              </div>
              <input
                type="number"
                placeholder="Add Phone Number"
                onChange={handleInputChanges}
                className="border-r-[1px] border-t-[1px] border-b-[1px] border-green-500 focus:outline-none rounded-r-md w-full text-[13px] p-2"
              />
            </div>
            <div className="patientName w-1/2">
              <input
                type="text"
                placeholder="Add Patient Name"
                onChange={(e) => setPName(e.target.value)}
                className="border-[1px] border-green-500 focus:outline-none rounded-md p-2 text-[13px] w-full"
              />
            </div>
          </div>
          <div className="flex justify-evenly text-[14px]">
            <div className="w-full flex items-center">
              <input
                type="checkbox"
                name="Emg"
                id="Emg"
                className="cursor-pointer"
                checked={isEmergency}
                onChange={handleEmergencyChange}
              />
              <label htmlFor="Emg" className="cursor-pointer">Emergency Case</label>
            </div>
            <div className="w-full flex items-center">
              <input
                type="checkbox"
                name="opd"
                id="opd"
                className="cursor-pointer"
                checked={isOpd}
                onChange={handleOpdChange}
              />
              <label htmlFor="opd" className="cursor-pointer">OPD Case</label>
            </div>
          </div>
          <Link
            to={'/Confirm'}
            state={{ charges, hospitalName, selectedTime, selectedDate, name, location, Number, isEmergency, isOpd }}
          >
            <button
              onClick={handleSubmit}
              className={`p-2 w-full mt-3 rounded-md ${
                !selectedDate || !selectedTime || !PName || !Number || !isValid || (!isEmergency && !isOpd)
                  ? "bg-slate-300 text-gray-500 cursor-not-allowed"
                  : "bg-cyan-800 hover:bg-cyan-600 text-white"
              }`}
            >
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default gendocAppoinment;
