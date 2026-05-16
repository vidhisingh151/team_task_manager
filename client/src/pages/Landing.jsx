// import React from 'react';
// import { Link } from 'react-router-dom';
// import { CheckSquare, Zap, Shield, BarChart } from 'lucide-react';

// const Landing = () => {
//   return (
//     <div style={{ background: 'var(--bg-main)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {/* Navbar */}
//       <nav className="landing-navbar">
//         <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 800 }}>
//           <div style={{ background: 'var(--primary)', color: 'white', padding: '0.25rem', borderRadius: '8px' }}>
//             <CheckSquare size={20} />
//           </div>
//           Task Manager
//         </div>
//         <div>
//           <Link to="/login" className="btn btn-secondary" style={{ marginRight: '1rem', border: 'none' }}>Log In</Link>
//           <Link to="/signup" className="btn btn-primary" style={{ background: 'var(--primary)', color: 'white' }}>Dashboard &rarr;</Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '6rem 2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
//         <div style={{ background: 'var(--bg-hover)', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//           <Zap size={14} /> THE FUTURE OF TEAM MANAGEMENT
//         </div>

//         <h1 style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
//           Manage Tasks with <br />
//           <span className="gradient-text">Zero Gravity.</span>
//         </h1>

//         <p style={{ fontSize: '1.125rem', color: 'var(--text-gray)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
//           The all-in-one platform for high-performance teams to plan, track, and execute projects with absolute precision and speed.
//         </p>

//         <Link to="/signup" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem', borderRadius: '9999px', boxShadow: '0 10px 25px rgba(15,23,42,0.2)' }}>
//           Go to Dashboard &rarr;
//         </Link>
//       </main>

//       {/* Features Section */}
//       <section style={{ padding: '4rem 2rem', background: 'var(--bg-main)', textAlign: 'center' }}>
//         <h3 style={{ fontSize: '0.875rem', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1rem', textTransform: 'uppercase' }}>POWERFUL FEATURES</h3>
//         <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem' }}>Everything you need to scale.</h2>

//         <div className="container grid grid-cols-3" style={{ textAlign: 'left' }}>
//           <div className="ui-card" style={{ padding: '2.5rem' }}>
//             <div style={{ width: '48px', height: '48px', background: '#fffbeb', color: '#f59e0b', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
//               <Zap size={24} />
//             </div>
//             <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Real-time Sync</h3>
//             <p style={{ fontSize: '0.875rem' }}>Collaborate with your team in real-time. Changes are reflected instantly across all devices.</p>
//           </div>

//           <div className="ui-card" style={{ padding: '2.5rem' }}>
//             <div style={{ width: '48px', height: '48px', background: '#eff6ff', color: '#3b82f6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
//               <Shield size={24} />
//             </div>
//             <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Enterprise Security</h3>
//             <p style={{ fontSize: '0.875rem' }}>Role-based access control and encrypted data ensure your project information stays safe.</p>
//           </div>

//           <div className="ui-card" style={{ padding: '2.5rem' }}>
//             <div style={{ width: '48px', height: '48px', background: '#f0fdf4', color: '#10b981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
//               <BarChart size={24} />
//             </div>
//             <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Advanced Analytics</h3>
//             <p style={{ fontSize: '0.875rem' }}>Track project progress with detailed charts and productivity metrics for your entire team.</p>
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section style={{ padding: '4rem 2rem' }}>
//         <div className="container" style={{ background: 'var(--primary)', borderRadius: '24px', padding: '6rem 2rem', textAlign: 'center', color: 'white' }}>
//           <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', marginBottom: '2rem' }}>
//             Ready to accelerate <br /> your team's workflow?
//           </h2>
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
//             <Link to="/signup" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2rem', fontSize: '1rem', borderRadius: '12px' }}>
//               Get Started Free
//             </Link>
//             <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>No credit card required.</span>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-gray)' }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700 }}>
//           <CheckSquare size={16} /> Task Manager
//         </div>
//         <div>&copy; 2026 Task Manager Inc. All rights reserved.</div>
//         <div style={{ display: 'flex', gap: '1rem' }}>
//           <span>English</span>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Layers3,
//   Sparkles,
//   ShieldCheck,
//   Activity,
//   Users,
// } from 'lucide-react';

// const Landing = () => {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         background:
//           'linear-gradient(to bottom right, #0f172a, #111827, #020617)',
//         color: 'white',
//         overflow: 'hidden',
//       }}
//     >
//       {/* NAVBAR */}
//       <nav
//         style={{
//           width: '100%',
//           padding: '1.5rem 5%',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           position: 'sticky',
//           top: 0,
//           zIndex: 100,
//           backdropFilter: 'blur(14px)',
//           background: 'rgba(15,23,42,0.5)',
//           borderBottom: '1px solid rgba(255,255,255,0.05)',
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '0.75rem',
//             fontSize: '1.3rem',
//             fontWeight: 800,
//           }}
//         >
//           <div
//             style={{
//               width: '42px',
//               height: '42px',
//               borderRadius: '14px',
//               background:
//                 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Layers3 size={20} />
//           </div>

//           FlowSphere
//         </div>

