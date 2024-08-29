
import AluminiDonation from './pages/AluminiDonation';
import './App.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Sucess from './components/Sucess';
import Cancel from './components/Cancel';
import AluminiStartup from './pages/AluminiStartup';
import StudentStartup from './pages/StudentStartup';
import Postideasform from './pages/Postideasform';
import StudentDashBoard from './pages/StudentDashBoard';
import AluminiDashBoard from './pages/AluminiDashBoard';

function App() {
  return (
    <>
     <Routes>
      <Route  path='/alumini-donation' element={<AluminiDonation />}/>
      <Route  path='/sucess' element={<Sucess />}/>
      <Route  path='/cancel' element={<Cancel />}/>
      <Route path="/alumini-startup-landing" element={<AluminiStartup />} />
      <Route path="/student-startup-landing" element={<StudentStartup />} />
      <Route path="/student-post-idea" element={<Postideasform />} />
      <Route path='/student' element={<StudentDashBoard />} />
      <Route path='/alumini' element={<AluminiDashBoard />} />
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
