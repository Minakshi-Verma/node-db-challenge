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


//----GET all resources-----

router.get('/', (req, res) => {
    Projects.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });



//---ADD resources---------


//----GET all tasks (with project name and project description-----

//---ADD tasks---------





module.exports = router;