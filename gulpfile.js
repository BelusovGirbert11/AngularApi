var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');

//Connect task
gulp.task('connect',function(){
    connect.server({
        root:'public',
        port:4000
    });
});

//Browserify task
gulp.task('browserify',function(){
    //Grabs the app.js file
    return browserify('./app/main.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js'));
});

//Sass task
gulp.task('styles', function() {
    gulp.src('sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

//Watch task
gulp.task('watch',function(){
    gulp.watch('app/**/*.js',['browserify']);
    // Watches for changes in style.sass and runs the sass task
    gulp.watch('sass/**/*.sass', ['styles'])
});

gulp.task('default',['connect','watch']);