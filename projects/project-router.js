const express = require('express');
const Projects = require('./project-model')

const router = express.Router();

//  ----GET all projects----

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });


//GET project by id----
router.get('/:project_id', (req, res) => {
    const { project_id } = req.params;
  
    Projects.findById(project_id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });  


//----ADD project----- 

router.post('/', (req,res)=>{
    const projectData = req.body
    Projects.addProject(projectData)
    .then(project => {
        res.status(201).json(project);
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new project' });
      });
})

//----GET TASKs------

router.get('/:project_id/tasks', (req,res)=>{
  const {project_id}= req.params
  Projects.findById(project_id)
  .then(project=>{
    if(project){
      Projects.findTasks()
      .then(task=>{
        if(task){
          res.status(200).json(tasks)
        }else{
          res.status(500).json({error:"sorry! icorrect information provided"})
        }

      })
      .catch(err=>{
        console.log(err)
      })
    }
  })
})



//---ADD tasks---------
router.post('/:project_id/tasks', (req,res)=>{
  const taskData = req.body
  const {project_id}= req.params
  Projects.findById(project_id)
  .then(project=>{
    if(project){
       Projects.addTask(taskData)
    .then(task=>{
      res.status(201).json(task);
    })
    }
  }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  
})





module.exports = router;