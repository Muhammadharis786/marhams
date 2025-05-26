import React, { useState, useEffect } from "react";

function AdminPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Retrieve appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleDelete = (index) => {
    // Delete an appointment from the list
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);

    // Update localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin - Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments available.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Patient Name</th>
              <th className="border border-gray-300 p-2">Phone Number</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Hospital</th>
              <th className="border border-gray-300 p-2">Emergency</th>
              <th className="border border-gray-300 p-2">OPD</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{appointment.PName}</td>
                <td className="border border-gray-300 p-2">{appointment.Number}</td>
                <td className="border border-gray-300 p-2">{appointment.selectedDate}</td>
                <td className="border border-gray-300 p-2">{appointment.selectedTime}</td>
                <td className="border border-gray-300 p-2">{appointment.hospitalName}</td>
                <td className="border border-gray-300 p-2">{appointment.isEmergency ? "Yes" : "No"}</td>
                <td className="border border-gray-300 p-2">{appointment.isOpd ? "Yes" : "No"}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPage;
