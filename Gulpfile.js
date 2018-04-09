var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var connect = require('gulp-connect');


//script paths
var jsFiles = 'js/**/*.js',
    jsDest = 'dist/scripts';


gulp.task('server', function() {
	connect.server({
		livereload: true
	});
});

gulp.task('sass', function() {
	return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'compressed'
	})
	.on('error', sass.logError ))
    .pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./'))
	.pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src('./*html')
	.pipe(connect.reload());
});

gulp.task('livereload', function() {
  gulp.src(['./style.css', 'js/dist/*.js'])
  .pipe(connect.reload());
});


gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('./*.html', ['html']);
});


gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['sass', 'server', 'watch', 'livereload', 'scripts']);