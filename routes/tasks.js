const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/:id', async (req, res) => {
    try{
        const tasks = await Task.find({list: req.params.id});
        res.json(tasks); 
    } catch (error) {
        res.json({message: error});
    }
});

router.post('/', async (req,res) => {
    const task = new Task({
        task: req.body.task,
        list: req.body.list
    });
    try{
        const savedTask = await task.save()
        res.json(savedTask);
    } catch (error) {
        res.json({message: error});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.remove({_id: req.params.id});
        res.json(task);
    } catch(error) {
        res.json({message:error});
    }
});

router.delete('/all/:id', async (req, res) => {
    try{
        const tasks = await Task.remove({list: req.params.id});
        res.json(tasks); 
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;
