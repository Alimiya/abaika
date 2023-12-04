const employedCountElement = document.getElementById('employed-count');
const unemployedCountElement = document.getElementById('unemployed-count');
const totalCountElement = document.getElementById('total-count');

let chart = null;
const buttonUrls = {
    'button-semei': 'http://localhost:5000/api/users/semei',
    'button-abay-area': 'http://localhost:5000/api/users/abay',
    'button-kurchatov': 'http://localhost:5000/api/users/kurchatov',
    'button-abai': 'http://localhost:5000/api/users/abai',
    'button-aksuat': 'http://localhost:5000/api/users/aksuat',
    'button-ayagoz': 'http://localhost:5000/api/users/ayagoz',
    'button-borodulikha': 'http://localhost:5000/api/users/borodulikha',
    'button-beskara': 'http://localhost:5000/api/users/beskara',
    'button-kokpekti': 'http://localhost:5000/api/users/kokpekti',
    'button-jarmin': 'http://localhost:5000/api/users/jarmin',
    'button-urdjar': 'http://localhost:5000/api/users/urdjar'
};

function updateChart() {
    const totalCount = parseInt(totalCountElement.textContent)
    const employedCount = parseInt(employedCountElement.textContent);
    const unemployedCount = parseInt(unemployedCountElement.textContent);

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById('chart').getContext('2d');
    let data = null;

    if (employedCount === 0 && unemployedCount === 0) {
        data = {
            labels: [i18next.t('no-data')],
            datasets: [{
                data: [1],
                backgroundColor: ['#cccccc']
            }]
        };
    } else {
        data = {
            labels: [i18next.t('employed-population-title'),
                i18next.t('unemployed-population-title')],
            datasets: [{
                data: [employedCount, unemployedCount],
                backgroundColor: ['#354f52', '#900020']
            }]
        };
    }

    const options = {
        responsive: true
    };

    chart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
}

async function buttonClickHandler(event) {
    const buttonId = event.target.id;
    const apiUrl = buttonUrls[buttonId];

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)

        employedCountElement.textContent = data.employedCount;
        unemployedCountElement.textContent = data.unemployedCount;
        totalCountElement.textContent = data.totalCount;

        updateChart();
    } catch (error) {
        console.error('Ошибка при обновлении счетчиков:', error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', buttonClickHandler);
    });

    const abayButton = document.getElementById('button-abay-area');
    abayButton.addEventListener('click', buttonClickHandler);
});
const abayAreaButton = document.getElementById('button-abay-area');
buttonClickHandler({target: abayAreaButton});

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/login/linktext') // Получаем текст ссылки с сервера
        .then(response => response.json())
        .then(data => {
            const navbarRight = document.querySelector('.navbar-right')
            const loginLink = document.createElement('a')
            const adminLink = document.createElement('a')

            loginLink.setAttribute('data-i18n', "login-link")
            loginLink.href = '/login'
            loginLink.setAttribute('id', "login-link")

            adminLink.setAttribute('data-i18n', "admin__link")
            adminLink.href = '/admin/users'
            adminLink.textContent = 'Админ'

            loginLink.textContent = data.loginLinkText;

            if (data.loginLinkText === 'Кіру' || data.loginLinkText === 'Вход') {
                console.log(data.loginLinkText)
                console.log(loginLink)
                navbarRight.appendChild(loginLink)
            } else {
                console.log(data.loginLinkText)
                console.log(adminLink)
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

button.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});