export function modal() {
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