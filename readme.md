# Laravel Elixir Elm Integration

A package to provide support for compiling Elm in Laravel Elixir 6

Recommended: [laravel-elm](https://github.com/tightenco/laravel-elm)

## Installation

```
npm install --save-dev laravel-elixir-elm
```

## Config

In your `gulpfile.js`:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-elm');

elixir(function(mix) {
    mix.elm('example'); // resources/assets/elm/example/Main.js
});
```
