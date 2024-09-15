// Основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from "./gulp/config/path.js";

// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js";

// Записываем переменные в глобальные значения
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    isWebP: !process.argv.includes('--nowebp'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импортируем задачи
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js"; //local server
import { scss } from "./gulp/tasks/scss.js"; // Поддежрка SCSS
import { js } from "./gulp/tasks/js.js"; // Подключение JS
import { images } from "./gulp/tasks/images.js"; // Подключение Images
import { otfToTtf, ttfToWoff, fonstStyle } from "./gulp/tasks/fonts.js"; // Подключение fonts
import { svgSprive } from "./gulp/tasks/svgSprive.js"; // Подключение группироовки спрайтов
import { zip } from "./gulp/tasks/zip.js"; // Подключение архивации файлов
import { ftp } from "./gulp/tasks/ftp.js"; // Подключение архивации файлов

// Наблюдатели
function watcher() {

    // === для локальной разработки === //
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)

    // === для моментальной выгрузки на FTP === //
    // gulp.watch(path.watch.files, gulp.series(html, ftp))
    // gulp.watch(path.watch.html, gulp.series(html, ftp))
    // gulp.watch(path.watch.scss, gulp.series(html, ftp))
    // gulp.watch(path.watch.js, gulp.series(html, ftp))
    // gulp.watch(path.watch.images, gulp.series(html, ftp))
}

export { svgSprive }

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение выполнения сценария 
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Выполнение стценария по умолчанию
gulp.task('default', dev);