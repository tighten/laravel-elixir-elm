const Elixir = require('laravel-elixir');
const exec = require('child_process').exec;
const Q = require('q');

Elixir.extend('elm', (dir) => {
    const elmPath = `${Elixir.config.assetsPath}/elm/${dir}`;

    return new Elixir.Task('elm', () => {
        const command = `elm make main.elm --output ../../../../${Elixir.config.publicPath}/js/${dir}.js`;

        let deferred = Q.defer();

        return exec(`cd ${elmPath}; ${command}`, (err, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);

            deferred.resolve();
        });
    }).watch(`${elmPath}/main.elm`);
});
