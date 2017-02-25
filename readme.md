# Quickly create best-practice Node.js apps for Heroku

```
$ heroku plugins:install heroku-cli-node
$ heroku node:write myapp
```

## Why?

A solid node app still takes a lot of boilerplate:

- `package.json`, configured for an app instead of a module
- `.env` to inject environment variables locally
- `yarn.lock` to lock your dependencies
- `readme.md` to describe what the app does
- `.gitignore` so you can keep node modules out of git
- `app.json` to support Pipelines, Release Apps, CI, and the 'Deploy to Heroku' Button
- at least one file in `/bin` to provide an executable for your app
- a [standard](http://standardjs.com/) linter to keep you on track
- a mechanism for identifying [security vulnerabilities](https://github.com/nodesecurity/nsp)
- automated [testing](https://github.com/facebook/jest)
- and finally a `Procfile` to list your app's process types

...and I like to build solid apps, but I'm *also lazy.*