//         {/* <div style={{ display: 'flex', gap: '1rem' }}> */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '1rem',
//           }}
//         >
//           <Link
//             to="/login"
//             style={{
//               color: '#cbd5e1',
//               textDecoration: 'none',
//               fontWeight: 600,
//             }}
//           >
//             Login
//           </Link>

//           <Link
//             to="/signup"
//             style={{
//               background:
//                 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//               color: 'white',
//               padding: '0.9rem 1.5rem',
//               borderRadius: '14px',
//               textDecoration: 'none',
//               fontWeight: 700,
//               boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
//             }}
//           >
//             Start Free
//           </Link>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section
//         style={{
//           width: '100%',
//           padding: '5rem 5%',
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '4rem',
//           alignItems: 'center',
//         }}
//       >
//         {/* LEFT */}
//         <div>
//           <div
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '0.5rem',
//               background: 'rgba(255,255,255,0.06)',
//               border: '1px solid rgba(255,255,255,0.08)',
//               padding: '0.6rem 1rem',
//               borderRadius: '999px',
//               marginBottom: '2rem',
//               color: '#cbd5e1',
//               fontSize: '0.85rem',
//             }}
//           >
//             <Sparkles size={15} />
//             SMART WORKFLOW AUTOMATION
//           </div>

//           <h1
//             style={{
//               fontSize: '5rem',
//               lineHeight: 1,
//               fontWeight: 900,
//               marginBottom: '1.5rem',
//               letterSpacing: '-3px',
//             }}
//           >
//             Organize work.
//             <br />
//             Lead faster.
//             <br />
//             <span
//               style={{
//                 background:
//                   'linear-gradient(to right,#06b6d4,#8b5cf6)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Scale smarter.
//             </span>
//           </h1>

//           <p
//             style={{
//               color: '#94a3b8',
//               fontSize: '1.1rem',
//               lineHeight: 1.8,
//               maxWidth: '600px',
//               // marginBottom: '2rem',
//               marginBottom: '2rem',
//             }}
//           >
//             A modern collaboration platform for startups and
//             high-performance teams. Manage projects, automate
//             workflows, and track productivity from one intelligent
//             dashboard.
//           </p>

//           <div
//             style={{
//               display: 'flex',
//               gap: '1rem',
//               flexWrap: 'wrap',
//             }}
//           >
//             <Link
//               to="/signup"
//               style={{
//                 background:
//                   'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//                 color: 'white',
//                 padding: '1rem 1.8rem',
//                 borderRadius: '16px',
//                 textDecoration: 'none',
//                 fontWeight: 700,
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.5rem',
//               }}
//             >
//               Launch Workspace
//               <ArrowRight size={18} />
//             </Link>

//             <button
//               style={{
//                 background: 'transparent',
//                 border: '1px solid rgba(255,255,255,0.1)',
//                 color: 'white',
//                 padding: '1rem 1.8rem',
//                 borderRadius: '16px',
//                 fontWeight: 700,
//                 cursor: 'pointer',
//               }}
//             >
//               Watch Demo
//             </button>
//           </div>

//           {/* STATS */}
//           <div
//             style={{
//               display: 'flex',
//               gap: '2rem',
//               marginTop: '3rem',
//               flexWrap: 'wrap',
//             }}
//           >
//             <div>
//               <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
//                 50K+
//               </h2>
//               <p style={{ color: '#94a3b8' }}>Active Users</p>
//             </div>

//             <div>
//               <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
//                 99.9%
//               </h2>
//               <p style={{ color: '#94a3b8' }}>Uptime</p>
//             </div>

//             <div>
//               <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
//                 4.9/5
//               </h2>
//               <p style={{ color: '#94a3b8' }}>User Rating</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE DASHBOARD MOCKUP */}
//         <div
//           style={{
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               background: 'rgba(255,255,255,0.05)',
//               border: '1px solid rgba(255,255,255,0.08)',
//               borderRadius: '30px',
//               padding: '2rem',
//               backdropFilter: 'blur(20px)',
//               boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
//             }}
//           >
//             {/* TOP */}
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 marginBottom: '2rem',
//               }}
//             >
//               <div>
//                 <h3
//                   style={{
//                     fontSize: '1.3rem',
//                     marginBottom: '0.5rem',
//                   }}
//                 >
//                   Team Performance
//                 </h3>

//                 <p style={{ color: '#94a3b8' }}>
//                   Productivity overview
//                 </p>
//               </div>

//               <div
//                 style={{
//                   background:
//                     'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//                   width: '55px',
//                   height: '55px',
//                   borderRadius: '18px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <Activity />
//               </div>
//             </div>

//             {/* CARDS */}
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '1rem',
//               }}
//             >
//               <div
//                 style={{
//                   background: 'rgba(255,255,255,0.04)',
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                 }}
//               >
//                 <Users size={24} />
//                 <h2
//                   style={{
//                     marginTop: '1rem',
//                     fontSize: '2rem',
//                   }}
//                 >
//                   24
//                 </h2>
//                 <p style={{ color: '#94a3b8' }}>Team Members</p>
//               </div>

//               <div
//                 style={{
//                   background: 'rgba(255,255,255,0.04)',
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                 }}
//               >
//                 <ShieldCheck size={24} />
//                 <h2
//                   style={{
//                     marginTop: '1rem',
//                     fontSize: '2rem',
//                   }}
//                 >
//                   98%
//                 </h2>
//                 <p style={{ color: '#94a3b8' }}>Task Success</p>
//               </div>

