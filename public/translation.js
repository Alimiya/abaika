    document.addEventListener("DOMContentLoaded", () => {
    if (!i18next.isInitialized) {
        i18next.init({
            lng: 'kz',
            debug: true,
            resources: {
                kz: {
                    translation: {
                        "sure__vacancy__link":"Сіз бұл вакансияны өшіргіңіз келетініне сенімдісіз бе?",
                        "delete__vacancy__link":"Вакансияны өшіру",
                        "sure__user__link":"Сіз бұл пайдаланушыны өшіргіңіз келетініне сенімдісіз бе?",
                        "delete__user__link":"Пайдаланушыны өшіру",
                        "add__vacancy":"Вакансияны қосу",
                        "add__link":"Пайдаланушыны қосу",
                        "save__link":"Сақтау",
                        "clouse__link":"Жабу",
                        "company__link":"Компания",
                        "id__link":"ID",
                        "status__link":"Статус",
                        "admin__link":"Админ",
                        "actions__link":"Әрекеттер",
                        "description__link":"Сипаттама",
                        "direction__link":"Бағыт",
                        "date__link":"Жасалу күні",
                        "iin__link":"ИИН",
                        "surname__link":"Тегі",
                        "name__link":"Аты",
                        "lastname__link":"Әкесінің Аты",
                        "region__link":"Аудан",
                        "email__link":"Пошта",
                        "phone__number__link":"Телефон Нөмірі",
                        "main__admin":"Басты бет",
                        "logout__link":"Шығу",
                        "edit__modal":"Өзгерту",
                        "add__modal":"Қосу",
                        "delete__modal":"Өшіру",
                        "button__vacancies":"Вакансиялар",
                        "button__users":"Пайдаланушылар",
                        "no-data":"Ақпарат жоқ",
                        "job-link": "Жұмыс",
                        "statistics-link": "Статистика",
                        "login-link": "Кіру",
                        "language-switch-link": "Орысша",
                        "general-population-title": "Жалпы жастар саны",
                        "employed-population-title": "Жұмыспен қамтылған жастар",
                        "unemployed-population-title": "Жұмыссыз жастар",
                        "area-title": "Абай облысы",
                        "content__title": "«NEET санатындағы жастармен жұмыс» әлеуметтік жобасы",
                        "filter__item-input-company": "Компания бойынша іздеу",
                        "filter__item-input-direction": "Бағыт бойынша іздеу",
                        "filter__item-input-description": "Аудан бойынша іздеу",
                        "filters__search-btn": "Іздеу",
                        "sort-select__default-option": "Сұрыптау",
                        "sort-select__alphabetically": "А-дан Я-ға дейін",
                        "sort-select__inverse-alphabetically": "Я-дан А-ға дейін",
                        "footer__btn": "Аудан бойынша",
                        "sort-select__ascending-date": "Алғашқы жұмыстар бойынша сұрыптау",
                        "sort-select__descending-date": "Соңғы жұмыстар бойынша сұрыптау",
                        "footer__communication": "Байланыс:",
                        "input-iin": "ЖСН",
                        "input-email": "Электрондық пошта",
                        "input-phone": "Телефон нөмірі",
                        "login-container__title": "Кіру",
                        "enter-btn": "Кіру",
                        "button-semei": "Семей",
                        "button-kurchatov": "Курчатов",
                        "button-abai": "Абай",
                        "button-aksuat": "Ақсуат",
                        "button-ayagoz": "Аягөз",
                        "button-borodulikha": "Бородулиха",
                        "button-beskara": "Бесқарағай",
                        "button-kokpekti": "Көкпекті",
                        "button-jarmin": "Жарма",
                        "button-urdjar": "Үржар",
                    }
                },
                ru: {
                    translation: {
                        "delete__vacancy__link":"Удалить вакансию",
                        "sure__user__link":"Вы уверены что хотите удалить пользователя?",
                        "sure__vacancy__link":"Вы уверены что хотите удалить вакансию?",
                        "delete__user__link":"Удалить пользователя",
                        "add__vacancy":"Добавить вакансию",
                        "add__link":"Добавить пользователя",
                        "save__link":"Сохранить",
                        "clouse__link":"Закрыть",
                        "company__link":"Компания",
                        "id__link":"ID",
                        "status__link":"Статус",
                        "admin__link":"Админ",
                        "actions__link":"Действия",
                        "description__link":"Описание",
                        "direction__link":"Направление",
                        "date__link":"Дата",
                        "iin__link":"ИИН",
                        "surname__link":"Фамилия",
                        "name__link":"Имя",
                        "lastname__link":"Отчество",
                        "region__link":"Регион",
                        "email__link":"Почта",
                        "phone__number__link":"Телефонный номер",
                        "main__admin":"Главная",
                        "logout__link":"Выйти",
                        "edit__modal":"Изменить",
                        "add__modal":"Добавить",
                        "delete__modal":"Удалить",
                        "button__vacancies":"Вакансии",
                        "button__users":"Пользователи",
                        "no-data":"Нет данных",
                        "job-link": "Работа",
                        "statistics-link": "Статистика",
                        "login-link": "Вход",
                        "language-switch-link": "Казахский",
                        "general-population-title": "Общая численность молодежи",
                        "employed-population-title": "Рабочая молодежь",
                        "unemployed-population-title": "Безработная молодежь",
                        "area-title": "Абайская область",
                        "content__title": "Социальный проект «Работа с молодежью категории NEET»",
                        "filter__item-input-company": "Поиск по компании",
                        "filter__item-input-direction": "Поиск по направлению",
                        "filter__item-input-description": "Поиск по региону",
                        "filters__search-btn": "Поиск",
                        "sort-select__default-option": "Сортировка",
                        "sort-select__alphabetically": "От А до Я",
                        "sort-select__inverse-alphabetically": "От Я до А",
                        "sort-select__ascending-date": "Сортировка по возрастающей дате создания",
                        "sort-select__descending-date": "Сортировка по убывающей дате создания",
                        "footer__btn": "По регионам",
                        "footer__communication": "Контакты:",
                        "input-iin": "ИИН",
                        "input-email": "Электронная почта",
                        "input-phone": "Номер телефона",
                        "login-container__title": "Вход",
                        "enter-btn": "Вход",
                        "button-semei": "Семей",
                        "button-kurchatov": "Курчатов",
                        "button-abai": "Абай",
                        "button-aksuat": "Аксуат",
                        "button-ayagoz": "Аягоз",
                        "button-borodulikha": "Бородулиха",
                        "button-beskara": "Бескарагай",
                        "button-kokpekti": "Кокпекти",
                        "button-jarmin": "Жармин",
                        "button-urdjar": "Урджар",
                    }
                }
            }
        }, function (err) {
            if (err) return console.error(err);

            updateTranslations();
        });
    } else {
        updateTranslations();
    }

    function changeLanguage() {
        const currentLanguage = i18next.language;
        const newLanguage = currentLanguage === 'kz' ? 'ru' : 'kz';

        i18next.changeLanguage(newLanguage, function (err, t) {
            if (err) return console.error(err);

            updateTranslations();
        });
    }

    function updateTranslations() {
        const elementsWithTranslation = document.querySelectorAll('[data-i18n]');
        elementsWithTranslation.forEach(element => {
            const translationKey = element.getAttribute('data-i18n');
            element.textContent = i18next.t(translationKey);
        });
        const navbarLinks = document.querySelectorAll('a');
        navbarLinks.forEach(navbarLink => {
            const translationNavbarLinks = navbarLink.getAttribute('data-i18n');
            navbarLink.textContent = i18next.t(translationNavbarLinks);
        });

        if (window.location.pathname === '/statistics') {
            document.querySelector('.content__title').textContent = i18next.t('content__title');
            const populationTitles = document.querySelectorAll('h2');
            populationTitles.forEach(populationTitle => {
                const translationPopulationTitles = populationTitle.getAttribute('data-i18n');
                populationTitle.textContent = i18next.t(translationPopulationTitles);
            });

            document.querySelector('.area__title-button').textContent = i18next.t('area-title');
            document.querySelector('.footer__communication').textContent = i18next.t('footer__communication');
            document.querySelector('.footer__btn').textContent = i18next.t('footer__btn');
            document.getElementById('button-semei').textContent = i18next.t('button-semei');
            document.getElementById('button-kurchatov').textContent = i18next.t('button-kurchatov');
            document.getElementById('button-abai').textContent = i18next.t('button-abai');
            document.getElementById('button-aksuat').textContent = i18next.t('button-aksuat');
            document.getElementById('button-ayagoz').textContent = i18next.t('button-ayagoz');
            document.getElementById('button-borodulikha').textContent = i18next.t('button-borodulikha');
            document.getElementById('button-beskara').textContent = i18next.t('button-beskara');
            document.getElementById('button-kokpekti').textContent = i18next.t('button-kokpekti');
            document.getElementById('button-jarmin').textContent = i18next.t('button-jarmin');
            document.getElementById('button-urdjar').textContent = i18next.t('button-urdjar');
        }

        if (window.location.pathname === '/') {
            document.querySelector('.content__title').textContent = i18next.t('content__title');

            const inputCompany = document.querySelector('.filter__item-input-company');
            inputCompany.placeholder = i18next.t('filter__item-input-company');

            const inputDirection = document.querySelector('.filter__item-input-direction');
            inputDirection.placeholder = i18next.t('filter__item-input-direction');

            const inputDescription = document.querySelector('.filter__item-input-description');
            inputDescription.placeholder = i18next.t('filter__item-input-description');

            document.querySelector('.sort-select__default-option').textContent = i18next.t('sort-select__default-option');
            document.querySelector('.sort-select__alphabetically').textContent = i18next.t('sort-select__alphabetically');
            document.querySelector('.sort-select__inverse-alphabetically').textContent = i18next.t('sort-select__inverse-alphabetically');
            document.querySelector('.sort-select__ascending-date').textContent = i18next.t('sort-select__ascending-date');
            document.querySelector('.sort-select__descending-date').textContent = i18next.t('sort-select__descending-date');

            document.querySelector('.footer__communication').textContent = i18next.t('footer__communication');
            document.querySelector('.filters__search-btn').textContent = i18next.t('filters__search-btn');
            document.querySelector('.footer__btn').textContent = i18next.t('footer__btn');
        }

        if (window.location.pathname === '/login') {
            document.querySelector('.login-container__title').textContent = i18next.t('login-container__title');

            const inputIin = document.querySelector('.input-iin');
            inputIin.placeholder = i18next.t('input-iin');

            const inputEmail = document.querySelector('.input-email');
            inputEmail.placeholder = i18next.t('input-email');

            const inputPhone = document.querySelector('.input-phone');
            inputPhone.placeholder = i18next.t('input-phone');

            const enterBtn = document.querySelector('.enter-btn');
            enterBtn.value = i18next.t('enter-btn');

            document.querySelector('.footer__communication').textContent = i18next.t('footer__communication');
            document.querySelector('.footer__btn').textContent = i18next.t('footer__btn');
        }
    }

    if(window.location.pathname==='/admin/users'){

        const thLinks = document.querySelectorAll('th');
        thLinks.forEach(thLink => {
            const translationNavbarLinks = thLink.getAttribute('data-i18n');
            thLink.textContent = i18next.t(translationNavbarLinks);
        });
        const buttonLinks = document.querySelectorAll('button');
        buttonLinks.forEach(buttonLink => {
            const translationNavbarLinks = buttonLink.getAttribute('data-i18n');
            buttonLink.textContent = i18next.t(translationNavbarLinks);
        });
    }

    if(window.location.pathname==='/admin/works'){
        const thLinks = document.querySelectorAll('th');
        thLinks.forEach(thLink => {
            const translationNavbarLinks = thLink.getAttribute('data-i18n');
            thLink.textContent = i18next.t(translationNavbarLinks);
        });
        const buttonLinks = document.querySelectorAll('button');
        buttonLinks.forEach(buttonLink => {
            const translationNavbarLinks = buttonLink.getAttribute('data-i18n');
            buttonLink.textContent = i18next.t(translationNavbarLinks);
        });
    }

    function getLanguageNavbar() {
        const languageSwitch = document.querySelector('.navbar__item-language-switch');
        languageSwitch.addEventListener("click", () => {
            changeLanguage();
        });
    }

    getLanguageNavbar();
});

