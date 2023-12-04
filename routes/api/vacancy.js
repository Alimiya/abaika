const express = require('express')
const router = express.Router()
const vacancyController = require('../../controllers/api/vacancyController')

router.get('/vacancies', vacancyController.getAllVacancies)
router.get('/vacancies/:id', vacancyController.getVacancyById)
router.post('/vacancies', vacancyController.createVacancy)
router.put('/vacancies/:id', vacancyController.updateVacancyById)
router.delete('/vacancies/:id', vacancyController.deleteVacancyById)

module.exports = router