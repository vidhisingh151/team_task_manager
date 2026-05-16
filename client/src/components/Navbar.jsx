import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

import {
  LayoutDashboard,
  LogOut,
  CheckSquare,
  Folder,
  CheckCircle,
  Moon,
  Sun,
} from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <Link to="/" className="nav-logo">
        <CheckSquare size={28} color="#8b5cf6" />
        TeamTasker
      </Link>

      {/* RIGHT */}
      <div className="nav-right">
        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        <span className="nav-user">
          Hello, {user?.name}
        </span>

        <Link
          to="/dashboard"
          className={`nav-btn ${isActive('/dashboard') ? 'active' : ''
            }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          to="/projects"
          className={`nav-btn ${isActive('/projects') ? 'active' : ''
            }`}
        >
          <Folder size={18} />
          Projects
        </Link>

        <Link
          to="/tasks"
          className={`nav-btn ${isActive('/tasks') ? 'active' : ''
            }`}
        >
          <CheckCircle size={18} />
          Tasks
        </Link>

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;