var gulp = require('gulp'),
del = require('del');
var ghPages = require('gulp-gh-pages');

 
gulp.task('build', ['clean'],function() {
  gulp.src(['app/**/*','!app/node_modules/*/**'])
  .pipe(gulp.dest('dist/'));
});



gulp.task('clean', function () {
    // del([
    //     'dist'
    // ]);
});


gulp.task('deploy', ['build'],function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
