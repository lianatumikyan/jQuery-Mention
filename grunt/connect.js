'use strict';
module.exports = {
    server: {
        options: {
            port: 9000,
            base: 'public',
            livereload: true
        },
        livereload: {
            options: { livereload: true },
            files: ['public/**/*']
        }
    }
};
