import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Folder, CheckSquare, Users } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const isActive = (path) => {
    return location.pathname === path ? 'btn-secondary' : 'btn-ghost';
  };

  return (
    <div className="sidebar">
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 800 }}>
        <div style={{ background: 'var(--primary)', color: 'white', padding: '0.25rem', borderRadius: '8px' }}>
          <CheckSquare size={20} />
        </div>
        TaskPro
      </Link>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-gray)', letterSpacing: '0.05em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Main Menu
        </p>

        <Link to="/dashboard" className={`btn ${location.pathname === '/dashboard' || location.pathname === '/' ? 'btn-secondary' : ''}`} style={{ justifyContent: 'flex-start', background: location.pathname === '/dashboard' || location.pathname === '/' ? 'var(--bg-hover)' : 'transparent', border: 'none' }}>
          <LayoutDashboard size={18} /> Dashboard
        </Link>
        <Link to="/projects" className={`btn ${location.pathname.includes('/projects') ? 'btn-secondary' : ''}`} style={{ justifyContent: 'flex-start', background: location.pathname.includes('/projects') ? 'var(--bg-hover)' : 'transparent', border: 'none' }}>
          <Folder size={18} /> Projects
        </Link>
        <Link to="/tasks" className={`btn ${location.pathname === '/tasks' ? 'btn-secondary' : ''}`} style={{ justifyContent: 'flex-start', background: location.pathname === '/tasks' ? 'var(--bg-hover)' : 'transparent', border: 'none' }}>
          <CheckSquare size={18} /> Tasks
        </Link>
      </div>

      <div style={{ padding: '1rem', background: 'var(--bg-hover)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Users size={20} color="var(--text-gray)" />
        </div>
        <div>
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', margin: 0 }}>{user?.name}</p>
          <p style={{ fontSize: '0.75rem', margin: 0 }}>{user?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
