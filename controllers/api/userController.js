const User = require('../../models/userModel')

// GET /users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { __v: 0})
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' })
    }
}

// GET /users/{id}
exports.getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id, { __v: 0 })
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' })
    }
}

// POST /users
exports.createUser = async (req, res) => {
    const { iin, name, surname, lastname, region, email, phone, status} = req.body
    try {
        const newUser = await User.create({
            iin,
            name,
            surname,
            lastname,
            region,
            email,
            phone,
            status
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' })
    }
}

// PUT /users/{id}
exports.updateUserById = async (req, res) => {
    const { id } = req.params
    const { iin, name, surname, lastname, region, email, phone, status} = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                iin,
                name,
                surname,
                lastname,
                region,
                email,
                phone,
                status
            },
            { new: true, projection: { __v: 0 } }
        )
        if (updatedUser) {
            res.json(updatedUser)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' })
    }
}

// DELETE /users/{id}
exports.deleteUserById = async (req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await User.findByIdAndDelete(id)
        if (deletedUser) {
            res.json({ message: 'User deleted successfully' })
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' })
    }
}

exports.getCounts = async (req, res) => {
    try {
        const employedCount = await User.countDocuments({ status: 'Есть работа' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный' });
        console.log(unemployedCount)
        res.json({ employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getNonAdminUsers = async (req, res) => {
    try {
        const users = await User.find({ status: { $ne: 'Админ' } }, { __v: 0})
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch non-admin users' })
    }
}

exports.getAbay = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'}})
        const employedCount = await User.countDocuments({ status: 'Есть работа' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный' });
        console.log(unemployedCount)
        res.json({ totalCount, employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getSemei = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Семей'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Семей' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Семей' });
        console.log(unemployedCount)
        res.json({ totalCount, employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getKurchatov = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Курчатов'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Курчатов' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Курчатов' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getAbai = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Абай'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Абай' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Абай' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getAksuat = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Аксуат'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Аксуат' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Аксуат' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getAyagoz = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Аягоз'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Аягоз' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Аягоз' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getBorodulikha = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Бородулиха'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Бородулиха' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Бородулиха' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getBeskaragai = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Бескарагай'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Бескарагай' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Бескарагай' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getKokpekti = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Кокпекти'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Кокпекти' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Кокпекти' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getZharmin = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Жармин'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Жармин' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Жармин' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getUrzhar = async (req, res) => {
    try {
        const totalCount = await User.countDocuments({status: { $ne: 'Админ'},region:'Урджар'})
        const employedCount = await User.countDocuments({ status: 'Есть работа', region:'Урджар' });
        console.log(employedCount)
        const unemployedCount = await User.countDocuments({ status: 'Безработный', region:'Урджар' });
        console.log(unemployedCount)
        res.json({ totalCount,employedCount, unemployedCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user counts' })
    }
}

exports.getLoginLinkText = (req, res) => {
    const isAuthenticated = !!req.cookies.auth;
    const loginLinkText = isAuthenticated ? 'Шығу' || 'Выйти' : 'Кіру' || 'Вход';
    res.json({ loginLinkText });
}