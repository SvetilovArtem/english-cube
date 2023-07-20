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

const cubes = document.querySelectorAll('.programs-card')
const enrollModal = document.querySelector('.enroll-modal')
const enrollSubmitBtn = enrollModal.querySelector('.primary-btn')

enrollSubmitBtn.addEventListener('click', () => {
    enrollModal.classList.toggle('enroll-modal--active')
    thanksModal.classList.toggle('thanks-modal--active')
    thanksModalText.innerHTML = 'Ваша заявка принята!'

    setTimeout(() => {
        overlayOrderModal.classList.remove('overlay--active')
        thanksModal.classList.remove('thanks-modal--active')
    }, 6000)
})
cubes.forEach((cube, index) => {
    const enrollButtons = cube.querySelectorAll('.blue-btn')
    const programs = cube.querySelectorAll('.programs-card__title')
    const programAppointments = cube.querySelectorAll('.programs-card__text')
    const programsForms = cube.querySelectorAll('.programs-forms__name')
    enrollButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const programName = document.querySelector('.program-name')
            const programNameTitle = document.querySelector('.program-name__title')
            const programNameGroup = document.querySelector('.program-name__group')
            const overlay = document.querySelector('.overlay')

            programName.innerHTML = programs[0]?.textContent
            programNameTitle.innerHTML = programAppointments[0]?.textContent
            programNameGroup.innerHTML = programsForms[index]?.textContent
            enrollModal.classList.toggle('enroll-modal--active')
            overlay.classList.toggle('overlay--active')
        })
    })
    const closeButton = enrollModal.querySelector('.close-button')
    closeButton.addEventListener('click', () => {
        overlayOrderModal.classList.remove('overlay--active')
        enrollModal.classList.remove('enroll-modal--active')
    })
})

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
})

// Menu for mobile
const burgerBtn = document.querySelector('.menu-btn')
const menuHidden = document.querySelector('.menu-hidden')
const mHeader = document.querySelector('.header-wrapper__mobile')
const mOrderButton = menuHidden.querySelector('.primary-btn')

const menuHiddenItems = document.querySelectorAll('.menu-hidden__link')

menuHiddenItems.forEach(item => {
    item.addEventListener('click', () => {
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

// Unroll course
const connectionForm = document.querySelector('.connection-form')
const connectionSubmitButton = connectionForm.querySelector('.primary-btn')

connectionSubmitButton.addEventListener('click', () => {
    thanksModal.classList.toggle('thanks-modal--active')
    overlayOrderModal.classList.toggle('overlay--active')
    thanksModalText.innerHTML = 'Ваша заявка принята!'

    setTimeout(() => {
        thanksModal.classList.remove('thanks-modal--active')
        overlayOrderModal.classList.remove('overlay--active')
    }, 1500)
})