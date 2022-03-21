export function smothScroll() {
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