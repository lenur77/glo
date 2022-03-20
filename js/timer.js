

const timerBlock = document.querySelector('.timer__time')
const timerText = document.querySelector('.timer__date')
let interval                                               
const updateClock = () => {
    const date = new Date().getTime()
    const deadline = ('31 march 2022')
    const dateDeadline = new Date(deadline).getTime()
    const timeRemind = (dateDeadline - date) / 1000
    const days = Math.floor(timeRemind / 60 / 60 / 24)
    const hours = Math.floor((timeRemind / 60 / 60) % 24)
    const minutes = Math.floor((timeRemind / 60 ) % 60)
    const seconds = Math.floor(timeRemind % 60)
const fHours = hours < 10 ? '0' + hours : hours
const fMinutes = minutes < 10 ? '0' + minutes : minutes
const fSeconds= seconds < 10 ? '0' + seconds : seconds

timerBlock.textContent = `${days} ${fHours}:${fMinutes}:${fSeconds}`
timerText.textContent = `дней    часов    минут   секунд `
if (timeRemind <= 0) {                     //обнуление  таймера
    clearInterval(interval)
    timerBlock.textContent = `00:00:00`   
}
}
updateClock()
interval = setInterval(updateClock, 500)



