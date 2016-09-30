const Elixir = require('laravel-elixir');
const shell = require('gulp-shell');

Elixir.extend('elm', (dir) => {
    const elmPath = `${Elixir.config.assetsPath}/elm/${dir}`;

    return new Elixir.Task('elm', () => {
        const command = `elm make main.elm --output ../../../../${Elixir.config.publicPath}/js/${dir}.js`;

        return gulp.src('')
            .pipe(
                shell(`cd ${elmPath}; ${command}`)
            );
    }).watch(`${elmPath}/main.elm`);
});
