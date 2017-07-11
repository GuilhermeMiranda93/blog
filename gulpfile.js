'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var jsMinify = require('gulp-minify');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
	return gulp.src('./src/assets/sass/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./src/assets/css'));
});

gulp.task('sass:watch',function(){
	gulp.watch('./src/assets/sass/*.scss',['sass']);
});

gulp.task('minify-css',()=>{
	return gulp.src('./src/assets/css/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('./src/assets/production/css'));
});

gulp.task('minify-js',function(){
	gulp.src('./src/assets/*.js')
	.pipe(jsMinify())
	.pipe(gulp.dest('./src/assets/js'));
});

gulp.task('browser', ['sass'],function(){
	browserSync.init({
		server:"./"
	});

	gulp.watch("./src/assets/sass/*.scss", ['sass']).on('change',browserSync.reload);
	gulp.watch("*.html").on('change',browserSync.reload);
});