# Quickly create best-practice Node.js apps for Heroku

```
$ heroku plugins:install heroku-cli-node
$ heroku node:write myapp
```

## Why?

A basic node app still takes a lot of boilerplate:

- `package.json`, configured for an app instead of a module
- `.env` to inject environment variables locally
- `yarn.lock` to lock your dependencies
- `readme.md` to describe what the app does
- `.gitignore` so you can keep node modules out of git
- at least one file in `/bin` to provide an executable for your app
- a [standard](http://standardjs.com/) linter to keep you on track
- and finally a `Procfile` to list your app's process types

## Local development

```
$ yarn
$ heroku local
$ open http://localhost:5000
```

(or `npm install` if you prefer npm to yarn)
