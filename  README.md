Simplest possible demo of using `browserify-shim` with both `jquery` and `jquery.mobile`.

Important stuff is done here: https://gist.github.com/mchelen/a8c5649da6bb50816f7e#file-package-json-L14-L15
And here: https://gist.github.com/mchelen/a8c5649da6bb50816f7e#file-entry-js-L1-L2

Usage:
```
npm install
```

```
browserify -d . > bundle.js
```

Open `index.html` in a browser.


Adapted from: https://github.com/thlorenz/browserify-shim/tree/master/examples/shim-jquery
Reference: https://github.com/thlorenz/browserify-shim#multi-shim-example-including-dependencies

