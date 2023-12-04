document.addEventListener('DOMContentLoaded', function () {
    let itemsPerPage = 5;
    let currentPage = 1;
    let jobList = Array.from(document.getElementsByClassName('job'));

    function showItemsOnPage(page) {
        let startIndex = (page - 1) * itemsPerPage;
        let endIndex = startIndex + itemsPerPage;

        for (let i = 0; i < jobList.length; i++) {
            jobList[i].style.display = 'none';
        }

        for (let j = startIndex; j < endIndex; j++) {
            if (jobList[j]) {
                jobList[j].style.display = 'block';
            }
        }
    }

    function generatePagination() {
        let totalPages = Math.ceil(jobList.length / itemsPerPage);
        let paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            let pageButton = document.createElement('span');
            pageButton.textContent = i;

            if (i === currentPage) {
                pageButton.classList.add('active');
            }

            pageButton.addEventListener('click', function() {
                currentPage = parseInt(this.textContent);
                showItemsOnPage(currentPage);
                generatePagination();
                window.scrollTo(0, 0);
            });

            paginationContainer.appendChild(pageButton);
        }
    }

    generatePagination();
    showItemsOnPage(currentPage);

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

    function updateJobList() {
        jobList = Array.from(document.getElementsByClassName('job'));
        generatePagination();
        showItemsOnPage(currentPage);
    }

     function filterJobs() {
        const searchCompany = document.querySelector('#search-company').value.toLowerCase();
        const searchDirection = document.querySelector('#search-direction').value.toLowerCase();
        const searchDescription = document.querySelector('#search-description').value.toLowerCase();
        const jobs = Array.from(document.querySelectorAll('.job'));

        jobs.forEach(job => {
            const company = job.querySelector('.job__company').textContent.toLowerCase();
            const direction = job.querySelector('.job__direction').textContent.toLowerCase();
            const description = job.querySelector('.job__description').textContent.toLowerCase();


            if (company.includes(searchCompany) &&
                direction.includes(searchDirection) &&
                description.includes(searchDescription)) {
                job.style.display = 'block';
                console.log('asd')
            } else {
                job.style.display = 'none';
            }
        });

        updateJobList();
    }

    async function getJobs() {
        try {
            const response = await fetch('http://localhost:4000/api/vacancies');
             const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getData() {
        const jobs = await getJobs();
        const jobContainer = document.getElementById('jobcontainer');
        jobContainer.innerHTML = '';

        // <div class="job">
        //     className class="job__direction-coclassName">
        //     <h3 class="job__direction">
        //         <className                <h5 class="job__company"></hclassName</div>
        // <h4 class="job__description" className>
        //     <p class="job__date"></p>
        //     className </div>
        jobs.forEach(job => {
            const jobList = document.createElement('div');
            jobList.classList.add('job');

            const jobDirectionCompany = document.createElement("div");
            jobDirectionCompany.classList.add('job__direction-company');

            const direction = document.createElement('h3');
            direction.textContent = job.direction;
            direction.classList.add('job__direction');

            const company = document.createElement('h5');
            company.textContent = job.company;
            company.classList.add('job__company');

            const description = document.createElement('h4');
            description.textContent = job.regionV;
            description.classList.add('job__description');



            const date = document.createElement('p');
            const createdAt = new Date(job.createdAt);
            const day = String(createdAt.getDate()).padStart(2, '0');
            const month = String(createdAt.getMonth() + 1).padStart(2, '0');
            const year = createdAt.getFullYear();
            const formattedDate = `${day}.${month}.${year}`;
            date.textContent = formattedDate;
            date.classList.add('job__date');

            jobDirectionCompany.appendChild(direction);
            jobDirectionCompany.appendChild(company);
            jobList.appendChild(jobDirectionCompany);
            jobList.appendChild(description);
            jobList.appendChild(date);
            jobContainer.appendChild(jobList);
        });

        updateJobList();
    }

    async function sortJobs() {
        const sortSelect = document.querySelector('#sort-select');
        const sortValue = sortSelect.value;
        const jobsContainer = document.querySelector('.job-list');
        const jobs = Array.from(jobsContainer.querySelectorAll('.job'));

        jobs.sort((a, b) => {
            const aText = a.querySelector('.job__description').textContent.toLowerCase();
            const bText = b.querySelector('.job__description').textContent.toLowerCase();
            const aDate = a.querySelector('.job__date').textContent;
            const bDate = b.querySelector('.job__date').textContent;

            if (sortValue === 'asc') {
                return aText.localeCompare(bText);
            } else if (sortValue === 'desc') {
                return bText.localeCompare(aText);
            } else if (sortValue === 'dateAsc') {
                return new Date(aDate) - new Date(bDate);
            } else if (sortValue === 'dateDesc') {
                return new Date(bDate) - new Date(aDate);
            }
        });

        jobs.forEach(job => {
            jobsContainer.appendChild(job);
        });

        updateJobList();
    }

    document.querySelector('.filters__search-btn').addEventListener('click', function () {
        filterJobs();
        sortJobs();
    });

    getData();
});

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