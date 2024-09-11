function highlightCards() {
    const cards = document.querySelectorAll('.card');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    // const hours = 16;
    // const minutes = 20;
    // offset = -240;
    offset = 0;
    let totalMinutes = hours * 60 + minutes + offset;

    const timeRanges = [
        { start: 0, end: 480 },     // 
        { start: 480, end: 575 },   // 08:00 - 09:35
        { start: 575, end: 585 },   // перерыв 
        { start: 585, end: 680 },   // 09:45 - 11:20
        { start: 680, end: 700 },   // перерыв 
        { start: 700, end: 795 },   // 11:40 - 13:15
        { start: 795, end: 805 },   // перерыв 
        { start: 805, end: 900 },   // 13:25 - 15:00
        { start: 900, end: 910 },   // перерыв 
        { start: 910, end: 1005 },  // 15:10 - 16:45
        { start: 1005, end: 1015 }, // перерыв 
        { start: 1015, end: 1110 }, // 16:55 - 18:30
        { start: 1110, end: 1115 }, // перерыв 
        { start: 1115, end: 1185 }, // 18:35 - 19:45
        { start: 1185, end: 1440 }  //
    ];

    // Убираем подсветку со всех карточек и сбрасываем текст в div с id="time"
    cards.forEach(card => {
        card.classList.remove('highlight');
        const timeDiv = card.querySelector('#time');
        if (timeDiv) {
            timeDiv.textContent = ''; // Сбрасываем текст оставшегося времени
        }
        card.style.background = ''; // Сбрасываем фон карточки
    });

    let nextRange = null;

    // Подсвечиваем карточки в зависимости от времени
    timeRanges.forEach((range, index) => {
        if (totalMinutes >= range.start && totalMinutes < range.end) {
            if (cards[index]) {
                cards[index].classList.add('highlight');

                // Вычисляем прошедшее время
                const elapsedMinutes = totalMinutes - range.start;
                const totalDuration = range.end - range.start;
                const percentage = Math.min(Math.max(elapsedMinutes / totalDuration, 0), 1);

                // Устанавливаем градиент фона
                cards[index].style.background = `linear-gradient(to right, rgb(10, 180, 160), rgb(6, 176, 37) ${percentage * 100-5}%, rgb(20, 30, 20) ${percentage * 100}%)`;
            }
        }

        // Находим следующий промежуток
        if (totalMinutes < range.start && !nextRange) {
            nextRange = range;
        }
    });

    // Если есть следующий промежуток, вычисляем оставшееся время
    if (nextRange) {
        const remainingTime = nextRange.start - totalMinutes;

        // Обновляем текст в div с id="time" текущей карточки
        const currentCardIndex = timeRanges.findIndex(range => totalMinutes >= range.start && totalMinutes < range.end);
        if (currentCardIndex >= 0) {
            const timeDiv = cards[currentCardIndex].querySelector('#time');
            if (timeDiv) {
                timeDiv.textContent = `${remainingTime} мин.`;
            }
        }
    }
}

// Вызываем функцию при загрузке страницы
setTimeout(highlightCards, 1000)
setInterval(highlightCards, 1000);