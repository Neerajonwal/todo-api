const express = require("express");
const router = new express.Router();
const todo = require("../models/schema")
require("../db/conn");


router.post("/add/post", async (req, res) => {
    try {
        const user = new todo(req.body)
        console.log(req.body)
        const createuser = await user.save()
        res.json(createuser);
    } catch (e) {
        res.send(e)
    }
})


router.get("/add/get", async (req, res) => {
    try {
        const todoData = await todo.find();
        res.send(todoData)
    } catch (e) {
        res.send(e);
    }
})

router.get("/getbyid/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const todoData = await todo.findById(_id);
        console.log(todoData)
        if (!todoData) {
            return res.send(404).send();
        } else {
            res.send(todoData)
        }
    } catch (e) {
        res.status(500).send(e)
    }

})

router.patch("/update/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const doneData = await todo.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(doneData);
    } catch (e) {
        res.status(404).send(e)
    }
});



router.delete("/delete/:id", async(req,res)=>{
    try{
    const deleteTodo = await todo.findByIdAndDelete(req.params.id)
    if (!req.params.id) {
        return res.status(400).send();
    }
    res.send(deleteTodo)
    }catch(e){
        res.status(500).send(e);
    }
})


module.exports = router;