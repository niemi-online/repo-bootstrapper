var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');
var tsSource = ['src/**/*.ts', 'src/**/*.tsx'];
var scssSource = ['src/**/*.scss'];

var destination = 'dist';

gulp.task('build', ['scripts', 'styles']);

gulp.task('scripts', function() {
    return gulp.src(tsSource)
        .pipe(tsProject())
        .pipe(gulp.dest(destination));
});

gulp.task('styles', function() {
    return gulp.src(scssSource).pipe(gulp.dest(destination))
})
 
gulp.task('watch', ['scripts'], function() {
    gulp.watch(tsSource, ['scripts']);
    gulp.watch(scssSource, ['styles']);
});