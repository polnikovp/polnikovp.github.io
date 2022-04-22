
const ePoll = document.querySelector('.poll');
ePoll.innerHTML = `<h3 class="poll__title">Тестирование по: ${aData[strId].title}</h3>`
aData[strId].poll.forEach((e, i) => {
   let sAnswers = ''
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
    aData[strId].results = document.querySelectorAll('input[data-fld="true"]:checked').length
    localStorage.setItem('aData', JSON.stringify(aData));
    window.location.pathname = '/lectures.html'
})