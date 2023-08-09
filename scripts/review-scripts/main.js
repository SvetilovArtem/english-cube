const orderModal = document.querySelector('.order-modal')
const submitBtn = orderModal.querySelector('.primary-btn')
const closeBtns = document.querySelectorAll('.close-button')
const overlayOrderModal = document.querySelector('.overlay')

const headerNav = document.querySelector('.header-nav')
const orderButton = headerNav.querySelector('.primary-btn')

const thanksModal = document.querySelector('.thanks-modal')
const thanksModalText = thanksModal.querySelector('.thanks-modal__text')

const footer = document.querySelector('#footer')
const footerOrderButton = footer.querySelector('.primary-btn')

const mFooter = document.querySelector('.footer--mobile')
const mFooterOrderButton = mFooter.querySelector('.primary-btn')

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        orderModal.classList.remove('order-modal--active')
        overlayOrderModal.classList.remove('overlay--active')
        thanksModal.classList.remove('thanks-modal--active')
    })
})

orderButton.addEventListener('click', () => {
    orderModal.classList.toggle('order-modal--active')
    overlayOrderModal.classList.toggle('overlay--active')
})

submitBtn.addEventListener('click', () => {
    orderModal.classList.toggle('order-modal--active')
    thanksModal.classList.toggle('thanks-modal--active')
    thanksModalText.innerHTML = 'Ваша заявка принята!'

    setTimeout(() => {
        overlayOrderModal.classList.remove('overlay--active')
        thanksModal.classList.remove('thanks-modal--active')
    }, 6000)
    

})

footerOrderButton.addEventListener('click', () => {
    orderModal.classList.toggle('order-modal--active')
    overlayOrderModal.classList.toggle('overlay--active')
    console.log('click')
})
mFooterOrderButton.addEventListener('click', () => {
    orderModal.classList.toggle('order-modal--active')
    overlayOrderModal.classList.toggle('overlay--active')
    console.log('click')
})


// Menu for mobile
const burgerBtn = document.querySelector('.menu-btn')
const menuHidden = document.querySelector('.menu-hidden')
const mHeader = document.querySelector('.header-wrapper__mobile')
const mOrderButton = menuHidden.querySelector('.primary-btn')

const menuHiddenItems = document.querySelectorAll('.menu-hidden__link')

menuHiddenItems.forEach(item => {
    item.href = 'file:///d%3A/Dev/others/HTML-CSS/vtop3/english-cube/index.html'
    item.addEventListener('click', (e) => {
        menuHidden.classList.toggle('menu-hidden--active')
    })
})

burgerBtn.addEventListener('click', () => {
    // mHeader.style.position === 'fixed' ? mHeader.style.position = 'static' : mHeader.style.position = 'fixed'
    menuHidden.classList.toggle('menu-hidden--active')
})
mOrderButton.addEventListener('click', () => {
    orderModal.classList.toggle('order-modal--active')
    overlayOrderModal.classList.toggle('overlay--active')
})

// REVIEWS LIST

const reviewsData = [
    {
        id: 1,
        reviewer: 'Ярошевич Марина',
        child: 'Сын Ярошевич Арсений (9 лет)',
        text: 'Посещаем студию English cube c большим удовольствием. Нравится как проходит процесс обучения, дети на уроках много играют, но самое главное во время игры — запоминают новые слова. Годовая оценка в школе — 9! Ребёнок с удовольствием ходит на занятия и самостоятельно справляется с домашними заданиями в школе',
        rating: 5,
        answer: 'Спасибо большое, что выбрали нашу студию английского языка для детей!'
    },
    {
        id: 2,
        reviewer: 'Казакевич Марина',
        child: 'Сын Казакевич Владислав (8 лет)',
        text: 'Занимаемся английским языком в студии English Cube! У преподавателя Маргариты очень интересный и творческий подход к обучению! Ребёнок всегда с радостью бежит на занятия!',
        rating: 5,
        answer: 'Спасибо большое, что выбрали нашу студию английского языка для детей!'
    },
    {
        id: 3,
        reviewer: 'Василевская Ирина',
        child: 'Дочь Василевская Милана (7 лет)',
        text: 'Лучшая студия английского языка в Минске! Профессиональные педагоги, игровая методика, подарки детям за хорошую учёбу! А главное — виден результат, ребёнок читает, знает много слов, строит простые предложения и всегда бежит на занятия',
        rating: 5,
        answer: 'Спасибо большое, что выбрали нашу студию английского языка для детей!'
    },
    {
        id: 4,
        reviewer: 'Василевская Ирина',
        child: 'Дочь Василевская Милана (7 лет)',
        text: 'Лучшая студия английского языка в Минске! Профессиональные педагоги, игровая методика, подарки детям за хорошую учёбу! А главное — виден результат, ребёнок читает, знает много слов, строит простые предложения и всегда бежит на занятия',
        rating: 5,
        answer: 'Спасибо большое, что выбрали нашу студию английского языка для детей!'
    },
]

