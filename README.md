# Javascript starter kit V1.0

## EDITOR AND EDITORCONFIG RULES
Everyone on team uses same critical editor settings (space vs tabs, line endings etc.)
Strong support for javascript features: 
* Autocompletion
* Parse ES6 imports
* Report unused imports
* Automated refactoring
* Framework Intelligence
* Built-in terminal

## EDITORCONFIG FILE 
Create .editorconfig file in the root of the project. You can specify settings for code here. Some editors have
the functionality built in to read file, some need a plugin (check editorconfig.org for details).

## PACKAGE SECURITY
Options for security check:
### retire.js
### nodesecuirty.io
Install globally: 
`npm install -g nsp`
Then run NSP
`nsp check` 


Best times to run security checks on packages:
* Manually - Easy to forget
* npm install - Issues may arise from packages at a later date (after it was installed)
* production build - Expensive to change
* pull request - Expensive to change
* npm start - Slows start slightly 
 
