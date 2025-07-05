import React, { createContext, useContext, useState } from 'react';

// Create the context
const ClinicContext = createContext();

// Provider component
export const ClinicProvider = ({ children }) => {
  const [patients, setPatients] = useState([]); // State for patients
  const [medicines, setMedicines] = useState([]); // State for medicines
  const [reports, setReports] = useState([]); // State for reports

  return (
    <ClinicContext.Provider
      value={{
        patients,
        setPatients,
        medicines,
        setMedicines,
        reports,
        setReports,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

// Custom hook to use the ClinicContext
export const useClinic = () => useContext(ClinicContext);
