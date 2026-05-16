const Task = require('../models/Task');
const Project = require('../models/Project');

exports.createTask = async (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ msg: 'Not authorized to create tasks' });
  }

  const { title, description, project, assignedTo, status, priority, dueDate } = req.body;

  try {
    // Ensure project exists
    const proj = await Project.findById(project);
    if (!proj) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const newTask = new Task({
      title,
      description,
      project,
      assignedTo,
      status,
      priority,
      dueDate
    });

    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { projectId } = req.query;
    let query = {};
    
    if (projectId) {
      query.project = projectId;
    }

    // Admins see all tasks for the project.
    // Members only see tasks for projects they are part of.
    if (req.user.role !== 'Admin') {
      const projectsMemberOf = await Project.find({ members: req.user.id }).select('_id');
      const projectIds = projectsMemberOf.map(p => p._id);
      
      if (projectId) {
         if (!projectIds.some(id => id.toString() === projectId)) {
           return res.status(403).json({ msg: 'Not authorized to view tasks for this project' });
         }
      } else {
        query.project = { $in: projectIds };
      }
    }

    const tasks = await Task.find(query)
      .populate('project', 'name')
      .populate('assignedTo', 'name email');
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate('project', 'name')
      .populate('assignedTo', 'name email');
      
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    // Authorization check
    if (req.user.role !== 'Admin') {
       const project = await Project.findById(task.project._id);
       if (!project.members.some(member => member.toString() === req.user.id)) {
          return res.status(403).json({ msg: 'Not authorized to view this task' });
       }
    }

    res.json(task);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Task not found' });
    res.status(500).send('Server Error');
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, assignedTo, status, priority, dueDate } = req.body;

  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    // Authorization
    if (req.user.role === 'Admin') {
      // Admin can update anything
      if (title) task.title = title;
      if (description) task.description = description;
      if (assignedTo !== undefined) task.assignedTo = assignedTo;
      if (status) task.status = status;
      if (priority) task.priority = priority;
      if (dueDate) task.dueDate = dueDate;
    } else {
      // Member can only update status of their assigned tasks
      if (task.assignedTo && task.assignedTo.toString() === req.user.id) {
        if (status) {
          task.status = status;
        }
        // Members shouldn't change title/description/assignment
        if (title || description || assignedTo || dueDate) {
           // We'll ignore other fields but not throw an error, or we could throw. 
           // For simplicity, just update status.
        }
      } else {
        return res.status(403).json({ msg: 'Not authorized to update this task' });
      }
    }

    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteTask = async (req, res) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ msg: 'Not authorized to delete tasks' });
  }

  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    await task.deleteOne();
    res.json({ msg: 'Task removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Task not found' });
    res.status(500).send('Server Error');
  }
};
