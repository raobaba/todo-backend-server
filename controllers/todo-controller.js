const TodoModel = require("../models/tood-model.js");

const addTodo = async (req, res) => {
    try {
        const newTodo = await TodoModel.create({ data: req.body.data, createdAt: Date.now() });
        await newTodo.save();
        return res.status(200).json(newTodo)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
const getAllTodo = async (req, res) => {
    try {
        const todos = await TodoModel.find({}).sort({ 'createdAd': -1 });
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
const toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await TodoModel.findById(req.params.id);

        const todo = await TodoModel.findOneAndUpdate(
            { _id: req.params.id },
            { done: !todoRef.done }
        )

        await todo.save();
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const updateTodo = async (req, res) => {
    try {
        await TodoModel.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )

        const todo = await TodoModel.findById(req.params.id);

        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const deleteTodo = async (req,res)=>{
    try {
        const todo = await TodoModel.findByIdAndDelete(req.params.id)


        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { addTodo, getAllTodo, toggleTodoDone,updateTodo,deleteTodo };