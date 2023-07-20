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

