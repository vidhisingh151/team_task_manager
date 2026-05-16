import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Bell, LogOut } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const TopHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const getPageTitle = () => {
    if (location.pathname === '/dashboard') return 'Dashboard';
    if (location.pathname.includes('/projects')) return 'Projects';
    if (location.pathname === '/tasks') return 'Pending Tasks';
    return 'App';
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="top-header">
      <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{getPageTitle()}</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="theme-btn"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} color="var(--text-gray)" />
          <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--danger)', borderRadius: '50%' }}></span>
        </div>

        {/* User Info */}
        <span style={{ fontSize: '0.875rem', color: 'var(--text-gray)', fontWeight: 500 }}>
          {user?.name?.split(' ')[0]}
        </span>

        {/* Logout */}
        <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-gray)' }}>
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;

