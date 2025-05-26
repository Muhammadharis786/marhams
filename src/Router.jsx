import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'; // Contains <Outlet />, used for nested routing
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Fever from './Doctors/feverdoctor.jsx';
import Homes from './Homes.jsx';
import AdminPage from "./AdminPage";
import Depression from './Doctors/Depressiondoctor.jsx';
import Pregnancy from './Doctors/pregnancydcotor.jsx';
import Breath from './Doctors/BreathDoctor.jsx';
import Dermatologists from './Doctors/Dermatologists.jsx';
import Neurologist from './Doctors/Neurologist.jsx';
import Pulmonologist from './Doctors/pulmonologist.jsx';
import Piles from './Doctors/Piles.jsx';
import Dengue from './Doctors/Dengue.jsx';
import GendocAppoinment from './DoctorsAppoinment/gendocAppoinment.jsx';
import Confirm from './DoctorsAppoinment/data.jsx';

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homes />} />
          <Route path="feverdoctor" element={<Fever />} />
          <Route path="depression" element={<Depression />} />
          <Route path="pregnancy" element={<Pregnancy />} />
          <Route path="breathlessness" element={<Breath />} />
          <Route path="hairfall" element={<Dermatologists />} />
          <Route path="migrane" element={<Neurologist />} />
          <Route path="tb" element={<Pulmonologist />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="gendocAppoinment" element={<GendocAppoinment />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="dengue" element={<Dengue />} />
          <Route path="piles" element={<Piles />} />
          <Route path="homes" element={<Homes />} />
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default Router;