//               <div
//                 style={{
//                   background: 'rgba(255,255,255,0.04)',
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                   gridColumn: 'span 2',
//                 }}
//               >
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     marginBottom: '1rem',
//                   }}
//                 >
//                   <span>Project Progress</span>
//                   <span>75%</span>
//                 </div>

//                 <div
//                   style={{
//                     width: '100%',
//                     height: '10px',
//                     borderRadius: '999px',
//                     background: 'rgba(255,255,255,0.08)',
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: '75%',
//                       height: '100%',
//                       background:
//                         'linear-gradient(to right,#06b6d4,#8b5cf6)',
//                     }}
//                   />
//                 </div>

//                 <div
//                   style={{
//                     marginTop: '1rem',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '0.7rem',
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.5rem',
//                       color: '#cbd5e1',
//                     }}
//                   >
//                     <CheckCircle2 size={16} />
//                     UI Design Completed
//                   </div>

//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.5rem',
//                       color: '#cbd5e1',
//                     }}
//                   >
//                     <CheckCircle2 size={16} />
//                     Backend API Integrated
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section
//         style={{
//           padding: '5rem 5%',
//         }}
//       >
//         <div
//           style={{
//             textAlign: 'center',
//             marginBottom: '4rem',
//           }}
//         >
//           <p
//             style={{
//               color: '#06b6d4',
//               fontWeight: 700,
//               marginBottom: '1rem',
//             }}
//           >
//             WHY CHOOSE US
//           </p>

//           <h2
//             style={{
//               fontSize: '3rem',
//               fontWeight: 900,
//               color: 'white',

//             }}
//           >
//             Built for modern teams
//           </h2>
//         </div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns:
//               'repeat(auto-fit,minmax(280px,1fr))',
//             gap: '2rem',
//           }}
//         >
//           {[
//             {
//               title: 'AI Task Automation',
//               desc: 'Automate repetitive workflows and save hours every week.',
//             },
//             {
//               title: 'Real-Time Collaboration',
//               desc: 'Instant updates, comments, and live project tracking.',
//             },
//             {
//               title: 'Advanced Security',
//               desc: 'Enterprise-grade encryption and protected access.',
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 background: 'rgba(255,255,255,0.04)',
//                 border: '1px solid rgba(255,255,255,0.08)',
//                 padding: '2rem',
//                 borderRadius: '24px',
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: '1.4rem',
//                   marginBottom: '1rem',
//                   color: 'white',
//                 }}
//               >
//                 {item.title}
//               </h3>

//               <p
//                 style={{
//                   color: '#94a3b8',
//                   lineHeight: 1.7,
//                 }}
//               >
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Landing;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Layers3,
//   Sparkles,
//   ShieldCheck,
//   Activity,
//   Users,
// } from 'lucide-react';

// const Landing = () => {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         background:
//           'linear-gradient(to bottom right, #0f172a, #111827, #020617)',
//         color: 'white',
//         overflow: 'hidden',
//       }}
//     >
//       {/* NAVBAR */}
//       <nav
//         style={{
//           width: '100%',
//           padding: '1.2rem 5%',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           position: 'sticky',
//           top: 0,
//           zIndex: 100,
//           backdropFilter: 'blur(14px)',
//           background: 'rgba(15,23,42,0.5)',
//           borderBottom: '1px solid rgba(255,255,255,0.05)',
//         }}
//       >
//         {/* LOGO */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '0.75rem',
//             fontSize: '1.3rem',
//             fontWeight: 800,
//           }}
//         >
//           <div
//             style={{
//               width: '42px',
//               height: '42px',
//               borderRadius: '14px',
//               background:
//                 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Layers3 size={20} />
//           </div>

//           FlowSphere
//         </div>

//         {/* RIGHT SIDE */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '1rem',
//           }}
//         >
//           <Link
//             to="/login"
//             style={{
//               color: '#cbd5e1',
//               textDecoration: 'none',
//               fontWeight: 600,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             Login
//           </Link>

//           <Link
//             to="/signup"
//             style={{
//               background:
//                 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//               color: 'white',
//               padding: '0.9rem 1.5rem',
//               borderRadius: '14px',
//               textDecoration: 'none',
//               fontWeight: 700,
//               boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
//             }}
//           >
//             Start Free
//           </Link>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section
//         style={{
//           width: '100%',
//           padding: '4rem 5%',
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '4rem',
//           alignItems: 'center',
//         }}
//       >
//         {/* LEFT */}
//         <div>
//           {/* BADGE */}
//           <div
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '0.5rem',
//               background: 'rgba(255,255,255,0.06)',
//               border: '1px solid rgba(255,255,255,0.08)',
//               padding: '0.6rem 1rem',
//               borderRadius: '999px',
//               marginBottom: '1rem',
//               color: '#cbd5e1',
//               fontSize: '0.85rem',
//             }}
//           >
//             <Sparkles size={15} />
//             SMART WORKFLOW AUTOMATION
//           </div>

