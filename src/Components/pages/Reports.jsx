import React, { useState, useRef } from 'react';
import { Printer } from 'lucide-react';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [medicines] = useState([
    { name: 'Paracetamol', type: 'Tablet', dosage: '500mg' },
    { name: 'Ibuprofen', type: 'Capsule', dosage: '200mg' },
    { name: 'Amoxicillin', type: 'Syrup', dosage: '250mg/5ml' },
  ]);

  const [report, setReport] = useState({
    doctorName: '',
    patientName: '',
    situation: '',
    selectedMedicines: [],
  });

  const printRef = useRef();

  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const handleMedicineChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selected = selectedOptions
      .map((option) => medicines.find((med) => med.name === option.value))
      .filter(Boolean); // Remove undefined
    setReport({ ...report, selectedMedicines: selected });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReports((prev) => [...prev, report]);
    setReport({
      doctorName: '',
      patientName: '',
      situation: '',
      selectedMedicines: [],
    });
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Doctor Prescription</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .title { font-size: 22px; font-weight: bold; margin-bottom: 20px; }
            .section { margin-bottom: 10px; }
            .label { font-weight: bold; }
            .box { border: 1px solid #000; padding: 10px; margin-top: 5px; }
            .medicine-item { margin-bottom: 5px; }
          </style>
        </head>
        <body>${printRef.current.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Doctor Report</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="doctorName"
          value={report.doctorName}
          onChange={handleChange}
          placeholder="Doctor Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="patientName"
          value={report.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="situation"
          value={report.situation}
          onChange={handleChange}
          placeholder="Diagnosis / Situation"
          className="w-full p-2 border rounded"
          required
        />

        <label className="block font-semibold">Select Medicines</label>
        <select
          multiple
          value={report.selectedMedicines.map((med) => med.name)}
          onChange={handleMedicineChange}
          className="w-full p-2 border rounded h-32"
        >
          {medicines.map((med, index) => (
            <option key={index} value={med.name}>
              {med.name} ({med.type}, {med.dosage})
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Report
        </button>
      </form>

      {/* Print Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <Printer size={16} />
          Print Report
        </button>
      </div>

      {/* Printable Report */}
      <div ref={printRef} className="mt-6 p-6 border border-gray-300 bg-white">
        <div className="title">Clinic Name - Prescription</div>
        <div className="section"><span className="label">Doctor:</span> {report.doctorName}</div>
        <div className="section"><span className="label">Patient:</span> {report.patientName}</div>
        <div className="section"><span className="label">Date:</span> {new Date().toLocaleDateString()}</div>
        <div className="section">
          <div className="label">Diagnosis / Situation:</div>
          <div className="box">{report.situation}</div>
        </div>
        <div className="section">
          <div className="label">Prescribed Medicines:</div>
          <div className="box">
            {report.selectedMedicines.length > 0 ? (
              report.selectedMedicines.map((med, index) => (
                <div key={index} className="medicine-item">
                  <strong>{med.name}</strong> ({med.type}) – {med.dosage}
                </div>
              ))
            ) : (
              <div>No medicines selected.</div>
            )}
          </div>
        </div>
      </div>

      {/* Saved Reports */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Saved Reports</h3>
        <ul className="space-y-3">
          {reports.map((r, index) => (
            <li key={index} className="bg-gray-50 border rounded p-3">
              <div className="font-semibold">
                {r.patientName} <span className="text-sm text-gray-500">({r.doctorName})</span>
              </div>
              <div className="text-sm text-gray-600">{r.situation}</div>
              <div className="text-sm mt-1 text-gray-700">
                <span className="font-semibold">Medicines:</span>
                <ul className="ml-4 mt-1 list-disc">
                  {r.selectedMedicines.map((med, idx) => (
                    <li key={idx}>
                      {med.name} ({med.type}, {med.dosage})
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reports;
