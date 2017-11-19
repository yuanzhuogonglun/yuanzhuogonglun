var gulp = require('gulp'),
del = require('del');
var ghPages = require('gulp-gh-pages');

 
gulp.task('build',function() {
  return gulp.src(['app/**/*','!app/node_modules/*/**'])
  .pipe(gulp.dest('dist/'));
});




gulp.task('push', ['build'],function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({branch:'master'}));
});


gulp.task('deploy', ['build', 'push']);
