const Vacancy = require('../../models/vacancyModel')

// GET /vacancies
exports.getAllVacancies = async (req, res) => {
    try {
        const vacancies = await Vacancy.find({}, { __v: 0 })
        res.json(vacancies)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch vacancies' })
    }
}

// GET /vacancies/{id}
exports.getVacancyById = async (req, res) => {
    const { id } = req.params
    try {
        const vacancy = await Vacancy.findById(id, { __v: 0 })
        if (vacancy) {
            res.json(vacancy)
        } else {
            res.status(404).json({ error: 'Vacancy not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch vacancy' })
    }
}

// POST /vacancies
exports.createVacancy = async (req, res) => {
    const { title, company, regionV, description, direction, createdAt } = req.body
    try {
        const newVacancy = await Vacancy.create({
            title,
            company,
            regionV,
            description,
            direction,
            createdAt
        })
        res.status(201).json(newVacancy)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create vacancy' })
    }
}

// PUT /vacancies/{id}
exports.updateVacancyById = async (req, res) => {
    const { id } = req.params
    const { title, company, regionV, description, direction, createdAt } = req.body
    try {
        const updatedVacancy = await Vacancy.findByIdAndUpdate(
            id,
            {
                title,
                company,
                regionV,
                description,
                direction,
                createdAt
            },
            { new: true, projection: { __v: 0 } }
        )
        if (updatedVacancy) {
            res.json(updatedVacancy)
        } else {
            res.status(404).json({ error: 'Vacancy not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update vacancy' })
    }
}

// DELETE /vacancies/{id}
exports.deleteVacancyById = async (req, res) => {
    const { id } = req.params
    try {
        const deletedVacancy = await Vacancy.findByIdAndDelete(id)
        if (deletedVacancy) {
            res.json({ message: 'Vacancy deleted successfully' })
        } else {
            res.status(404).json({ error: 'Vacancy not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete vacancy' })
    }
}