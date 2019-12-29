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


exports.Log = (level, msg) =>
{
    callHandlers(level, msg)
}

exports.LogError = (msg) => {
    callHandlers("error", msg)
}

exports.LogWarning = (msg) => {
    callHandlers("warning", msg)
}

exports.LogReporting = (msg) => {
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