import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import { FolderPlus, Folder } from 'lucide-react';

const Projects = () => {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Create Project Modal State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);

  const fetchData = async () => {
    try {
      const [projRes, usersRes] = await Promise.all([
        api.get('/projects'),
        user.role === 'Admin' ? api.get('/users') : Promise.resolve({ data: [] })
      ]);
      setProjects(projRes.data);
      if (user.role === 'Admin') setUsers(usersRes.data);
    } catch (err) {
      console.error('Error fetching data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      await api.post('/projects', {
        name: newProjectName,
        description: newProjectDesc,
        members: selectedMembers
      });
      setShowCreateModal(false);
      setNewProjectName('');
      setNewProjectDesc('');
      setSelectedMembers([]);
      fetchData();
    } catch (err) {
      console.error('Error creating project', err);
      alert('Failed to create project');
    }
  };

  const handleMemberToggle = (userId) => {
    if (selectedMembers.includes(userId)) {
      setSelectedMembers(selectedMembers.filter(id => id !== userId));
    } else {
      setSelectedMembers([...selectedMembers, userId]);
    }
  };

  if (loading) return <div style={{ textAlign: 'center' }}>Loading...</div>;

  return (
    <div className="animate-fade-in">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem,4vw,2.4rem)',
              fontWeight: '800',
              marginBottom: '0.35rem',
            }}
          >
            All Projects
          </h2>

          <p
            style={{
              color: 'var(--text-gray)',
              fontSize: '0.95rem',
            }}
          >
            Manage and organize all your projects
          </p>
        </div>

        {user.role === 'Admin' && (
          <button
            onClick={() => setShowCreateModal(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              background:
                'linear-gradient(135deg,#0f172a,#1e293b)',
              color: '#fff',
              border: 'none',
              padding: '0.9rem 1.4rem',
              borderRadius: '14px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.95rem',
              minWidth: '170px',
              transition: '0.3s ease',
              boxShadow:
                '0 10px 25px rgba(15,23,42,0.18)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                'translateY(0px)';
            }}
          >
            <FolderPlus size={20} />
            New Project
          </button>
        )}
      </div>

      {projects.length === 0 ? (
        <div className="ui-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <Folder size={48} color="var(--text-gray)" style={{ marginBottom: '1rem', margin: '0 auto' }} />
          <h3 style={{ color: 'var(--text-gray)' }}>No projects found</h3>
          {user.role === 'Admin' && <p>Create a new project to get started.</p>}
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <Link to={`/projects/${project._id}`} key={project._id} className="ui-card" style={{ display: 'block', color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Folder size={20} color="var(--text-dark)" />
                {project.name}
              </h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
                {project.description || 'No description provided.'}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-gray)' }}>
                <span>Owner: {project.owner?.name || 'Unknown'}</span>
                <span>Members: {project.members?.length || 0}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Create Project Modal */}
      {showCreateModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(15, 23, 42, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div className="ui-card" style={{ width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Create New Project</h3>
            <form onSubmit={handleCreateProject}>
              <div className="form-group">
                <label className="form-label">Project Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Assign Members</label>
                <div style={{ maxHeight: '150px', overflowY: 'auto', background: 'var(--bg-input)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  {users.map(u => (
                    <div key={u._id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(u._id)}
                        onChange={() => handleMemberToggle(u._id)}
                      />
                      <span>{u.name} ({u.email})</span>
                    </div>
                  ))}
                  {users.length === 0 && <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>No users found</span>}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