const reviews = document.querySelector('.reviews-list')
const reviewItemAll = document.querySelectorAll('.review-item')

function createReviewCard(authorName, authorChild, authorText, rating, answer) {
    const name = document.createElement('div')
    name.classList.add('name')
    name.innerHTML = authorName

    const child = document.createElement('div')
    child.classList.add('child')
    child.innerHTML = authorChild

    const info = document.createElement('div')
    info.classList.add('info')
    info.appendChild(name)
    info.appendChild(child)

    const  avatar = document.createElement('div')
    avatar.classList.add('avatar')
    const numImg = Math.round(Math.random() * 2) + 1

    let backgroundImg = `url(./icons/main-page/photo-frame.svg), url(./icons/main-page/reviewer-${numImg}.svg)`
    avatar.style.backgroundImage = backgroundImg

    const author = document.createElement('div')
    author.classList.add('author')
    author.appendChild(avatar)
    author.appendChild(info)

    const reviewerTextPar = document.createElement('div')
    reviewerTextPar.classList.add('reviewer-text__par')
    reviewerTextPar.innerHTML = authorText

    const reviewerRating = document.createElement('div')
    reviewerRating.classList.add('reviewer-rating')
    const star = document.createElement('span')
    star.classList.add('material-symbols-rounded')
    for(let i = 0; i < rating; i++) {
        reviewerRating.appendChild((star))
    }

    const text = document.createElement('div')
    text.classList.add('text')
    text.appendChild(reviewerTextPar)
    text.appendChild(reviewerRating)

    const reviewContent = document.createElement('div')
    reviewContent.classList.add('review-content')
    reviewContent.appendChild(author)
    reviewContent.appendChild(text)

    const reviewItem = document.createElement('div')

    // ANSWER
    const reviewAnswer = document.createElement('div')
    reviewAnswer.classList.add('review-answer')

    const nameAns = document.createElement('div')
    nameAns.classList.add('name')
    nameAns.innerHTML = 'English Cube'

    const childAns = document.createElement('div')
    childAns.classList.add('child')
    childAns.innerHTML = 'Ответ представителя'

    const infoAns = document.createElement('div')
    infoAns.classList.add('info')
    infoAns.appendChild(nameAns)
    infoAns.appendChild(childAns)

    const  avatarAns = document.createElement('div')
    avatarAns.classList.add('avatar')
    avatarAns.style.backgroundImage = 'url(./icons/main-page/photo-frame.svg), url(./icons/main-page/english-cube-logo.svg)'

    const authorAns = document.createElement('div')
    authorAns.classList.add('author')
    authorAns.appendChild(avatarAns)
    authorAns.appendChild(infoAns)

    const textAns = document.createElement('div')
    textAns.classList.add('text')
    textAns.innerHTML = answer

    reviewAnswer.appendChild(authorAns)
    reviewAnswer.appendChild(textAns)
    reviewItem.classList.add('review-item')

    reviewItem.appendChild(reviewContent)
    reviewItem.appendChild((reviewAnswer))

    return reviewItem
}
reviewsData.forEach(r => {
    const reviewCard = createReviewCard(r.reviewer, r.child, r.text, r.rating, r.answer)
    console.log(reviewCard)
    reviews.appendChild(reviewCard)
})