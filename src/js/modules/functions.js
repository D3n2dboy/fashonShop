// Подключение списка активных модулей
import { d2dModules } from "./modules.js";

// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
// Проверка поддежки webp, добавление класса webP если есть поддежка webp
export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });

}

export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains('lock')) {
        bodyUnlock();
    } else {
        bodyLock();
    }
}

export let bodyUnlock = (delay = 500) => {
    if (bodyLockStatus) {
        document.documentElement.classList.remove("lock");
        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
}
export let bodyLock = (delay = 500) => {
    if (document.documentElement.classList.contains("menu-open")) {
        document.documentElement.classList.add("lock");
        bodyLockStatus = true;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
}

// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://template.fls.guru/template-docs/menu-burger.html
Сниппет (HTML): menu
*/
export function menuInit() {
    if (document.querySelector(".icon-menu")) {
        document.addEventListener("click", function (e) {
            if (bodyLockStatus && e.target.closest('.icon-menu')) {
                document.documentElement.classList.toggle("menu-open");
                bodyLockToggle();
            }
        });
    };
}


export function menuOpen() {
    bodyLock();
    document.documentElement.classList.add("menu-open");
}
export function menuClose() {
    bodyUnlock();
    document.documentElement.classList.remove("menu-open");
}

/* Подключаем файлы со своим кодом */
//import "./files/script.js";
//============================================================================================================================================================================================================================================/* Подключаем файлы со своим кодом */


