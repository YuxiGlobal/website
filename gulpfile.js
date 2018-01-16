var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	path = require('path');
const rootFolder = path.join(__dirname);
const distFolder = path.join(rootFolder, 'dist');
const binDistFolder = path.join(distFolder, 'bin');

// define tasks here

gulp.task('copy:config', function () {
	console.log("Copying  web.config");  
	return gulp.src([`${rootFolder}/web.config`])
		.pipe(gulp.dest(distFolder));
});

gulp.task('copy:handler', function () {
	console.log("Copying  binaries");  
	return gulp.src([`${rootFolder}/bin/**.*.dll`])
		.pipe(gulp.dest(binDistFolder));
});

gulp.task('postbuild', function () {
	runSequence(
	'copy:handler',
	'copy:config',
	function (err) {
      if (err) {
        console.log('ERROR:', err.message);
      } else {
        console.log('Postbuild actions finished succesfully');
      }
    });
	
});

gulp.task('default', function(){
  console.log("Gulp is running!");  
});