import React, { createContext, useContext, useState } from 'react';

// Create the context
const ClinicContext = createContext();

// Provider component
export const ClinicProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [reports, setReports] = useState([]);

  return (
    <ClinicContext.Provider value={{ patients, setPatients, medicines, setMedicines, reports, setReports }}>
      {children}
    </ClinicContext.Provider>
  );
};

// Custom hook to use the ClinicContext
export const useClinic = () => useContext(ClinicContext);
