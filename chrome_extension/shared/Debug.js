////////////////////////////////////////////////
//   Defines diagnostics  Debug object class 
////////////////////////////////////////////////

/* Debug Levels constants:
    NONE = 0: No debug info
    ERROR = 1: Important Messages
    WARN = 2: Informational Messages
    INFO = 3: Available
    DEBUG = 4: Verbose Debug messages
    TRACE = 5: Show every function call
    VERBOSE = 6: Special case, show "check_for_new_input_fields" as well
*/
const DEBUG_LEVEL = {
    NONE: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    DEBUG:4,
    TRACE: 5,
    VERBOSE:6,
};

/////////////////////////////////////////
//Debug: debug/logger object constructor
///////////////////////////////////////////
function Debug (level){

    this.level = level;
    //Error 
    this.error = function(){};
    if(level >= DEBUG_LEVEL.ERROR) 
             this.error = console.error.bind(window.console);
     //warn 
    this.warn = function(){};
    if(level >= DEBUG_LEVEL.WARN) 
             this.warn = console.warn.bind(window.console);
    //Info 
    this.info = this.log = function(){};
    if(level >= DEBUG_LEVEL.INFO) 
             this.info = this.log = console.log.bind(window.console);
    //Debug 
    this.Debug = function(){};
    if(level >= DEBUG_LEVEL.DEBUG) 
             this.error = console.log.bind(window.console);
    //Trace level
    this.trace = function(){};
    if(level >= DEBUG_LEVEL.TRACE) 
             this.error = console.trace.bind(window.console);
    //Verbose level
    this.verbose = function(){};
    if(level >= DEBUG_LEVEL.VERBOSE) 
             this.error = console.log.bind(window.console);
    //styles
    this.css = function( backgroundColor ) {
        return 'background-color: #' + backgroundColor + '; padding: 3px 10px;';
    }
}
