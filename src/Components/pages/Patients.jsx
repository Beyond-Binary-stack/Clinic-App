import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClinic } from '../../Context/ClinicContext';
import { FaSearch, FaPlus, FaEdit } from 'react-icons/fa';

const Patients = () => {
  const { patients, setPatients } = useClinic();
  const [form, setForm] = useState({ name: '', age: '', phone: '', note: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdatePatient = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...patients];
      updated[editingIndex] = form;
      setPatients(updated);
      setEditingIndex(null);
    } else {
      setPatients([...patients, form]);
    }
    setForm({ name: '', age: '', phone: '', note: '' });
  };

  const handleEdit = (index) => {
    setForm(patients[index]);
    setEditingIndex(index);
  };

  const handleRowClick = (index) => {
    navigate(`/patients/${index}`);
  };

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Patients Management</h2>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-4 rounded-r-md flex items-center">
          <FaSearch />
        </button>
      </div>

      <form onSubmit={handleAddOrUpdatePatient} className="bg-white p-6 rounded-lg shadow-md mb-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Patient Name"
            className="p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            className="p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Note"
            className="p-3 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className={`${
            editingIndex !== null ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white px-4 py-2 rounded mt-2 flex items-center`}
        >
          {editingIndex !== null ? <FaEdit className="mr-2" /> : <FaPlus className="mr-2" />}
          {editingIndex !== null ? 'Update Patient' : 'Add Patient'}
        </button>
      </form>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Note</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center">No matching patients.</td>
              </tr>
            ) : (
              filteredPatients.map((p, index) => (
                <tr
                  key={index}
                  className="border-t cursor-pointer hover:bg-gray-100"
                  onClick={() => handleRowClick(index)}
                >
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">{p.age}</td>
                  <td className="px-4 py-2">{p.phone}</td>
                  <td className="px-4 py-2">{p.note}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(index);
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex items-center"
                    >
                      <FaEdit className="mr-1" />
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
