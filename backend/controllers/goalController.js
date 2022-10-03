const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals =  asyncHandler ( async (req, res) => {

    const goals = await Goal.find()
    res.status(200).json(goals)
    // res.status(200).json({
    //     message: 'Get goals from controller',
    // })
})

// @desc   Set goals
// @route  POST /api/goals
// @access Private
const setGoals = asyncHandler ( async (req, res) => {
   // console.log(req.body)
   if(!req.body.text){
    // res.status(400).json({ 
    //     message: 'Please add a text field'
    res.status(400)
     throw new Error('Please add a text field')
    // })
   }

   const goal = await Goal.create({
    text: req.body.text
   })

   res.status(200).json(goal)
    // res.status(200).json({
    //     message: 'Set goal from controller'
    // })
} )

// @desc   Update goal
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler ( async  (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    //const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true })
    const updatedGoal = await Goal.findByIdAndUpdate(goal, req.body, {new: true })


    res.status(200).json(updatedGoal)
    // res.status(200).json({
    //     messsage: `Updated goal : ${req.params.id}`
    // })
} )

// @desc   Delete goal
// @route  DELETE /api/goal/:id
// @access Private
const deletGoal = asyncHandler ( async (req,res) => {
    const goalID = await Goal.findById(req.params.id)

    if(!goalID) {
        res.status(400)
        throw new Error('Goal not found')    }

    await goalID.remove()
    //const deletedGoal = await Goal.findByIdAndDelete(goalID)
   // res.status(200).json(goalID)
   res.status(200).json({ id: req.params.id })

    // res.status(200).json({
    //     message: `Deleted goal : ${req.params.id}`
    // })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deletGoal,
}