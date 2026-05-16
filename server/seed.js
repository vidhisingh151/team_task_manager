const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Models
const User = require('./models/User');
const Project = require('./models/Project');
const Task = require('./models/Task');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Project.deleteMany();
    await Task.deleteMany();

    console.log('Cleared existing data...');

    // 1. Create Users
    const salt = await bcrypt.genSalt(10);
    const hashedAdminPassword = await bcrypt.hash('password123', salt);
    const hashedMemberPassword = await bcrypt.hash('password123', salt);

    const adminUser = await User.create({
      name: 'Admin Alice',
      email: 'admin@test.com',
      password: hashedAdminPassword,
      role: 'Admin'
    });

    const member1 = await User.create({
      name: 'Bob Member',
      email: 'bob@test.com',
      password: hashedMemberPassword,
      role: 'Member'
    });

    const member2 = await User.create({
      name: 'Charlie Member',
      email: 'charlie@test.com',
      password: hashedMemberPassword,
      role: 'Member'
    });

    console.log('Created Users...');

    // 2. Create Projects
    const project1 = await Project.create({
      name: 'Website Redesign',
      description: 'Overhaul the corporate website with a new dark theme and glassmorphism UI.',
      owner: adminUser._id,
      members: [member1._id, member2._id]
    });

    const project2 = await Project.create({
      name: 'Mobile App Launch',
      description: 'Prepare the marketing materials and backend API for the iOS app release.',
      owner: adminUser._id,
      members: [member1._id]
    });

    const project3 = await Project.create({
      name: 'Q3 Financial Audit',
      description: 'Gather all expense reports and prepare the Q3 presentation for the board.',
      owner: adminUser._id,
      members: [member2._id]
    });

    console.log('Created Projects...');

    // 3. Create Tasks
    const now = new Date();
    const pastDate = new Date(now);
    pastDate.setDate(now.getDate() - 2); // 2 days ago (overdue)
    
    const futureDate1 = new Date(now);
    futureDate1.setDate(now.getDate() + 3); // 3 days from now
    
    const futureDate2 = new Date(now);
    futureDate2.setDate(now.getDate() + 7); // 7 days from now

    const tasks = [
      // Project 1 Tasks
      {
        title: 'Design Mockups',
        description: 'Create Figma mockups for the homepage.',
        project: project1._id,
        assignedTo: member1._id,
        status: 'Done',
        dueDate: pastDate
      },
      {
        title: 'Implement Navigation',
        description: 'Code the responsive navbar in React.',
        project: project1._id,
        assignedTo: member2._id,
        status: 'In Progress',
        dueDate: futureDate1
      },
      {
        title: 'Optimize Assets',
        description: 'Compress all images to WebP format.',
        project: project1._id,
        assignedTo: member1._id,
        status: 'Todo',
        dueDate: pastDate // This will be OVERDUE
      },
      // Project 2 Tasks
      {
        title: 'API Rate Limiting',
        description: 'Add Redis rate limiting to the public endpoints.',
        project: project2._id,
        assignedTo: member1._id,
        status: 'In Progress',
        dueDate: pastDate // OVERDUE
      },
      {
        title: 'App Store Screenshots',
        description: 'Generate screenshots for the App Store listing.',
        project: project2._id,
        assignedTo: adminUser._id,
        status: 'Todo',
        dueDate: futureDate2
      },
      {
        title: 'Draft Press Release',
        description: 'Write the PR for the launch day.',
        project: project2._id,
        assignedTo: member1._id,
        status: 'Done',
        dueDate: futureDate1
      },
      // Project 3 Tasks
      {
        title: 'Collect Expense Reports',
        description: 'Email all department heads for their Q3 reports.',
        project: project3._id,
        assignedTo: member2._id,
        status: 'Todo',
        dueDate: futureDate1
      },
      {
        title: 'Verify AWS Billing',
        description: 'Ensure AWS costs align with the budget.',
        project: project3._id,
        assignedTo: member2._id,
        status: 'In Progress',
        dueDate: futureDate2
      },
      {
        title: 'Create Pitch Deck',
        description: 'Build the slide deck for the board meeting.',
        project: project3._id,
        assignedTo: adminUser._id,
        status: 'Todo',
        dueDate: pastDate // OVERDUE
      }
    ];

    await Task.insertMany(tasks);
    console.log('Created Tasks...');
    console.log('Data Seeding Complete!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
