const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const myBirthday = '09 12 2023'

function counter() {
  const birthdayDate = new Date(myBirthday)
  const currentDate = new Date()

  const milliSeconds = (birthdayDate - currentDate)
  const seconds = Math.floor(milliSeconds / 1000) % 60
  const mins = Math.floor((milliSeconds / 1000) / 60) % 60
  const hours = Math.floor(((milliSeconds / 1000) / 60) / 60) % 24
  const days = Math.floor((((milliSeconds / 1000) / 60) / 60) / 24) % 365

  daysEl.innerHTML = days
  hoursEl.innerHTML = formatTime(hours)
  minsEl.innerHTML = formatTime(mins)
  secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return (time < 10) ? (`0${time}`) : (time)
}

counter()
setInterval(counter, 1000)
