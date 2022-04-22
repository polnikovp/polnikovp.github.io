const eLectureText = document.querySelector('.lecture-text');
eLectureText.innerHTML = `
    <div class="lecture-text__content">
        <h1 class="lecture-text__title">${aData[strId].title}</h1>
        <p>${aData[strId].text}</p>
    </div>
    <a href="poll.html?id=${strId}" class="lecture-text__poll lecture__btn">Пройти тестирование</a>
`
