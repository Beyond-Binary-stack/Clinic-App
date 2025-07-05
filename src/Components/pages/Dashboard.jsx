import React from 'react';
import { Users, Folder, FileText, Calendar } from 'lucide-react';
import { useClinic } from '../../Context/ClinicContext';

const Dashboard = () => {
  const { patients, medicines, reports } = useClinic();

  const stats = [
    { label: 'Total Patients', value: patients.length, icon: <Users className="w-6 h-6 text-blue-600" /> },
    { label: 'Medicines', value: medicines.length, icon: <Folder className="w-6 h-6 text-green-600" /> },
    { label: 'Reports', value: reports.length, icon: <FileText className="w-6 h-6 text-purple-600" /> },
    { label: 'Appointments Today', value: 0, icon: <Calendar className="w-6 h-6 text-red-600" /> }, // Placeholder
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">{item.icon}</div>
            <div>
              <h4 className="text-lg font-semibold">{item.value}</h4>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
