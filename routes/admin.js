const express = require('express')
const adminController = require('../controllers/adminController')

const router = express.Router()

// Users
router.get('/users', adminController.getUsers)
router.get('/users/count', adminController.getUsersCount)
router.post('/users/create', adminController.createUser)
router.post('/users/delete/:id', adminController.deleteUser)
router.post('/users/update/:id', adminController.updateUser)

// Works
router.get('/works', adminController.getWorks)
router.post('/works/create', adminController.createWork)
router.post('/works/delete/:id', adminController.deleteWork)
router.post('/works/update/:id', adminController.updateWork)

module.exports = router
