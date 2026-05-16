import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import { Briefcase, ListTodo, CheckCircle, AlertCircle, ArrowRight, User as UserIcon } from 'lucide-react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [projRes, taskRes] = await Promise.all([
        api.get('/projects'),
        api.get('/tasks')
      ]);
      setProjects(projRes.data);

      let fetchedTasks = taskRes.data;
      if (user.role === 'Member') {
        fetchedTasks = fetchedTasks.filter(t => t.assignedTo?._id === user._id);
      }
      setTasks(fetchedTasks);
    } catch (err) {
      console.error('Error fetching data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;

  // Stats
  const activeProjectsCount = projects.length;
  const totalTasks = tasks.length;
  const now = new Date();

  const overdueTasks = tasks.filter(
    t =>
      t.status !== 'Done' &&
      t.dueDate &&
      new Date(t.dueDate) < now
  );

  const doneTasks = tasks.filter(
    t => t.status === 'Done'
  );

  /* ADD THIS */
  const inProgressTasks = tasks.filter(
    t => t.status === 'In Progress'
  );

  const todoTasks = tasks.filter(
    t => t.status === 'To Do'
  );

  const completionRate =
    totalTasks > 0
      ? Math.round(
        (doneTasks.length / totalTasks) * 100
      )
      : 0;

  const inProgressCount =
    inProgressTasks.length;

  /* ADD THESE */
  const donePercentage =
    totalTasks > 0
      ? (doneTasks.length / totalTasks) * 100
      : 0;

  const progressPercentage =
    totalTasks > 0
      ? (inProgressTasks.length / totalTasks) *
      100
      : 0;

  const todoPercentage =
    totalTasks > 0
      ? (todoTasks.length / totalTasks) * 100
      : 0;
  // Tasks Per User
  const tasksPerUser = {};
  tasks.forEach(task => {
    const userName = task.assignedTo ? task.assignedTo.name : 'Unassigned';
    if (!tasksPerUser[userName]) tasksPerUser[userName] = 0;
    tasksPerUser[userName]++;
  });

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Welcome Back, {user?.name?.split(' ')[0]}! 👋</h2>
          <p>Here's what's happening with your projects today.</p>
        </div>
        <Link to="/projects" className="btn btn-primary" style={{ borderRadius: '9999px', fontSize: '0.875rem' }}>
          View Projects <ArrowRight size={16} />
        </Link>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-4" style={{ marginBottom: '2.5rem' }}>

        {/* Active Projects */}
        <div className="stat-card hover-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="icon-box" style={{ background: 'var(--info-bg)', color: 'var(--info)' }}>
              <Briefcase size={24} />
            </div>
            <span className="badge badge-live">↗ Live</span>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Active Projects</p>
            <h3 style={{ fontSize: '2rem' }}>{activeProjectsCount}</h3>
          </div>
          <p style={{ fontSize: '0.75rem' }}>Active right now</p>
        </div>

        {/* Total Tasks */}
        <div className="stat-card hover-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="icon-box" style={{ background: 'var(--bg-hover)', color: 'var(--text-gray)' }}>
              <ListTodo size={24} />
            </div>
            <span className="badge badge-live">↗ Live</span>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Total Tasks</p>
            <h3 style={{ fontSize: '2rem' }}>{totalTasks}</h3>
          </div>
          <p style={{ fontSize: '0.75rem' }}>{inProgressCount} in progress</p>
        </div>

        {/* Completed */}
        <div className="stat-card hover-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="icon-box" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}>
              <CheckCircle size={24} />
            </div>
            <span className="badge badge-live">↗ Live</span>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Completed</p>
            <h3 style={{ fontSize: '2rem' }}>{doneTasks.length}</h3>
          </div>
          <p style={{ fontSize: '0.75rem' }}>{completionRate}% completion rate</p>
        </div>

        {/* Overdue */}
        <div className="stat-card hover-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="icon-box" style={{ background: 'var(--danger-bg)', color: 'var(--danger)' }}>
              <AlertCircle size={24} />
            </div>
            <span className="badge badge-live" style={{ background: '#fef2f2', color: '#ef4444' }}>! Alert</span>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Overdue</p>
            <h3 style={{ fontSize: '2rem' }}>{overdueTasks.length}</h3>
          </div>
          <p style={{ fontSize: '0.75rem' }}>Needs attention</p>
        </div>

      </div>

      {/* MODERN TASK OVERVIEW CARD */}
      {/* RESPONSIVE TASK OVERVIEW CARD */}
      <div
        className="ui-card "
        style={{
          padding: 'clamp(1rem,3vw,2rem)',
          borderRadius: '24px',
          background: 'var(--bg-card)',
          marginBottom: '2rem',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.2rem,3vw,1.7rem)',
                fontWeight: '800',
                marginBottom: '0.3rem',
              }}
            >
              Task Overview
            </h2>

            <p
              style={{
                color: 'var(--text-gray)',
                fontSize: '0.92rem',
              }}
            >
              Monitor your project performance
            </p>
          </div>

            <div
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '12px',
              background: 'var(--info-bg)',
              color: 'var(--info)',
              fontWeight: '700',
              fontSize: '0.9rem',
              whiteSpace: 'nowrap',
            }}
          >
            {completionRate}% Complete
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(300px,1fr))',
            gap: '2rem',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* LEFT DONUT */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '260px',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                background: `conic-gradient(
            var(--success) 0deg ${donePercentage * 3.6}deg,
            var(--warning) ${donePercentage * 3.6}deg ${(donePercentage + progressPercentage) * 3.6}deg,
            var(--border-light) ${(donePercentage + progressPercentage) * 3.6}deg 360deg
          )`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                margin: '0 auto',
                flexShrink: 0,
              }}
            >
              {/* INNER */}
              <div
                style={{
                  width: '72%',
                  height: '72%',
                  borderRadius: '50%',
                  background: 'var(--bg-main)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1rem',
                  boxShadow:
                    '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                {/* FIXED 50% */}
                <div
                  style={{
                    fontSize:
                      'clamp(2rem,6vw,3.5rem)',
                    fontWeight: '800',
                    lineHeight: 1,
                    color: 'var(--text-dark)',
                  }}
                >
                  {completionRate}%
                </div>

                <div
                  style={{
                    marginTop: '0.5rem',
                    color: 'var(--text-gray)',
                    fontSize:
                      'clamp(0.7rem,2vw,0.9rem)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  TASKS COMPLETED
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              width: '100%',
            }}
          >
            <h3
              style={{
                fontSize: '1.3rem',
                marginBottom: '1.5rem',
                fontWeight: '700',
              }}
            >
              Task Progress Overview
            </h3>

            {/* TODO */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.55rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  fontWeight: '600',
                }}
              >
                <span>To Do</span>

                <span>
                  {todoTasks.length} (
                  {Math.round(todoPercentage)}%)
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '10px',
                  borderRadius: '999px',
                  background: 'var(--bg-hover)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${todoPercentage}%`,
                    height: '100%',
                    background: 'var(--text-gray)',
                    borderRadius: '999px',
                  }}
                />
              </div>
            </div>

            {/* IN PROGRESS */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.55rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  fontWeight: '600',
                }}
              >
                <span>In Progress</span>

                <span>
                  {inProgressTasks.length} (
                  {Math.round(progressPercentage)}%)
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '10px',
                  borderRadius: '999px',
                  background: 'var(--bg-hover)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${progressPercentage}%`,
                    height: '100%',
                    background: 'var(--warning)',
                    borderRadius: '999px',
                  }}
                />
              </div>
            </div>

            {/* DONE */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.55rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  fontWeight: '600',
                }}
              >
                <span>Done</span>

                <span>
                  {doneTasks.length} (
                  {Math.round(donePercentage)}%)
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '10px',
                  borderRadius: '999px',
                  background: 'var(--bg-hover)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${donePercentage}%`,
                    height: '100%',
                    background: 'var(--success)',
                    borderRadius: '999px',
                  }}
                />
              </div>
            </div>

            {/* FOOTER */}
            <div
              style={{
                background:
                  'linear-gradient(135deg,#0f172a,#1e293b)',
                borderRadius: '22px',
                padding: '1.5rem',
                color: '#fff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize:
                        'clamp(2rem,5vw,3rem)',
                      color: '#fff',
                      margin: 0,
                      fontWeight: '800',
                    }}
                  >
                    {totalTasks}
                  </h2>

                  <p
                    style={{
                      marginTop: '0.45rem',
                      color: '#cbd5e1',
                      fontSize: '0.9rem',
                    }}
                  >
                    Total tasks tracked
                  </p>
                </div>

                <div
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.15)',
                    textAlign: 'center',
                    minWidth: '110px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.7rem',
                      fontWeight: '800',
                    }}
                  >
                    {completionRate}%
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#cbd5e1',
                    }}
                  >
                    Efficiency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        {/* Tasks Per User */}
        <div className="ui-card hover-card">
          <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <UserIcon size={20} /> Task Distribution
          </h3>
          {Object.keys(tasksPerUser).length === 0 ? (
            <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>No tasks assigned.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {Object.entries(tasksPerUser).map(([name, count]) => (
                <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 500 }}>{name}</span>
                  <span className="badge badge-neutral">{count} tasks</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Projects */}
        <div className="ui-card hover-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={20} /> Recent Projects
            </h3>
            <Link to="/projects" style={{ fontSize: '0.875rem', fontWeight: 600 }}>View All</Link>
          </div>

          {projects.length === 0 ? (
            <p style={{ color: 'var(--text-gray)' }}>No projects found.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {projects.slice(0, 4).map((project) => (
                <Link to={`/projects/${project._id}`} key={project._id} style={{ display: 'block', color: 'inherit', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }} className="hover:bg-gray-50">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.875rem' }}>{project.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>{project.members?.length || 0} members</span>
                  </div>
                  {/* <p style={{ fontSize: '0.75rem' }}>Owner: {project.owner?.name || 'Unknown'}</p> */}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
