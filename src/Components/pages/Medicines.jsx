import React, { useState } from 'react';

const Medicines = () => {
  const [medicines, setMedicines] = useState([
    { name: 'Paracetamol', type: 'Tablet', dosage: '500mg' }
  ]);

  const [medicine, setMedicine] = useState({
    name: '',
    type: '',
    dosage: '',
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMedicines([...medicines, medicine]);
    setMedicine({ name: '', type: '', dosage: '' });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Medicine</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={medicine.name}
          onChange={handleChange}
          placeholder="Medicine Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="type"
          value={medicine.type}
          onChange={handleChange}
          placeholder="Type (e.g. Tablet, Syrup)"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="dosage"
          value={medicine.dosage}
          onChange={handleChange}
          placeholder="Dosage (e.g. 500mg, 1x/day)"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Medicine
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Medicine List</h3>
        <ul className="space-y-2">
          {medicines.map((med, index) => (
            <li key={index} className="p-3 bg-gray-100 rounded shadow-sm">
              <strong>{med.name}</strong> – {med.type}, {med.dosage}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Medicines;
