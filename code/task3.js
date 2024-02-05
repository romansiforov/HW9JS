document.write(`<hr>3. Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера,
 якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть користувача на 
 сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg якщо буде помилка, відобразіть її в діві до input.<br>`);


 window.onload = () => {

    const verifyButton = document.querySelector(".verify-phone-btn");

    const [...body1] = document.getElementsByTagName("body");

    const error = document.querySelector(".error");

    const pattern = /\d{3}-\d{3}-\d{2}-\d{2}/;

    verifyButton.onclick = () => {
        const phoneInput = document.querySelector("#phone-input");
        if(pattern.test(phoneInput.value)){
            body1[0].classList.add("green");
            setTimeout(() => {
                document.location = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
            },3000);
        } else {
            error.classList.remove("hide");
        }
    }

 }