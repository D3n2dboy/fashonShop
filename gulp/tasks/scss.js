import * as dartSass from 'sass'; // поддержка s css
import gulpSass from 'gulp-sass'; // галповский препроц
import rename from 'gulp-rename'; // Переименование файлов


import cleancss from 'gulp-clean-css'; // Сжатин css файлов
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление префиксов для кроссбраухерности верстки
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов
// $ npm i -D gulp-clean-css  -- не забыть установить (подключать не нужно)

const sass = gulpSass(dartSass);


export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })

        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))

        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isWebP,
                app.plugins.if(
                    app.isBuild,
                    webpcss(
                        {
                            webpcss: ".webp",
                            noWebpClass: ".no-webp"
                        }
                    )))
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 3 versions"], // сколько версий браузеров назад поддерживать
                    cascade: true
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.css)) // выгрузить не сжатый фаил css
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleancss() // сжатие css файла
            ))

        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}