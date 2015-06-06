var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('default',function(){

  // gulp.watch('stylesheets/*.scss','scss');
  // gulp.watch('*.jade','jade');

})

// gulp.task('js-vendor',function(){
//   gulp.src('vendor/javascripts/*.js')
//     .pipe(concat('vendor.js'))
//     .pipe(gulp.dest('vendor/javascripts'));
// })

gulp.task('css-vendor',function(){
  gulp.src('vendor/stylesheets/*.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('vendor/stylesheets'));
})

gulp.task('assets-pipeline',function(){
  gulp.src(['vendor/javascripts/*.js','scripts/*.js'])
    .pipe(concat('global.js'))
    .pipe(gulp.dest('static/js'));

  gulp.src(['vendor/stylesheets/*.css','stylesheets/*.css'])
    .pipe(concat('global.css'))
    .pipe(gulp.dest('static/css'));

  gulp.src('*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
})

gulp.task('jade',function(){
  gulp.src('*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
})

gulp.task('scss',function(){
  gulp.src('stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('stylesheets/'));
})
