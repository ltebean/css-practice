var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');

process.on("uncaughtException", function(err) {
	console.log(err);
});

gulp.task('stylus', function() {
	gulp.src(["./dev/css/**/*.styl"])
		.pipe(stylus())
		.pipe(gulp.dest('./build/css'));
});

gulp.task('jade', function() {
	gulp.src(["./dev/views/*.jade"])
		.pipe(jade())
		.pipe(gulp.dest("./build/"));

});


gulp.task('watch', function() {
	gulp.watch(["./dev/views/**/*.jade"], ['jade']);
	gulp.watch(["./dev/css/**/*.styl"], ['stylus']);
});

gulp.task('default', ['stylus', 'jade', 'watch']);