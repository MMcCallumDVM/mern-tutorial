const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoal, deletGoal} = require('../controllers/goalController')

// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Get goals!!!',  })
// })

// router.get('/', getGoals)
// router.post('/', setGoals)
router.route('/').get(getGoals).post(setGoals)
// router.put('/:id', updateGoal)
// router.delete('/:id', deletGoal)
router.route('/:id').put(updateGoal).delete(deletGoal)
module.exports = router