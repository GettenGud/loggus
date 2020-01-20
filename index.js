module.exports = function(options){
    if(options.handler)
    {
        if(options.handler.error)
            handlers.error = options.handler.error
        if(options.handler.warning)
            handlers.warning = options.handler.warning
        if(options.handler.reporting)
            handlers.reporting = options.handler.reporting

    }
}


module.exports.log = (level, msg) =>
{
    callHandlers(level, msg)
}

module.exports.logError = (msg) => {
    callHandlers("error", msg)
}

module.exports.logWarning = (msg) => {
    callHandlers("warning", msg)
}

exports.logReporting = (msg) => {
    callHandlers("reporting", msg)
}


var handlers = {
    error: [ console.log ],
    warning: [ console.log ],
    reporting: [ console.log ]
}

function callHandlers(handle, msg)
{
    handle = handle.toLowerCase();

    if(handlers[handle] != null)
        handlers[handle].forEach( (handler) => {
            handler(msg);
        })
}