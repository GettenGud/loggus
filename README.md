# loggus

> This software is heavily under development! Use it at your own risk!

# Getting Started

Logg is meant to get you started logging stuff in a way that won't bite you in the butt if you want to change it later.

To configure it call the module

```js
const logg = require('logg')

logg({
    handlers:{
        error: console.log
        warning: console.log
        reporting: console.log
    }
})
```

You can also provide a list of methods to be handled by the call. To call these methods, require logg and use the following methods:

```js

logg.log(level, msg)
//acceptable values for level:
// "error", "warning", "reporting"

logg.logError(msg)

logg.logWarning(msg)

logg.logReporting(msg)

```

## Integration with CF-GG
Testing this now.