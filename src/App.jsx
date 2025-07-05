import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/pages/Login';
import Dashboard from './Components/pages/Dashboard';
import Patients from './Components/pages/Patients';
import Medicines from './Components/pages/Medicines';
import Reports from './Components/pages/Reports';
import Layout from './Components/layout/Layout';

function App() {
  const isLoggedIn = true; // Replace with real auth later

  return (
    <Routes>
      {!isLoggedIn ? (
        <Route path="/*" element={<Login />} />
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
