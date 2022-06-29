import express from 'express'

import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  removeUser,
} from '@controller/user.controllers'

const router = express.Router()

router.get('/:userId', getUser)
router.get('/all', getAllUsers)
router.post('/create', createUser)
router.put(':userId', updateUser)
router.delete(':userId', removeUser)

export default router
