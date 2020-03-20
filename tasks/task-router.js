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

  module.exports = router;