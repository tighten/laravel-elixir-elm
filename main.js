const Elixir = require('laravel-elixir');
const exec = require('child_process').exec;
const Q = require('q');

Elixir.extend('elm', (dir) => {
    const elmPath = `${Elixir.config.assetsPath}/elm/${dir}`;

    return new Elixir.Task(`elm-${dir}`, () => {
        const command = `elm make Main.elm --output ../../../../${Elixir.config.publicPath}/js/${dir}.js --warn --yes`;

        let deferred = Q.defer();

        return exec(`${command}`, {
            cwd: elmPath,
        }, (err, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);

            deferred.resolve();
        });
    }).watch(`${elmPath}/**/*.elm`);
});