//           {/* HERO TITLE */}
//           <h1
//             style={{
//               fontSize: '4.3rem',
//               lineHeight: 1,
//               fontWeight: 900,
//               marginTop: 0,
//               marginBottom: '1.5rem',
//               letterSpacing: '-3px',
//             }}
//           >
//             Organize work.
//             <br />
//             Lead faster.
//             <br />
//             <span
//               style={{
//                 background:
//                   'linear-gradient(to right,#06b6d4,#8b5cf6)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Scale smarter.
//             </span>
//           </h1>

//           {/* DESCRIPTION */}
//           <p
//             style={{
//               color: '#94a3b8',
//               fontSize: '1.1rem',
//               lineHeight: 1.8,
//               maxWidth: '600px',
//               marginBottom: '2rem',
//             }}
//           >
//             A modern collaboration platform for startups and
//             high-performance teams. Manage projects, automate
//             workflows, and track productivity from one intelligent
//             dashboard.
//           </p>

//           {/* BUTTONS */}
//           <div
//             style={{
//               display: 'flex',
//               gap: '1rem',
//               flexWrap: 'wrap',
//             }}
//           >
//             <Link
//               to="/signup"
//               style={{
//                 background:
//                   'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//                 color: 'white',
//                 padding: '1rem 1.8rem',
//                 borderRadius: '16px',
//                 textDecoration: 'none',
//                 fontWeight: 700,
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.5rem',
//               }}
//             >
//               Launch Workspace
//               <ArrowRight size={18} />
//             </Link>

//             <button
//               style={{
//                 background: 'transparent',
//                 border: '1px solid rgba(255,255,255,0.1)',
//                 color: 'white',
//                 padding: '1rem 1.8rem',
//                 borderRadius: '16px',
//                 fontWeight: 700,
//                 cursor: 'pointer',
//               }}
//             >
//               Watch Demo
//             </button>
//           </div>

//           {/* STATS */}
//           <div
//             style={{
//               display: 'flex',
//               gap: '2rem',
//               marginTop: '3rem',
//               flexWrap: 'wrap',
//             }}
//           >
//             <div>
//               <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', }}>
//                 50K+
//               </h2>
//               <p style={{ color: '#94a3b8' }}>Active Users</p>
//             </div>

//             <div>
//               <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', }}>
//                 99.9%
//               </h2>
//               <p style={{ color: '#94a3b8' }}>Uptime</p>
//             </div>

//             <div>
//               <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', }}>
//                 4.9/5
//               </h2>
//               <p style={{ color: '#94a3b8' }}>User Rating</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE DASHBOARD */}
//         <div
//           style={{
//             position: 'relative',
//           }}
//         >
//           <div
//             style={{
//               background: 'rgba(255,255,255,0.05)',
//               border: '1px solid rgba(255,255,255,0.08)',
//               borderRadius: '30px',
//               padding: '2rem',
//               backdropFilter: 'blur(20px)',
//               boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
//             }}
//           >
//             {/* TOP */}
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 marginBottom: '2rem',
//               }}
//             >
//               <div>
//                 <h3
//                   style={{
//                     fontSize: '1.3rem',
//                     marginBottom: '0.5rem',
//                     color: 'white',
//                   }}
//                 >
//                   Team Performance
//                 </h3>

//                 <p style={{ color: '#94a3b8' }}>
//                   Productivity overview
//                 </p>
//               </div>

//               <div
//                 style={{
//                   background:
//                     'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//                   width: '55px',
//                   height: '55px',
//                   borderRadius: '18px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <Activity />
//               </div>
//             </div>

//             {/* CARDS */}
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '1rem',
//               }}
//             >
//               <div
//                 style={{
//                   background: 'rgba(255,255,255,0.04)',
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                 }}
//               >
//                 <Users size={24} />

//                 <h2
//                   style={{
//                     marginTop: '1rem',
//                     fontSize: '2rem',
//                   }}
//                 >
//                   24
//                 </h2>

//                 <p style={{ color: '#94a3b8' }}>Team Members</p>
//               </div>

//               <div
//                 style={{
//                   background: 'rgba(255,255,255,0.04)',
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                 }}
//               >
//                 <ShieldCheck size={24} />

//                 <h2
//                   style={{
//                     marginTop: '1rem',
//                     fontSize: '2rem',
//                   }}
//                 >
//                   98%
//                 </h2>

//                 <p style={{ color: '#94a3b8' }}>Task Success</p>
//               </div>

//               <div
//                 style={{
//                   background: 'rgba(255,255,255,0.04)',
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                   gridColumn: 'span 2',
//                 }}
//               >
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     marginBottom: '1rem',
//                   }}
//                 >
//                   <span>Project Progress</span>
//                   <span>75%</span>
//                 </div>

//                 <div
//                   style={{
//                     width: '100%',
//                     height: '10px',
//                     borderRadius: '999px',
//                     background: 'rgba(255,255,255,0.08)',
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: '75%',
//                       height: '100%',
//                       background:
//                         'linear-gradient(to right,#06b6d4,#8b5cf6)',
//                     }}
//                   />
//                 </div>

//                 <div
//                   style={{
//                     marginTop: '1rem',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '0.7rem',
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.5rem',
//                       color: '#cbd5e1',
//                     }}
//                   >
//                     <CheckCircle2 size={16} />
//                     UI Design Completed
//                   </div>

