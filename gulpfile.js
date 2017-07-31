'use strict';

const gulp = require('gulp')
,     webpack = require('webpack-stream');


const settings = {
    scriptDest: 'bin/'
}

// TASK: Build
gulp.task('build', () => {
    return gulp.src('scripts/app.ts')
            .pipe(webpack( require('./webpack.config.js') ))
            .pipe(gulp.dest(settings.scriptDest));
});

// TASK: Watch
gulp.task('watch', () => {
    gulp.watch('scripts/**', ['build']);
})

// TASK: Default
gulp.task('default', ['watch']);
