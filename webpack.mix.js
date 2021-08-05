const { mix } = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .copy('resources/index.html', 'public')
   .browserSync('http://127.0.0.1:5500');