//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.5rem',
//                       color: '#cbd5e1',
//                     }}
//                   >
//                     <CheckCircle2 size={16} />
//                     Backend API Integrated
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section
//         style={{
//           padding: '5rem 5%',
//         }}
//       >
//         <div
//           style={{
//             textAlign: 'center',
//             marginBottom: '4rem',
//           }}
//         >
//           <p
//             style={{
//               color: '#06b6d4',
//               fontWeight: 700,
//               marginBottom: '1rem',
//             }}
//           >
//             WHY CHOOSE US
//           </p>

//           <h2
//             style={{
//               fontSize: '3rem',
//               fontWeight: 900,
//               color: 'white',
//             }}
//           >
//             Built for modern teams
//           </h2>
//         </div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns:
//               'repeat(auto-fit,minmax(280px,1fr))',
//             gap: '2rem',
//           }}
//         >
//           {[
//             {
//               title: 'AI Task Automation',
//               desc: 'Automate repetitive workflows and save hours every week.',
//             },
//             {
//               title: 'Real-Time Collaboration',
//               desc: 'Instant updates, comments, and live project tracking.',
//             },
//             {
//               title: 'Advanced Security',
//               desc: 'Enterprise-grade encryption and protected access.',
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 background: 'rgba(255,255,255,0.04)',
//                 border: '1px solid rgba(255,255,255,0.08)',
//                 padding: '2rem',
//                 borderRadius: '24px',
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: '1.4rem',
//                   marginBottom: '1rem',
//                   color: 'white',
//                 }}
//               >
//                 {item.title}
//               </h3>

//               <p
//                 style={{
//                   color: '#94a3b8',
//                   lineHeight: 1.7,
//                 }}
//               >
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Landing;










// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Layers3,
//   Sparkles,
//   ShieldCheck,
//   Activity,
//   Users,
//   Moon,
//   Sun,
// } from 'lucide-react';

// const Landing = () => {
//   // const [darkMode, setDarkMode] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = {
//     background: darkMode
//       ? 'linear-gradient(to bottom right, #0f172a, #111827, #020617)'
//       : 'linear-gradient(to bottom right, #f8fafc, #e2e8f0, #ffffff)',

//     text: darkMode ? 'white' : '#0f172a',

//     subText: darkMode ? '#94a3b8' : '#475569',

//     card: darkMode
//       ? 'rgba(255,255,255,0.05)'
//       : 'rgba(255,255,255,0.9)',

//     border: darkMode
//       ? '1px solid rgba(255,255,255,0.08)'
//       : '1px solid rgba(15,23,42,0.08)',

//     navbar: darkMode
//       ? 'rgba(15,23,42,0.5)'
//       : 'rgba(255,255,255,0.7)',

//     badge: darkMode
//       ? 'rgba(255,255,255,0.06)'
//       : 'rgba(15,23,42,0.05)',
//   };

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         background: theme.background,
//         color: theme.text,
//         overflow: 'hidden',
//         transition: 'all 0.4s ease',
//       }}
//     >
//       {/* NAVBAR */}
//       <nav
//         style={{
//           width: '100%',
//           padding: '1.2rem 5%',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           position: 'sticky',
//           top: 0,
//           zIndex: 100,
//           backdropFilter: 'blur(14px)',
//           background: theme.navbar,
//           borderBottom: theme.border,
//         }}
//       >
//         {/* LOGO */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '0.75rem',
//             fontSize: '1.3rem',
//             fontWeight: 800,
//           }}
//         >
//           <div
//             style={{
//               width: '42px',
//               height: '42px',
//               borderRadius: '14px',
//               background:
//                 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Layers3 size={20} />
//           </div>

//           Task Manager
//         </div>

//         {/* RIGHT SIDE */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '1rem',
//           }}
//         >
//           {/* THEME BUTTON */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             style={{
//               width: '46px',
//               height: '46px',
//               borderRadius: '14px',
//               border: theme.border,
//               background: theme.card,
//               color: theme.text,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               transition: '0.3s',
//             }}
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>

//           {/* LOGIN */}
//           <Link
//             to="/login"
//             style={{
//               color: theme.text,
//               textDecoration: 'none',
//               fontWeight: 600,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             Login
//           </Link>

//           {/* SIGNUP */}
//           <Link
//             to="/signup"
//             style={{
//               background:
//                 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//               color: 'white',
//               padding: '0.9rem 1.5rem',
//               borderRadius: '14px',
//               textDecoration: 'none',
//               fontWeight: 700,
//               boxShadow: '0 10px 30px rgba(139,92,246,0.35)',
//             }}
//           >
//             Start Free
//           </Link>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section
//         style={{
//           width: '100%',
//           padding: '4rem 5%',
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '4rem',
//           alignItems: 'center',
//         }}
//       >
//         {/* LEFT */}
//         <div>
//           {/* BADGE */}
//           <div
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '0.5rem',
//               background: theme.badge,
//               border: theme.border,
//               padding: '0.6rem 1rem',
//               borderRadius: '999px',
//               marginBottom: '1rem',
//               color: theme.subText,
//               fontSize: '0.85rem',
//             }}
//           >
//             <Sparkles size={15} />
//             SMART WORKFLOW AUTOMATION
//           </div>

