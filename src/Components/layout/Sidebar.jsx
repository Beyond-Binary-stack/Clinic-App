import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Users, Folder, LogOut } from 'lucide-react';

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClasses = (path) =>
    `flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-100 transition ${
      pathname === path ? 'bg-blue-200 text-blue-700 font-medium' : 'text-gray-700'
    }`;

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Clinic Admin</h2>
      <nav className="space-y-3">
        <Link to="/" className={linkClasses('/')}>
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link to="/patients" className={linkClasses('/patients')}>
          <Users className="w-5 h-5" />
          <span>Patients</span>
        </Link>
        <Link to="/medicines" className={linkClasses('/medicines')}>
          <Folder className="w-5 h-5" />
          <span>Medicines</span>
        </Link>
        <Link to="/reports" className={linkClasses('/reports')}>
          <FileText className="w-5 h-5" />
          <span>Reports</span>
        </Link>
        <Link to="/logout" className="flex items-center space-x-2 px-4 py-2 text-red-500 hover:text-red-700 transition">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  );
}
