'use strict';

var gulp = require('gulp');
var nodemon = require('nodemon');

var config = {
    port: 3000,
    jsFiles: ['*.js', 'public/**/*.js', 'public/**/**/*.js']
};

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src([
        './public/assets/css/*.css',
        './public/*.js',
        './public/assets/js/*.js',
        './public/components/**/*.js',
        './public/shared/**/*.js'
    ], {
        read: false
    });

    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/assets/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./public/index.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./public'));
});


gulp.task('serve', ['inject'], function() {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': process.env.PORT || 3000
        },
        watch: config.jsFiles
    };
    return nodemon(options)
        .on('restart', function(ev) {
            console.log('Restarting.....');
        });
});
