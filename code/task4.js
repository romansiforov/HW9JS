document.write(`<hr>4. Слайдер
Створіть слайдер кожні 3 сек змінюватиме зображення
Зображення для відображення
https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg
https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg
https://naukatv.ru/upload/files/shutterstock_418733752.jpg
https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg
https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg<br>`);


window.onload = () => {
    let nextImg = 0;
    let images = [
        "https://cdn.pixabay.com/photo/2017/03/05/21/43/mountains-2120004_1280.jpg",
        "https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2023/09/the-bermuda-triangle-into-cursed-waters-s2-2048x1152-primary-16x9-1.jpg",
        "https://cdn-lfadn.nitrocdn.com/RxnfoGBOGoifuEvMBFTgCSxtBTkAYmfw/assets/images/optimized/wp-content/uploads/2019/11/b9693c645f885f496ee9aef1720cfd35.bermuda-triangle.jpg",
        "https://hakaimagazine.com/wp-content/uploads/header-sea-ice.jpg",
        "https://content.redseaglobal.com/beneath-the-sea/assets/Q4HtI4gkK1/grade-photos02-750x422.jpg"
    ]

    const img = document.querySelector(".slider-container > img");

    setInterval(() => {
        img.setAttribute("src", images[nextImg++ % images.length])
    },3000);


}