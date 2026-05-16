import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import { AlertCircle } from 'lucide-react';

const Tasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      let fetchedTasks = res.data;
      if (user.role === 'Member') {
        fetchedTasks = fetchedTasks.filter(t => t.assignedTo?._id === user._id);
      }
      setTasks(fetchedTasks);
    } catch (err) {
      console.error('Error fetching tasks', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [user]);

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await api.put(`/tasks/${taskId}`, { status: newStatus });
      fetchTasks();
    } catch (err) {
      console.error(err);
      alert('Failed to update task status');
    }
  };

  if (loading) return <div style={{ textAlign: 'center' }}>Loading...</div>;

  const now = new Date();
  const pendingTasks = tasks.filter(t => t.status !== 'Done');

  return (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: '2rem' }}>
        {user.role === 'Admin' ? 'All Pending Tasks' : 'My Pending Tasks'}
      </h2>
      
      {pendingTasks.length === 0 ? (
        <div className="ui-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h3 style={{ color: 'var(--text-gray)' }}>You have no pending tasks!</h3>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          {pendingTasks.map((task) => {
            const isOverdue = task.dueDate && new Date(task.dueDate) < now;
            const isAssignedToMe = task.assignedTo?._id === user._id;
            const canEdit = user.role === 'Admin' || isAssignedToMe;

            return (
              <div key={task._id} className="ui-card" style={{ borderLeft: isOverdue ? '4px solid var(--danger)' : '4px solid var(--primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1rem' }}>{task.title}</h4>
                  <span className={`badge ${task.status === 'In Progress' ? 'badge-progress' : 'badge-todo'}`}>
                    {task.status}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)', marginBottom: '1rem' }}>
                  {task.description || 'No description.'}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-gray)', marginBottom: '0.5rem' }}>
                  Project: <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>{task.project?.name}</span> | Assigned To: <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>{task.assignedTo?.name || 'Unassigned'}</span>
                </p>
                
                {task.dueDate && (
                  <p style={{ fontSize: '0.75rem', color: isOverdue ? 'var(--danger)' : 'var(--text-gray)', marginBottom: '1rem' }}>
                    {isOverdue && <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px' }} />}
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                )}

                {canEdit && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <select 
                      value={task.status} 
                      onChange={(e) => handleStatusChange(task._id, e.target.value)}
                      className="status-select"
                    >
                      <option value="Todo">Todo</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Tasks;
