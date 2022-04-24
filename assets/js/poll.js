
const ePoll = document.querySelector('.poll');
ePoll.innerHTML = `<h3 class="poll__title">Тестирование по: ${aData[strId].title}</h3>`
aData[strId].poll.forEach((e, i) => {
   let sAnswers = ''
    e.answer = e.answer.sort(() => Math.random() - 0.5);
    e.answer.forEach((el,index) => {
        sAnswers += `
        <label>
            <input type="radio" name="poll_${i}" data-fld="${el.right}">
            ${el.title}
        </label>`
    })
    ePoll.insertAdjacentHTML('beforeend', `
        <div class="poll__block">
            <h4 class="poll__block-title">${e.name}</h4>
            ${sAnswers}
        </div>
`)
})

document.querySelector('.apply').addEventListener('click', (e) => {
    let modal = document.querySelector('.modal')
    let prevResult = document.querySelector('.modal__result-prev')
    let nextResult = document.querySelector('.modal__result-next')
    let result = document.querySelectorAll('input[data-fld="true"]:checked').length
    let time = 5
    modal.style.display = 'block'
    prevResult.innerHTML = `Предыдущий результат: ${aData[strId].results} из ${aData[strId].poll.length}`
    nextResult.innerHTML = `Текущий результат: ${result} из ${aData[strId].poll.length}`
    aData[strId].results = result
    localStorage.setItem('aData', JSON.stringify(aData));
    e.target.disabled = true
    setInterval(() => {
        let modalTimer = document.querySelector('.modal__timer')
        modalTimer.innerHTML = `Вас перенаправит через ${time-=1} сек...`
    }, 1000)
    setInterval(() => {
        window.location.pathname = '/lectures.html'
    }, 1000*time)
})