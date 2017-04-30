# Javascript starter kit V1.0

## EDITOR AND EDITORCONFIG RULES
Everyone on team uses same critical editor settings (space vs tabs, line endings etc.)
Strong support for javascript features, including:
* Autocompletion
* Parse ES6 imports
* Report unused imports
* Automated refactoring
* Framework Intelligence
* Built-in terminal

## EDITORCONFIG FILE
Create .editorconfig file in the root of the project. You can specify settings for code here. Some editors have the functionality built in to read file, some need a plugin (check editorconfig.org for details).

## PACKAGE SECURITY
Options for security check:
#### retire.js
* I've not used this yet, more to come.
#### nodesecuirty.io
* To install globally: `npm install -g nsp` Then run NSP `nsp check` to scan pacakges. Does not need to be
installed globally.

__Best times to run security checks on packages:__
* Manually - Easy to forget.
* npm install - Issues may arise from packages at a later date (after it was installed).
* production build - Expensive to change.
* pull request - Expensive to change.
* npm start - Slows start slightly.

## WEBSERVERS
#### http-server
* (not for use in production, only for development)
#### live-server
* (not for use in produciton, only for development)
#### express / koa / hapi
#### budo
* (also a bundler)
#### webpack
* (also a bundler, comprehensive)
#### Browsersync
* (dedicated IP for sharing work on LAN, all interactions remain in sync, integrates with webpack, express)

## SHARING WORK-IN-PROGRESS
#### localtunnel
* Very easy to get started, low friction level of learning and usage. Easiest, ultra-versatile.
#### ngrok
* Some additional features over localtunnel, takes more time to configure. Easy setup, secure.
#### surge
* Assumes your app is just static HTML, JS, and CSS files. Only supports static files. No firewall hole, hosting persists.
#### now
* Easy way to deploy apps to the cloud, supports nodejs projects. No firewall hole, hosting persists.

## AUTOMATION
We always want to automate our enviornment and builds whenever possible.

#### Grunt
* First JS Task runner
* File oriented
* Large plugin ecosystem
* Configuration over code
#### Gulp
* In-memory streams (Gulp calls these pipes).
* Fast
* Code over configuration
* Large plugin ecosystem
#### npm Scripts
* Declared in package.json
* Leverage your OS' command line
* Directly use npm packages
* Call seperate Node scripts
* Convention-based pre/post hooks
* World's largest package manager
* Use tools directly
* No need for seperate plugins
* Simpler debugging
* Better docs
* Easy to learn, simple

## TRANSPILERS
Build Script JS Style comparisons:

|              __ES5__              |                   __Transpiled__                  |
|:---------------------------------:|:-------------------------------------------------:|
| No waiting for transpile = faster | Enjoy the latest JS features                      |
| No transpiler dependency          | Consistent coding style                           |
|                                   | Use the same linting rules everywhere             |
|                                   | Can eventually remove transpiler (as JS improves) |

Popular transpilers (won't cover them all here):

#### Babel
* Modern, standards-based JS, today (standardized JS
* Enjoy all the new features of JS
* Transpiles the latest version of JS down to ES5
* Leverage full JS ecosystem
* Use experimental JS features earlier
* No type defs, annotations required
* ES6 imports are statically analyzable (editor can deterministically index entire code base and provide reliable intellisense support)
* Test, Lint, Babel, Great libs, IDE = safety

Two configuration styles: 
`.babelrc` 
* Dedicated babel configuration file placed in project route
* Easier to read since it's isolated 

`package.json`
* One less file to your project

__PRESETS__ (transpile for your environment)
`babel-preset-es2015-node` - Version Detection
`babel-preset-latest-minimal - Feature Detection 
 
#### TypeScript
* Superset of JS
* Type annotations (additional type safety)
* Enhanced autocompletion / readability
* Clearer intent
* some tools can't use TypeScript
#### Elm
* Compiles down to JS
* Clean Syntax
* Immutable data structures
* Friendly errors
* All errors are compile-time errors
* Interops with JS (you don't have to use elm for everything)

