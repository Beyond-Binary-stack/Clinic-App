import { Sun, Moon, Search } from 'lucide-react';
import { useState } from 'react';

export default function Topbar() {
  const [dark, setDark] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow">
      <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded w-64">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => setDark(!dark)} className="hover:text-yellow-500">
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="w-9 h-9 bg-blue-500 rounded-full text-white flex items-center justify-center font-semibold">
          A
        </div>
      </div>
    </header>
  );
}
