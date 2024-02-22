// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as d3nFunctions from "./modules/functions.js"; // Подключение вех функций из файла "functions.js"

// подключение функции webp (или если не поддерживается no-webp)
d3nFunctions.isWebp();

// Модуль для работы с меню (Бургер) (раскоментировать если нужен не забыть стили в header.scss)
//d3nFunctions.menuInit();


// Swiper - hz что тут рабочее
//import { Navigation, Pagination } from 'swiper/modules';
//import { Navigation, Pagination, Autoplay } from 'swiper/modules';

//import Swiper from 'swiper';
//import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
//import 'swiper/css';
// Стили Swiper
// Базовые стили
//import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules


// // import styles bundle
// function initSliders() {
//     // Перечень слайдеров
//     // Слайдер главной страницы new
//     if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
//         // Создаем слайдер
//         new Swiper('.swiper', { // Указываем скласс нужного слайдера
//             // Подключаем модули слайдера
//             // для конкретного случая
//             modules: [Navigation, Pagination],
//             autoHeight: false,
//             speed: 600,

//             autoplay: {
//                 delay: 4000,
//                 pauseOnMouseEnter: true,
//                 disableOnInteraction: true,
//             },

//             //Пагинация
//             pagination: {
//                 el: '.perview-swiper-pagination',
//                 clickable: true,
//             },

//             // Кнопки "влево/вправо"
//             navigation: {
//                 prevEl: '.perview-swiper-button-prev',
//                 nextEl: '.perview-swiper-button-next',
//             },

//         });
//     }
// }

// window.addEventListener("load", function (e) {
//     // Запуск инициализации слайдеров
//     initSliders();
//     // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
//     //initSlidersScroll();
// });