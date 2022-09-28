document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('June 1 2023 00:00:00');

    const daysVal = document.querySelector('.counter__item--days .counter__value');
    const hoursVal = document.querySelector('.counter__item--hours .counter__value');
    const minutesVal = document.querySelector('.counter__item--mins .counter__value');
    const secondsVal = document.querySelector('.counter__item--secs .counter__value');

    const daysText = document.querySelector('.counter__item--days .counter__text');
    const hoursText = document.querySelector('.counter__item--hours .counter__text');
    const minutesText = document.querySelector('.counter__item--mins .counter__text');
    const secondsText = document.querySelector('.counter__item--secs .counter__text');

    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100< 20)? 2 : cases[(number%10<5)?number%10:5]];
    }

    function zeroPad(number) {
        return String(number).padStart(2, '0')
    }

    const counter = () => {
        let now = new Date();
        let leftUntil = newYear - now;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60 ) % 60;
        let seconds = Math.floor(leftUntil / 1000 ) % 60;

        daysVal.textContent = zeroPad(days);
        hoursVal.textContent = zeroPad(hours);
        minutesVal.textContent = zeroPad(minutes);
        secondsVal.textContent = zeroPad(seconds);

        daysText.textContent = declOfNum(days, ['День', 'Дня', 'Дней']);
        hoursText.textContent = declOfNum(hours, ['Час', 'Часа', 'Часов']);
        minutesText.textContent = declOfNum(minutes, ['Минута', 'Минуты', 'Минут']);
        secondsText.textContent = declOfNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
    };

    counter();

    setInterval(counter, 1000);
});
