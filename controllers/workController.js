const Work = require("../models/vacancyModel")
const UserModel = require("../models/userModel")

// Получение данных вакансий
exports.getWork = async (req, res) => {
    try {
        const { sort, directionFilter, searchQuery, searchQueryDescription, searchQueryRegion } = req.query

        const works = await Work.find()
        const users = await UserModel.find()
        res.render("job/job", { works: works, searchQuery, searchQueryDescription, searchQueryRegion, directionFilter, sort, users:users, login:req.cookies.auth })
    } catch (err) {
        console.log(err)
    }
}

exports.Search = async (req, res) => {
    const { sort, directionFilter, searchQuery, searchQueryDescription, searchQueryRegion } = req.query

    let query = {}

// Фильтрация по направлению
    if (directionFilter && directionFilter.length > 0) {
        query.direction = { $in: directionFilter }
    }


// Поиск по названию вакансии
    if (searchQuery) {
        query.title = { $regex: `.*${searchQuery}.*`, $options: 'i' }
    }

    let courses = []

// Поиск по  описанию
    if (searchQueryDescription) {
        query.description = { $regex: `.*${searchQueryDescription}.*`, $options: 'i' }
    }

    let description = []

// Поиск по  описанию
    if (searchQueryRegion) {
        query.region = { $regex: `.*${searchQueryRegion}.*`, $options: 'i' }
    }

    let region = []

// Выполнение запроса с учетом сортировки
    let sortOption = {}

    switch (sort) {
        case 'az':
            sortOption.title = 1
            break
        case 'za':
            sortOption.title = -1
            break
        case 'newest':
            sortOption.createdAt = -1
            break
        case 'oldest':
            sortOption.createdAt = 1
            break
        default:
            break
    }

    try {
        works = await Work.find(query).sort(sortOption)
    } catch (err) {
        console.log(err)
    }

    res.render('job/job', { courses, sort, directionFilter, searchQuery, searchQueryDescription, searchQueryRegion, login:req.cookies.auth })
}

// Получение данных вакансий
exports.Work = async (req, res) => {
    const works = await Work.find({},{_id:0, __v:0})
    res.render('main',{works:works})
}


