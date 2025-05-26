import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppointmentProvider from './AppointmentContext.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx'; // Main Layout File (Shared Header/Footer)
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Fever from './Doctors/feverdoctor.jsx';
import Homes from './Homes.jsx';
import AdminPage from "./AdminPage";
import Depression from './Doctors/Depressiondoctor.jsx'
import Pregnancy from './Doctors/pregnancydcotor.jsx'
import Breath from './Doctors/BreathDoctor.jsx'
import Dermatologists from './Doctors/Dermatologists.jsx'
import Neurologist  from './Doctors/Neurologist.jsx';
import Pulmonologist from './Doctors/pulmonologist.jsx';
import Piles from './Doctors/Piles.jsx'
import Dengue from './Doctors/Dengue.jsx';
import GendocAppoinment from './DoctorsAppoinment/gendocAppoinment.jsx';
import Confirm  from './DoctorsAppoinment/data.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Shared Layout Route */}
      <Route
        path=""
        element={
          <>
            <Header /> {/* Persistent Header */}
            <App />    {/* Outlet where pages will render */}
            <Footer /> {/* Persistent Footer */}
          </>
        }
      >
        <Route index element={<Homes />} /> {/* Home Page (default) */}
        <Route path="feverdoctor" element={<Fever />} /> 
        <Route path="depression" element={<Depression/>} /> 
        <Route path="pregnancy" element={<Pregnancy/>} /> 
        <Route path="breathlessness" element={<Breath/>} /> 
        <Route path="hairfall" element={<Dermatologists/>} /> 
        <Route path="migrane" element={<Neurologist/>} /> 
        <Route path="tb" element={<Pulmonologist/>} /> 
        <Route path="admin" element={<AdminPage />} />
        <Route path="gendocAppoinment" element={<GendocAppoinment/>} /> 
        <Route path="Confirm" element={<Confirm/>} /> 
        <Route path="dengue" element={<Dengue/>} /> 
      
        <Route path="piles" element={<Piles/>} /> 
        <Route path="Homes" element={<Homes />} /> {/* Patient Details Page */}
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppointmentProvider>
    <RouterProvider router={router} />
    </AppointmentProvider>
  </StrictMode>
);
