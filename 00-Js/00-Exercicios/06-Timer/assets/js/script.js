function relogio() {

    function getHourFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    };

    const relogio = document.querySelector('.relogio');

    let seconds = 0;
    let timer;

    function startClock () {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getHourFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', (e) => {

        const el = e.target;

        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            startClock();
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00'
            seconds = 0;
        }

    });

}

relogio();
