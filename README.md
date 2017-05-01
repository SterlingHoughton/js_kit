# Javascript starter kit V1.0

### EDITOR AND EDITORCONFIG RULES
Everyone on team uses same critical editor settings (space vs tabs, line endings etc.)
Strong support for javascript features, including:
* Autocompletion
* Parse ES6 imports
* Report unused imports
* Automated refactoring
* Framework Intelligence
* Built-in terminal

### EDITORCONFIG FILE
Create .editorconfig file in the root of the project. You can specify settings for code here. Some editors have the functionality built in to read file, some need a plugin (check editorconfig.org for details).

## PACKAGE SECURITY
We want to ensure all packages used in our application aregit secure. Options for security check:

#### retire.js
* I've not used this yet, more to come.

#### nodesecuirty.io
* To install: 

`npm install nsp`

`nsp check` 

Checks/scans pacakges, will get results in terminal if working. Can be installed globally.

__Running security checks on packages:__
* Manually - Easy to forget
* npm install - Issues may arise from packages at a later date (after it was installed)
* production build - Expensive to change
* pull request - Expensive to change
* npm start - Slows start slightly

## WEBSERVERS
#### http-server
* (not for use in production, only for development)

#### live-server
* (not for use in produciton, only for development)

#### express / koa / hapi
* Robust, production ready (especially express/hapi)

#### budo
* (also a bundler)

#### webpack
* (also a bundler, comprehensive)

### Browsersync
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
* Modern, standards-based JS, today (standardized JS)
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

__Babel Presets__ (transpile for your environment):

* `babel-preset-es2015-node` - Version Detection
* `babel-preset-latest-minimal` - Feature Detection 
 
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

## BUNDLING
Module formats/types in JS:
* IIFE
* Asynchronous Module Definition (AMD)
* CommonJS(CJS)
* Universal Module Definition (UMD)
* ES6 Modules 

#### BUNDLERS
##### Browserify - simple, approachable (can be used with Rollup via plugin)
* First bundler to reach mass adoption
* Bundle npm packages for the web (code that uses the CommonJS pattern)
* Large plugin ecosystem

##### __Webpack__ - Comprehensive
* Bundles more than just JS - import CSS, images, fonts, etc like JS
* Built in hot-reloading web server
* Bundle splitting

##### __Rollup__
* Tree shaking (dead code elimination)
* Faster loading production code
* Quite new
* Great for library authors
* No hot reloading and code splitting yet

##### __JSPM__ - Runtime loader, package manager
* Uses SystemJS, a universal module loader
* Can load modules at runtime
* Has its own package manager
* Can install from npm git
* Uses Rollup in its builder

#### SOURCEMAPS
* Important tool to use when bundling.
* Maps code back to original source (bundled, transpiled, minified code).
* Part of the build.
* Only downloaded if you open developer tools (only d/ls when you need it).
* There are several sourcemap configurations - chose one that works best for you / the application.

## LINTING
We want to enforce consistency, and avoid mistakes - linters help us do this.

#### LINTERS
##### __JSLint__
* created by Douglas Crockford many years ago
* extremely opinionated

##### __JSHint__
* more configurability

##### __ESLint__
* Powerful and configurable
* Popular

__Core steps for ESLint setup:__
1. Configuration file formats - 5 different file names currently supported (most universal approach for configuration file is creating a dedicated .eslintrc file in application root, or configure in package.json.) Creating dedicated .eslintrc file decouples config from package.json/npm.
2. Choosing what rules to enable - ESLint catches dozens of potential errors out of the box. Choose what rules work for you as a team or per project etc.
3. Warnings or errors? 
    * __Warnings__ - doesn't break the build, can be ignored but still not acceptable: FIX WARNINGS
    * __Errors__ - breaks the build, can't be ignored, team is forced to comply because it won't build
4. Which plugins? - ESLint has a great list of configs, plugins, parsers and more.
5. Use presets? - start from scratch, ESLint recommendeded presets, standard rules, airbnb/XO/standardJS presets

__Why Lint via an Automated Build Process?__
* One place to check for all feedback related to code quality
* Universal configuration
* Part of continuous integration (part of the build process)

If working with TypeScript, use TSLint until ESLint adds support for TypeScript (no other linter provides support for TS as of now 4/30/17).

eslint-watch adds file watching functionality to ESLint and offers enhanced commandline output.

*Babel-eslint lints stage 0-4 features (experimental JS features).

## TESTING
JavaScript Testing Styles: 

|  __Style__  |           __Focus__           |
|:-----------:|:-----------------------------:|
| Unit        | single funciton or module     |
| Integration | interactions between modules  |
| UI          | automate interactions with UI |

__Key testing decisions:__

1. Testing Frameworks (pick which frameworks work for you, will be different between developers, teams, etc)
    * __Mocha__ - Most popular, highly configurable, large ecosystem, mature, flexible
    * __Jasmine__ - includes an assertion library built in
    * __Tape__ - leanest and simplist, minimal configuration
    * __QUnit__ - oldest on the list, tests jQuery
    * __AVA__ - runs tests in parallel, and only reruns impacted tests - speedy
    * __Jest__ - wrapper over Jasmine, useful for anyone, has code coverage, JSDOM, and popular conventions for finding test files all built in

2. Assertion Libraries (way to declare what you expect)
    * __Chai__ - most popular
    * __Should.js__ 
    * __expect__ 

3. Helper Libraries:
    * __JSDOM__ - simulates the browser's DOM, can run DOM-related tests without a browser (implementation of the browser's DOM that can run in node.js)
    * __Cheerio__ - jQuery for the server, query virtual DOM using jQuery selectors. Asserting that certain HTML is where you expect it. Uses jQuery selectors for querying the DOM
    
4. Where to run tests?
  * Browser - __Karma__, __Testem__
  * Headless Browser (Headless browser - browser that doesn't have a visible interface)
    * __PhantomJS__ - a full real browser running the V8 JS engine behind the scenes, has no visible interface.
  * In-memory DOM
    * __JSDOM__ - doesn't have a full browser behind the scene, focused on simulating a DOM in memory

5. Where do test files belong?
    * __Centralized__ (i.e. central tests within a folder 'tests' or something similar) - tests are completely seperate from source code. Avoids adding noise in src folder (tests aren't necessarily noise, they're complementary to the files that they're testing). Popular to create seperate test folder
    * __Alongside__ (i.e. colocation of source and test files) - Easy imports, clear visibility, convenient to open, no recreating folder structure, easy file moves, one to one relationships with code and tests
    * Popular test file naming conventions: 
      * `fileName.spec.js`
      * `fileName.test.js`

6. Where should my tests run?
  * unit tests should run when code is saved, rapid feedback loop
  * faciliates TDD
  * automatic tests = low friction
  * increases test visibility
  * should be extremely fast

## CONTINUOUS INTEGRATION
We want to be notified when someone breaks the build, we want to know instantly if the commit to code worked or broke something. Works as expected on another machine. A CI server catches mistakes quickly

__Why CI?__
* forgot to commit new file
* forgot to update package.json
* commit doesn't run cross-platform
* node version conflictions
* bad merge
* didn't run tests after a change
* CI servers build your application automatically the moment you commit
* runs your test suite
* can run tasks like code coverage
* can automate deployment to production

#### CI SERVERS
##### TravisCI 
* Linux based CI server, large ecosystem, hosted solution

##### Appveyor
* Windows based CI server

##### Jenkins
* Popular, highly configurable, large ecosystem

##### CircleCI

##### Semaphore

##### SnapCI