//           {/* TITLE */}
//           <h1
//             style={{
//               fontSize: '4.3rem',
//               lineHeight: 1,
//               fontWeight: 900,
//               marginTop: 0,
//               marginBottom: '1.5rem',
//               letterSpacing: '-3px',
//             }}
//           >
//             Organize work.
//             <br />
//             Lead faster.
//             <br />
//             <span
//               style={{
//                 background:
//                   'linear-gradient(to right,#06b6d4,#8b5cf6)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Scale smarter.
//             </span>
//           </h1>

//           {/* DESCRIPTION */}
//           <p
//             style={{
//               color: theme.subText,
//               fontSize: '1.1rem',
//               lineHeight: 1.8,
//               maxWidth: '600px',
//               marginBottom: '2rem',
//             }}
//           >
//             A modern collaboration platform for startups and
//             high-performance teams. Manage projects, automate
//             workflows, and track productivity from one intelligent
//             dashboard.
//           </p>

//           {/* BUTTONS */}
//           <div
//             style={{
//               display: 'flex',
//               gap: '1rem',
//               flexWrap: 'wrap',
//             }}
//           >
//             <Link
//               to="/signup"
//               style={{
//                 background:
//                   'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//                 color: 'white',
//                 padding: '1rem 1.8rem',
//                 borderRadius: '16px',
//                 textDecoration: 'none',
//                 fontWeight: 700,
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.5rem',
//               }}
//             >
//               Launch Workspace
//               <ArrowRight size={18} />
//             </Link>

//             <button
//               style={{
//                 background: 'transparent',
//                 border: theme.border,
//                 color: theme.text,
//                 padding: '1rem 1.8rem',
//                 borderRadius: '16px',
//                 fontWeight: 700,
//                 cursor: 'pointer',
//               }}
//             >
//               Watch Demo
//             </button>
//           </div>

//           {/* STATS */}
//           <div
//             style={{
//               display: 'flex',
//               gap: '2rem',
//               marginTop: '3rem',
//               flexWrap: 'wrap',
//             }}
//           >
//             {[
//               { num: '50K+', text: 'Active Users' },
//               { num: '99.9%', text: 'Uptime' },
//               { num: '4.9/5', text: 'User Rating' },
//             ].map((item, i) => (
//               <div key={i}>
//                 <h2
//                   style={{
//                     fontSize: '2rem',
//                     fontWeight: 800,
//                     color: theme.text,
//                   }}
//                 >
//                   {item.num}
//                 </h2>

//                 <p style={{ color: theme.subText }}>
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div>
//           <div
//             style={{
//               background: theme.card,
//               border: theme.border,
//               borderRadius: '30px',
//               padding: '2rem',
//               backdropFilter: 'blur(20px)',
//               boxShadow: darkMode
//                 ? '0 30px 80px rgba(0,0,0,0.45)'
//                 : '0 20px 50px rgba(15,23,42,0.08)',
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 marginBottom: '2rem',
//               }}
//             >
//               <div>
//                 <h3
//                   style={{
//                     fontSize: '1.3rem',
//                     marginBottom: '0.5rem',
//                     color: theme.text,
//                   }}
//                 >
//                   Team Performance
//                 </h3>

//                 <p style={{ color: theme.subText }}>
//                   Productivity overview
//                 </p>
//               </div>

//               <div
//                 style={{
//                   background:
//                     'linear-gradient(135deg,#06b6d4,#8b5cf6)',
//                   width: '55px',
//                   height: '55px',
//                   borderRadius: '18px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <Activity />
//               </div>
//             </div>

//             {/* GRID */}
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '1rem',
//               }}
//             >
//               <div
//                 style={{
//                   background: theme.badge,
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                 }}
//               >
//                 <Users size={24} />

//                 <h2
//                   style={{
//                     marginTop: '1rem',
//                     fontSize: '2rem',
//                     color: theme.text,
//                   }}
//                 >
//                   24
//                 </h2>

//                 <p style={{ color: theme.subText }}>
//                   Team Members
//                 </p>
//               </div>

//               <div
//                 style={{
//                   background: theme.badge,
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                 }}
//               >
//                 <ShieldCheck size={24} />

//                 <h2
//                   style={{
//                     marginTop: '1rem',
//                     fontSize: '2rem',
//                     color: theme.text,
//                   }}
//                 >
//                   98%
//                 </h2>

//                 <p style={{ color: theme.subText }}>
//                   Task Success
//                 </p>
//               </div>

//               <div
//                 style={{
//                   background: theme.badge,
//                   padding: '1.5rem',
//                   borderRadius: '20px',
//                   gridColumn: 'span 2',
//                 }}
//               >
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     marginBottom: '1rem',
//                     color: theme.text,
//                   }}
//                 >
//                   <span>Project Progress</span>
//                   <span>75%</span>
//                 </div>

//                 <div
//                   style={{
//                     width: '100%',
//                     height: '10px',
//                     borderRadius: '999px',
//                     background: 'rgba(255,255,255,0.08)',
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: '75%',
//                       height: '100%',
//                       background:
//                         'linear-gradient(to right,#06b6d4,#8b5cf6)',
//                     }}
//                   />
//                 </div>

