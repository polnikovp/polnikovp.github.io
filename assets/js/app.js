const eLectures = document.querySelector('.lectures');
aData.forEach((e,i) => {
    eLectures.insertAdjacentHTML('beforeend', `
    <div class="lecture">
        <h1 class="lecture__title">${e.title}</h1>
        <div class="lecture__progress-bg">
            <div class="lecture__progress" style="width: ${(100/e.poll.length) * e.results}%"></div>
            <span class="lecture__progress-text">${e.results}/${e.poll.length}</span>
        </div>
        <a href="lecture.html?id=${i}" class="lecture__btn">Перейти к лекции</a>
    </div>
`)
})

