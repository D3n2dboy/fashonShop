import replace from "gulp-replace"; // Поиск и замена @img на img
import plumber from "gulp-plumber";  // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Проверка обновления картинки
import ifPlugin from "gulp-if"; // Проверка обновления картинки

// Экспорт объектов
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}