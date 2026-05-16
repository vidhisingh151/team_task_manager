const Project = require('../models/Project');
const User = require('../models/User');

exports.createProject = async (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ msg: 'Not authorized to create projects' });
  }

  const { name, description, members } = req.body;

  try {
    const newProject = new Project({
      name,
      description,
      owner: req.user.id,
      members: members || []
    });

    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getProjects = async (req, res) => {
  try {
    // If Admin, get all projects. If Member, get projects where they are a member.
    let projects;
    if (req.user.role === 'Admin') {
      projects = await Project.find().populate('owner', 'name email').populate('members', 'name email');
    } else {
      projects = await Project.find({ members: req.user.id }).populate('owner', 'name email').populate('members', 'name email');
    }
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('owner', 'name email').populate('members', 'name email');
    
    if (!project) return res.status(404).json({ msg: 'Project not found' });

    // Check if user is authorized to view
    if (req.user.role !== 'Admin' && !project.members.some(member => member._id.toString() === req.user.id)) {
      return res.status(403).json({ msg: 'Not authorized to view this project' });
    }

    res.json(project);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Project not found' });
    res.status(500).send('Server Error');
  }
};

exports.updateProject = async (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ msg: 'Not authorized to update projects' });
  }

  const { name, description, members } = req.body;

  try {
    let project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ msg: 'Project not found' });

    project.name = name || project.name;
    project.description = description || project.description;
    if (members) project.members = members;

    await project.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteProject = async (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ msg: 'Not authorized to delete projects' });
  }

  try {
    let project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ msg: 'Project not found' });

    await project.deleteOne();
    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Project not found' });
    res.status(500).send('Server Error');
  }
};
