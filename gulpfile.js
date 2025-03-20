// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar arquivos SASS para CSS
function compileSass() {
  return gulp.src('src/scss/**/*.scss') // caminho dos arquivos SASS
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // pasta de destino do CSS compilado
}

// Tarefa para comprimir imagens
function compressImages() {
  return gulp.src('src/images/**/*') // caminho dos arquivos de imagem
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images')); // pasta de destino das imagens comprimidas
}

// Tarefa para comprimir código JavaScript
function compressJS() {
  return gulp.src('src/js/**/*.js') // caminho dos arquivos JavaScript
    .pipe(uglify())
    .pipe(gulp.dest('dist/js')); // pasta de destino dos arquivos JS comprimidos
}

// Exportando as tarefas individualmente (opcionalmente)
// e também uma tarefa default que executa todas em paralelo
exports.sass = compileSass;
exports.images = compressImages;
exports.js = compressJS;
exports.default = gulp.parallel(compileSass, compressImages, compressJS);
