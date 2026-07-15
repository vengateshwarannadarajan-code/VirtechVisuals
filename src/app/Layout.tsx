import { Outlet } from 'react-router';
import { Navbar } from './components/Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}
