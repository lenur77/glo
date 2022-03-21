export function timer() {
const timerBlock = document.querySelector('.timer__time')
const timerText = document.querySelector('.timer__date')
let interval                                               
const updateClock = () => {
    const date = new Date().getTime()
    const deadline = ('25 march 2022')
    const dateDeadline = new Date(deadline).getTime()
    const timeRemind = (dateDeadline - date) / 1000
    const days = Math.floor(timeRemind / 60 / 60 / 24)
    const hours = Math.floor((timeRemind / 60 / 60) % 24)
    const minutes = Math.floor((timeRemind / 60 ) % 60)
    const seconds = Math.floor(timeRemind % 60)
const fHours = hours < 10 ? '0' + hours : hours
const fMinutes = minutes < 10 ? '0' + minutes : minutes
const fSeconds= seconds < 10 ? '0' + seconds : seconds
const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]

timerBlock.textContent = `${days} ${sklonenie(days,['день', 'дня', 'дней'])}  ${fHours}:${fMinutes}:${fSeconds}`
// timerText.textContent = `${sklonenie(days,['день', 'дня', 'дней'])}  ${sklonenie(hours,['час', 'часа', 'часов'])}: ${sklonenie(minutes,['минута', 'минут', 'минут'])}:${sklonenie(seconds,['секунда', 'секунд', 'секунд'])}`
if (timeRemind <= 0) {                     //обнуление  таймера
    clearInterval(interval)
    timerBlock.textContent = `00:00:00`   
}
}
updateClock()
interval = setInterval(updateClock, 500)

}

