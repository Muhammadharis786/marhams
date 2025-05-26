import React, { createContext, useState } from "react";

import AppoinmentContexts from "./patientcontext";
// Create the Appointment Context

 const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  
    return (
      <AppoinmentContexts.Provider value={{appointments,setAppointments}}>
        {children}
      </AppoinmentContexts.Provider>
       
    )




};
export default  AppointmentProvider
