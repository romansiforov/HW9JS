document.write(`<hr>1. Створіть на сторінці div і дайте йому зовнішній відступ 150 пікселів. Використовуючи JS виведіть у консоль відступ<hr>`);

window.onload = () => {
    const [...body] = document.getElementsByTagName("body");
    const div = document.createElement("div");
    div.classList.add("mrg-150");
    body[0].append(div);

    console.log(`margin top - ${window.getComputedStyle(div)["margin-top"]}`);
    console.log(`margin left - ${window.getComputedStyle(div)["margin-left"]}`);
    console.log(`margin bottom - ${window.getComputedStyle(div)["margin-bottom"]}`);
    console.log(`margin right - ${window.getComputedStyle(div)["margin-right"]}`);

}