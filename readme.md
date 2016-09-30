# Laravel Elixir Elm Integration

This package provides Webpack support for compiling Elm in Laravel Elixir 6.

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
    mix.elm('example'); // resources/assets/elm/example/main.js
});
```
