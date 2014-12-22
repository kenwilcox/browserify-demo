browserify-demo
===============

Checking out Browserify

Quick Start
-----------

Install [browserify](http://browserify.org/)
```
npm install -g browserify
```

Build bundle.js
```
$ browserify main.js -o bundle.js
```

View index.html

###Optional

Install [watchify](https://www.npmjs.com/package/watchify)
```
$ npm install -g watchify
```

And have it update bundle.js whenever you make a change to main.js
```
$ watchify main.js -o bundle.js
```

Woot!