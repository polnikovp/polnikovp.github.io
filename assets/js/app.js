const eLectures = document.querySelector('.lectures');
aData.forEach((e,i) => {
    eLectures.insertAdjacentHTML('beforeend', `
    <div class="lecture">
        <h1 class="lecture__title">${e.title}</h1>
        <div class="lecture__progress-bg">
            <div class="lecture__progress" style="width: ${(100/e.poll.length) * e.results}%"></div>
            <span class="lecture__progress-text">${e.results}/${e.poll.length}</span>
        </div>
        <div style="display:flex; justify-content: space-between">
            <a href="assets/lectures/${i + 1}.docx" class="lecture__btn nul" download>Скачать лекцию</a>
            <a href="poll.html?id=${i}" class="lecture__btn nul">Пройти тестирование</a>
        </div>
    </div>
`)
})

