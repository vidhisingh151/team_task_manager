import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import { Plus, ArrowLeft, AlertCircle, Users } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Create Task Modal State
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'Todo', assignedTo: '', dueDate: '', priority: 'Medium' });

  // Edit Members Modal State
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const fetchData = async () => {
    try {
      const [projRes, tasksRes, usersRes] = await Promise.all([
        api.get(`/projects/${id}`),
        api.get(`/tasks?projectId=${id}`),
        user.role === 'Admin' ? api.get('/users') : Promise.resolve({ data: [] })
      ]);
      setProject(projRes.data);
      setTasks(tasksRes.data);
      if (user.role === 'Admin') setAllUsers(usersRes.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load project details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const taskData = { ...newTask, project: id };
      if (!taskData.assignedTo) delete taskData.assignedTo;
      if (!taskData.dueDate) delete taskData.dueDate;

      await api.post('/tasks', taskData);
      setShowTaskModal(false);
      setNewTask({ title: '', description: '', status: 'Todo', assignedTo: '', dueDate: '', priority: 'Medium' });
      fetchData(); // Refresh tasks
    } catch (err) {
      console.error(err);
      alert('Failed to create task');
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await api.put(`/tasks/${taskId}`, { status: newStatus });
      fetchData();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || 'Failed to update task status');
    }
  };

  const openMembersModal = () => {
    setSelectedMembers(project.members.map(m => m._id));
    setShowMembersModal(true);
  };

  const handleMemberToggle = (userId) => {
    if (selectedMembers.includes(userId)) {
      setSelectedMembers(selectedMembers.filter(id => id !== userId));
    } else {
      setSelectedMembers([...selectedMembers, userId]);
    }
  };

  const handleUpdateMembers = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/projects/${id}`, { members: selectedMembers });
      setShowMembersModal(false);
      fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed to update members');
    }
  };

  if (loading) return <div style={{ textAlign: 'center' }}>Loading...</div>;
  if (error) return <div style={{ textAlign: 'center', color: 'var(--danger)' }}>{error}</div>;

  // Calculate Progress
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter(t => t.status === 'Done').length;
  const progressPercent = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);

  const now = new Date();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'var(--danger)';
      case 'Medium': return 'var(--warning)';
      case 'Low': return 'var(--success)';
      default: return 'var(--text-muted)';
    }
  };

  const renderTaskColumn = (status) => {
    const columnTasks = tasks.filter(t => t.status === status);

    return (
      <div className="ui-card" style={{ padding: '1rem', background: 'var(--bg-hover)' }}>
        <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
          {status} <span className="badge badge-neutral" style={{ marginLeft: '0.5rem' }}>{columnTasks.length}</span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {columnTasks.map(task => {
            const isAssignedToMe = task.assignedTo?._id === user._id;
            const canEdit = user.role === 'Admin' || isAssignedToMe;
            const isOverdue = task.dueDate && new Date(task.dueDate) < now && task.status !== 'Done';

            return (
              <div key={task._id} className="ui-card" style={{ padding: '1rem', borderLeft: isOverdue ? '4px solid var(--danger)' : '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h4>{task.title}</h4>
                  <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '4px', background: 'var(--bg-sidebar)', color: getPriorityColor(task.priority || 'Medium') }}>
                    {task.priority || 'Medium'}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)', marginBottom: '1rem' }}>
                  {task.description}
                </p>

                {task.dueDate && (
                  <p style={{ fontSize: '0.75rem', color: isOverdue ? 'var(--danger)' : 'var(--text-gray)', marginBottom: '0.5rem' }}>
                    {isOverdue && <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px' }} />}
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>
                    Assigned: {task.assignedTo ? task.assignedTo.name : 'Unassigned'}
                  </span>

                  {canEdit && (
                    <select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task._id, e.target.value)}
                      className="status-select"
                    >
                      <option value="Todo">Todo</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <button className="btn btn-secondary" onClick={() => navigate(-1)} style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className="flex-header">
        <div>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {project.name}
            {user.role === 'Admin' && (
              <button
                className="btn btn-secondary"
                onClick={openMembersModal}
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
              >
                <Users size={14} /> Manage Members
              </button>
            )}
          </h2>

          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            {project.description}
          </p>

          {/* ✅ UPDATED SECTION */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            {/* LEFT: Progress */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                Progress: {progressPercent}%
              </span>

              <div
                style={{
                  width: '200px',
                  height: '8px',
                  background: 'var(--border-light)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${progressPercent}%`,
                    height: '100%',
                    background: 'var(--success)',
                    transition: 'width 0.3s ease'
                  }}
                ></div>
              </div>
            </div>

            {/* RIGHT: Add Task */}
            {user.role === 'Admin' && (
              <button
                className="btn btn-primary"
                onClick={() => setShowTaskModal(true)}
                style={{ whiteSpace: 'nowrap' }}
              >
                <Plus size={20} /> Add Task
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3" style={{ alignItems: 'start' }}>
        {renderTaskColumn('Todo')}
        {renderTaskColumn('In Progress')}
        {renderTaskColumn('Done')}
      </div>

      {/* Create Task Modal */}
      {showTaskModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(15, 23, 42, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div className="ui-card" style={{ width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Add New Task</h3>
            <form onSubmit={handleCreateTask}>
              <div className="form-group">
                <label className="form-label">Task Title</label>
                <input type="text" className="form-control" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} required />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
              </div>

              <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Assign To</label>
                  <select className="form-control" value={newTask.assignedTo} onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}>
                    <option value="">Unassigned</option>
                    {project.members && project.members.map(m => (
                      <option key={m._id} value={m._id}>{m.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Due Date</label>
                  <input type="date" className="form-control" value={newTask.dueDate} onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} />
                </div>
              </div>

              <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select className="form-control" value={newTask.status} onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}>
                    <option value="Todo">Todo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Priority</label>
                  <select className="form-control" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowTaskModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Members Modal */}
      {showMembersModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(15, 23, 42, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div className="ui-card" style={{ width: '100%', maxWidth: '400px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Manage Project Members</h3>
            <form onSubmit={handleUpdateMembers}>
              <div className="form-group">
                <label className="form-label">Select Members</label>
                <div style={{ maxHeight: '200px', overflowY: 'auto', background: 'var(--bg-input)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  {allUsers.map(u => (
                    <div key={u._id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(u._id)}
                        onChange={() => handleMemberToggle(u._id)}
                      />
                      <span>{u.name} <span style={{ color: 'var(--text-gray)', fontSize: '0.75rem' }}>({u.email})</span></span>
                    </div>
                  ))}
                  {allUsers.length === 0 && <span style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>No users found</span>}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowMembersModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Members</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
