const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const User = require('./models/User');
const Project = require('./models/Project');
const Task = require('./models/Task');

const addData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB...');
    
    // Find an admin user to be the owner
    let admin = await User.findOne({ role: 'Admin' });
    if (!admin) {
        admin = await User.create({ name: 'Default Admin', email: 'default@admin.com', password: 'abc', role: 'Admin' });
    }

    // Create 2 Projects
    const projectA = await Project.create({
      name: 'Alpha Initiative ' + Date.now().toString().slice(-4),
      description: 'A new project added to demonstrate pending and completed tasks.',
      owner: admin._id,
      members: [admin._id] // Assigned to admin so they can see it if they are logged in as admin
    });

    const projectB = await Project.create({
      name: 'Beta Launch ' + Date.now().toString().slice(-4),
      description: 'Another sample project.',
      owner: admin._id,
      members: [admin._id]
    });

    // Create Pending Tasks
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);

    await Task.create({
      title: 'Pending Task 1',
      description: 'This is a task that still needs to be done.',
      project: projectA._id,
      assignedTo: admin._id,
      status: 'Todo',
      dueDate: futureDate
    });

    await Task.create({
      title: 'Pending Task 2',
      description: 'This task is currently being worked on.',
      project: projectB._id,
      assignedTo: admin._id,
      status: 'In Progress',
      dueDate: futureDate
    });

    // Create Completed Tasks
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 5);

    await Task.create({
      title: 'Completed Task 1',
      description: 'This task was finished yesterday.',
      project: projectA._id,
      assignedTo: admin._id,
      status: 'Done',
      dueDate: pastDate
    });

    await Task.create({
      title: 'Completed Task 2',
      description: 'Another finished task.',
      project: projectB._id,
      assignedTo: admin._id,
      status: 'Done',
      dueDate: pastDate
    });

    console.log('Successfully added new projects, pending tasks, and completed tasks!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

addData();
