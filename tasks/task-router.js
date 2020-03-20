const express = require('express');
const Tasks = require('./task-model')

const router = express.Router();

//----GET TASKS------
router.get('/',(req,res)=>{
    Tasks.findTasks()
    .then(tasks=>{
      res.status(200).json(tasks)
    })
    .catch(err=>{
      res.status(500).json({ message: err });
        });
  })

  //----ADD a task------

  router.post('/', (req,res)=>{
      const taskData = req.body
      Tasks.addTask(taskData)
      .then(task=>{
          if(task){
           res.status(200).json(task)   
          }else{
            res.status(500).json({ message: 'sorry' }); 
          }
          
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to add new task' });
      });
  })


  module.exports = router;