//                 <div
//                   style={{
//                     marginTop: '1rem',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '0.7rem',
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.5rem',
//                       color: theme.subText,
//                     }}
//                   >
//                     <CheckCircle2 size={16} />
//                     UI Design Completed
//                   </div>

//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.5rem',
//                       color: theme.subText,
//                     }}
//                   >
//                     <CheckCircle2 size={16} />
//                     Backend API Integrated
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section
//         style={{
//           padding: '5rem 5%',
//         }}
//       >
//         <div
//           style={{
//             textAlign: 'center',
//             marginBottom: '4rem',
//           }}
//         >
//           <p
//             style={{
//               color: '#06b6d4',
//               fontWeight: 700,
//               marginBottom: '1rem',
//             }}
//           >
//             WHY CHOOSE US
//           </p>

//           <h2
//             style={{
//               fontSize: '3rem',
//               fontWeight: 900,
//               color: theme.text,
//             }}
//           >
//             Built for modern teams
//           </h2>
//         </div>

//         {/* FEATURE CARDS */}
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns:
//               'repeat(auto-fit,minmax(280px,1fr))',
//             gap: '2rem',
//           }}
//         >
//           {[
//             {
//               title: 'AI Task Automation',
//               desc: 'Automate repetitive workflows and save hours every week.',
//             },
//             {
//               title: 'Real-Time Collaboration',
//               desc: 'Instant updates, comments, and live project tracking.',
//             },
//             {
//               title: 'Advanced Security',
//               desc: 'Enterprise-grade encryption and protected access.',
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 background: theme.card,
//                 border: theme.border,
//                 padding: '2rem',
//                 borderRadius: '24px',
//                 transition: 'all 0.35s ease',
//                 cursor: 'pointer',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform =
//                   'translateY(-10px)';
//                 e.currentTarget.style.boxShadow =
//                   '0 25px 50px rgba(139,92,246,0.25)';
//                 e.currentTarget.style.border =
//                   '1px solid rgba(139,92,246,0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform =
//                   'translateY(0px)';
//                 e.currentTarget.style.boxShadow = 'none';
//                 e.currentTarget.style.border = theme.border;
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: '1.4rem',
//                   marginBottom: '1rem',
//                   color: theme.text,
//                 }}
//               >
//                 {item.title}
//               </h3>

//               <p
//                 style={{
//                   color: theme.subText,
//                   lineHeight: 1.7,
//                 }}
//               >
//                 {item.desc}
//               </p>
//             </div>
//           ))}



//         </div>
//       </section>
//     </div>
//   );
// };

// export default Landing;















import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Sparkles,
  ShieldCheck,
  Activity,
  Users,
  Moon,
  Sun,
} from 'lucide-react';

