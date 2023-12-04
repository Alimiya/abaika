const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    iin: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    lastname: {type: String, required: true},
    region: {
        type: String,
        enum: ['Абай', 'Аксуат', 'Аягоз', 'Бескарагай', 'Бородулиха', 'Жармин', 'Урджар', 'Кокпекти', 'Курчатов', 'Семей'],
        required: true
    },
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true, unique: true},
    status: {type: String, enum: ['Есть работа', 'Безработный', 'Админ'], required: true}
})

const UserModel = mongoose.model('UserModel', userSchema)

module.exports = UserModel