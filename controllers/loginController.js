const User = require('../models/userModel')

exports.getLogin = async (req,res)=>{
    try{
        const user = await User.find()
        res.render('login/login', {user})
    } catch (err){
        console.log(err)
    }
}

exports.postLogin = async (req,res)=>{
    const {iin, phone, email} = req.body
    try{
        if (!iin || !phone || !email) {
            res
                .status(400)
                .json({ success: false, message: "Please provide iin, phone and email" })
            return
        }
        const user = await User.findOne({ iin, phone, email })
        // Облыс
        if (iin === '021229650876' && email === 'igenberdievass@mail.ru' && phone === '87007364008') {

            res.cookie('auth', 'true', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Семей
        else if(iin ==='000114550425' && email === 'Naimanchik00@mail.ru' && phone === '87711792252'){
            res.cookie('auth', 'semey', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Курчатов
        else if(iin ==='900119300580' && email === 'zhumabek19019@gmail.com' && phone === '87475225088'){
            res.cookie('auth', 'kurchatov', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Абай
        else if(iin ==='890830400092' && email === 'abai_zhastar@mail.ru' && phone === '87021137937'){
            res.cookie('auth', 'abai', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Аксуат
        else if(iin ==='021209551228' && email === 'a.k.m.007.kz@gmail.com' && phone === '87472459041'){
            res.cookie('auth', 'aksuat', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Аягоз
        else if(iin ==='960815350521' && email === 'mc6vko@mail.ru' && phone === '87079660869'){
            res.cookie('auth', 'ayagoz', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Бородулиха
        else if(iin ==='030416550462' && email === 'morgan19972007@gmail.com' && phone === '87076224240'){
            res.cookie('auth', 'borodulikha', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Бескарагай
        else if(iin ==='860711400723' && email === 'bzhastar@mail.ru' && phone === '87778589571'){
            res.cookie('auth', 'beskaragai', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Кокпекти
        else if(iin ==='020507651211' && email === 'gulimay02@gmail.com' && phone === '87052609138'){
            res.cookie('auth', 'kokpekti', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Жарма
        else if(iin ==='990421450303' && email === 'di.kabdulina@mail.ru' && phone === '87079971285'){
            res.cookie('auth', 'zharma', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        // Уржар
        else if(iin ==='001227651040' && email === 'urzharjastary@mail.ru' && phone === '87026527193'){
            res.cookie('auth', 'urzhar', { maxAge: 900000 })

            res.redirect('/admin/users')
        }
        else {
            res.redirect('/login', { error: 'Неверные учетные данные' })
        }
    } catch (err){
        console.log(err)
    }
}

exports.Logout = async (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
}