const Landing = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = darkMode
    ? {
      background:
        'linear-gradient(to bottom right, #0f172a, #111827, #020617)',
      card: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.08)',
      text: '#ffffff',
      subText: '#94a3b8',
      nav: 'rgba(15,23,42,0.75)',
    }
    : {
      background:
        'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
      card: 'rgba(255,255,255,0.75)',
      border: '1px solid rgba(15,23,42,0.08)',
      text: '#0f172a',
      subText: '#475569',
      nav: 'rgba(255,255,255,0.75)',
    };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: theme.background,
        color: theme.text,
        overflow: 'hidden',
        transition: '0.3s ease',
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          width: '100%',
          padding: '1.3rem 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(14px)',
          background: theme.nav,
          borderBottom: theme.border,
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: mobile ? '1.2rem' : '1.4rem',
            fontWeight: 800,
            color: theme.text,
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '14px',
              background:
                'linear-gradient(135deg,#06b6d4,#8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Layers3 size={20} />
          </div>

          Task Manager
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: mobile ? '0.5rem' : '1rem',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {/* THEME BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              width: mobile ? '40px' : '45px',
              height: mobile ? '40px' : '45px',
              borderRadius: '12px',
              border: theme.border,
              background: theme.card,
              color: theme.text,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: '0.3s ease',
              flexShrink: 0,
            }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* LOGIN */}
          <Link
            to="/login"
            style={{
              color: theme.text,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: mobile ? '0.95rem' : '1rem',
              whiteSpace: 'nowrap',
            }}
          >
            Login
          </Link>

          {/* START FREE */}
          <Link
            to="/signup"
            style={{
              background:
                'linear-gradient(135deg,#06b6d4,#8b5cf6)',
              color: 'white',
              padding: mobile
                ? '0.75rem 1rem'
                : '0.9rem 1.5rem',
              borderRadius: '14px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: mobile ? '0.9rem' : '1rem',
              boxShadow:
                '0 10px 30px rgba(139,92,246,0.35)',
              whiteSpace: 'nowrap',
              transition: '0.3s ease',
              flexShrink: 0,
            }}
          >
            Start Free
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          width: '100%',
          padding: '4rem 5%',
          display: 'grid',
          gridTemplateColumns: mobile
            ? '1fr'
            : '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* LEFT */}
        <div>
          {/* BADGE */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: theme.card,
              border: theme.border,
              padding: '0.7rem 1rem',
              borderRadius: '999px',
              marginBottom: '1.5rem',
              color: theme.subText,
              fontSize: '0.85rem',
            }}
          >
            <Sparkles size={15} />
            SMART WORKFLOW AUTOMATION
          </div>

          {/* HEADING */}
          <h1
            style={{
              fontSize: mobile ? '3rem' : '5rem',
              lineHeight: 1.05,
              fontWeight: 900,
              marginBottom: '1.5rem',
              letterSpacing: '-3px',
              color: theme.text,
            }}
          >
            Organize work.
            <br />
            Lead faster.
            <br />

            <span
              style={{
                background:
                  'linear-gradient(to right,#06b6d4,#8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                marginTop: '0.5rem',
              }}
            >
              Scale smarter.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            style={{
              color: theme.subText,
              fontSize: '1.1rem',
              lineHeight: 1.8,
              maxWidth: '600px',
              marginBottom: '2rem',
            }}
          >
            A modern collaboration platform for startups and
            high-performance teams. Manage projects,
            automate workflows, and track productivity
            from one intelligent dashboard.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/signup"
              style={{
                background:
                  'linear-gradient(135deg,#06b6d4,#8b5cf6)',
                color: 'white',
                padding: '1rem 1.8rem',
                borderRadius: '16px',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              Launch Workspace
              <ArrowRight size={18} />
            </Link>

            <button
              style={{
                background: 'transparent',
                border: theme.border,
                color: theme.text,
                padding: '1rem 1.8rem',
                borderRadius: '16px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Watch Demo
            </button>
          </div>

          {/* STATS */}
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              marginTop: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              {
                number: '50K+',
                label: 'Active Users',
              },
              {
                number: '99.9%',
                label: 'Uptime',
              },
              {
                number: '4.9/5',
                label: 'User Rating',
              },
            ].map((item, i) => (
              <div key={i}>
                <h2
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    marginBottom: '0.3rem',
                    color: theme.text,
                  }}
                >
                  {item.number}
                </h2>

                <p
                  style={{
                    color: theme.subText,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div>
          <div
            style={{
              background: theme.card,
              border: theme.border,
              borderRadius: '30px',
              padding: '2rem',
              backdropFilter: 'blur(20px)',
              boxShadow:
                '0 30px 80px rgba(0,0,0,0.25)',
            }}
          >
            {/* TOP */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                gap: '1rem',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '0.5rem',
                    color: theme.text,
                  }}
                >
                  Team Performance
                </h3>

                <p
                  style={{
                    color: theme.subText,
                  }}
                >
                  Productivity overview
                </p>
              </div>

              <div
                style={{
                  background:
                    'linear-gradient(135deg,#06b6d4,#8b5cf6)',
                  width: '55px',
                  height: '55px',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Activity />
              </div>
            </div>

            {/* CARDS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: mobile
                  ? '1fr'
                  : '1fr 1fr',
                gap: '1rem',
              }}
            >
              {[
                {
                  icon: <Users size={24} />,
                  title: '24',
                  desc: 'Team Members',
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: '98%',
                  desc: 'Task Success',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: theme.card,
                    border: theme.border,
                    padding: '1.5rem',
                    borderRadius: '20px',
                  }}
                >
                  {item.icon}

                  <h2
                    style={{
                      marginTop: '1rem',
                      fontSize: '2rem',
                      color: theme.text,
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      color: theme.subText,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* PROGRESS */}
              <div
                style={{
                  background: theme.card,
                  border: theme.border,
                  padding: '1.5rem',
                  borderRadius: '20px',
                  gridColumn: mobile
                    ? 'span 1'
                    : 'span 2',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    color: theme.text,
                  }}
                >
                  <span>Project Progress</span>
                  <span>75%</span>
                </div>

                <div
                  style={{
                    width: '100%',
                    height: '10px',
                    borderRadius: '999px',
                    background:
                      'rgba(255,255,255,0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '75%',
                      height: '100%',
                      background:
                        'linear-gradient(to right,#06b6d4,#8b5cf6)',
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.7rem',
                    color: theme.subText,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <CheckCircle2 size={16} />
                    UI Design Completed
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <CheckCircle2 size={16} />
                    Backend API Integrated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: '5rem 5%',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <p
            style={{
              color: '#06b6d4',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            WHY CHOOSE US
          </p>

          <h2
            style={{
              fontSize: mobile ? '2rem' : '3rem',
              fontWeight: 900,
              color: theme.text,
            }}
          >
            Built for modern teams
          </h2>
        </div>

        {/* FEATURE CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(280px,1fr))',
            gap: '2rem',
          }}
        >
          {[
            {
              title: 'AI Task Automation',
              desc: 'Automate repetitive workflows and save hours every week.',
            },
            {
              title: 'Real-Time Collaboration',
              desc: 'Instant updates, comments, and live project tracking.',
            },
            {
              title: 'Advanced Security',
              desc: 'Enterprise-grade encryption and protected access.',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: theme.card,
                border: theme.border,
                padding: '2rem',
                borderRadius: '24px',
                transition: '0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-10px)';
                e.currentTarget.style.boxShadow =
                  '0 20px 40px rgba(139,92,246,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'translateY(0px)';
                e.currentTarget.style.boxShadow =
                  'none';
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  color: theme.text,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: theme.subText,
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}


        </div>
      </section>

    </div>
  );
};

export default Landing;