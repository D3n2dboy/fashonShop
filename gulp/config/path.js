
// Получить "имя" папки проекта
import * as nodePath from 'path';  //импортируем модуль path
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;  // папка с результатми верстки
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        files: `${srcFolder}/files/**/*.*`, //любые файлы во всех вложеных вайлах
        svgicons: `${srcFolder}/svgicons/*.svg`, //любые файлы во всех вложеных вайлах
    },
    watch: { // наблюдатель за папками
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        files: `${srcFolder}/files/**/*.*`, // следить за всем
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `` // указать папку на саервере в которую будет записаны файлы проекта
}