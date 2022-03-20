function tabs() {
    const tabButtons = document.querySelectorAll('.design-list__item')
    const tabDescription = document.querySelectorAll('.design__descr')
    const designImages = document.querySelectorAll('.design-images')
    const featureImg = document.querySelectorAll('.design-block__img')
    const designTitle = document.querySelectorAll('.design__title')
    const changeContent = (array, value) => {
        array.forEach((elem) => {
            if (elem.dataset.tabsField === value) {

                elem.classList.remove('hidden')
            } else {
                elem.classList.add('hidden')
            }
        })
    }

    tabButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', (event) => {
            const dataValue = tabButton.dataset.tabsHandler
            changeContent(designImages, dataValue)
            changeContent(tabDescription, dataValue)
            changeContent(featureImg, dataValue)
            changeContent(designTitle, dataValue)

            tabButtons.forEach((btn) => {
                if (btn === event.target) {
                    btn.classList.add('design-list__item_active');
                } else {
                    btn.classList.remove('design-list__item_active');
                }
            })
        })
    })
}
tabs();
function smothScroll(){
const links = document.querySelectorAll('.menu-list__link, .main__scroll')
const btnTest = document.querySelector('.main__button')
const allLinks = [...links, btnTest]
allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const id = link.getAttribute('href').substring(1)
        const section = document.getElementById(id)
        if  (section) {
            // section.scrollIntoView({
            //     block: 'start',
            //     behavior: 'smooth',
            // })
            seamless.scrollIntoView(section, {   //https://github.com/magic-akari/seamless-scroll-polyfill
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })
})
}
smothScroll();

function modal() {
    const modalBtn = document.querySelectorAll('.more')
    const modal = document.querySelector('.modal')
    const overlay = modal.querySelector('.overlay')
    const modalClose = document.querySelector('.modal__close')
    modalBtn.forEach((mBtn) => {
        mBtn.addEventListener('click', () => {
            modal.classList.remove('hidden')
        })
    })
    overlay.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
    modalClose.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
}

modal();

function menuBurger() {
    const burger = document.querySelector('.humburger-menu')
    const menu = document.querySelector('.menu')
    const menuLinks = menu.querySelectorAll('.menu-list__item')
    burger.addEventListener('click', () => {
        menu.classList.add('menu-active')
    })
    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('menu-active')
        })
    })
    document.addEventListener('click', (event) => {
        if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu')))
            menu.classList.remove('menu-active')

    })
}
menuBurger();

function accordeon() {
    const accordeon = document.querySelector('.feature-list')
    const accordeonBtns = accordeon.querySelectorAll('.feature__link')
    accordeonBtns.forEach((button) => {
        button.addEventListener('click', () => {
            accordeonBtns.forEach((btn) => {
                if(button !== btn ) {
                btn.classList.remove('.feature__link_active')
                btn.nextElementSibling.classList.add('hidden')
                  }
            })
            button.classList.toggle('feature__link_active')
            button.nextElementSibling.classList.toggle('hidden')
        })
    })
}
accordeon();
