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
&nbsp;&nbsp;&nbsp;&nbsp;Manually - Easy to forget.
&nbsp;&nbsp;&nbsp;&nbsp;npm install - Issues may arise from packages at a later date (after it was installed).
&nbsp;&nbsp;&nbsp;&nbsp;production build - Expensive to change.
&nbsp;&nbsp;&nbsp;&nbsp;pull request - Expensive to change.
&nbsp;&nbsp;&nbsp;&nbsp;npm start - Slows start slightly.

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
&nbsp;&nbsp;&nbsp;&nbsp;Very easy to get started, low friction level of learning and usage. Easiest, ultra-versatile.
#### ngrok
&nbsp;&nbsp;&nbsp;&nbsp;Some additional features over localtunnel, takes more time to configure. Easy setup, secure.
#### surge
&nbsp;&nbsp;&nbsp;&nbsp;Assumes your app is just static HTML, JS, and CSS files. Only supports static files. No firewall hole, hosting persists.
#### now
&nbsp;&nbsp;&nbsp;&nbsp;Easy way to deploy apps to the cloud, supports nodejs projects. No firewall hole, hosting persists.
