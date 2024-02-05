document.write(`<hr>2. Створіть програму секундомір.
* Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
* При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий * Виведення лічильників у форматі ЧЧ:ММ:СС
* Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції<br>`);


window.onload = () => {

    let timeMilliDefault = 1706738400000, milisecInterval = 1000, setTime, flag = false;

    const getByID = id => document.getElementById(id);
    const startButton = document.querySelector(".start-btn");
    const stopButton = document.querySelector(".stop-btn");
    const resetButton = document.querySelector(".reset-btn");

    let timer = new Date(timeMilliDefault);

    function timerHandler(timer) {
        if (flag) return;
        setTime = setInterval(() => {
            timer.setTime(timer.getTime() + milisecInterval);
            timeOutput(timer.toLocaleTimeString('it-IT'));
            flag = true;

        }, milisecInterval);
    }

    function timeOutput(value) {
        getByID("timer").textContent = value;
    }

    startButton.onclick = () => {
        const watcher = document.querySelector(".stopwatch-display");
        watcher.classList.remove("red");
        watcher.classList.remove("silver");
        watcher.classList.add("dark-green");
        watcher.classList.add("disabled");

        timerHandler(timer);
    }

    stopButton.onclick = () => {
        const watcher = document.querySelector(".stopwatch-display");
        watcher.classList.remove("dark-green");
        watcher.classList.remove("silver");
        watcher.classList.add("red");

        clearInterval(setTime);
        flag = false;
    }

    resetButton.onclick = () => {
        const watcher = document.querySelector(".stopwatch-display");
        watcher.classList.remove("red");
        watcher.classList.remove("dark-green");
        watcher.classList.add("silver");

        clearInterval(setTime);
        timer = new Date(timeMilliDefault);
        timeOutput(timer.toLocaleTimeString('it-IT'));
        flag = false;
    }
}