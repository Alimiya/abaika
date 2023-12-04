const mongoose = require('mongoose')

const vacancySchema = new mongoose.Schema({
    company: {type:String, required: true},
    regionV: {type: String, enum:['Абай','Аксуат','Аягоз','Бескарагай','Бородулиха','Жармин','Урджар','Кокпекти','Курчатов','Семей'], required:true},
    description:{type: String, required: true},
    direction:{type:String, required: true},
    createdAt: { type: Date, default: Date.now },
})

const VacancyModel = mongoose.model('VacancyModel', vacancySchema)

module.exports = VacancyModel