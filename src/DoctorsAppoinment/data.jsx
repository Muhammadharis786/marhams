import { Link, useLocation ,} from "react-router-dom";

import { useContext } from "react";
import { faHeart, faCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  AppoinmentContexts from '../patientcontext'


function Confirm() {
  const locations = useLocation(); 
  const {appointments} =useContext( AppoinmentContexts)

  console.log('appoinments' ,appointments)
  const { hospitalName, location, selectedTime, selectedDate, name, Number, isEmergency } = locations.state || {};
  return (
    <>
      <form action="">
        <div className="flex justify-center" style={{ backgroundColor: '#f4f4f4' }}>
          <div className="bg-white p-20 font-poppins text-[14px] mt-10 mb-12 rounded-md">
            <div className="text-center flex justify-center">
              <span className="text-white bg-green-600 p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faCheck} className="text-lg" />
              </span>
            </div>
            <h1 className="text-center text-lg text-green-600 mb-5">Your Appointment is Booked.</h1>
            <p className="text-center border-b-[1px] border-slate-200 p-3">Your appointment is booked & our team will contact you as soon as possible.</p>
            
            <div className="flex justify-between text-slate-600 border-b-[1px] border-slate-200 p-3">
              <p>Appointment</p>
              <p>{selectedTime}</p>
            </div>
            <div className="flex justify-between text-slate-600 border-b-[1px] border-slate-200 p-3">
              <p>Date</p>
              <p>{selectedDate}</p>
            </div>
            <div className="flex justify-between text-slate-600 border-b-[1px] border-slate-200 p-3">
              <p>Doctor</p>
              <p>{name}</p>
            </div>
            <div className="flex justify-between text-slate-600 border-b-[1px] border-slate-200 p-3">
              <p>Hospital</p>
              <p>{hospitalName}</p>
            </div>
            <div className="flex justify-between text-slate-600 border-b-[1px] border-slate-200 p-3">
              <p>Hospital Address</p>
              <p>{location}</p>
            </div>
            <div className="flex justify-between text-slate-600 border-b-[1px] border-slate-200 p-3">
              <p>Hospital number</p>
              <p>042111627663</p>
            </div>
            <div className="flex justify-between text-slate-600 border-b-[1px] border-slate-200 p-3">
              <p>Patient number</p>
              <p>{Number}</p>
            </div>

            <div className={`flex justify-center mt-10 ${isEmergency ? "flex items-center bg-red-500 p-2 rounded-md text-white"  : "hidden"}`}>
              <FontAwesomeIcon icon={faCircleExclamation} className="p-2" />
              <p className="text-center">Emergency Case</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Confirm;
