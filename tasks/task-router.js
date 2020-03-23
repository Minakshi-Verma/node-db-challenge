const express = require('express');
const Tasks = require('./task-model')

const router = express.Router();

//----GET TASKS------
router.get('/:id',(req,res)=>{
  const {id} = req.params
    Tasks.findTasks(id)
    .then(tasks=>{
      res.status(200).json(tasks)
    })
    .catch(err=>{
      res.status(500).json({ message: err });
        });
  })

  router.get('/tasks/:id', (req,res)=>{
    const{id:task_id} = req.params
    Tasks.findtaskById(task_id)
    .then(task=>{
      res.status(200).json(task)
    })
    .catch(err=>{
      res.status(500).json({ message: err });
        });
    
  })

  //----ADD a task------

  router.post('/:id', (req,res)=>{
      const project_id = req.params.id
      const {description,notes,completed} = req.body
      Tasks.addTask({description,notes,completed,project_id}, project_id)
      .then(task=>{
        res.status(201).json({task})   
      })
      .catch (err => {
        res.status(500).json({ message: err });
      });
  })


  module.exports = router;