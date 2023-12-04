const iinInput = document.getElementById('iin');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const loginForm = document.getElementById('login-form');
const errorContainer = document.getElementById('error-container');

const iinRegex = /^\d{12}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneRegex = /^(\+7|8)\d{10}$/;

loginForm.addEventListener('submit',  function (event) {
    event.preventDefault();

    const iinValue = iinInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    clearError();

    const isIINValid = iinRegex.test(iinValue);
    const isEmailValid = emailRegex.test(emailValue);
    const isPhoneValid = phoneRegex.test(phoneValue);

    if (!isIINValid) {
        iinInput.classList.add('error');
    }

    if (!isEmailValid) {
        emailInput.classList.add('error');
    }

    if (!isPhoneValid) {
        phoneInput.classList.add('error');
    }

    if (!isIINValid || !isEmailValid || !isPhoneValid) {
        showError();
    }

    if (isIINValid && isEmailValid && isPhoneValid) {
        console.log('Данные формы валидны. Можно выполнять отправку...');
        axios.post('http://localhost:4000/login', {
            iin: iinValue,
            email: emailValue,
            phone: phoneValue
        });
        window.location.href='/admin/users'
    }
});

function clearError() {
    errorContainer.textContent = '';

    const inputElements = loginForm.querySelectorAll('input');
    inputElements.forEach(function(inputElement) {
        inputElement.classList.remove('error');
    });
}

function showError() {
    errorContainer.textContent = 'Некорректный ввод.';
}

let path = window.location.pathname;
let currentPagePath = path.split("/").pop();
const navbarLinks = document.querySelectorAll(".navbar a");

for (let i = 0; i < navbarLinks.length; i++) {
    let link = navbarLinks[i];
    let href = link.getAttribute("href");

    if (href.indexOf(currentPagePath) !== -1) {
        link.classList.add("active");
        break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/login/linktext') // Получаем текст ссылки с сервера
        .then(response => response.json())
        .then(data => {
            const navbarRight = document.querySelector('.navbar-right')
            const loginLink = document.createElement('a')
            const adminLink = document.createElement('a')

            loginLink.setAttribute('data-i18n', "login-link")
            loginLink.href='/login'
            loginLink.setAttribute('id', "login-link")

            adminLink.setAttribute('data-i18n', "admin__link")
            adminLink.href='/admin/users'

            adminLink.textContent = 'Админ'

            loginLink.textContent = data.loginLinkText;

            if (data.loginLinkText === 'Кіру' || data.loginLinkText === 'Вход') {
                console.log(data.loginLinkText)
                console.log(loginLink)
                navbarRight.appendChild(loginLink)
            } else {
                navbarRight.appendChild(adminLink)
            }
        })
        .catch(error => {
            console.error('Ошибка при получении текста ссылки:', error);
        });
});

const button = document.querySelector('.footer__btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.modal__close');

button.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

