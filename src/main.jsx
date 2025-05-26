import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppointmentProvider from './AppointmentContext.jsx';
import Router from './Router.jsx'; // your routing logic separated for clarity

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppointmentProvider>
      <Router />
    </AppointmentProvider>
  </StrictMode>
);
