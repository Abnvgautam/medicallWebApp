import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import About from './pages/about/about';
import Specialities from './pages/specialities/specialities';
import OurDoctors from './pages/doctors/doctors';
import patients from './pages/patientDashboard/patientDashboard';
import Appointments from './components/appointments/appointments';
import Messages from './components/messages/messages';
import Reports from './components/reports/reports';
import History from './components/history/history';
import Chat from './components/chats/chat';
import Profile from './components/profile/profile';
import Settings from './components/settings/settings';
import Login from './pages/login/login'
import Signup from './pages/signup/signup'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/"  exact Component={Home} />
          <Route path="/ourdoctors" Component={OurDoctors} />
          <Route path="/specialities" Component={Specialities} />
          <Route path="/aboutus" Component={About} />
          <Route path="/patients" Component={patients} />
          <Route path="/patients/appointments" Component={Appointments} />
          <Route path="/patients/messages" Component={Messages} />
          <Route path="/patients/reports" Component={Reports} />
          <Route path="/patients/history" Component={History} />
          <Route path="/patients/chat" Component={Chat} />
          <Route path="/patients/profile" Component={Profile} />
          <Route path="/patients/settings" Component={Settings} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Navigation />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
