const User = require('../models/userModel')
const Work = require('../models/vacancyModel')
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        const page = parseInt(req.query.page) || 1;
        const pageSize = 10; // Set your desired page size

        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, users.length);

        const totalUsers = users.length

        res.render('admin.ejs', { users, login: req.cookies.auth, startIndex, endIndex, totalUsers });
    } catch (error) {
        next(error);
    }
};

exports.getUsersCount = async (req, res, next) => {
    try {
        const users = await User.find().count();
        res.render('admin.ejs',{users})
    } catch (error) {
        next(error);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const { iin, name, surname, lastname, region, email, phone, status } = req.body
        const users = new User({ iin, name, surname, lastname, region, email, phone, status })
        await users.save()
        res.redirect('/admin/users')
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id
        const users = await User.findByIdAndDelete(userId)
        if (!users) {
            return res.status(404).render('error', { message: 'Пользователь не найден' })
        }
        res.redirect('/admin/users')
    } catch (error) {
        next(error)
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id
        const { iin, name, surname, lastname, region, email, phone, status } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser && existingUser._id.toString() !== userId) {
            return res.status(400).json({ error: 'Email already exists' })
        }

        const users = await User.findByIdAndUpdate(userId, { iin, name, surname, lastname, region, email, phone, status },{ new: true })
        res.redirect('/admin/users')
    } catch (error) {
        next(error)
    }
}

exports.getWorks = async (req,res,next)=>{
    try{
        const works = await Work.find()
        if (req.cookies.auth) {
            res.render('adminWork.ejs', { works, login: req.cookies.auth })
        } else {
            res.redirect('/login')
        }
    }catch (err){
        next(err)
    }
}

exports.deleteWork = async (req, res)=> {
    try {
        const workId = req.params.id
        const work = await Work.findByIdAndDelete(workId)
        if (!work) {
            return res.status(404).render('error', { message: 'Вакансия не найдена' })
        }
        res.redirect('/admin/works')
    } catch (error) {
        console.error('Ошибка удаления вакансий:', error)
        res.status(500).render('error', { message: 'Ошибка сервера' })
    }
}

exports.updateWork = async (req, res, next) => {
    try {
        const workId = req.params.id

        const {  company, regionV, description, direction } = req.body

        const works = await Work.findByIdAndUpdate(workId, {  company, regionV, description, direction },{ new: true })
        res.redirect('/admin/works')
    } catch (error) {
        next(error)
    }
}

exports.createWork = async (req, res, next) => {
    try {
        const {  company, regionV, description, direction } = req.body
        const works = new Work({  company, regionV, description, direction })
        await works.save()
        res.redirect('/admin/works')
    } catch (error) {
        next(error)
    }
}