const employedCountElement = document.getElementById('employed-count');
const unemployedCountElement = document.getElementById('unemployed-count');
const totalCountElement = document.getElementById('total-count');

let chart = null;
const dataObject = {
    'button-abay-area': { employedCount: 182533, unemployedCount: 2306, totalCount: 184839 },
    'button-semei': { employedCount: 88570, unemployedCount: 1217, totalCount: 89787 },
    'button-kurchatov': { employedCount: 3008, unemployedCount: 4, totalCount: 3012 },
    'button-abai': { employedCount: 4160, unemployedCount: 15, totalCount: 4175 },
    'button-aksuat': { employedCount: 4133, unemployedCount: 208, totalCount: 4341 },
    'button-ayagoz': { employedCount: 37584, unemployedCount: 89, totalCount: 37673 },
    'button-borodulikha': { employedCount: 8477, unemployedCount: 588, totalCount: 9065 },
    'button-beskara': { employedCount: 5375, unemployedCount: 32, totalCount: 5407 },
    'button-kokpekti': { employedCount: 2277, unemployedCount: 32, totalCount: 2309 },
    'button-jarmin': { employedCount: 10387, unemployedCount: 17, totalCount: 10404 },
    'button-urdjar': { employedCount: 18562, unemployedCount: 104, totalCount: 18666 }
};

function updateChart(data) {
    const totalCount = parseInt(data.totalCount);
    const employedCount = parseInt(data.employedCount);
    const unemployedCount = parseInt(data.unemployedCount);

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById('chart').getContext('2d');
    let chartData = null;

    if (employedCount === 0 && unemployedCount === 0) {
        chartData = {
            labels: [i18next.t('no-data')],
            datasets: [{
                data: [1],
                backgroundColor: ['#cccccc']
            }]
        };
    } else {
        chartData = {
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
        data: chartData,
        options: options
    });
}

function buttonClickHandler(event) {
    const buttonId = event.target.id;
    const data = dataObject[buttonId];

    if (data) {
        employedCountElement.textContent = data.employedCount;
        unemployedCountElement.textContent = data.unemployedCount;
        totalCountElement.textContent = data.totalCount;

        updateChart(data);
    } else {
        console.error('Data not found for button:', buttonId);
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
buttonClickHandler({ target: abayAreaButton });

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
            } else{
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