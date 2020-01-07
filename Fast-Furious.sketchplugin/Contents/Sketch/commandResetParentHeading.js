var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/commandResetParentHeading.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@skpm/child_process/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@skpm/child_process/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.exec = __webpack_require__(/*! ./lib/exec */ "./node_modules/@skpm/child_process/lib/exec.js")
module.exports.execFile = __webpack_require__(/*! ./lib/execFile */ "./node_modules/@skpm/child_process/lib/execFile.js")
module.exports.spawn = __webpack_require__(/*! ./lib/spawn */ "./node_modules/@skpm/child_process/lib/spawn.js")
module.exports.spawnSync = __webpack_require__(/*! ./lib/spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")
module.exports.execFileSync = __webpack_require__(/*! ./lib/execFileSync */ "./node_modules/@skpm/child_process/lib/execFileSync.js")
module.exports.execSync = __webpack_require__(/*! ./lib/execSync */ "./node_modules/@skpm/child_process/lib/execSync.js")


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/exec.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var execFile = __webpack_require__(/*! ./execFile */ "./node_modules/@skpm/child_process/lib/execFile.js")

function normalizeExecArgs(command, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = undefined
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options)
  options.shell = typeof options.shell === 'string' ? options.shell : true

  return {
    file: command,
    options: options,
    callback: callback
  }
}

module.exports = function exec(command, options, callback) {
  var opts = normalizeExecArgs(command, options, callback)
  return execFile(opts.file, opts.options, opts.callback)
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execFile.js":
/*!**********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execFile.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSMutableData, NSData */
var spawn = __webpack_require__(/*! ./spawn */ "./node_modules/@skpm/child_process/lib/spawn.js")
var handleData = __webpack_require__(/*! ./handleData */ "./node_modules/@skpm/child_process/lib/handleData.js")

function validateTimeout(timeout) {
  if (timeout != null && !(Number.isInteger(timeout) && timeout >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.timeout')
  }
}

function validateMaxBuffer(maxBuffer) {
  if (maxBuffer != null && !(typeof maxBuffer === 'number' && maxBuffer >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.maxBuffer')
  }
}

function concatData(prev, data) {
  prev.appendData(data)
  return prev
}

module.exports = function execFile(file, args, options, callback) {
  var defaultOptions = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: undefined,
    env: undefined,
    shell: false
  }

  if (typeof args === 'function') {
    // function (file, callback)
    callback = args
    args = []
    options = defaultOptions
  } else if (typeof args === 'object' && !Array.isArray(args)) {
    // function (file, options, callback)
    callback = options
    options = Object.assign(defaultOptions, args)
    args = []
  } else {
    // function (file, args, options, callback)
    options = Object.assign(defaultOptions, options)
  }

  // Validate the timeout, if present.
  validateTimeout(options.timeout)

  // Validate maxBuffer, if present.
  validateMaxBuffer(options.maxBuffer)

  var child = spawn(file, args, {
    cwd: options.cwd,
    env: options.env,
    gid: options.gid,
    uid: options.uid,
    shell: options.shell
  })

  var encoding = options.encoding
  var _stdout = []
  var _stderr = []

  var stdoutLen = 0
  var stderrLen = 0
  var killed = false
  var exited = false
  var timeoutId

  var ex = null

  var cmd = file

  function exithandler(code, signal) {
    if (exited) return
    exited = true

    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    if (!callback) return

    // merge chunks
    var stdout = handleData(
      NSData.dataWithData(_stdout.reduce(concatData, NSMutableData.data())),
      encoding
    )
    var stderr = handleData(
      NSData.dataWithData(_stderr.reduce(concatData, NSMutableData.data())),
      encoding
    )

    if (!ex && code === 0 && signal === null) {
      callback(null, stdout, stderr)
      return
    }

    if (args.length !== 0) {
      cmd += ' ' + args.join(' ')
    }

    if (!ex) {
      ex = new Error('Command failed: ' + cmd + '\n' + stderr)
      ex.killed = child.killed || killed
      ex.code = code
      ex.signal = signal
    }

    ex.cmd = cmd
    callback(ex, stdout, stderr)
  }

  function errorhandler(e) {
    ex = e

    exithandler()
  }

  function kill() {
    killed = true
    try {
      child.kill(options.killSignal)
    } catch (e) {
      ex = e
      exithandler()
    }
  }

  if (options.timeout > 0) {
    timeoutId = setTimeout(function delayedKill() {
      kill()
      timeoutId = null
    }, options.timeout)
  }

  if (child.stdout) {
    child.stdout.setEncoding('NSData')
    child.stdout.on('data', function onChildStdout(chunk) {
      stdoutLen += chunk.length()
      if (stdoutLen > options.maxBuffer) {
        ex = new Error('ERR_CHILD_PROCESS_STDIO_MAXBUFFER stdout')
        kill()
      } else {
        _stdout.push(chunk)
      }
    })
  }

  if (child.stderr) {
    child.stderr.setEncoding('NSData')
    child.stderr.on('data', function onChildStderr(chunk) {
      stderrLen += chunk.length()

      if (stderrLen > options.maxBuffer) {
        ex = new Error('ERR_CHILD_PROCESS_STDIO_MAXBUFFER stderr')
        kill()
      } else {
        _stderr.push(chunk)
      }
    })
  }

  child.addListener('close', exithandler)
  child.addListener('error', errorhandler)

  return child
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execFileSync.js":
/*!**************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execFileSync.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var spawnSync = __webpack_require__(/*! ./spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")

function validateTimeout(timeout) {
  if (timeout != null && !(Number.isInteger(timeout) && timeout >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.timeout')
  }
}

function validateMaxBuffer(maxBuffer) {
  if (maxBuffer != null && !(typeof maxBuffer === 'number' && maxBuffer >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.maxBuffer')
  }
}

module.exports = function execFileSync(file, args, options) {
  var defaultOptions = {
    encoding: 'buffer',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null,
    shell: false
  }

  if (typeof args === 'object' && !Array.isArray(args)) {
    // function (file, options)
    options = Object.assign(defaultOptions, args)
    args = []
  } else {
    // function (file)
    options = Object.assign(defaultOptions, options || {})
  }

  // Validate the timeout, if present.
  validateTimeout(options.timeout)

  // Validate maxBuffer, if present.
  validateMaxBuffer(options.maxBuffer)

  var child = spawnSync(file, args, {
    cwd: options.cwd,
    env: options.env,
    gid: options.gid,
    uid: options.uid,
    shell: options.shell,
    encoding: options.encoding,
    stdio: ['pipe', 'pipe', 'inherit']
  })

  if (child.status !== 0) {
    var error = new Error('Failed to run: ' + String(child.stderr))
    error.pid = child.pid
    error.status = child.status
    error.stdout = child.stdout
    error.stderr = child.stderr
    throw error
  }

  return child.stdout
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execSync.js":
/*!**********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execSync.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var execFileSync = __webpack_require__(/*! ./execFileSync */ "./node_modules/@skpm/child_process/lib/execFileSync.js")

function normalizeExecArgs(command, options) {
  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options)
  options.shell = typeof options.shell === 'string' ? options.shell : true

  return {
    file: command,
    options: options
  }
}

module.exports = function execSync(command, options) {
  var opts = normalizeExecArgs(command, options)
  return execFileSync(opts.file, opts.options)
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/handleData.js":
/*!************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/handleData.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer

function handleBuffer(buffer, encoding) {
  if (encoding === 'buffer') {
    return buffer
  }
  if (encoding === 'NSData') {
    return buffer.toNSData()
  }
  return buffer.toString(encoding)
}

module.exports = function handleData(data, encoding) {
  var buffer = Buffer.from(data)

  return handleBuffer(buffer, encoding)
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function normalizeSpawnArguments(file, args, options) {
  if (typeof file !== 'string' || file.length === 0) {
    throw new Error('ERR_INVALID_ARG_TYPE')
  }

  if (Array.isArray(args)) {
    args = args.slice(0)
  } else if (
    args !== undefined &&
    (args === null || typeof args !== 'object')
  ) {
    throw new Error('ERR_INVALID_ARG_TYPE args')
  } else {
    options = args
    args = []
  }

  if (options === undefined) {
    options = {}
  } else if (options === null || typeof options !== 'object') {
    throw new Error('ERR_INVALID_ARG_TYPE options')
  }

  // Validate the cwd, if present.
  if (options.cwd != null && typeof options.cwd !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.cwd')
  }

  // Validate detached, if present.
  if (options.detached != null && typeof options.detached !== 'boolean') {
    throw new Error('ERR_INVALID_ARG_TYPE options.detached')
  }

  // Validate the uid, if present.
  if (options.uid != null && !Number.isInteger(options.uid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.uid')
  }

  // Validate the gid, if present.
  if (options.gid != null && !Number.isInteger(options.gid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.gid')
  }

  // Validate the shell, if present.
  if (
    options.shell != null &&
    typeof options.shell !== 'boolean' &&
    typeof options.shell !== 'string'
  ) {
    throw new Error('ERR_INVALID_ARG_TYPE options.shell')
  }

  // Validate argv0, if present.
  if (options.argv0 != null && typeof options.argv0 !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.argv0')
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options)

  if (options.shell) {
    var command = [file].concat(args).join(' ')

    if (typeof options.shell === 'string') {
      file = options.shell
    } else {
      file = '/bin/bash'
    }
    args = ['-l', '-c', command]
  }

  if (typeof options.argv0 === 'string') {
    args.unshift(options.argv0)
  }

  var stdio = ['pipe', 'pipe', 'pipe']

  if (typeof options.stdio === 'string') {
    if (options.stdio === 'inherit') {
      stdio = [0, 1, 2]
    } else {
      stdio = [options.stdio, options.stdio, options.stdio]
    }
  } else if (Array.isArray(options.stdio)) {
    if (options.stdio[0] || options.stdio[0] === 0) {
      if (options.stdio[0] === 'inherit') {
        stdio[0] = 0
      } else {
        stdio[0] = options.stdio[0]
      }
    }
    if (options.stdio[1] || options.stdio[1] === 0) {
      if (options.stdio[1] === 'inherit') {
        stdio[1] = 1
      } else {
        stdio[1] = options.stdio[1]
      }
    }
    if (options.stdio[2] || options.stdio[2] === 0) {
      if (options.stdio[2] === 'inherit') {
        stdio[2] = 2
      } else {
        stdio[2] = options.stdio[2]
      }
    }
  }

  var env = options.env

  return {
    file: file,
    args: args,
    options: options,
    envPairs: env,
    stdio: stdio
  }
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/spawn.js":
/*!*******************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/spawn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {/* globals NSPipe, NSTask, NSArray, NSString, coscript, __mocha__ */
var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer
var EventEmitter = __webpack_require__(/*! events */ "events")
var Readable = __webpack_require__(/*! stream */ "stream").Readable
var Writable = __webpack_require__(/*! stream */ "stream").Writable

var spawnSync = __webpack_require__(/*! ./spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")
var normalizeSpawnArguments = __webpack_require__(/*! ./normalizeSpawnArguments */ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js")

module.exports = function spawn(_command, _args, _options) {
  var opts = normalizeSpawnArguments(_command, _args, _options)

  var result = new EventEmitter()

  if (opts.file[0] !== '.' && opts.file[0] !== '/' && opts.file[0] !== '~') {
    // means that someone refered to an executable that might be in the path, let's find it
    var whichChild = spawnSync(
      '/bin/bash',
      ['-l', '-c', 'which ' + opts.file],
      { encoding: 'utf8' }
    )
    var resolvedCommand = String(whichChild.stdout || '').trim()
    if (whichChild.err || !resolvedCommand.length) {
      result.stderr = new EventEmitter()
      result.stdout = new EventEmitter()

      result.pid = '-1'

      result.stderr.setEncoding = function setEncoding(encoding) {
        result.stderr.encoding = encoding
      }
      result.stdout.setEncoding = function setEncoding(encoding) {
        result.stdout.encoding = encoding
      }
      if (!resolvedCommand.length) {
        result.emit('error', new Error(String(opts.file) + ' ENOENT'))
      } else {
        result.emit('error', whichChild.err)
      }
      return result
    }
    return spawn(resolvedCommand, _args, _options)
  }

  var options = opts.options

  result.killed = false

  var fiber = coscript.createFiber()

  var task
  var signal = null

  var readingStderr = false
  var readingStdout = false

  result.stderr = new Readable({
    read: function read() {
      readingStderr = true
    }
  })
  result.stdout = new Readable({
    read: function read() {
      readingStdout = true
    }
  })

  function onStdout(data) {
    if (data && data.length() && readingStdout) {
      if (!result.stdout.push(Buffer.from(data))) {
        readingStdout = false
        task
          .standardOutput()
          .fileHandleForReading()
          .setReadabilityHandler(null)
      }
    }
  }
  function onStderr(data) {
    if (data && data.length() && readingStderr) {
      if (!result.stderr.push(Buffer.from(data))) {
        readingStderr = false
        task
          .standardError()
          .fileHandleForReading()
          .setReadabilityHandler(null)
      }
    }
  }

  result.sdtin = new Writable({
    write: function write(chunk, encoding, callback) {
      task
        .standardInput()
        .fileHandleForWriting()
        .writeData(chunk.toNSData())
      callback()
    },
    final: function finish(callback) {
      task
        .standardInput()
        .fileHandleForWriting()
        .closeFile()
      callback()
    }
  })

  result.sdtio = [result.sdtin, result.sdtout, result.sdterr]

  try {
    task = NSTask.alloc().init()

    var inPipe = NSPipe.pipe()
    var pipe = NSPipe.pipe()
    var errPipe = NSPipe.pipe()

    task.setStandardInput(inPipe)
    task.setStandardOutput(pipe)
    task.setStandardError(errPipe)

    task
      .standardOutput()
      .fileHandleForReading()
      .setReadabilityHandler(
        __mocha__.createBlock_function(
          'v16@?0@"NSFileHandle"8',
          function readStdOut(fileHandle) {
            try {
              onStdout(fileHandle.availableData())
            } catch (err) {
              if (
                typeof process !== 'undefined' &&
                process.listenerCount &&
                process.listenerCount('uncaughtException')
              ) {
                process.emit('uncaughtException', err, 'uncaughtException')
              } else {
                console.error(err)
              }
            }
          }
        )
      )
    task
      .standardError()
      .fileHandleForReading()
      .setReadabilityHandler(
        __mocha__.createBlock_function(
          'v16@?0@"NSFileHandle"8',
          function readStdOut(fileHandle) {
            try {
              onStderr(fileHandle.availableData())
            } catch (err) {
              if (
                typeof process !== 'undefined' &&
                process.listenerCount &&
                process.listenerCount('uncaughtException')
              ) {
                process.emit('uncaughtException', err, 'uncaughtException')
              } else {
                console.error(err)
              }
            }
          }
        )
      )

    task.setLaunchPath(
      NSString.stringWithString(opts.file).stringByExpandingTildeInPath()
    )
    task.arguments = NSArray.arrayWithArray(opts.args || [])
    if (opts.envPairs) {
      task.environment = opts.envPairs
    }
    if (options.cwd) {
      task.setCurrentDirectoryPath(
        NSString.stringWithString(options.cwd).stringByExpandingTildeInPath()
      )
    }

    task.setTerminationHandler(
      __mocha__.createBlock_function(
        'v16@?0@"NSTask"8',
        function handleTermination(_task) {
          try {
            _task
              .standardError()
              .fileHandleForReading()
              .setReadabilityHandler(null)
            _task
              .standardOutput()
              .fileHandleForReading()
              .setReadabilityHandler(null)
            result.stderr.emit('close')
            result.stdout.emit('close')

            result.killed = true

            result.emit('close', Number(_task.terminationStatus()), signal)
          } catch (err) {
            if (
              typeof process !== 'undefined' &&
              process.listenerCount &&
              process.listenerCount('uncaughtException')
            ) {
              process.emit('uncaughtException', err, 'uncaughtException')
            } else {
              console.error(err)
            }
          }
          fiber.cleanup()
        }
      )
    )

    setImmediate(() => task.launch())
  } catch (err) {
    fiber.cleanup()
    result.emit('error', err)
    return result
  }

  result.kill = function kill(_signal) {
    if (!result.killed) {
      signal = _signal
      task.terminate()
    }
  }

  result.pid = String(task.processIdentifier())

  return result
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/spawnSync.js":
/*!***********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/spawnSync.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSPipe, NSTask, NSArray, NSString */
var handleData = __webpack_require__(/*! ./handleData */ "./node_modules/@skpm/child_process/lib/handleData.js")
var normalizeSpawnArguments = __webpack_require__(/*! ./normalizeSpawnArguments */ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js")

function spawnSync(_command, _args, _options) {
  var opts = normalizeSpawnArguments(_command, _args, _options)

  if (opts.file[0] !== '.' && opts.file[0] !== '/' && opts.file[0] !== '~') {
    // means that someone refered to an executable that might be in the path, let's find it
    var whichChild = spawnSync(
      '/bin/bash',
      ['-l', '-c', 'which ' + opts.file],
      { encoding: 'utf8' }
    )
    if (whichChild.err) {
      return whichChild
    }
    var resolvedCommand = String(whichChild.stdout).trim()
    if (!resolvedCommand.length) {
      return {
        err: new Error(String(opts.file) + ' ENOENT')
      }
    }
    return spawnSync(resolvedCommand, _args, _options)
  }

  var options = opts.options

  var pipe = NSPipe.pipe()
  var errPipe = NSPipe.pipe()

  try {
    var task = NSTask.alloc().init()
    task.setLaunchPath(
      NSString.stringWithString(opts.file).stringByExpandingTildeInPath()
    )
    task.arguments = NSArray.arrayWithArray(opts.args || [])
    if (opts.envPairs) {
      task.environment = opts.envPairs
    }

    if (options.cwd) {
      task.setCurrentDirectoryPath(
        NSString.stringWithString(options.cwd).stringByExpandingTildeInPath()
      )
    }

    task.setStandardOutput(pipe)
    task.setStandardError(errPipe)

    task.launch()
    task.waitUntilExit()

    var stdoutIgnored = false
    var stderrIgnored = false

    var data
    var stdoutValue
    var stderrValue

    if (opts.stdio[1] === 'ignored') {
      stdoutIgnored = true
    } else if (opts.stdio[1] === 1) {
      data = pipe.fileHandleForReading().readDataToEndOfFile()
      stdoutValue = handleData(data, options.encoding || 'buffer')
      console.log(stdoutValue)
    } else if (opts.stdio[1] === 2) {
      data = pipe.fileHandleForReading().readDataToEndOfFile()
      stdoutValue = handleData(data, options.encoding || 'buffer')
      console.error(stdoutValue)
    }

    if (opts.stdio[2] === 'ignored') {
      stderrIgnored = true
    } else if (opts.stdio[2] === 1) {
      data = errPipe.fileHandleForReading().readDataToEndOfFile()
      stderrValue = handleData(data, options.encoding || 'buffer')
      console.log(stderrValue)
    } else if (opts.stdio[2] === 2) {
      data = errPipe.fileHandleForReading().readDataToEndOfFile()
      stderrValue = handleData(data, options.encoding || 'buffer')
      console.error(stderrValue)
    }

    return {
      pid: String(task.processIdentifier()),
      status: Number(task.terminationStatus()),
      get stdout() {
        if (stdoutIgnored) {
          return null
        }
        if (stdoutValue) {
          return stdoutValue
        }
        data = pipe.fileHandleForReading().readDataToEndOfFile()
        return handleData(data, options.encoding || 'buffer')
      },
      get stderr() {
        if (stderrIgnored) {
          return null
        }
        if (stderrValue) {
          return stdoutValue
        }
        data = errPipe.fileHandleForReading().readDataToEndOfFile()
        return handleData(data, options.encoding || 'buffer')
      }
    }
  } catch (err) {
    return {
      err: err
    }
  }
}

module.exports = spawnSync


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* let's try to match the API from Electron's Dialog
(https://github.com/electron/electron/blob/master/docs/api/dialog.md) */

module.exports = {
  showOpenDialog: __webpack_require__(/*! ./open-dialog */ "./node_modules/@skpm/dialog/lib/open-dialog.js").openDialog,
  showOpenDialogSync: __webpack_require__(/*! ./open-dialog */ "./node_modules/@skpm/dialog/lib/open-dialog.js").openDialogSync,
  showSaveDialog: __webpack_require__(/*! ./save-dialog */ "./node_modules/@skpm/dialog/lib/save-dialog.js").saveDialog,
  showSaveDialogSync: __webpack_require__(/*! ./save-dialog */ "./node_modules/@skpm/dialog/lib/save-dialog.js").saveDialogSync,
  showMessageBox: __webpack_require__(/*! ./message-box */ "./node_modules/@skpm/dialog/lib/message-box.js").messageBox,
  showMessageBoxSync: __webpack_require__(/*! ./message-box */ "./node_modules/@skpm/dialog/lib/message-box.js").messageBoxSync,
  // showErrorBox: require('./error-box'),
}


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/message-box.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/message-box.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/dialog/lib/utils.js")

var typeMap = {
  none: 0,
  info: 1,
  error: 2,
  question: 1,
  warning: 2,
}

function setupOptions(document, options) {
  if (
    !document ||
    (typeof document.isKindOfClass !== 'function' && !document.sketchObject)
  ) {
    options = document
    document = undefined
  } else if (document.sketchObject) {
    document = document.sketchObject
  }
  if (!options) {
    options = {}
  }

  var dialog = NSAlert.alloc().init()

  if (options.type) {
    dialog.alertStyle = typeMap[options.type] || 0
  }

  if (options.buttons && options.buttons.length) {
    options.buttons.forEach(function addButton(button) {
      dialog.addButtonWithTitle(
        options.normalizeAccessKeys ? button.replace(/&/g, '') : button
      )
      // TODO: add keyboard shortcut if options.normalizeAccessKeys
    })
  }

  if (typeof options.defaultId !== 'undefined') {
    var buttons = dialog.buttons()
    if (options.defaultId < buttons.length) {
      // Focus the button at defaultId if the user opted to do so.
      // The first button added gets set as the default selected.
      // So remove that default, and make the requested button the default.
      buttons[0].setKeyEquivalent('')
      buttons[options.defaultId].setKeyEquivalent('\r')
    }
  }

  if (options.title) {
    // not shown on macOS
  }

  if (options.message) {
    dialog.messageText = options.message
  }

  if (options.detail) {
    dialog.informativeText = options.detail
  }

  if (options.checkboxLabel) {
    dialog.showsSuppressionButton = true
    dialog.suppressionButton().title = options.checkboxLabel

    if (typeof options.checkboxChecked !== 'undefined') {
      dialog.suppressionButton().state = options.checkboxChecked
        ? NSOnState
        : NSOffState
    }
  }

  if (options.icon) {
    if (typeof options.icon === 'string') {
      options.icon = NSImage.alloc().initWithContentsOfFile(options.icon)
    }
    dialog.icon = options.icon
  } else if (
    typeof __command !== 'undefined' &&
    __command.pluginBundle() &&
    __command.pluginBundle().icon()
  ) {
    dialog.icon = __command.pluginBundle().icon()
  } else {
    var icon = NSImage.imageNamed('plugins')
    if (icon) {
      dialog.icon = icon
    }
  }

  return {
    document: document,
    options: options,
    dialog: dialog,
  }
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowmessageboxbrowserwindow-options
module.exports.messageBox = function messageBox(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialog(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      return {
        response:
          setup.options.buttons && setup.options.buttons.length
            ? Number(returnCode) - 1000
            : Number(returnCode),
        checkboxChecked: _dialog.suppressionButton().state() == NSOnState,
      }
    },
    setup.document
  )
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowmessageboxsyncbrowserwindow-options
module.exports.messageBoxSync = function messageBoxSync(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialogSync(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      return setup.options.buttons && setup.options.buttons.length
        ? Number(returnCode) - 1000
        : Number(returnCode)
    },
    setup.document
  )
}


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/open-dialog.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/open-dialog.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/dialog/lib/utils.js")

function setupOptions(document, options) {
  if (
    !document ||
    (typeof document.isKindOfClass !== 'function' && !document.sketchObject)
  ) {
    options = document
    document = undefined
  }
  if (!options) {
    options = {}
  }

  var dialog = NSOpenPanel.openPanel()

  if (options.title) {
    dialog.title = options.title
  }

  if (options.defaultPath) {
    dialog.setDirectoryURL(utils.getURL(options.defaultPath))
  }

  if (options.buttonLabel) {
    dialog.prompt = options.buttonLabel
  }

  if (options.filters && options.filters.length) {
    var exts = []
    options.filters.forEach(function setFilter(filter) {
      filter.extensions.forEach(function setExtension(ext) {
        exts.push(ext)
      })
    })

    dialog.allowedFileTypes = exts
  }

  var hasProperty =
    Array.isArray(options.properties) && options.properties.length > 0
  dialog.canChooseFiles =
    hasProperty && options.properties.indexOf('openFile') !== -1
  dialog.canChooseDirectories =
    hasProperty && options.properties.indexOf('openDirectory') !== -1
  dialog.allowsMultipleSelection =
    hasProperty && options.properties.indexOf('multiSelections') !== -1
  dialog.showsHiddenFiles =
    hasProperty && options.properties.indexOf('showHiddenFiles') !== -1
  dialog.canCreateDirectories =
    hasProperty && options.properties.indexOf('createDirectory') !== -1
  dialog.resolvesAliases =
    !hasProperty || options.properties.indexOf('noResolveAliases') === -1
  dialog.treatsFilePackagesAsDirectories =
    hasProperty && options.properties.indexOf('treatPackageAsDirectory') !== -1

  if (options.message) {
    dialog.message = options.message
  }

  return {
    document: document,
    options: options,
    dialog: dialog,
  }
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowopendialogbrowserwindow-options
module.exports.openDialog = function openDialog(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialog(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      if (returnCode != NSOKButton) {
        return {
          canceled: true,
          filePaths: [],
        }
      }
      var result = []
      var urls = _dialog.URLs()
      for (var k = 0; k < urls.length; k += 1) {
        result.push(String(urls[k].path()))
      }
      return {
        canceled: false,
        filePaths: result,
      }
    },
    setup.document
  )
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowopendialogsyncbrowserwindow-options
module.exports.openDialogSync = function openDialogSync(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialogSync(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      if (returnCode != NSOKButton) {
        return []
      }
      var result = []
      var urls = _dialog.URLs()
      for (var k = 0; k < urls.length; k += 1) {
        result.push(String(urls[k].path()))
      }
      return result
    },
    setup.document
  )
}


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/save-dialog.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/save-dialog.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/dialog/lib/utils.js")

function setupOptions(document, options) {
  if (
    !document ||
    (typeof document.isKindOfClass !== 'function' && !document.sketchObject)
  ) {
    options = document
    document = undefined
  }
  if (!options) {
    options = {}
  }

  var dialog = NSSavePanel.savePanel()

  if (options.title) {
    dialog.title = options.title
  }

  if (options.defaultPath) {
    // that's a path
    dialog.setDirectoryURL(utils.getURL(options.defaultPath))

    if (
      options.defaultPath[0] === '.' ||
      options.defaultPath[0] === '~' ||
      options.defaultPath[0] === '/'
    ) {
      var parts = options.defaultPath.split('/')
      if (parts.length > 1 && parts[parts.length - 1]) {
        dialog.setNameFieldStringValue(parts[parts.length - 1])
      }
    } else {
      dialog.setNameFieldStringValue(options.defaultPath)
    }
  }

  if (options.buttonLabel) {
    dialog.prompt = options.buttonLabel
  }

  if (options.filters && options.filters.length) {
    var exts = []
    options.filters.forEach(function setFilter(filter) {
      filter.extensions.forEach(function setExtension(ext) {
        exts.push(ext)
      })
    })

    dialog.allowedFileTypes = exts
  }

  if (options.message) {
    dialog.message = options.message
  }

  if (options.nameFieldLabel) {
    dialog.nameFieldLabel = options.nameFieldLabel
  }

  if (options.showsTagField) {
    dialog.showsTagField = options.showsTagField
  }

  return {
    document: document,
    options: options,
    dialog: dialog,
  }
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowsavedialogbrowserwindow-options
module.exports.saveDialog = function saveDialog(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialog(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      return {
        canceled: returnCode != NSOKButton,
        filePath:
          returnCode == NSOKButton ? String(_dialog.URL().path()) : undefined,
      }
    },
    setup.document
  )
}

// https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowsavedialogsyncbrowserwindow-options
module.exports.saveDialogSync = function saveDialogSync(document, options) {
  var setup = setupOptions(document, options)

  return utils.runDialogSync(
    setup.dialog,
    function getResult(_dialog, returnCode) {
      return returnCode == NSOKButton ? String(_dialog.URL().path()) : undefined
    },
    setup.document
  )
}


/***/ }),

/***/ "./node_modules/@skpm/dialog/lib/utils.js":
/*!************************************************!*\
  !*** ./node_modules/@skpm/dialog/lib/utils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {module.exports.getURL = function getURL(path) {
  return NSURL.URLWithString(
    String(
      NSString.stringWithString(path).stringByExpandingTildeInPath()
    ).replace(/ /g, '%20')
  )
}

module.exports.runDialog = function runDialog(dialog, getResult, document) {
  if (!document) {
    var returnCode = dialog.runModal()
    return Promise.resolve(getResult(dialog, returnCode))
  }

  var fiber = coscript.createFiber()

  var window = (document.sketchObject || document).documentWindow()

  return new Promise(function p(resolve, reject) {
    dialog.beginSheetModalForWindow_completionHandler(
      window,
      __mocha__.createBlock_function('v16@?0q8', function onCompletion(
        _returnCode
      ) {
        try {
          resolve(getResult(dialog, _returnCode))
        } catch (err) {
          reject(err)
        }
        NSApp.endSheet(dialog)
        if (fiber) {
          fiber.cleanup()
        } else {
          coscript.shouldKeepAround = false
        }
      })
    )
  })
}

module.exports.runDialogSync = function runDialog(dialog, getResult, document) {
  var returnCode

  if (!document) {
    returnCode = dialog.runModal()
    return getResult(dialog, returnCode)
  }

  var window = (document.sketchObject || document).documentWindow()

  dialog.beginSheetModalForWindow_completionHandler(
    window,
    __mocha__.createBlock_function('v16@?0q8', function onCompletion(
      _returnCode
    ) {
      NSApp.stopModalWithCode(_returnCode)
    })
  )

  returnCode = NSApp.runModalForWindow(window)
  NSApp.endSheet(dialog)
  return getResult(dialog, returnCode)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js")))

/***/ }),

/***/ "./node_modules/@skpm/fs/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: async. Should probably be done with NSFileHandle and some notifications
// TODO: file descriptor. Needs to be done with NSFileHandle
var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer;
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/fs/utils.js");
var parseStat = utils.parseStat;
var fsError = utils.fsError;
var fsErrorForPath = utils.fsErrorForPath;
var encodingFromOptions = utils.encodingFromOptions;
var NOT_IMPLEMENTED = utils.NOT_IMPLEMENTED;

module.exports.constants = {
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1
};

module.exports.access = NOT_IMPLEMENTED("access");

module.exports.accessSync = function(path, mode) {
  mode = mode | 0;
  var fileManager = NSFileManager.defaultManager();

  switch (mode) {
    case 0:
      canAccess = module.exports.existsSync(path);
      break;
    case 1:
      canAccess = Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
    case 2:
      canAccess = Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 3:
      canAccess =
        Boolean(Number(fileManager.isExecutableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 4:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path)));
      break;
    case 5:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
    case 6:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 7:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path))) &&
        Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
  }

  if (!canAccess) {
    throw new Error("Can't access " + String(path));
  }
};

module.exports.appendFile = NOT_IMPLEMENTED("appendFile");

module.exports.appendFileSync = function(file, data, options) {
  if (!module.exports.existsSync(file)) {
    return module.exports.writeFileSync(file, data, options);
  }

  var handle = NSFileHandle.fileHandleForWritingAtPath(file);
  handle.seekToEndOfFile();

  var encoding = encodingFromOptions(options, "utf8");

  var nsdata = Buffer.from(
    data,
    encoding === "NSData" || encoding === "buffer" ? undefined : encoding
  ).toNSData();

  handle.writeData(nsdata);
};

module.exports.chmod = NOT_IMPLEMENTED("chmod");

module.exports.chmodSync = function(path, mode) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.setAttributes_ofItemAtPath_error(
    {
      NSFilePosixPermissions: mode
    },
    path,
    err
  );

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }
};

module.exports.chown = NOT_IMPLEMENTED("chown");
module.exports.chownSync = NOT_IMPLEMENTED("chownSync");

module.exports.close = NOT_IMPLEMENTED("close");
module.exports.closeSync = NOT_IMPLEMENTED("closeSync");

module.exports.copyFile = NOT_IMPLEMENTED("copyFile");

module.exports.copyFileSync = function(path, dest, flags) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.copyItemAtPath_toPath_error(path, dest, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, false, err.value());
  }
};

module.exports.createReadStream = NOT_IMPLEMENTED("createReadStream");
module.exports.createWriteStream = NOT_IMPLEMENTED("createWriteStream");

module.exports.exists = NOT_IMPLEMENTED("exists");

module.exports.existsSync = function(path) {
  var fileManager = NSFileManager.defaultManager();
  return Boolean(Number(fileManager.fileExistsAtPath(path)));
};

module.exports.fchmod = NOT_IMPLEMENTED("fchmod");
module.exports.fchmodSync = NOT_IMPLEMENTED("fchmodSync");
module.exports.fchown = NOT_IMPLEMENTED("fchown");
module.exports.fchownSync = NOT_IMPLEMENTED("fchownSync");
module.exports.fdatasync = NOT_IMPLEMENTED("fdatasync");
module.exports.fdatasyncSync = NOT_IMPLEMENTED("fdatasyncSync");
module.exports.fstat = NOT_IMPLEMENTED("fstat");
module.exports.fstatSync = NOT_IMPLEMENTED("fstatSync");
module.exports.fsync = NOT_IMPLEMENTED("fsync");
module.exports.fsyncSync = NOT_IMPLEMENTED("fsyncSync");
module.exports.ftruncate = NOT_IMPLEMENTED("ftruncate");
module.exports.ftruncateSync = NOT_IMPLEMENTED("ftruncateSync");
module.exports.futimes = NOT_IMPLEMENTED("futimes");
module.exports.futimesSync = NOT_IMPLEMENTED("futimesSync");

module.exports.lchmod = NOT_IMPLEMENTED("lchmod");
module.exports.lchmodSync = NOT_IMPLEMENTED("lchmodSync");
module.exports.lchown = NOT_IMPLEMENTED("lchown");
module.exports.lchownSync = NOT_IMPLEMENTED("lchownSync");

module.exports.link = NOT_IMPLEMENTED("link");

module.exports.linkSync = function(existingPath, newPath) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.linkItemAtPath_toPath_error(existingPath, newPath, err);

  if (err.value() !== null) {
    throw fsErrorForPath(existingPath, undefined, err.value());
  }
};

module.exports.lstat = NOT_IMPLEMENTED("lstat");

module.exports.lstatSync = function(path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.attributesOfItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }

  return parseStat(result);
};

module.exports.mkdir = NOT_IMPLEMENTED("mkdir");

module.exports.mkdirSync = function(path, options) {
  var mode = 0o777;
  var recursive = false;
  if (options && options.mode) {
    mode = options.mode;
  }
  if (options && options.recursive) {
    recursive = options.recursive;
  }
  if (typeof options === "number") {
    mode = options;
  }
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(
    path,
    recursive,
    {
      NSFilePosixPermissions: mode
    },
    err
  );

  if (err.value() !== null) {
    throw new Error(err.value());
  }
};

module.exports.mkdtemp = NOT_IMPLEMENTED("mkdtemp");

module.exports.mkdtempSync = function(path) {
  function makeid() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  var tempPath = path + makeid();
  module.exports.mkdirSync(tempPath);
  return tempPath;
};

module.exports.open = NOT_IMPLEMENTED("open");
module.exports.openSync = NOT_IMPLEMENTED("openSync");

module.exports.read = NOT_IMPLEMENTED("read");

module.exports.readdir = NOT_IMPLEMENTED("readdir");

module.exports.readdirSync = function(path, options) {
  var encoding = encodingFromOptions(options, "utf8");
  var fileManager = NSFileManager.defaultManager();
  var paths = fileManager.subpathsAtPath(path);
  var arr = [];
  for (var i = 0; i < paths.length; i++) {
    var pathName = paths[i];
    arr.push(encoding === "buffer" ? Buffer.from(pathName) : String(pathName));
  }
  return arr;
};

module.exports.readFile = NOT_IMPLEMENTED("readFile");

module.exports.readFileSync = function(path, options) {
  var encoding = encodingFromOptions(options, "buffer");
  var fileManager = NSFileManager.defaultManager();
  var data = fileManager.contentsAtPath(path);
  if (!data) {
    throw fsErrorForPath(path, false);
  }

  var buffer = Buffer.from(data);

  if (encoding === "buffer") {
    return buffer;
  } else if (encoding === "NSData") {
    return buffer.toNSData();
  } else {
    return buffer.toString(encoding);
  }
};

module.exports.readlink = NOT_IMPLEMENTED("readlink");

module.exports.readlinkSync = function(path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.destinationOfSymbolicLinkAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }

  return String(result);
};

module.exports.readSync = NOT_IMPLEMENTED("readSync");

module.exports.realpath = NOT_IMPLEMENTED("realpath");
module.exports.realpath.native = NOT_IMPLEMENTED("realpath.native");

module.exports.realpathSync = function(path) {
  return String(NSString.stringWithString(path).stringByResolvingSymlinksInPath());
};

module.exports.realpathSync.native = NOT_IMPLEMENTED("realpathSync.native");

module.exports.rename = NOT_IMPLEMENTED("rename");

module.exports.renameSync = function(oldPath, newPath) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.moveItemAtPath_toPath_error(oldPath, newPath, err);

  var error = err.value();

  if (error !== null) {
    // if there is already a file, we need to overwrite it
    if (
      String(error.domain()) === "NSCocoaErrorDomain" &&
      Number(error.code()) === 516
    ) {
      var err2 = MOPointer.alloc().init();
      fileManager.replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(
        NSURL.fileURLWithPath(newPath),
        NSURL.fileURLWithPath(oldPath),
        null,
        NSFileManagerItemReplacementUsingNewMetadataOnly,
        null,
        err2
      );
      if (err2.value() !== null) {
        throw fsErrorForPath(oldPath, undefined, err2.value());
      }
    } else {
      throw fsErrorForPath(oldPath, undefined, error);
    }
  }
};

module.exports.rmdir = NOT_IMPLEMENTED("rmdir");

module.exports.rmdirSync = function(path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var isDirectory = module.exports.lstatSync(path).isDirectory();
  if (!isDirectory) {
    throw fsError("ENOTDIR", {
      path: path,
      syscall: "rmdir"
    });
  }
  fileManager.removeItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, true, err.value(), "rmdir");
  }
};

module.exports.stat = NOT_IMPLEMENTED("stat");

// the only difference with lstat is that we resolve symlinks
//
// > lstat() is identical to stat(), except that if pathname is a symbolic
// > link, then it returns information about the link itself, not the file
// > that it refers to.
// http://man7.org/linux/man-pages/man2/lstat.2.html
module.exports.statSync = function(path) {
  return module.exports.lstatSync(module.exports.realpathSync(path));
};

module.exports.symlink = NOT_IMPLEMENTED("symlink");

module.exports.symlinkSync = function(target, path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.createSymbolicLinkAtPath_withDestinationPath_error(
    path,
    target,
    err
  );

  if (err.value() !== null) {
    throw new Error(err.value());
  }
};

module.exports.truncate = NOT_IMPLEMENTED("truncate");

module.exports.truncateSync = function(path, len) {
  var hFile = NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);
  hFile.truncateFileAtOffset(len || 0);
  hFile.closeFile();
};

module.exports.unlink = NOT_IMPLEMENTED("unlink");

module.exports.unlinkSync = function(path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var isDirectory = module.exports.lstatSync(path).isDirectory();
  if (isDirectory) {
    throw fsError("EPERM", {
      path: path,
      syscall: "unlink"
    });
  }
  var result = fileManager.removeItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, false, err.value());
  }
};

module.exports.unwatchFile = NOT_IMPLEMENTED("unwatchFile");

module.exports.utimes = NOT_IMPLEMENTED("utimes");

module.exports.utimesSync = function(path, aTime, mTime) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.setAttributes_ofItemAtPath_error(
    {
      NSFileModificationDate: aTime
    },
    path,
    err
  );

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }
};

module.exports.watch = NOT_IMPLEMENTED("watch");
module.exports.watchFile = NOT_IMPLEMENTED("watchFile");

module.exports.write = NOT_IMPLEMENTED("write");

module.exports.writeFile = NOT_IMPLEMENTED("writeFile");

module.exports.writeFileSync = function(path, data, options) {
  var encoding = encodingFromOptions(options, "utf8");

  var nsdata = Buffer.from(
    data,
    encoding === "NSData" || encoding === "buffer" ? undefined : encoding
  ).toNSData();

  nsdata.writeToFile_atomically(path, true);
};

module.exports.writeSync = NOT_IMPLEMENTED("writeSync");


/***/ }),

/***/ "./node_modules/@skpm/fs/utils.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/utils.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.parseStat = function parseStat(result) {
  return {
    dev: String(result.NSFileDeviceIdentifier),
    // ino: 48064969, The file system specific "Inode" number for the file.
    mode: result.NSFileType | result.NSFilePosixPermissions,
    nlink: Number(result.NSFileReferenceCount),
    uid: String(result.NSFileOwnerAccountID),
    gid: String(result.NSFileGroupOwnerAccountID),
    // rdev: 0, A numeric device identifier if the file is considered "special".
    size: Number(result.NSFileSize),
    // blksize: 4096, The file system block size for i/o operations.
    // blocks: 8, The number of blocks allocated for this file.
    atimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    mtimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    ctimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    birthtimeMs:
      Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000,
    atime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ), // the 0.5 comes from the node source. Not sure why it's added but in doubt...
    mtime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    ctime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    birthtime: new Date(
      Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    isBlockDevice: function() {
      return result.NSFileType === NSFileTypeBlockSpecial;
    },
    isCharacterDevice: function() {
      return result.NSFileType === NSFileTypeCharacterSpecial;
    },
    isDirectory: function() {
      return result.NSFileType === NSFileTypeDirectory;
    },
    isFIFO: function() {
      return false;
    },
    isFile: function() {
      return result.NSFileType === NSFileTypeRegular;
    },
    isSocket: function() {
      return result.NSFileType === NSFileTypeSocket;
    },
    isSymbolicLink: function() {
      return result.NSFileType === NSFileTypeSymbolicLink;
    }
  };
};

var ERRORS = {
  EPERM: {
    message: "operation not permitted",
    errno: -1
  },
  ENOENT: {
    message: "no such file or directory",
    errno: -2
  },
  EACCES: {
    message: "permission denied",
    errno: -13
  },
  ENOTDIR: {
    message: "not a directory",
    errno: -20
  },
  EISDIR: {
    message: "illegal operation on a directory",
    errno: -21
  }
};

function fsError(code, options) {
  var error = new Error(
    code +
      ": " +
      ERRORS[code].message +
      ", " +
      (options.syscall || "") +
      (options.path ? " '" + options.path + "'" : "")
  );

  Object.keys(options).forEach(function(k) {
    error[k] = options[k];
  });

  error.code = code;
  error.errno = ERRORS[code].errno;

  return error;
}

module.exports.fsError = fsError;

module.exports.fsErrorForPath = function fsErrorForPath(
  path,
  shouldBeDir,
  err,
  syscall
) {
  var fileManager = NSFileManager.defaultManager();
  var doesExist = fileManager.fileExistsAtPath(path);
  if (!doesExist) {
    return fsError("ENOENT", {
      path: path,
      syscall: syscall || "open"
    });
  }
  var isReadable = fileManager.isReadableFileAtPath(path);
  if (!isReadable) {
    return fsError("EACCES", {
      path: path,
      syscall: syscall || "open"
    });
  }
  if (typeof shouldBeDir !== "undefined") {
    var isDirectory = module.exports.lstatSync(path).isDirectory();
    if (isDirectory && !shouldBeDir) {
      return fsError("EISDIR", {
        path: path,
        syscall: syscall || "read"
      });
    } else if (!isDirectory && shouldBeDir) {
      return fsError("ENOTDIR", {
        path: path,
        syscall: syscall || "read"
      });
    }
  }
  return new Error(err || "Unknown error while manipulating " + path);
};

module.exports.encodingFromOptions = function encodingFromOptions(
  options,
  defaultValue
) {
  return options && options.encoding
    ? String(options.encoding)
    : options
    ? String(options)
    : defaultValue;
};

module.exports.NOT_IMPLEMENTED = function NOT_IMPLEMENTED(name) {
  return function() {
    throw new Error(
      "fs." +
        name +
        " is not implemented yet. If you feel like implementing it, any contribution will be gladly accepted on https://github.com/skpm/fs"
    );
  };
};


/***/ }),

/***/ "./node_modules/mocha-js-delegate/index.js":
/*!*************************************************!*\
  !*** ./node_modules/mocha-js-delegate/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* globals MOClassDescription, NSObject, NSSelectorFromString, NSClassFromString, MOPropertyDescription */

module.exports = function MochaDelegate(definition, superclass) {
  var uniqueClassName =
    'MochaJSDelegate_DynamicClass_' + NSUUID.UUID().UUIDString()

  var delegateClassDesc = MOClassDescription.allocateDescriptionForClassWithName_superclass_(
    uniqueClassName,
    superclass || NSObject
  )

  // Storage
  var handlers = {}
  var ivars = {}

  // Define an instance method
  function setHandlerForSelector(selectorString, func) {
    var handlerHasBeenSet = selectorString in handlers
    var selector = NSSelectorFromString(selectorString)

    handlers[selectorString] = func

    /*
      For some reason, Mocha acts weird about arguments: https://github.com/logancollins/Mocha/issues/28
      We have to basically create a dynamic handler with a likewise dynamic number of predefined arguments.
    */
    if (!handlerHasBeenSet) {
      var args = []
      var regex = /:/g
      while (regex.exec(selectorString)) {
        args.push('arg' + args.length)
      }

      // eslint-disable-next-line no-eval
      var dynamicFunction = eval(
        '(function (' +
          args.join(', ') +
          ') { return handlers[selectorString].apply(this, arguments); })'
      )

      delegateClassDesc.addInstanceMethodWithSelector_function(
        selector,
        dynamicFunction
      )
    }
  }

  // define a property
  function setIvar(key, value) {
    var ivarHasBeenSet = key in handlers

    ivars[key] = value

    if (!ivarHasBeenSet) {
      delegateClassDesc.addInstanceVariableWithName_typeEncoding(key, '@')
      var description = MOPropertyDescription.new()
      description.name = key
      description.typeEncoding = '@'
      description.weak = true
      description.ivarName = key
      delegateClassDesc.addProperty(description)
    }
  }

  this.getClass = function() {
    return NSClassFromString(uniqueClassName)
  }

  this.getClassInstance = function(instanceVariables) {
    var instance = NSClassFromString(uniqueClassName).new()
    Object.keys(ivars).forEach(function(key) {
      instance[key] = ivars[key]
    })
    Object.keys(instanceVariables || {}).forEach(function(key) {
      instance[key] = instanceVariables[key]
    })
    return instance
  }
  // alias
  this.new = this.getClassInstance

  // Convenience
  if (typeof definition === 'object') {
    Object.keys(definition).forEach(
      function(key) {
        if (typeof definition[key] === 'function') {
          setHandlerForSelector(key, definition[key])
        } else {
          setIvar(key, definition[key])
        }
      }
    )
  }

  delegateClassDesc.registerClass()
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/promise-polyfill/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = finallyConstructor;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/browser-api.js":
/*!****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/browser-api.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function parseHexColor(color) {
  // Check the string for incorrect formatting.
  if (!color || color[0] !== '#') {
    if (
      color &&
      typeof color.isKindOfClass === 'function' &&
      color.isKindOfClass(NSColor)
    ) {
      return color
    }
    throw new Error(
      'Incorrect color formating. It should be an hex color: #RRGGBBAA'
    )
  }

  // append FF if alpha channel is not specified.
  var source = color.substr(1)
  if (source.length === 3) {
    source += 'F'
  } else if (source.length === 6) {
    source += 'FF'
  }
  // Convert the string from #FFF format to #FFFFFF format.
  var hex
  if (source.length === 4) {
    for (var i = 0; i < 4; i += 1) {
      hex += source[i]
      hex += source[i]
    }
  } else if (source.length === 8) {
    hex = source
  } else {
    return NSColor.whiteColor()
  }

  var r = parseInt(hex.slice(0, 2), 16)
  var g = parseInt(hex.slice(2, 4), 16)
  var b = parseInt(hex.slice(4, 6), 16)
  var a = parseInt(hex.slice(6, 8), 16)

  return NSColor.colorWithSRGBRed_green_blue_alpha(r, g, b, a)
}

module.exports = function(browserWindow, panel, webview) {
  // keep reference to the subviews
  browserWindow._panel = panel
  browserWindow._webview = webview
  browserWindow._destroyed = false

  browserWindow.destroy = function() {
    return panel.close()
  }

  browserWindow.close = function() {
    if (panel.delegate().utils && panel.delegate().utils.parentWindow) {
      var shouldClose = true
      browserWindow.emit('close', {
        get defaultPrevented() {
          return !shouldClose
        },
        preventDefault: function() {
          shouldClose = false
        },
      })
      if (shouldClose) {
        panel.delegate().utils.parentWindow.endSheet(panel)
      }
      return
    }

    if (!browserWindow.isClosable()) {
      return
    }

    panel.performClose(null)
  }

  function focus(focused) {
    if (!browserWindow.isVisible()) {
      return
    }
    if (focused) {
      NSApplication.sharedApplication().activateIgnoringOtherApps(true)
      panel.makeKeyAndOrderFront(null)
    } else {
      panel.orderBack(null)
      NSApp.mainWindow().makeKeyAndOrderFront(null)
    }
  }

  browserWindow.focus = focus.bind(this, true)
  browserWindow.blur = focus.bind(this, false)

  browserWindow.isFocused = function() {
    return panel.isKeyWindow()
  }

  browserWindow.isDestroyed = function() {
    return browserWindow._destroyed
  }

  browserWindow.show = function() {
    // This method is supposed to put focus on window, however if the app does not
    // have focus then "makeKeyAndOrderFront" will only show the window.
    NSApp.activateIgnoringOtherApps(true)

    if (panel.delegate().utils && panel.delegate().utils.parentWindow) {
      return panel.delegate().utils.parentWindow.beginSheet_completionHandler(
        panel,
        __mocha__.createBlock_function('v16@?0q8', function() {
          browserWindow.emit('closed')
        })
      )
    }

    return panel.makeKeyAndOrderFront(null)
  }

  browserWindow.showInactive = function() {
    return panel.orderFrontRegardless()
  }

  browserWindow.hide = function() {
    return panel.orderOut(null)
  }

  browserWindow.isVisible = function() {
    return panel.isVisible()
  }

  browserWindow.isModal = function() {
    return false
  }

  browserWindow.maximize = function() {
    if (!browserWindow.isMaximized()) {
      panel.zoom(null)
    }
  }
  browserWindow.unmaximize = function() {
    if (browserWindow.isMaximized()) {
      panel.zoom(null)
    }
  }

  browserWindow.isMaximized = function() {
    if ((panel.styleMask() & NSResizableWindowMask) !== 0) {
      return panel.isZoomed()
    }
    var rectScreen = NSScreen.mainScreen().visibleFrame()
    var rectWindow = panel.frame()
    return (
      rectScreen.origin.x == rectWindow.origin.x &&
      rectScreen.origin.y == rectWindow.origin.y &&
      rectScreen.size.width == rectWindow.size.width &&
      rectScreen.size.height == rectWindow.size.height
    )
  }

  browserWindow.minimize = function() {
    return panel.miniaturize(null)
  }

  browserWindow.restore = function() {
    return panel.deminiaturize(null)
  }

  browserWindow.isMinimized = function() {
    return panel.isMiniaturized()
  }

  browserWindow.setFullScreen = function(fullscreen) {
    if (fullscreen !== browserWindow.isFullscreen()) {
      panel.toggleFullScreen(null)
    }
  }

  browserWindow.isFullscreen = function() {
    return panel.styleMask() & NSFullScreenWindowMask
  }

  browserWindow.setAspectRatio = function(aspectRatio /* , extraSize */) {
    // Reset the behaviour to default if aspect_ratio is set to 0 or less.
    if (aspectRatio > 0.0) {
      panel.setAspectRatio(NSMakeSize(aspectRatio, 1.0))
    } else {
      panel.setResizeIncrements(NSMakeSize(1.0, 1.0))
    }
  }

  browserWindow.setBounds = function(bounds, animate) {
    if (!bounds) {
      return
    }

    // Do nothing if in fullscreen mode.
    if (browserWindow.isFullscreen()) {
      return
    }

    const newBounds = Object.assign(browserWindow.getBounds(), bounds)

    // TODO: Check size constraints since setFrame does not check it.
    // var size = bounds.size
    // size.SetToMax(GetMinimumSize());
    // gfx::Size max_size = GetMaximumSize();
    // if (!max_size.IsEmpty())
    //   size.SetToMin(max_size);

    var cocoaBounds = NSMakeRect(
      newBounds.x,
      0,
      newBounds.width,
      newBounds.height
    )
    // Flip Y coordinates based on the primary screen
    var screen = NSScreen.screens().firstObject()
    cocoaBounds.origin.y = NSHeight(screen.frame()) - newBounds.y

    panel.setFrame_display_animate(cocoaBounds, true, animate)
  }

  browserWindow.getBounds = function() {
    const cocoaBounds = panel.frame()
    var mainScreenRect = NSScreen.screens()
      .firstObject()
      .frame()
    return {
      x: cocoaBounds.origin.x,
      y: Math.round(NSHeight(mainScreenRect) - cocoaBounds.origin.y),
      width: cocoaBounds.size.width,
      height: cocoaBounds.size.height,
    }
  }

  browserWindow.setContentBounds = function(bounds, animate) {
    // TODO:
    browserWindow.setBounds(bounds, animate)
  }

  browserWindow.getContentBounds = function() {
    // TODO:
    return browserWindow.getBounds()
  }

  browserWindow.setSize = function(width, height, animate) {
    // TODO: handle resizing around center
    return browserWindow.setBounds({ width: width, height: height }, animate)
  }

  browserWindow.getSize = function() {
    var bounds = browserWindow.getBounds()
    return [bounds.width, bounds.height]
  }

  browserWindow.setContentSize = function(width, height, animate) {
    // TODO: handle resizing around center
    return browserWindow.setContentBounds(
      { width: width, height: height },
      animate
    )
  }

  browserWindow.getContentSize = function() {
    var bounds = browserWindow.getContentBounds()
    return [bounds.width, bounds.height]
  }

  browserWindow.setMinimumSize = function(width, height) {
    const minSize = CGSizeMake(width, height)
    panel.setContentMinSize(minSize)
  }

  browserWindow.getMinimumSize = function() {
    const size = panel.contentMinSize()
    return [size.width, size.height]
  }

  browserWindow.setMaximumSize = function(width, height) {
    const maxSize = CGSizeMake(width, height)
    panel.setContentMaxSize(maxSize)
  }

  browserWindow.getMaximumSize = function() {
    const size = panel.contentMaxSize()
    return [size.width, size.height]
  }

  browserWindow.setResizable = function(resizable) {
    return browserWindow._setStyleMask(resizable, NSResizableWindowMask)
  }

  browserWindow.isResizable = function() {
    return panel.styleMask() & NSResizableWindowMask
  }

  browserWindow.setMovable = function(movable) {
    return panel.setMovable(movable)
  }
  browserWindow.isMovable = function() {
    return panel.isMovable()
  }

  browserWindow.setMinimizable = function(minimizable) {
    return browserWindow._setStyleMask(minimizable, NSMiniaturizableWindowMask)
  }

  browserWindow.isMinimizable = function() {
    return panel.styleMask() & NSMiniaturizableWindowMask
  }

  browserWindow.setMaximizable = function(maximizable) {
    if (panel.standardWindowButton(NSWindowZoomButton)) {
      panel.standardWindowButton(NSWindowZoomButton).setEnabled(maximizable)
    }
  }

  browserWindow.isMaximizable = function() {
    return (
      panel.standardWindowButton(NSWindowZoomButton) &&
      panel.standardWindowButton(NSWindowZoomButton).isEnabled()
    )
  }

  browserWindow.setFullScreenable = function(fullscreenable) {
    browserWindow._setCollectionBehavior(
      fullscreenable,
      NSWindowCollectionBehaviorFullScreenPrimary
    )
    // On EL Capitan this flag is required to hide fullscreen button.
    browserWindow._setCollectionBehavior(
      !fullscreenable,
      NSWindowCollectionBehaviorFullScreenAuxiliary
    )
  }

  browserWindow.isFullScreenable = function() {
    var collectionBehavior = panel.collectionBehavior()
    return collectionBehavior & NSWindowCollectionBehaviorFullScreenPrimary
  }

  browserWindow.setClosable = function(closable) {
    browserWindow._setStyleMask(closable, NSClosableWindowMask)
  }

  browserWindow.isClosable = function() {
    return panel.styleMask() & NSClosableWindowMask
  }

  browserWindow.setAlwaysOnTop = function(top, level, relativeLevel) {
    var windowLevel = NSNormalWindowLevel
    var maxWindowLevel = CGWindowLevelForKey(kCGMaximumWindowLevelKey)
    var minWindowLevel = CGWindowLevelForKey(kCGMinimumWindowLevelKey)

    if (top) {
      if (level === 'normal') {
        windowLevel = NSNormalWindowLevel
      } else if (level === 'torn-off-menu') {
        windowLevel = NSTornOffMenuWindowLevel
      } else if (level === 'modal-panel') {
        windowLevel = NSModalPanelWindowLevel
      } else if (level === 'main-menu') {
        windowLevel = NSMainMenuWindowLevel
      } else if (level === 'status') {
        windowLevel = NSStatusWindowLevel
      } else if (level === 'pop-up-menu') {
        windowLevel = NSPopUpMenuWindowLevel
      } else if (level === 'screen-saver') {
        windowLevel = NSScreenSaverWindowLevel
      } else if (level === 'dock') {
        // Deprecated by macOS, but kept for backwards compatibility
        windowLevel = NSDockWindowLevel
      } else {
        windowLevel = NSFloatingWindowLevel
      }
    }

    var newLevel = windowLevel + (relativeLevel || 0)
    if (newLevel >= minWindowLevel && newLevel <= maxWindowLevel) {
      panel.setLevel(newLevel)
    } else {
      throw new Error(
        'relativeLevel must be between ' +
          minWindowLevel +
          ' and ' +
          maxWindowLevel
      )
    }
  }

  browserWindow.isAlwaysOnTop = function() {
    return panel.level() !== NSNormalWindowLevel
  }

  browserWindow.moveTop = function() {
    return panel.orderFrontRegardless()
  }

  browserWindow.center = function() {
    panel.center()
  }

  browserWindow.setPosition = function(x, y, animate) {
    return browserWindow.setBounds({ x: x, y: y }, animate)
  }

  browserWindow.getPosition = function() {
    var bounds = browserWindow.getBounds()
    return [bounds.x, bounds.y]
  }

  browserWindow.setTitle = function(title) {
    panel.setTitle(title)
  }

  browserWindow.getTitle = function() {
    return String(panel.title())
  }

  var attentionRequestId = 0
  browserWindow.flashFrame = function(flash) {
    if (flash) {
      attentionRequestId = NSApp.requestUserAttention(NSInformationalRequest)
    } else {
      NSApp.cancelUserAttentionRequest(attentionRequestId)
      attentionRequestId = 0
    }
  }

  browserWindow.getNativeWindowHandle = function() {
    return panel
  }

  browserWindow.getNativeWebViewHandle = function() {
    return webview
  }

  browserWindow.loadURL = function(url) {
    // When frameLocation is a file, prefix it with the Sketch Resources path
    if (/^(?!https?|file).*\.html?$/.test(url)) {
      if (typeof __command !== 'undefined' && __command.pluginBundle()) {
        url =
          'file://' +
          __command
            .pluginBundle()
            .urlForResourceNamed(url)
            .path()
      }
    }

    if (/^file:\/\/.*\.html?$/.test(url)) {
      // ensure URLs containing spaces are properly handled
      url = NSString.alloc().initWithString(url)
      url = url.stringByAddingPercentEncodingWithAllowedCharacters(
        NSCharacterSet.URLQueryAllowedCharacterSet()
      )
      webview.loadFileURL_allowingReadAccessToURL(
        NSURL.URLWithString(url),
        NSURL.URLWithString('file:///')
      )
      return
    }

    const properURL = NSURL.URLWithString(url)
    const urlRequest = NSURLRequest.requestWithURL(properURL)

    webview.loadRequest(urlRequest)
  }

  browserWindow.reload = function() {
    webview.reload()
  }

  browserWindow.setHasShadow = function(hasShadow) {
    return panel.setHasShadow(hasShadow)
  }

  browserWindow.hasShadow = function() {
    return panel.hasShadow()
  }

  browserWindow.setOpacity = function(opacity) {
    return panel.setAlphaValue(opacity)
  }

  browserWindow.getOpacity = function() {
    return panel.alphaValue()
  }

  browserWindow.setVisibleOnAllWorkspaces = function(visible) {
    return browserWindow._setCollectionBehavior(
      visible,
      NSWindowCollectionBehaviorCanJoinAllSpaces
    )
  }

  browserWindow.isVisibleOnAllWorkspaces = function() {
    var collectionBehavior = panel.collectionBehavior()
    return collectionBehavior & NSWindowCollectionBehaviorCanJoinAllSpaces
  }

  browserWindow.setIgnoreMouseEvents = function(ignore) {
    return panel.setIgnoresMouseEvents(ignore)
  }

  browserWindow.setContentProtection = function(enable) {
    panel.setSharingType(enable ? NSWindowSharingNone : NSWindowSharingReadOnly)
  }

  browserWindow.setAutoHideCursor = function(autoHide) {
    panel.setDisableAutoHideCursor(autoHide)
  }

  browserWindow.setVibrancy = function(type) {
    var effectView = browserWindow._vibrantView

    if (!type) {
      if (effectView == null) {
        return
      }

      effectView.removeFromSuperview()
      panel.setVibrantView(null)
      return
    }

    if (effectView == null) {
      var contentView = panel.contentView()
      effectView = NSVisualEffectView.alloc().initWithFrame(
        contentView.bounds()
      )
      browserWindow._vibrantView = effectView

      effectView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)
      effectView.setBlendingMode(NSVisualEffectBlendingModeBehindWindow)
      effectView.setState(NSVisualEffectStateActive)
      effectView.setFrame(contentView.bounds())
      contentView.addSubview_positioned_relativeTo(
        effectView,
        NSWindowBelow,
        null
      )
    }

    var vibrancyType = NSVisualEffectMaterialLight

    if (type === 'appearance-based') {
      vibrancyType = NSVisualEffectMaterialAppearanceBased
    } else if (type === 'light') {
      vibrancyType = NSVisualEffectMaterialLight
    } else if (type === 'dark') {
      vibrancyType = NSVisualEffectMaterialDark
    } else if (type === 'titlebar') {
      vibrancyType = NSVisualEffectMaterialTitlebar
    } else if (type === 'selection') {
      vibrancyType = NSVisualEffectMaterialSelection
    } else if (type === 'menu') {
      vibrancyType = NSVisualEffectMaterialMenu
    } else if (type === 'popover') {
      vibrancyType = NSVisualEffectMaterialPopover
    } else if (type === 'sidebar') {
      vibrancyType = NSVisualEffectMaterialSidebar
    } else if (type === 'medium-light') {
      vibrancyType = NSVisualEffectMaterialMediumLight
    } else if (type === 'ultra-dark') {
      vibrancyType = NSVisualEffectMaterialUltraDark
    }

    effectView.setMaterial(vibrancyType)
  }

  browserWindow._setBackgroundColor = function(colorName) {
    var color = parseHexColor(colorName)
    webview.setValue_forKey(false, 'drawsBackground')
    panel.backgroundColor = color
  }

  browserWindow._invalidate = function() {
    panel.flushWindow()
    panel.contentView().setNeedsDisplay(true)
  }

  browserWindow._setStyleMask = function(on, flag) {
    var wasMaximizable = browserWindow.isMaximizable()
    if (on) {
      panel.setStyleMask(panel.styleMask() | flag)
    } else {
      panel.setStyleMask(panel.styleMask() & ~flag)
    }
    // Change style mask will make the zoom button revert to default, probably
    // a bug of Cocoa or macOS.
    browserWindow.setMaximizable(wasMaximizable)
  }

  browserWindow._setCollectionBehavior = function(on, flag) {
    var wasMaximizable = browserWindow.isMaximizable()
    if (on) {
      panel.setCollectionBehavior(panel.collectionBehavior() | flag)
    } else {
      panel.setCollectionBehavior(panel.collectionBehavior() & ~flag)
    }
    // Change collectionBehavior will make the zoom button revert to default,
    // probably a bug of Cocoa or macOS.
    browserWindow.setMaximizable(wasMaximizable)
  }

  browserWindow._showWindowButton = function(button) {
    var view = panel.standardWindowButton(button)
    view.superview().addSubview_positioned_relative(view, NSWindowAbove, null)
  }
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/constants.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  JS_BRIDGE: '__skpm_sketchBridge',
  JS_BRIDGE_RESULT_SUCCESS: '__skpm_sketchBridge_success',
  JS_BRIDGE_RESULT_ERROR: '__skpm_sketchBridge_error',
  START_MOVING_WINDOW: '__skpm_startMovingWindow',
  EXECUTE_JAVASCRIPT: '__skpm_executeJS',
  EXECUTE_JAVASCRIPT_SUCCESS: '__skpm_executeJS_success_',
  EXECUTE_JAVASCRIPT_ERROR: '__skpm_executeJS_error_',
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/dispatch-first-click.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/dispatch-first-click.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tagsToFocus =
  '["text", "textarea", "date", "datetime-local", "email", "number", "month", "password", "search", "tel", "time", "url", "week" ]'

module.exports = function(webView, event) {
  var point = webView.convertPoint_fromView(event.locationInWindow(), null)
  return (
    'var el = document.elementFromPoint(' + // get the DOM element that match the event
    point.x +
    ', ' +
    point.y +
    '); ' +
    'if (el && el.tagName === "SELECT") {' + // select needs special handling
    '  var event = document.createEvent("MouseEvents");' +
    '  event.initMouseEvent("mousedown", true, true, window);' +
    '  el.dispatchEvent(event);' +
    '} else if (el && ' + // some tags need to be focused instead of clicked
    tagsToFocus +
    '.indexOf(el.type) >= 0 && ' +
    'el.focus' +
    ') {' +
    'el.focus();' + // so focus them
    '} else if (el) {' +
    'el.dispatchEvent(new Event("click", {bubbles: true}))' + // click the others
    '}'
  )
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/execute-javascript.js":
/*!***********************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/execute-javascript.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports = function(webview, browserWindow) {
  function executeJavaScript(script, userGesture, callback) {
    if (typeof userGesture === 'function') {
      callback = userGesture
      userGesture = false
    }
    var fiber = coscript.createFiber()

    // if the webview is not ready yet, defer the execution until it is
    if (
      webview.navigationDelegate().state &&
      webview.navigationDelegate().state.wasReady == 0
    ) {
      return new Promise(function(resolve, reject) {
        browserWindow.once('ready-to-show', function() {
          executeJavaScript(script, userGesture, callback)
            .then(resolve)
            .catch(reject)
          fiber.cleanup()
        })
      })
    }

    return new Promise(function(resolve, reject) {
      var requestId = Math.random()

      browserWindow.webContents.on(
        CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS + requestId,
        function(res) {
          try {
            if (callback) {
              callback(null, res)
            }
            resolve(res)
          } catch (err) {
            reject(err)
          }
          fiber.cleanup()
        }
      )
      browserWindow.webContents.on(
        CONSTANTS.EXECUTE_JAVASCRIPT_ERROR + requestId,
        function(err) {
          try {
            if (callback) {
              callback(err)
              resolve()
            } else {
              reject(err)
            }
          } catch (err2) {
            reject(err2)
          }
          fiber.cleanup()
        }
      )

      webview.evaluateJavaScript_completionHandler(
        module.exports.wrapScript(script, requestId),
        null
      )
    })
  }

  return executeJavaScript
}

module.exports.wrapScript = function(script, requestId) {
  return (
    'window.' +
    CONSTANTS.EXECUTE_JAVASCRIPT +
    '(' +
    requestId +
    ', ' +
    JSON.stringify(script) +
    ')'
  )
}

module.exports.injectScript = function(webView) {
  var source =
    'window.' +
    CONSTANTS.EXECUTE_JAVASCRIPT +
    ' = function(id, script) {' +
    '  try {' +
    '    var res = eval(script);' +
    '    if (res && typeof res.then === "function" && typeof res.catch === "function") {' +
    '      res.then(function (res2) {' +
    '        window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS +
    '" + id, res2);' +
    '      })' +
    '      .catch(function (err) {' +
    '        window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_ERROR +
    '" + id, err);' +
    '      })' +
    '    } else {' +
    '      window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_SUCCESS +
    '" + id, res);' +
    '    }' +
    '  } catch (err) {' +
    '    window.postMessage("' +
    CONSTANTS.EXECUTE_JAVASCRIPT_ERROR +
    '" + id, err);' +
    '  }' +
    '}'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView
    .configuration()
    .userContentController()
    .addUserScript(script)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js")))

/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/fitSubview.js":
/*!***************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/fitSubview.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addEdgeConstraint(edge, subview, view, constant) {
  view.addConstraint(
    NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(
      subview,
      edge,
      NSLayoutRelationEqual,
      view,
      edge,
      1,
      constant
    )
  )
}
module.exports = function fitSubviewToView(subview, view, constants) {
  constants = constants || []
  subview.setTranslatesAutoresizingMaskIntoConstraints(false)

  addEdgeConstraint(NSLayoutAttributeLeft, subview, view, constants[0] || 0)
  addEdgeConstraint(NSLayoutAttributeTop, subview, view, constants[1] || 0)
  addEdgeConstraint(NSLayoutAttributeRight, subview, view, constants[2] || 0)
  addEdgeConstraint(NSLayoutAttributeBottom, subview, view, constants[3] || 0)
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* let's try to match the API from Electron's Browser window
(https://github.com/electron/electron/blob/master/docs/api/browser-window.md) */
var EventEmitter = __webpack_require__(/*! events */ "events")
var buildBrowserAPI = __webpack_require__(/*! ./browser-api */ "./node_modules/sketch-module-web-view/lib/browser-api.js")
var buildWebAPI = __webpack_require__(/*! ./webview-api */ "./node_modules/sketch-module-web-view/lib/webview-api.js")
var fitSubviewToView = __webpack_require__(/*! ./fitSubview */ "./node_modules/sketch-module-web-view/lib/fitSubview.js")
var dispatchFirstClick = __webpack_require__(/*! ./dispatch-first-click */ "./node_modules/sketch-module-web-view/lib/dispatch-first-click.js")
var injectClientMessaging = __webpack_require__(/*! ./inject-client-messaging */ "./node_modules/sketch-module-web-view/lib/inject-client-messaging.js")
var movableArea = __webpack_require__(/*! ./movable-area */ "./node_modules/sketch-module-web-view/lib/movable-area.js")
var executeJavaScript = __webpack_require__(/*! ./execute-javascript */ "./node_modules/sketch-module-web-view/lib/execute-javascript.js")
var setDelegates = __webpack_require__(/*! ./set-delegates */ "./node_modules/sketch-module-web-view/lib/set-delegates.js")

function BrowserWindow(options) {
  options = options || {}

  var identifier = options.identifier || NSUUID.UUID().UUIDString()
  var threadDictionary = NSThread.mainThread().threadDictionary()

  var existingBrowserWindow = BrowserWindow.fromId(identifier)

  // if we already have a window opened, reuse it
  if (existingBrowserWindow) {
    return existingBrowserWindow
  }

  var browserWindow = new EventEmitter()
  browserWindow.id = identifier

  if (options.modal && !options.parent) {
    throw new Error('A modal needs to have a parent.')
  }

  // Long-running script
  var fiber = coscript.createFiber()

  // Window size
  var width = options.width || 800
  var height = options.height || 600
  var mainScreenRect = NSScreen.screens()
    .firstObject()
    .frame()
  var cocoaBounds = NSMakeRect(
    typeof options.x !== 'undefined'
      ? options.x
      : Math.round((NSWidth(mainScreenRect) - width) / 2),
    typeof options.y !== 'undefined'
      ? NSHeight(mainScreenRect) - options.y
      : Math.round((NSHeight(mainScreenRect) - height) / 2),
    width,
    height
  )

  if (options.titleBarStyle && options.titleBarStyle !== 'default') {
    options.frame = false
  }

  var useStandardWindow = options.windowType !== 'textured'
  var styleMask = NSTitledWindowMask

  // this is commented out because the toolbar doesn't appear otherwise :thinking-face:
  // if (!useStandardWindow || options.frame === false) {
  //   styleMask = NSFullSizeContentViewWindowMask
  // }
  if (options.minimizable !== false) {
    styleMask |= NSMiniaturizableWindowMask
  }
  if (options.closable !== false) {
    styleMask |= NSClosableWindowMask
  }
  if (options.resizable !== false) {
    styleMask |= NSResizableWindowMask
  }
  if (!useStandardWindow || options.transparent || options.frame === false) {
    styleMask |= NSTexturedBackgroundWindowMask
  }

  var panel = NSPanel.alloc().initWithContentRect_styleMask_backing_defer(
    cocoaBounds,
    styleMask,
    NSBackingStoreBuffered,
    true
  )

  var wkwebviewConfig = WKWebViewConfiguration.alloc().init()
  var webView = WKWebView.alloc().initWithFrame_configuration(
    CGRectMake(0, 0, options.width || 800, options.height || 600),
    wkwebviewConfig
  )
  injectClientMessaging(webView)
  webView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)

  buildBrowserAPI(browserWindow, panel, webView)
  buildWebAPI(browserWindow, panel, webView)
  setDelegates(browserWindow, panel, webView, options)

  if (options.windowType === 'desktop') {
    panel.setLevel(kCGDesktopWindowLevel - 1)
    // panel.setCanBecomeKeyWindow(false)
    panel.setCollectionBehavior(
      NSWindowCollectionBehaviorCanJoinAllSpaces |
        NSWindowCollectionBehaviorStationary |
        NSWindowCollectionBehaviorIgnoresCycle
    )
  }

  if (
    typeof options.minWidth !== 'undefined' ||
    typeof options.minHeight !== 'undefined'
  ) {
    browserWindow.setMinimumSize(options.minWidth || 0, options.minHeight || 0)
  }

  if (
    typeof options.maxWidth !== 'undefined' ||
    typeof options.maxHeight !== 'undefined'
  ) {
    browserWindow.setMaximumSize(
      options.maxWidth || 10000,
      options.maxHeight || 10000
    )
  }

  // if (options.focusable === false) {
  //   panel.setCanBecomeKeyWindow(false)
  // }

  if (options.transparent || options.frame === false) {
    panel.titlebarAppearsTransparent = true
    panel.titleVisibility = NSWindowTitleHidden
    panel.setOpaque(0)
    panel.isMovableByWindowBackground = true
    var toolbar2 = NSToolbar.alloc().initWithIdentifier(
      'titlebarStylingToolbar'
    )
    toolbar2.setShowsBaselineSeparator(false)
    panel.setToolbar(toolbar2)
  }

  if (options.titleBarStyle === 'hiddenInset') {
    var toolbar = NSToolbar.alloc().initWithIdentifier('titlebarStylingToolbar')
    toolbar.setShowsBaselineSeparator(false)
    panel.setToolbar(toolbar)
  }

  if (options.frame === false || !options.useContentSize) {
    browserWindow.setSize(width, height)
  }

  if (options.center) {
    browserWindow.center()
  }

  if (options.alwaysOnTop) {
    browserWindow.setAlwaysOnTop(true)
  }

  if (options.fullscreen) {
    browserWindow.setFullScreen(true)
  }
  browserWindow.setFullScreenable(!!options.fullscreenable)

  let title = options.title
  if (options.frame === false) {
    title = undefined
  } else if (
    typeof title === 'undefined' &&
    typeof __command !== 'undefined' &&
    __command.pluginBundle()
  ) {
    title = __command.pluginBundle().name()
  }

  if (title) {
    browserWindow.setTitle(title)
  }

  var backgroundColor = options.backgroundColor
  if (options.transparent) {
    backgroundColor = NSColor.clearColor()
  }
  if (!backgroundColor && options.frame === false && options.vibrancy) {
    backgroundColor = NSColor.clearColor()
  }

  browserWindow._setBackgroundColor(
    backgroundColor || NSColor.windowBackgroundColor()
  )

  if (options.hasShadow === false) {
    browserWindow.setHasShadow(false)
  }

  if (typeof options.opacity !== 'undefined') {
    browserWindow.setOpacity(options.opacity)
  }

  options.webPreferences = options.webPreferences || {}

  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.devTools !== false,
      'developerExtrasEnabled'
    )
  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.javascript !== false,
      'javaScriptEnabled'
    )
  webView
    .configuration()
    .preferences()
    .setValue_forKey(!!options.webPreferences.plugins, 'plugInsEnabled')
  webView
    .configuration()
    .preferences()
    .setValue_forKey(
      options.webPreferences.minimumFontSize || 0,
      'minimumFontSize'
    )

  if (options.webPreferences.zoomFactor) {
    webView.setMagnification(options.webPreferences.zoomFactor)
  }

  var contentView = panel.contentView()

  if (options.frame !== false) {
    webView.setFrame(contentView.bounds())
    contentView.addSubview(webView)
  } else {
    // In OSX 10.10, adding subviews to the root view for the NSView hierarchy
    // produces warnings. To eliminate the warnings, we resize the contentView
    // to fill the window, and add subviews to that.
    // http://crbug.com/380412
    contentView.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)
    fitSubviewToView(contentView, contentView.superview())

    webView.setFrame(contentView.bounds())
    contentView.addSubview(webView)

    // The fullscreen button should always be hidden for frameless window.
    if (panel.standardWindowButton(NSWindowFullScreenButton)) {
      panel.standardWindowButton(NSWindowFullScreenButton).setHidden(true)
    }

    if (!options.titleBarStyle || options.titleBarStyle === 'default') {
      // Hide the window buttons.
      panel.standardWindowButton(NSWindowZoomButton).setHidden(true)
      panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true)
      panel.standardWindowButton(NSWindowCloseButton).setHidden(true)

      // Some third-party macOS utilities check the zoom button's enabled state to
      // determine whether to show custom UI on hover, so we disable it here to
      // prevent them from doing so in a frameless app window.
      panel.standardWindowButton(NSWindowZoomButton).setEnabled(false)
    }
  }

  if (options.vibrancy) {
    browserWindow.setVibrancy(options.vibrancy)
  }

  // Set maximizable state last to ensure zoom button does not get reset
  // by calls to other APIs.
  browserWindow.setMaximizable(options.maximizable !== false)

  panel.setHidesOnDeactivate(options.hidesOnDeactivate !== false)

  if (options.remembersWindowFrame) {
    panel.setFrameAutosaveName(identifier)
    panel.setFrameUsingName_force(panel.frameAutosaveName(), false)
  }

  if (options.acceptsFirstMouse) {
    browserWindow.on('focus', function(event) {
      if (event.type() === NSEventTypeLeftMouseDown) {
        browserWindow.webContents
          .executeJavaScript(dispatchFirstClick(webView, event))
          .catch(() => {})
      }
    })
  }

  executeJavaScript.injectScript(webView)
  movableArea.injectScript(webView)
  movableArea.setupHandler(browserWindow)

  if (options.show !== false) {
    browserWindow.show()
  }

  browserWindow.on('closed', function() {
    browserWindow._destroyed = true
    threadDictionary.removeObjectForKey(identifier)
    var observer = threadDictionary[identifier + '.themeObserver']
    if (observer) {
      NSApplication.sharedApplication().removeObserver_forKeyPath(
        observer,
        'effectiveAppearance'
      )
      threadDictionary.removeObjectForKey(identifier + '.themeObserver')
    }
    fiber.cleanup()
  })

  threadDictionary[identifier] = panel

  fiber.onCleanup(function() {
    if (!browserWindow._destroyed) {
      browserWindow.destroy()
    }
  })

  return browserWindow
}

BrowserWindow.fromId = function(identifier) {
  var threadDictionary = NSThread.mainThread().threadDictionary()

  if (threadDictionary[identifier]) {
    return BrowserWindow.fromPanel(threadDictionary[identifier], identifier)
  }

  return undefined
}

BrowserWindow.fromPanel = function(panel, identifier) {
  var browserWindow = new EventEmitter()
  browserWindow.id = identifier

  if (!panel || !panel.contentView) {
    throw new Error('needs to pass an NSPanel')
  }

  var webView = null
  var subviews = panel.contentView().subviews()
  for (var i = 0; i < subviews.length; i += 1) {
    if (
      !webView &&
      !subviews[i].isKindOfClass(WKInspectorWKWebView) &&
      subviews[i].isKindOfClass(WKWebView)
    ) {
      webView = subviews[i]
    }
  }

  if (!webView) {
    throw new Error('The panel needs to have a webview')
  }

  buildBrowserAPI(browserWindow, panel, webView)
  buildWebAPI(browserWindow, panel, webView)

  return browserWindow
}

module.exports = BrowserWindow


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/inject-client-messaging.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/inject-client-messaging.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports = function(webView) {
  var source =
    'window.originalPostMessage = window.postMessage;' +
    'window.postMessage = function(actionName) {' +
    '  if (!actionName) {' +
    "    throw new Error('missing action name')" +
    '  }' +
    '  var id = String(Math.random()).replace(".", "");' +
    '    var args = [].slice.call(arguments);' +
    '    args.unshift(id);' +
    '  return new Promise(function (resolve, reject) {' +
    '    window["' +
    CONSTANTS.JS_BRIDGE_RESULT_SUCCESS +
    '" + id] = resolve;' +
    '    window["' +
    CONSTANTS.JS_BRIDGE_RESULT_ERROR +
    '" + id] = reject;' +
    '    window.webkit.messageHandlers.' +
    CONSTANTS.JS_BRIDGE +
    '.postMessage(JSON.stringify(args));' +
    '  });' +
    '}'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView
    .configuration()
    .userContentController()
    .addUserScript(script)
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/movable-area.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/movable-area.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports.injectScript = function(webView) {
  var source =
    '(function () {' +
    "document.addEventListener('mousedown', onMouseDown);" +
    '' +
    'function shouldDrag(target) {' +
    '  if (!target || (target.dataset || {}).appRegion === "no-drag") { return false }' +
    '  if ((target.dataset || {}).appRegion === "drag") { return true }' +
    '  return shouldDrag(target.parentElement)' +
    '};' +
    '' +
    'function onMouseDown(e) {' +
    '  if (e.button !== 0 || !shouldDrag(e.target)) { return }' +
    '  window.postMessage("' +
    CONSTANTS.START_MOVING_WINDOW +
    '");' +
    '};' +
    '})()'
  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    source,
    0,
    true
  )
  webView
    .configuration()
    .userContentController()
    .addUserScript(script)
}

module.exports.setupHandler = function(browserWindow) {
  var initialMouseLocation = null
  var initialWindowPosition = null
  var interval = null

  function moveWindow() {
    // if the user released the button, stop moving the window
    if (!initialWindowPosition || NSEvent.pressedMouseButtons() !== 1) {
      clearInterval(interval)
      initialMouseLocation = null
      initialWindowPosition = null
      return
    }

    var mouse = NSEvent.mouseLocation()
    browserWindow.setPosition(
      initialWindowPosition.x + (mouse.x - initialMouseLocation.x),
      initialWindowPosition.y + (initialMouseLocation.y - mouse.y), // y is inverted
      false
    )
  }

  browserWindow.webContents.on(CONSTANTS.START_MOVING_WINDOW, function() {
    initialMouseLocation = NSEvent.mouseLocation()
    var position = browserWindow.getPosition()
    initialWindowPosition = {
      x: position[0],
      y: position[1],
    }

    interval = setInterval(moveWindow, 1000 / 60) // 60 fps
  })
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/parseWebArguments.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/parseWebArguments.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(webArguments) {
  var args = null
  try {
    args = JSON.parse(webArguments)
  } catch (e) {
    // malformed arguments
  }

  if (
    !args ||
    !args.constructor ||
    args.constructor !== Array ||
    args.length == 0
  ) {
    return null
  }

  return args
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/set-delegates.js":
/*!******************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/set-delegates.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Promise) {var ObjCClass = __webpack_require__(/*! mocha-js-delegate */ "./node_modules/mocha-js-delegate/index.js")
var parseWebArguments = __webpack_require__(/*! ./parseWebArguments */ "./node_modules/sketch-module-web-view/lib/parseWebArguments.js")
var CONSTANTS = __webpack_require__(/*! ./constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

// We create one ObjC class for ourselves here
var WindowDelegateClass
var NavigationDelegateClass
var WebScriptHandlerClass
var ThemeObserverClass

// TODO: events
// - 'page-favicon-updated'
// - 'new-window'
// - 'did-navigate-in-page'
// - 'will-prevent-unload'
// - 'crashed'
// - 'unresponsive'
// - 'responsive'
// - 'destroyed'
// - 'before-input-event'
// - 'certificate-error'
// - 'found-in-page'
// - 'media-started-playing'
// - 'media-paused'
// - 'did-change-theme-color'
// - 'update-target-url'
// - 'cursor-changed'
// - 'context-menu'
// - 'select-bluetooth-device'
// - 'paint'
// - 'console-message'

module.exports = function(browserWindow, panel, webview, options) {
  if (!ThemeObserverClass) {
    ThemeObserverClass = new ObjCClass({
      utils: null,

      'observeValueForKeyPath:ofObject:change:context:': function() {
        this.utils.executeJavaScript(
          "document.body.classList.remove('__skpm-" +
            (typeof MSTheme !== 'undefined' && MSTheme.sharedTheme().isDark()
              ? 'light'
              : 'dark') +
            "'); document.body.classList.add('__skpm-" +
            (typeof MSTheme !== 'undefined' && MSTheme.sharedTheme().isDark()
              ? 'dark'
              : 'light') +
            "')"
        )
      },
    })
  }

  if (!WindowDelegateClass) {
    WindowDelegateClass = new ObjCClass({
      utils: null,
      panel: null,

      'windowDidResize:': function() {
        this.utils.emit('resize')
      },

      'windowDidMiniaturize:': function() {
        this.utils.emit('minimize')
      },

      'windowDidDeminiaturize:': function() {
        this.utils.emit('restore')
      },

      'windowDidEnterFullScreen:': function() {
        this.utils.emit('enter-full-screen')
      },

      'windowDidExitFullScreen:': function() {
        this.utils.emit('leave-full-screen')
      },

      'windowDidMove:': function() {
        this.utils.emit('move')
        this.utils.emit('moved')
      },

      'windowShouldClose:': function() {
        var shouldClose = 1
        this.utils.emit('close', {
          get defaultPrevented() {
            return !shouldClose
          },
          preventDefault: function() {
            shouldClose = 0
          },
        })
        return shouldClose
      },

      'windowWillClose:': function() {
        this.utils.emit('closed')
      },

      'windowDidBecomeKey:': function() {
        this.utils.emit('focus', this.panel.currentEvent())
      },

      'windowDidResignKey:': function() {
        this.utils.emit('blur')
      },
    })
  }

  if (!NavigationDelegateClass) {
    NavigationDelegateClass = new ObjCClass({
      state: {
        wasReady: 0,
      },
      utils: null,

      // // Called when the web view begins to receive web content.
      'webView:didCommitNavigation:': function(webView) {
        this.utils.emit('will-navigate', {}, String(String(webView.URL())))
      },

      // // Called when web content begins to load in a web view.
      'webView:didStartProvisionalNavigation:': function() {
        this.utils.emit('did-start-navigation')
        this.utils.emit('did-start-loading')
      },

      // Called when a web view receives a server redirect.
      'webView:didReceiveServerRedirectForProvisionalNavigation:': function() {
        this.utils.emit('did-get-redirect-request')
      },

      // // Called when the web view needs to respond to an authentication challenge.
      // 'webView:didReceiveAuthenticationChallenge:completionHandler:': function(
      //   webView,
      //   challenge,
      //   completionHandler
      // ) {
      //   function callback(username, password) {
      //     completionHandler(
      //       0,
      //       NSURLCredential.credentialWithUser_password_persistence(
      //         username,
      //         password,
      //         1
      //       )
      //     )
      //   }
      //   var protectionSpace = challenge.protectionSpace()
      //   this.utils.emit(
      //     'login',
      //     {},
      //     {
      //       method: String(protectionSpace.authenticationMethod()),
      //       url: 'not implemented', // TODO:
      //       referrer: 'not implemented', // TODO:
      //     },
      //     {
      //       isProxy: !!protectionSpace.isProxy(),
      //       scheme: String(protectionSpace.protocol()),
      //       host: String(protectionSpace.host()),
      //       port: Number(protectionSpace.port()),
      //       realm: String(protectionSpace.realm()),
      //     },
      //     callback
      //   )
      // },

      // Called when an error occurs during navigation.
      // 'webView:didFailNavigation:withError:': function(
      //   webView,
      //   navigation,
      //   error
      // ) {},

      // Called when an error occurs while the web view is loading content.
      'webView:didFailProvisionalNavigation:withError:': function(
        webView,
        navigation,
        error
      ) {
        this.utils.emit('did-fail-load', error)
      },

      // Called when the navigation is complete.
      'webView:didFinishNavigation:': function() {
        if (this.state.wasReady == 0) {
          this.state.wasReady = 1
          this.utils.emitBrowserEvent('ready-to-show')
        }
        this.utils.emit('did-navigate')
        this.utils.emit('did-frame-navigate')
        this.utils.emit('did-stop-loading')
        this.utils.emit('did-finish-load')
        this.utils.emit('did-frame-finish-load')
      },

      // Called when the web view’s web content process is terminated.
      'webViewWebContentProcessDidTerminate:': function() {
        this.utils.emit('dom-ready')
      },

      // Decides whether to allow or cancel a navigation.
      // webView:decidePolicyForNavigationAction:decisionHandler:

      // Decides whether to allow or cancel a navigation after its response is known.
      // webView:decidePolicyForNavigationResponse:decisionHandler:
    })
  }

  if (!WebScriptHandlerClass) {
    WebScriptHandlerClass = new ObjCClass({
      utils: null,
      'userContentController:didReceiveScriptMessage:': function(_, message) {
        var args = this.utils.parseWebArguments(String(message.body()))
        if (!args) {
          return
        }
        if (!args[0] || typeof args[0] !== 'string') {
          return
        }
        args[0] = String(args[0])

        this.utils.emit.apply(this, args)
      },
    })
  }

  var themeObserver = ThemeObserverClass.new({
    utils: {
      executeJavaScript(script) {
        webview.evaluateJavaScript_completionHandler(script, null)
      },
    },
  })

  var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
    "document.addEventListener('DOMContentLoaded', function() { document.body.classList.add('__skpm-" +
      (typeof MSTheme !== 'undefined' && MSTheme.sharedTheme().isDark()
        ? 'dark'
        : 'light') +
      "') }, false)",
    0,
    true
  )
  webview
    .configuration()
    .userContentController()
    .addUserScript(script)

  NSApplication.sharedApplication().addObserver_forKeyPath_options_context(
    themeObserver,
    'effectiveAppearance',
    NSKeyValueChangeNewKey,
    null
  )

  var threadDictionary = NSThread.mainThread().threadDictionary()
  threadDictionary[browserWindow.id + '.themeObserver'] = themeObserver

  var navigationDelegate = NavigationDelegateClass.new({
    utils: {
      setTitle: browserWindow.setTitle.bind(browserWindow),
      emitBrowserEvent() {
        try {
          browserWindow.emit.apply(browserWindow, arguments)
        } catch (err) {
          if (
            typeof process !== 'undefined' &&
            process.listenerCount &&
            process.listenerCount('uncaughtException')
          ) {
            process.emit('uncaughtException', err, 'uncaughtException')
          } else {
            console.error(err)
            throw err
          }
        }
      },
      emit() {
        try {
          browserWindow.webContents.emit.apply(
            browserWindow.webContents,
            arguments
          )
        } catch (err) {
          if (
            typeof process !== 'undefined' &&
            process.listenerCount &&
            process.listenerCount('uncaughtException')
          ) {
            process.emit('uncaughtException', err, 'uncaughtException')
          } else {
            console.error(err)
            throw err
          }
        }
      },
    },
    state: {
      wasReady: 0,
    },
  })

  webview.setNavigationDelegate(navigationDelegate)

  var webScriptHandler = WebScriptHandlerClass.new({
    utils: {
      emit(id, type) {
        if (!type) {
          webview.evaluateJavaScript_completionHandler(
            CONSTANTS.JS_BRIDGE_RESULT_SUCCESS + id + '()',
            null
          )
          return
        }

        var args = []
        for (var i = 2; i < arguments.length; i += 1) args.push(arguments[i])

        var listeners = browserWindow.webContents.listeners(type)

        Promise.all(
          listeners.map(function(l) {
            return Promise.resolve().then(function() {
              return l.apply(l, args)
            })
          })
        )
          .then(function(res) {
            webview.evaluateJavaScript_completionHandler(
              CONSTANTS.JS_BRIDGE_RESULT_SUCCESS +
                id +
                '(' +
                JSON.stringify(res) +
                ')',
              null
            )
          })
          .catch(function(err) {
            webview.evaluateJavaScript_completionHandler(
              CONSTANTS.JS_BRIDGE_RESULT_ERROR +
                id +
                '(' +
                JSON.stringify(err) +
                ')',
              null
            )
          })
      },
      parseWebArguments: parseWebArguments,
    },
  })

  webview
    .configuration()
    .userContentController()
    .addScriptMessageHandler_name(webScriptHandler, CONSTANTS.JS_BRIDGE)

  var utils = {
    emit() {
      try {
        browserWindow.emit.apply(browserWindow, arguments)
      } catch (err) {
        if (
          typeof process !== 'undefined' &&
          process.listenerCount &&
          process.listenerCount('uncaughtException')
        ) {
          process.emit('uncaughtException', err, 'uncaughtException')
        } else {
          console.error(err)
          throw err
        }
      }
    },
  }
  if (options.modal) {
    // find the window of the document
    var msdocument
    if (options.parent.type === 'Document') {
      msdocument = options.parent.sketchObject
    } else {
      msdocument = options.parent
    }
    if (msdocument && String(msdocument.class()) === 'MSDocumentData') {
      // we only have an MSDocumentData instead of a MSDocument
      // let's try to get back to the MSDocument
      msdocument = msdocument.delegate()
    }
    utils.parentWindow = msdocument.windowForSheet()
  }

  var windowDelegate = WindowDelegateClass.new({
    utils: utils,
    panel: panel,
  })

  panel.setDelegate(windowDelegate)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./node_modules/promise-polyfill/lib/index.js */ "./node_modules/promise-polyfill/lib/index.js")))

/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/webview-api.js":
/*!****************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/webview-api.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(/*! events */ "events")
var executeJavaScript = __webpack_require__(/*! ./execute-javascript */ "./node_modules/sketch-module-web-view/lib/execute-javascript.js")

// let's try to match https://github.com/electron/electron/blob/master/docs/api/web-contents.md
module.exports = function buildAPI(browserWindow, panel, webview) {
  var webContents = new EventEmitter()

  webContents.loadURL = browserWindow.loadURL

  webContents.loadFile = function(/* filePath */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.downloadURL = function(/* filePath */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.getURL = function() {
    return String(webview.url())
  }

  webContents.getTitle = function() {
    return String(webview.title())
  }

  webContents.isDestroyed = function() {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  webContents.focus = browserWindow.focus
  webContents.isFocused = browserWindow.isFocused

  webContents.isLoading = function() {
    return !!webview.loading()
  }

  webContents.isLoadingMainFrame = function() {
    // TODO:
    return !!webview.loading()
  }

  webContents.isWaitingForResponse = function() {
    return !webview.loading()
  }

  webContents.stop = function() {
    webview.stopLoading()
  }
  webContents.reload = function() {
    webview.reload()
  }
  webContents.reloadIgnoringCache = function() {
    webview.reloadFromOrigin()
  }
  webContents.canGoBack = function() {
    return !!webview.canGoBack()
  }
  webContents.canGoForward = function() {
    return !!webview.canGoForward()
  }
  webContents.canGoToOffset = function(offset) {
    return !!webview.backForwardList().itemAtIndex(offset)
  }
  webContents.clearHistory = function() {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.goBack = function() {
    webview.goBack()
  }
  webContents.goForward = function() {
    webview.goForward()
  }
  webContents.goToIndex = function(index) {
    var backForwardList = webview.backForwardList()
    var backList = backForwardList.backList()
    var backListLength = backList.count()
    if (backListLength > index) {
      webview.loadRequest(NSURLRequest.requestWithURL(backList[index]))
      return
    }
    var forwardList = backForwardList.forwardList()
    if (forwardList.count() > index - backListLength) {
      webview.loadRequest(
        NSURLRequest.requestWithURL(forwardList[index - backListLength])
      )
      return
    }
    throw new Error('Cannot go to index ' + index)
  }
  webContents.goToOffset = function(offset) {
    if (!webContents.canGoToOffset(offset)) {
      throw new Error('Cannot go to offset ' + offset)
    }
    webview.loadRequest(
      NSURLRequest.requestWithURL(webview.backForwardList().itemAtIndex(offset))
    )
  }
  webContents.isCrashed = function() {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setUserAgent = function(/* userAgent */) {
    // TODO:
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.getUserAgent = function() {
    const userAgent = webview.customUserAgent()
    return userAgent ? String(userAgent) : undefined
  }
  webContents.insertCSS = function(css) {
    var source =
      "var style = document.createElement('style'); style.innerHTML = " +
      css.replace(/"/, '\\"') +
      '; document.head.appendChild(style);'
    var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
      source,
      0,
      true
    )
    webview
      .configuration()
      .userContentController()
      .addUserScript(script)
  }
  webContents.insertJS = function(source) {
    var script = WKUserScript.alloc().initWithSource_injectionTime_forMainFrameOnly(
      source,
      0,
      true
    )
    webview
      .configuration()
      .userContentController()
      .addUserScript(script)
  }
  webContents.executeJavaScript = executeJavaScript(webview, browserWindow)
  webContents.setIgnoreMenuShortcuts = function() {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setAudioMuted = function(/* muted */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.isAudioMuted = function() {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setZoomFactor = function(factor) {
    webview.setMagnification_centeredAtPoint(factor, CGPointMake(0, 0))
  }
  webContents.getZoomFactor = function(callback) {
    callback(Number(webview.magnification()))
  }
  webContents.setZoomLevel = function(level) {
    // eslint-disable-next-line no-restricted-properties
    webContents.setZoomFactor(Math.pow(1.2, level))
  }
  webContents.getZoomLevel = function(callback) {
    // eslint-disable-next-line no-restricted-properties
    callback(Math.log(Number(webview.magnification())) / Math.log(1.2))
  }
  webContents.setVisualZoomLevelLimits = function(/* minimumLevel, maximumLevel */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }
  webContents.setLayoutZoomLevelLimits = function(/* minimumLevel, maximumLevel */) {
    // TODO:??
    console.warn(
      'Not implemented yet, please open a PR on https://github.com/skpm/sketch-module-web-view :)'
    )
  }

  // TODO:
  // webContents.undo = function() {
  //   webview.undoManager().undo()
  // }
  // webContents.redo = function() {
  //   webview.undoManager().redo()
  // }
  // webContents.cut = webview.cut
  // webContents.copy = webview.copy
  // webContents.paste = webview.paste
  // webContents.pasteAndMatchStyle = webview.pasteAsRichText
  // webContents.delete = webview.delete
  // webContents.replace = webview.replaceSelectionWithText

  webContents.send = function() {
    const script =
      'window.postMessage({' +
      'isSketchMessage: true,' +
      "origin: '" +
      String(__command.identifier()) +
      "'," +
      'args: ' +
      JSON.stringify([].slice.call(arguments)) +
      '}, "*")'
    webview.evaluateJavaScript_completionHandler(script, null)
  }

  webContents.getNativeWebview = function() {
    return webview
  }

  browserWindow.webContents = webContents
}


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/views/theme/dark.js":
/*!***************************************!*\
  !*** ./resources/views/theme/dark.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dark",
  text: "#E6E4EB",
  bg: "#2D2D2D",
  previewColor: "#F3F2F5",
  input: {
    background: "#373737",
    color: "#F3F2F5",
    border: "#454545",
    borderActive: "#1384FF"
  },
  button: {
    color: "#F3F2F5",
    bgColor: "rgba(255,255,255,0.25)",
    border: "#636363",
    bgActive: "rgba(255,255,255,0.10)"
  },
  secondaryButton: {
    borderColor: "#636363",
    textColor: "#F3F2F5"
  },
  CTAButton: {
    bgColor: "#1384FF",
    textColor: "#fff",
    bgActive: "#0F72DB"
  },
  radio: {
    selectedColor: "#1384FF",
    border: "#1384FF"
  }
});

/***/ }),

/***/ "./resources/views/theme/index.js":
/*!****************************************!*\
  !*** ./resources/views/theme/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark */ "./resources/views/theme/dark.js");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light */ "./resources/views/theme/light.js");


/* harmony default export */ __webpack_exports__["default"] = (function (theme) {
  if (theme === "dark") {
    return _dark__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  return _light__WEBPACK_IMPORTED_MODULE_1__["default"];
});

/***/ }),

/***/ "./resources/views/theme/light.js":
/*!****************************************!*\
  !*** ./resources/views/theme/light.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "light",
  text: "#747474",
  bg: "#F7F7F7",
  previewColor: "#242424",
  input: {
    background: "#FBFBFB",
    color: "#505050",
    border: "#E4E4E4",
    borderActive: "#1384FF"
  },
  button: {
    color: "#505050",
    bgColor: "#FBFBFB",
    border: "#E4E4E4",
    bgActive: "#F3F2F5"
  },
  secondaryButton: {
    borderColor: "#B2AEBD",
    textColor: "#817B8F"
  },
  CTAButton: {
    bgColor: "#1384FF",
    textColor: "#fff",
    bgActive: "#0F72DB"
  },
  radio: {
    selectedColor: "#969696",
    border: "#969696"
  }
});

/***/ }),

/***/ "./resources/webview.html":
/*!********************************!*\
  !*** ./resources/webview.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "file://" + String(context.scriptPath).split(".sketchplugin/Contents/Sketch")[0] + ".sketchplugin/Contents/Resources/_webpack_resources/fedcb36887af924ae92824d43f90ed04.html";

/***/ }),

/***/ "./src/commandResetParentHeading.js":
/*!******************************************!*\
  !*** ./src/commandResetParentHeading.js ***!
  \******************************************/
/*! exports provided: checkSelectedParentHeading, onSelectedChanged, showUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSelectedParentHeading", function() { return checkSelectedParentHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectedChanged", function() { return onSelectedChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUI", function() { return showUI; });
/* harmony import */ var _lib_TheUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/TheUI */ "./src/lib/TheUI.js");
/* harmony import */ var sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch-module-web-view */ "./node_modules/sketch-module-web-view/lib/index.js");
/* harmony import */ var sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1__);


var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");



var SelectedDocument = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

function checkSelectedParentHeading() {
  var win = sketch_module_web_view__WEBPACK_IMPORTED_MODULE_1___default.a.fromId('resetParentHeading.ui');

  if (!win) {
    return;
  }

  var selection = SelectedDocument.selectedLayers;
  var selectionLayers = selection.layers;

  if (selectionLayers.length === 1 && selectionLayers[0].type === 'Artboard') {
    var artboard = selectionLayers[0];
    var layers = artboard.layers;

    for (var index = 0; index < layers.length; index++) {
      var layer = layers[index];
      if (layer.type !== 'SymbolInstance') continue;

      if (layer.master.name === 'Title') {
        var override = layer.overrides[0];

        if (override) {
          var parentHeading = Settings.layerSettingForKey(artboard, 'parentHeading');

          if (!parentHeading) {
            parentHeading = '';
          }

          win.webContents.executeJavaScript("resetParentHeading(1, ".concat(JSON.stringify(parentHeading), ")"));
          return true;
        }
      }
    }
  }

  win.webContents.executeJavaScript("resetParentHeading(0, ".concat(JSON.stringify(''), ")"));
  return false;
}
function onSelectedChanged(context) {
  // var path = context.plugin.urlForResourceNamed('handlepdf.py').path();
  // console.log('path:', path);
  checkSelectedParentHeading();
}
function showUI() {
  var options = {
    identifier: 'resetParentHeading.ui',
    title: '设置父级标题',
    redirectTo: '/reset_parentHeading',
    width: 600,
    height: 310
  };
  Object(_lib_TheUI__WEBPACK_IMPORTED_MODULE_0__["default"])(options);
  setTimeout(checkSelectedParentHeading.bind(null), 1000);
  setTimeout(checkSelectedParentHeading.bind(null), 2000);
  setTimeout(checkSelectedParentHeading.bind(null), 3000);
}

/***/ }),

/***/ "./src/lib/AddPageNumber.js":
/*!**********************************!*\
  !*** ./src/lib/AddPageNumber.js ***!
  \**********************************/
/*! exports provided: addPageNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPageNumber", function() { return addPageNumber; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ "./src/lib/Utilities.js");
var Sketch = __webpack_require__(/*! sketch */ "sketch");

var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

var Text = __webpack_require__(/*! sketch/dom */ "sketch/dom").Text;

var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");



var SelectedDocument = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

var BrowserWindow = null;
var WebContents = null;
var Artboards = [];
var ArtboardIndex = 0;
var ArtboardSort = '';

function handleArtboard(artboard) {
  var instances = Sketch.find('SymbolInstance', artboard);

  for (var index = 0; index < instances.length; index++) {
    var instance = instances[index];

    if (instance.master.name === 'Title') {
      var titleOverride = instance.overrides[0];

      if (titleOverride) {
        var pageNumber = new Text({
          parent: artboard,
          text: '0',
          name: 'pageNumber',
          style: {
            borders: [],
            fontFamily: 'PingFang SC',
            fontSize: 88,
            fontWeight: 4,
            textColor: '#FFFFFF',
            alignment: 'right',
            verticalAlignment: 'center'
          },
          frame: {
            x: 6747,
            y: 88,
            width: 53,
            height: 123
          }
        });
        pageNumber.text = (ArtboardIndex + 1).toString();
        Settings.setLayerSettingForKey(pageNumber, 'textType', 'pageNumber');
        break;
      }
    }
  }

  if (ArtboardIndex === Artboards.length - 1) {
    BrowserWindow.close();
    Sketch.UI.message('Successfully! 🙌');
  } else {
    ++ArtboardIndex;
    setTimeout(handleArtboard.bind(null, Artboards[ArtboardIndex]), 20);
  }
}

function removePageNumber() {
  Sketch.find('Text', SelectedDocument.selectedPage).forEach(function (text) {
    if (Settings.layerSettingForKey(text, 'textType') === 'pageNumber') {
      text.remove();
    }
  });
  Artboards = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["getArtboardsSorted"])(SelectedDocument.selectedPage, ArtboardSort);

  if (Artboards.length > 0) {
    ArtboardIndex = 0;
    setTimeout(handleArtboard.bind(null, Artboards[0]), 20);
  }
}

function clearOldPageNumber() {
  Sketch.find('Text, [name="{page}"]').forEach(function (layer) {
    layer.remove();
  });
  setTimeout(removePageNumber.bind(null), 20);
}

function addPageNumber(artboardSort, contents, win) {
  BrowserWindow = win;
  WebContents = contents;
  ArtboardSort = artboardSort;
  setTimeout(clearOldPageNumber.bind(null), 20);
}

/***/ }),

/***/ "./src/lib/Constants.js":
/*!******************************!*\
  !*** ./src/lib/Constants.js ***!
  \******************************/
/*! exports provided: TocPageName, ArtboardSortEnum, ArtbaordLayersSortEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocPageName", function() { return TocPageName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtboardSortEnum", function() { return ArtboardSortEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtbaordLayersSortEnum", function() { return ArtbaordLayersSortEnum; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TocPageName = "Table of Contents";
var ArtboardSortEnum = {
  Top2BottomByLayerList: 1,
  Bottom2TopByLayerList: 2,
  Left2RightByArtboard: 3,
  Right2LeftByArtboard: 4,
  Top2BottomByArtboard: 5
};
var ArtbaordLayersSortEnum = _defineProperty({
  Top2BottomByLayerList: 1
}, "Top2BottomByLayerList", 2);

/***/ }),

/***/ "./src/lib/CreateTableOfContents.js":
/*!******************************************!*\
  !*** ./src/lib/CreateTableOfContents.js ***!
  \******************************************/
/*! exports provided: createTableOfContents, setParentHeadingOrOverrideValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTableOfContents", function() { return createTableOfContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setParentHeadingOrOverrideValue", function() { return setParentHeadingOrOverrideValue; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ "./src/lib/Utilities.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Sketch = __webpack_require__(/*! sketch */ "sketch");

var Artboard = __webpack_require__(/*! sketch/dom */ "sketch/dom").Artboard;

var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

var Group = __webpack_require__(/*! sketch/dom */ "sketch/dom").Group;

var Text = __webpack_require__(/*! sketch/dom */ "sketch/dom").Text;

var ShapePath = __webpack_require__(/*! sketch/dom */ "sketch/dom").ShapePath;

var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");



var SelectedDocument = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

var CheckSerial = false;
var BrowserWindow = null;
var WebContents = null;
var NoParentHeadingArtboard;
var InvalidHeadingOverride; // 目录参数

var ContentWidth = 7000;
var ContentHeight = 4949;
var GroupSpacing = 700;
var GroupTopMargin = 500;
var GroupLeftAndRightMargin = 200;
var GroupCounts = 3;
var GroupWidth = (ContentWidth - GroupLeftAndRightMargin * 2 - GroupSpacing * 2) / GroupCounts; // 全局变量，用于异步处理耗时操作

var Artboards = [];
var ArtboardIndex = 0;
var HeadingsMap = new Map();
var PageTitleMaster;
var BottomBannerMaster;
var LastHeadingSerial = '';

function addPgaeNumber(artboard, value) {
  var pageNumber = new Text({
    parent: artboard,
    text: '0',
    name: 'pageNumber',
    style: {
      borders: [],
      fontFamily: 'PingFang SC',
      fontSize: 88,
      fontWeight: 4,
      textColor: '#FFFFFF',
      alignment: 'right',
      verticalAlignment: 'center'
    },
    frame: {
      x: 6747,
      y: 88,
      width: 53,
      height: 123
    }
  });
  pageNumber.text = value;
  pageNumber.name = 'pageNumber';
  Settings.setLayerSettingForKey(pageNumber, 'textType', 'pageNumber');
}

function addPageNumbers(contentsArtboards) {
  Sketch.find('Text, [name="{page}"]').forEach(function (layer) {
    layer.remove();
  });
  Sketch.find('Text', SelectedDocument.selectedPage).forEach(function (text) {
    if (Settings.layerSettingForKey(text, 'textType') === 'pageNumber') {
      text.remove();
    }
  });
  Artboards.forEach(function (artboard) {
    var instances = Sketch.find('SymbolInstance', artboard);

    for (var _index = 0; _index < instances.length; _index++) {
      var instance = instances[_index];

      if (instance.master.name === 'Title') {
        var titleOverride = instance.overrides[0];

        if (titleOverride) {
          var value = HeadingsMap.get(titleOverride.value);

          if (value > 2) {
            value += contentsArtboards.length;
          }

          addPgaeNumber(artboard, value.toString());
          break;
        }
      }
    }
  });
  var index = 3;
  contentsArtboards.forEach(function (artboard) {
    addPgaeNumber(artboard, index.toString());
    ++index;
  });

  if (contentsArtboards.length > 0) {
    SelectedDocument.selectedLayers.forEach(function (layer) {
      layer.selected = false;
    });
    contentsArtboards[0].selected = true;
    SelectedDocument.centerOnLayer(contentsArtboards[0]);
  }

  BrowserWindow.close();
  Sketch.UI.message('Successfully! 🙌');
}

function createHeading(artboard, originalX, originalY, headingLevel, headingText, pageNumber) {
  var groupHeight; // 序号及标题

  var serialAndContentX;
  var serialAndContentHeight;
  var serialAndContentFontSize;
  var serialAndContentFontWeight;
  var serialAndContentFontColor;

  if (headingLevel === 1) {
    serialAndContentX = 0;
    serialAndContentHeight = 90;
    serialAndContentFontSize = 64;
    serialAndContentFontWeight = 6; // Medium

    serialAndContentFontColor = '#333333';
    groupHeight = serialAndContentHeight;
  } else if (headingLevel === 2) {
    serialAndContentX = 80;
    serialAndContentHeight = 78;
    serialAndContentFontSize = 56;
    serialAndContentFontWeight = 4; // Regular

    serialAndContentFontColor = '#333333';
    groupHeight = serialAndContentHeight;
  } else {
    serialAndContentX = 160;
    serialAndContentHeight = 67;
    serialAndContentFontSize = 48;
    serialAndContentFontWeight = 4; // Regular

    serialAndContentFontColor = '#666666';
    groupHeight = serialAndContentHeight;
  }

  var serialAndContent = new Text({
    text: headingText.trim(),
    // NOTE: list text first! text maybe change the name
    name: 'serialAndContent',
    style: {
      borders: [],
      fontFamily: 'PingFang SC',
      fontSize: serialAndContentFontSize,
      fontWeight: serialAndContentFontWeight,
      textColor: serialAndContentFontColor,
      alignment: 'left',
      verticalAlignment: 'center'
    },
    frame: {
      x: serialAndContentX,
      y: (groupHeight - serialAndContentHeight) / 2,
      // 无法固定高度，用此方法代替
      height: groupHeight
    }
  }); // 连接线

  var separator = new ShapePath({
    name: 'separator',
    shapeType: ShapePath.ShapeType.Custom,
    style: {
      borders: [{
        thickness: 3
      }],
      borderOptions: {
        dashPattern: [20, 5, 20, 5]
      }
    },
    frame: {
      x: serialAndContent.frame.x + serialAndContent.frame.width + 100,
      y: 0,
      width: GroupWidth - (serialAndContent.frame.x + serialAndContent.frame.width + 100) - 100,
      height: groupHeight
    },
    points: [{
      point: {
        x: 0,
        y: 0.5
      }
    }, {
      point: {
        x: 1,
        y: 0.5
      }
    }]
  }); // 页码

  var pageNumberFontSize;

  if (headingLevel === 1) {
    pageNumberFontSize = 56;
  } else if (headingLevel === 2) {
    pageNumberFontSize = 56;
  } else if (headingLevel === 3) {
    pageNumberFontSize = 56;
  }

  var page = new Text({
    text: pageNumber.toString(),
    name: 'pageNumber',
    style: {
      borders: [],
      fontFamily: 'PingFang SC',
      fontSize: pageNumberFontSize,
      fontWeight: 4,
      // Regular
      textColor: '#333333',
      alignment: 'right',
      verticalAlignment: 'center'
    },
    frame: {
      x: GroupWidth - 100,
      y: (groupHeight - 78) / 2,
      width: 100,
      height: groupHeight
    }
  }); // 占位，用于设定 Group 的高度

  var placeholder = new ShapePath({
    name: 'placeholder',
    shapeType: ShapePath.ShapeType.Custom,
    frame: {
      x: 0,
      y: 0,
      width: 1,
      height: groupHeight
    }
  });
  var group = new Group({
    parent: artboard,
    name: headingText,
    frame: {
      x: originalX,
      y: originalY,
      width: GroupWidth,
      height: groupHeight
    }
  });
  group.adjustToFit();
  group.layers = [placeholder, serialAndContent, separator, page];
  return group;
}

function getCorrectSerial(lastSerial, currentSerial) {
  if (lastSerial.endsWith('.')) {
    lastSerial = lastSerial.slice(-1);
  }

  if (currentSerial.endsWith('.')) {
    currentSerial = currentSerial.slice(-1);
  }

  var correct = '';

  if (lastSerial === '') {
    correct = '1.';
  } else {
    var lastSerialList = lastSerial.split('.');
    var currentSerialList = currentSerial.split('.');
    var lastSerialLastNumber = lastSerialList[lastSerialList.length - 1];
    var currentSerialLastNumber = currentSerialList[currentSerialList.length - 1];
    var lastLevel = lastSerialList.length;
    var currentLevel = currentSerialList.length;

    if (lastLevel === currentLevel) {
      var list = lastSerial.slice(0, -2);
      correct = list.concat(lastSerialLastNumber + 1);
    } else if (lastLevel < currentLevel) {
      if (currentLevel - lastLevel === 1) {}
    }
  }

  return correct;
}

function checkHeadingSerial(lastSerial, currentSerial) {
  if (!CheckSerial) {
    return true;
  }

  var hasError = false;

  if (lastSerial.length === 0) {
    if (currentSerial !== '1.') {
      hasError = true;
      correct = '1.';
    }
  } else if (lastSerial.endsWith('.')) {
    var tempLastSerial = lastSerial;

    if (lastSerial.split('.')[0] === '1' && currentSerial.split('.')[0] === '3') {
      tempLastSerial = '2.';
    }

    if (currentSerial !== tempLastSerial + '1' && currentSerial !== parseInt(tempLastSerial) + 1 + '.') {
      hasError = true;

      if (currentSerial.endsWith('.')) {
        correct = parseInt(tempLastSerial) + 1 + '.';
      } else {
        correct = tempLastSerial + '1';
      }
    }
  } else {
    var array = lastSerial.split('.');
    var newArray = array;
    var secondLastNumber;
    var serialLength = array.length;

    if (serialLength > 2) {
      secondLastNumber = newArray[newArray.length - 2];
      newArray.splice(newArray.length - 1, 2);
    }

    var firstNumber = array[0];
    var lastNumber = array[array.length - 1];
    array.splice(array.length - 1, 1);

    if (serialLength === 2) {
      if (currentSerial !== lastSerial + '.1' && currentSerial !== firstNumber + '.' + (parseInt(lastNumber) + 1) && currentSerial !== parseInt(firstNumber) + 1 + '.') {
        hasError = true;
      }
    } else {
      if (currentSerial !== lastSerial + '.1' && currentSerial !== array.join('.') + (parseInt(lastNumber) + 1) && currentSerial !== newArray.join('.') + (parseInt(secondLastNumber) + 1)) {
        hasError = true;
      }
    }
  }

  return !hasError;
}

function focusArtboard(artboard) {
  SelectedDocument.selectedLayers.forEach(function (layer) {
    layer.selected = false;
  });
  artboard.parent.selected = true;
  artboard.selected = true;
  SelectedDocument.centerOnLayer(artboard);
}

function updateContentsPage(contentsArtboards, headingsMap) {
  // set contents page heading
  var contentsTitles = [];

  for (var index = 0; index < contentsArtboards.length; index++) {
    var artboard = contentsArtboards[index];
    var value = void 0;

    if (index === 0) {
      if (contentsArtboards.length === 1) {
        value = '2. 目录';
      } else {
        value = '2. 目录01';
      }
    } else {
      var number = void 0;

      if (index < 10) {
        number = '0' + index;
      } else {
        number = index;
      }

      value = '2.' + index.toString() + ' 目录' + number;
    }

    artboard.layers[0].overrides[0].value = value;
    contentsTitles.push(value);
  } // insert contents page in TOC


  var newHeadingMap = new Map();
  var frontContentsPages = 0;
  var hasAddContents = false;
  headingsMap.forEach(function (pageNumber, headingText) {
    if (!hasAddContents && parseInt(headingText.split('.')[0]) > 2) {
      hasAddContents = true;

      for (var _index2 = 0; _index2 < contentsTitles.length; _index2++) {
        var title = contentsTitles[_index2];
        newHeadingMap.set(title, frontContentsPages + _index2 + 1);
      }
    }

    frontContentsPages += pageNumber;
    newHeadingMap.set(headingText, pageNumber);
  }); // reset TOC page number

  newHeadingMap.forEach(function (pageNumber, headingText) {
    if (parseInt(headingText.split('.')[0]) > 2) {
      newHeadingMap.set(headingText, pageNumber + contentsArtboards.length);
    }
  });
  return newHeadingMap;
}

function addHeading(page, headingsMap) {
  // delete contents artboard
  page.layers.forEach(function (artboard) {
    if (Settings.layerSettingForKey(artboard, 'layerType') === 'TOC') {
      artboard.remove();
    }
  });
  var artboard;
  var contentsArtboards = [];
  var contentsPageIndex = 0;
  var lastLevel = 1;
  var column = 0;
  var originalY = GroupTopMargin;
  var needAddNewArtboard = true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = headingsMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          headingText = _step$value[0],
          pageNumber = _step$value[1];

      // create artboard
      if (needAddNewArtboard) {
        artboard = new Artboard({
          parent: page,
          name: 'Contents ' + (contentsPageIndex + 1).toString(),
          frame: {
            x: 0 + (ContentWidth + 50) * contentsPageIndex,
            y: 0,
            width: ContentWidth,
            height: ContentHeight
          },
          background: {
            enabled: true,
            color: '#FBFBFB'
          }
        });
        Settings.setLayerSettingForKey(artboard, 'layerType', 'TOC');
        contentsArtboards.push(artboard);
        var topBanner = PageTitleMaster.createNewInstance();
        var bottomBanner = BottomBannerMaster[0].createNewInstance();
        bottomBanner.frame.y = ContentHeight - bottomBanner.frame.height;
        topBanner.parent = artboard;
        bottomBanner.parent = artboard;
        contentsPageIndex += 1;
      } // check level


      var currentLevel = void 0;
      var serialText = headingText.split(' ')[0];

      if (serialText.endsWith('.')) {
        currentLevel = 1;
      } else {
        currentLevel = serialText.split('.').length;
      } // create headings


      var originalX = GroupLeftAndRightMargin + GroupWidth * column + GroupSpacing * column;

      if (!needAddNewArtboard) {
        if (currentLevel === 1) {
          originalY += 100;
        } else {
          originalY += 46;
        }
      }

      lastLevel = currentLevel;
      var group = createHeading(artboard, originalX, originalY, currentLevel, headingText, pageNumber);

      if (group.frame.y > 4000) {
        column += 1;
        originalY = GroupTopMargin;
      } else {
        originalY += group.frame.height;
      }

      if (column > 2) {
        needAddNewArtboard = true;
        column = 0;
      } else {
        needAddNewArtboard = false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return contentsArtboards;
}

function checkHeading(artboard) {
  // 过滤掉目录页
  var type = Settings.layerSettingForKey(artboard, 'layerType'); // 遍历画板所有层，找出标题层

  var layers = artboard.layers;

  for (var index = 0; index < layers.length; index++) {
    var layer = layers[index];
    if (layer.type !== 'SymbolInstance') continue;

    if (layer.master.name === 'Title') {
      var override = layer.overrides[0];

      if (override) {
        PageTitleMaster = layer.master; // 优化空格

        var value = override.value;
        value = value.trim();
        value = value.replace(/ {1,}/, ' ');
        override.value = value; // 检查是否有重复

        override = layer.overrides[0]; // Fix: ?

        if (HeadingsMap.has(override.value)) {
          // 标题有重复，提示用户修正
          console.log('same heading:', override.value);
          focusArtboard(artboard);
          InvalidHeadingOverride = override;
          WebContents.executeJavaScript("showCreateTocHint('\u6807\u9898\u6709\u91CD\u590D', ".concat(JSON.stringify(override.value), ")"));
          return false;
        } // 匹配六级标题：（1.）（1.1）（1.1.1）...


        var pattern = /(^[1-9][0-9]{0,}\. )|(^[1-9][0-9]{0,}((\.[1-9][0-9]{0,}){1,5}) )/;
        var regex = new RegExp(pattern);

        if (override.value.length && !regex.test(override.value)) {
          // 标题格式不正确，提示用户修正
          console.log('invalid format heading:', override.value);
          focusArtboard(artboard);
          InvalidHeadingOverride = override;
          WebContents.executeJavaScript("showCreateTocHint('\u65E0\u6548\u7684\u6807\u9898\uFF0C\u6B63\u786E\u683C\u5F0F\u793A\u4F8B:\u30101. XXX\u3011 \u6216\u8005 \u30101.1 XXX\u3011', ".concat(JSON.stringify(override.value), ")"));
          return false;
        } else {
          // 标题格式正确，修正当前标题
          // TODO
          // 标题格式正确，判断是否需要提示指定父级标题
          var currentSerial = override.value.split(' ')[0];

          if (currentSerial.endsWith('1') && !currentSerial.startsWith(LastHeadingSerial)) {
            var parentHeading = Settings.layerSettingForKey(artboard, 'parentHeading');

            if (!parentHeading) {
              console.log('should add parent heading:', artboard.name);
              focusArtboard(artboard);
              NoParentHeadingArtboard = artboard;
              WebContents.executeJavaScript("showCreateTocHint('\u9700\u8981\u6DFB\u52A0\u5F53\u524D\u6807\u9898\u7684\u7236\u6807\u9898\uFF0C\u5F53\u524D\u6807\u9898\u4E3A:' + ".concat(JSON.stringify(override.value), ")"));
              return false;
            } else if (!parentHeading.startsWith(currentSerial.slice(0, -2))) {
              var serial = parentHeading.split(' ')[0];

              if (!checkHeadingSerial(LastHeadingSerial, serial) || currentSerial !== serial + '.1') {
                console.log('invalid sort parent heading:', artboard.name);
                focusArtboard(artboard);
                NoParentHeadingArtboard = artboard;
                WebContents.executeJavaScript("showCreateTocHint('\u7236\u7EA7\u6807\u9898\u5E8F\u53F7\u4E0D\u6B63\u786E\uFF0C\u8BF7\u66F4\u6B63\u3002\u4E0A\u4E00\u6807\u9898\u5E8F\u53F7\u4E3A:' + ".concat(JSON.stringify(LastHeadingSerial), ", ").concat(JSON.stringify(parentHeading), ")"));
                return false;
              }
            } else {
              LastHeadingSerial = parentHeading.split(' ')[0];
              HeadingsMap.set(parentHeading, ArtboardIndex + 1);
            }
          } // 检查标题序号


          if (!checkHeadingSerial(LastHeadingSerial, currentSerial)) {
            console.log('invalid sort heading:', override.value);
            focusArtboard(artboard);
            InvalidHeadingOverride = override;
            WebContents.executeJavaScript("showCreateTocHint('\u5F53\u524D\u6807\u9898\u5E8F\u53F7\u4E0D\u6B63\u786E\uFF0C\u8BF7\u66F4\u6B63\u3002\u4E0A\u4E00\u6807\u9898\u5E8F\u53F7\u4E3A:' + ".concat(JSON.stringify(LastHeadingSerial), ", ").concat(JSON.stringify(override.value), ")"));
            return false;
          }

          HeadingsMap.set(override.value, ArtboardIndex + 1);
          LastHeadingSerial = currentSerial;
        }

        break;
      }
    }
  } // 判断最后一个


  if (ArtboardIndex < Artboards.length - 1) {
    ++ArtboardIndex;
    setTimeout(checkHeading.bind(null, Artboards[ArtboardIndex]), 5);
  } else {
    if (HeadingsMap.size === 0) {
      console.log('no headings');
      UI.alert('Error', '找不到目录页，请检查标题设置是否正确');
      WebContents.executeJavaScript("showCreateTocCreate()");
      return;
    } // add headings


    var contentsArtboards = addHeading(SelectedDocument.selectedPage, HeadingsMap);
    var newHeadingsMap = updateContentsPage(contentsArtboards, HeadingsMap); // add headings again

    var newContentsArtboards = addHeading(SelectedDocument.selectedPage, newHeadingsMap);
    newHeadingsMap = updateContentsPage(newContentsArtboards, newHeadingsMap);

    if (contentsArtboards.length !== newContentsArtboards.length) {
      console.log("new content artboards'size greater than the old one.");
      newContentsArtboards = addHeading(SelectedDocument.selectedPage, newHeadingsMap);
      newHeadingsMap = updateContentsPage(newContentsArtboards, newHeadingsMap);
    } // 添加页码


    setTimeout(addPageNumbers.bind(null, newContentsArtboards), 5);
  }
}

function checkMasters() {
  BottomBannerMaster = Sketch.find('SymbolMaster, [name="页尾"]');

  if (!BottomBannerMaster.length) {
    console.log('can not found the banner');
    UI.alert('Error', '请添加生成目录所需要组件:页尾');
    WebContents.executeJavaScript("showCreateTocCreate()");
    return false;
  }

  return true;
}

function checkSelectedPage() {
  var page = SelectedDocument.selectedPage;

  if (!page) {
    UI.alert('Error', '请选中“文档页”');
    return false;
  } else if (page.isSymbolsPage()) {
    UI.alert('Error', '请选中“文档页”，当前选中的是“组件页”');
    return false;
  } else if (Settings.layerSettingForKey(page, 'layerType') === 'TOC') {
    UI.alert('Error', '请选中“文档页”，当前选中的是“目录页”');
    return false;
  }

  return true;
}

function createTableOfContents(artboardSort, checkSerial, contents, win) {
  var isContinue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (!isContinue) {
    CheckSerial = checkSerial;
    BrowserWindow = win;
    WebContents = contents;

    if (!checkSelectedPage()) {
      WebContents.executeJavaScript("showCreateTocCreate()");
      return;
    }

    if (!checkMasters()) {
      WebContents.executeJavaScript("showCreateTocCreate()");
      return;
    } // 得到排序后的画板


    Artboards = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["getArtboardsSorted"])(SelectedDocument.selectedPage, artboardSort);

    if (Artboards.length === 0) {
      console.log('no artboards');
      UI.alert('Error', '当前文档为空，无需要生成目录');
      WebContents.executeJavaScript("showCreateTocCreate()");
      return;
    } // 过滤掉 TOC


    for (var index = 0; index < Artboards.length; index++) {
      var type = Settings.layerSettingForKey(Artboards[index], 'layerType');

      if (type === 'TOC') {
        Artboards.splice(index, 1);
        break;
      }
    } // 从画板中检测出标题


    HeadingsMap.clear();
    ArtboardIndex = 0;
    LastHeadingSerial = '';
    setTimeout(checkHeading.bind(null, Artboards[0]), 5);
  } else {
    setTimeout(checkHeading.bind(null, Artboards[ArtboardIndex]), 5);
  }
}
function setParentHeadingOrOverrideValue(value) {
  if (InvalidHeadingOverride) {
    InvalidHeadingOverride.value = value;
    InvalidHeadingOverride = undefined;
  }

  if (NoParentHeadingArtboard) {
    Settings.setLayerSettingForKey(NoParentHeadingArtboard, 'parentHeading', value);
    NoParentHeadingArtboard = undefined;
  }
}

/***/ }),

/***/ "./src/lib/ExportMetadata.js":
/*!***********************************!*\
  !*** ./src/lib/ExportMetadata.js ***!
  \***********************************/
/*! exports provided: cancelTask, getTargetLayers, exportMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelTask", function() { return cancelTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetLayers", function() { return getTargetLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportMetadata", function() { return exportMetadata; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Sketch = __webpack_require__(/*! sketch */ "sketch");

var fs = __webpack_require__(/*! @skpm/fs */ "./node_modules/@skpm/fs/index.js");

var _require = __webpack_require__(/*! @skpm/child_process */ "./node_modules/@skpm/child_process/index.js"),
    exec = _require.exec; // const TheUI = require('./TheUI');


var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

var exportDir = '';
var browserWindow = null;
var webContents = null;
var needParsePages = [];
var needParsePagesIndex = 0;
var needParseCount = 0;
var hasParseCount = 0;
var resultJsons = [];
var exportLayerJsonOptions = {
  formats: 'json',
  output: false
};
var needCancel = false;
var needParseLayers = ['', 'artboard', 'text', 'bitmap', 'group', 'shapeGroup', 'symbolInstance', 'rectangle', 'oval', 'shapePath', 'triangle', 'star', 'polygon', 'slice', 'MSImmutableHotspotLayer'];

function parsePage(json) {
  return {
    objectID: json.do_objectID,
    type: 'page',
    name: json.name,
    rect: {
      x: json.frame.x,
      y: json.frame.y,
      width: json.frame.width,
      height: json.frame.height
    },
    rotation: json.rotation,
    layers: json.layers
  };
}

function parseArtboard(json) {
  return {
    objectID: json.do_objectID,
    type: json._class,
    name: json.name,
    rect: {
      x: json.frame.x,
      y: json.frame.y,
      width: json.frame.width,
      height: json.frame.height
    },
    rotation: json.rotation,
    layers: json.layers
  };
}

function parseText(json) {
  return {
    objectID: json.do_objectID,
    type: json._class,
    name: json.name,
    rect: {
      x: json.frame.x,
      y: json.frame.y,
      width: json.frame.width,
      height: json.frame.height
    },
    rotation: json.rotation,
    content: json.attributedString.string,
    fontFamily: json.style.textStyle.encodedAttributes.MSAttributedStringFontAttribute.attributes.name,
    fontSize: json.style.textStyle.encodedAttributes.MSAttributedStringFontAttribute.attributes.size,
    fontColor: {
      r: json.style.textStyle.encodedAttributes.MSAttributedStringColorAttribute.red,
      g: json.style.textStyle.encodedAttributes.MSAttributedStringColorAttribute.green,
      b: json.style.textStyle.encodedAttributes.MSAttributedStringColorAttribute.blue,
      a: json.style.textStyle.encodedAttributes.MSAttributedStringColorAttribute.alpha
    }
  };
}

function parseImage(json) {
  return {
    objectID: json.do_objectID,
    type: json._class,
    name: json.name,
    rect: {
      x: json.frame.x,
      y: json.frame.y,
      width: json.frame.width,
      height: json.frame.height
    },
    rotation: json.rotation,
    "export": 'images/' + json.do_objectID.toLowerCase() + '.png'
  };
}

function parseGroup(json) {
  return {
    objectID: json.do_objectID,
    type: json._class,
    name: json.name,
    rect: {
      x: json.frame.x,
      y: json.frame.y,
      width: json.frame.width,
      height: json.frame.height
    },
    rotation: json.rotation,
    layers: json.layers
  };
}

function parseSymbol(json) {
  var overrideValues = json.overrideValues;
  var overrideValuesModify = [];
  overrideValues.forEach(function (overrideValue) {
    var type;
    var json = JSON.parse(JSON.stringify(overrideValue), function (key, value) {
      if (key === '_class') {
        return undefined;
      } else if (key === 'overrideName') {
        var values = value.split('_');
        var last = values.pop();
        type = last;
        return values.join();
      } else if (key === 'value') {
        if (_typeof(value) === 'object') {
          return value._ref;
        } else {
          return value;
        }
      } else {
        return value;
      }
    });

    if (type === 'image') {// if (!fs.existsSync(dir + '/' + json.value))
      // 	fs.renameSync(dir + '/unzip/' + json.value, dir + '/' + json.value);
    } else if (type === 'symbolID') {// TODO: how to handle ?
      // letlayer = document.getLayerWithID(json.value)
      // if (layer) {
      // 	console.log(layer.name)
      // }
      // letsymbolMaster = document.getSymbolMasterWithID(json.value)
      // console.log(json.value)
      // if (symbolMaster) {
      // 	console.log(symbolMaster.name)
      // }
    }

    overrideValuesModify.push({
      type: type,
      name: json.overrideName,
      value: json.value
    });
  });
  return {
    objectID: json.do_objectID,
    symbolID: json.symbolID,
    type: json._class,
    name: json.name,
    rect: {
      x: json.frame.x,
      y: json.frame.y,
      width: json.frame.width,
      height: json.frame.height
    },
    rotation: json.rotation,
    "export": 'images/' + json.do_objectID.toLowerCase() + '.png',
    overrideValues: overrideValuesModify
  };
}

function parseCommon(json) {
  return {
    objectID: json.do_objectID,
    type: json._class,
    name: json.name,
    rect: {
      x: json.frame.x,
      y: json.frame.y,
      width: json.frame.width,
      height: json.frame.height
    },
    rotation: json.rotation,
    "export": 'images/' + json.do_objectID.toLowerCase() + '.png'
  };
}

function exportLayer(layer) {
  var options = {
    scales: '1',
    formats: 'png',
    output: exportDir + '/images',
    'use-id-for-name': true,
    overwriting: true
  };
  Sketch["export"](layer, options);
  fs.renameSync(exportDir + '/images/' + layer.id + '.png', exportDir + '/images/' + layer.id.toLowerCase() + '.png');
}

function cancelTask() {
  needCancel = true;
}
function getTargetLayers() {
  var pages = document.pages;
  var nodes = [];
  pages.forEach(function (page) {
    var children = [];
    var sketchJSON = Sketch["export"](page, exportLayerJsonOptions);
    JSON.parse(JSON.stringify(sketchJSON), function (key, value) {
      if (value._class === 'artboard') {
        children.push({
          value: value.do_objectID,
          label: value.name
        });
      }

      return value;
    });
    nodes.push({
      value: page.id,
      label: page.name,
      children: children
    });
  });
  console.log(nodes);
  return nodes;
}

function closeWindow() {
  browserWindow.setClosable(true);
  browserWindow.close();
}

function calcNeedParseCount(page) {
  if (needCancel) {
    closeWindow();
    return;
  }

  var sketchJSON = Sketch["export"](page, exportLayerJsonOptions);
  JSON.parse(JSON.stringify(sketchJSON), function (key, value) {
    if (needParseLayers.includes(value._class)) needParseCount += 1;
    return value;
  });
  needParsePagesIndex += 1;

  if (needParsePagesIndex < needParsePages.length) {
    setTimeout(calcNeedParseCount.bind(null, needParsePages[needParsePagesIndex]), 5);
  } else {
    needParsePagesIndex = 0;
    webContents.executeJavaScript("exportProgress(0)");
    webContents.executeJavaScript("exportMessage('Exporting ".concat(needParsePages[0].name, "')"));

    var _sketchJSON = Sketch["export"](needParsePages[0], exportLayerJsonOptions);

    setTimeout(handleSketchJSON.bind(null, _sketchJSON), 5);
  }
}

function handleSketchJSON(sketchJSON) {
  if (needCancel) {
    closeWindow();
    return;
  } // parse


  var hasParse = false;
  var hasAllParse = false;
  var json = JSON.parse(JSON.stringify(sketchJSON), function (key, value) {
    if (!hasParse) {
      // empty key means page layer, number key means layers, handle this two parts only
      if (key === '') {
        hasParse = true;
        hasAllParse = true;
        return parsePage(value);
      } else if (!isNaN(key)) {
        if (value._class === 'artboard') {
          hasParse = true;
          return parseArtboard(value);
        } else if (value._class === 'text') {
          hasParse = true;
          return parseText(value);
        } else if (value._class === 'bitmap') {
          hasParse = true;
          exportLayer(document.getLayerWithID(value.do_objectID));
          return parseImage(value);
        } else if (value._class === 'group' || value._class === 'shapeGroup') {
          hasParse = true;
          return parseGroup(value);
        } else if (value._class === 'symbolInstance') {
          hasParse = true;
          exportLayer(document.getLayerWithID(value.do_objectID));
          return parseSymbol(value);
        } else if (value._class === 'rectangle' || value._class === 'oval' || value._class === 'shapePath' || value._class === 'triangle' || value._class === 'star' || value._class === 'polygon' || value._class === 'slice' || value._class === 'MSImmutableHotspotLayer') {
          hasParse = true;
          exportLayer(document.getLayerWithID(value.do_objectID));
          return parseCommon(value);
        } else {
          return value;
        }
      } else {
        return value;
      }
    } else {
      return value;
    }
  });

  if (hasAllParse) {
    resultJsons.push(json);
    needParsePagesIndex += 1;

    if (needParsePagesIndex < needParsePages.length) {
      webContents.executeJavaScript("exportMessage('Exporting ".concat(needParsePages[needParsePagesIndex].name, "')"));

      var _sketchJSON2 = Sketch["export"](needParsePages[needParsePagesIndex], exportLayerJsonOptions);

      handleSketchJSON(_sketchJSON2);
    } else {
      // output metadata file
      webContents.executeJavaScript("exportMessage('Creating metadata file)");
      fs.writeFileSync(exportDir + '/metadata.json', JSON.stringify({
        pages: resultJsons
      })); // clear unzip

      var unzipPath = exportDir + '/unzip';

      if (fs.existsSync(unzipPath)) {
        fs.rmdirSync(unzipPath, {
          recursive: true
        });
      }

      Sketch.UI.message('Export Successfully! 🙌');
      closeWindow();
    }
  } else {
    hasParseCount += 1;
    webContents.executeJavaScript("exportProgress(".concat(JSON.stringify(hasParseCount * 100 / needParseCount), ")"));
    setTimeout(handleSketchJSON.bind(null, json), 5);
  }
}

function exportMetadata(exportPath, contents, win) {
  exportDir = exportPath;
  browserWindow = win;
  webContents = contents; // clear output first

  if (fs.existsSync(exportDir)) {
    webContents.executeJavaScript("exportMessage('Clearing output')");
    fs.rmdirSync(exportDir, {
      recursive: true
    });
  } // handle export dir


  if (!fs.existsSync(exportDir)) {
    webContents.executeJavaScript("exportMessage('Creating output directory')");
    fs.mkdirSync(exportDir);
  } // unzip sketch file


  var cmd = '/usr/bin/unzip -o "' + document.path.replace(/%20/g, ' ') + '" -d "' + exportDir + '/unzip"';
  webContents.executeJavaScript("exportMessage('Unzip sketch file...')");
  exec(cmd, function () {
    var pages = document.pages;
    pages.forEach(function (page) {
      if (page.name !== 'Symbols') {
        needParsePages.push(page);
      }
    });

    if (needParsePages.length > 0) {
      webContents.executeJavaScript("exportMessage('Counting target layers')");
      calcNeedParseCount(needParsePages[0]);
    }
  });
}

/***/ }),

/***/ "./src/lib/ResetParentHeading.js":
/*!***************************************!*\
  !*** ./src/lib/ResetParentHeading.js ***!
  \***************************************/
/*! exports provided: resetParentHeading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetParentHeading", function() { return resetParentHeading; });
var Sketch = __webpack_require__(/*! sketch */ "sketch");

var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

var SelectedDocument = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

var BrowserWindow = null;
var WebContents = null;
function resetParentHeading(heading, contents, win) {
  BrowserWindow = win;
  WebContents = contents;
  var selection = SelectedDocument.selectedLayers;
  var selectionLayers = selection.layers;

  if (selectionLayers.length === 1 && selectionLayers[0].type === 'Artboard') {
    var artboard = selectionLayers[0];
    Settings.setLayerSettingForKey(artboard, 'parentHeading', heading);
  }
}

/***/ }),

/***/ "./src/lib/TheUI.js":
/*!**************************!*\
  !*** ./src/lib/TheUI.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch_module_web_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-module-web-view */ "./node_modules/sketch-module-web-view/lib/index.js");
/* harmony import */ var sketch_module_web_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_module_web_view__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_CreateTableOfContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/CreateTableOfContents */ "./src/lib/CreateTableOfContents.js");
/* harmony import */ var _lib_ResetParentHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/ResetParentHeading */ "./src/lib/ResetParentHeading.js");
/* harmony import */ var _lib_AddPageNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/AddPageNumber */ "./src/lib/AddPageNumber.js");
/* harmony import */ var _lib_ExportMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ExportMetadata */ "./src/lib/ExportMetadata.js");
/* harmony import */ var _resources_views_theme_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/views/theme/index */ "./resources/views/theme/index.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utilities */ "./src/lib/Utilities.js");
/* harmony import */ var _skpm_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @skpm/dialog */ "./node_modules/@skpm/dialog/lib/index.js");
/* harmony import */ var _skpm_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_skpm_dialog__WEBPACK_IMPORTED_MODULE_7__);








var handingTask = false;

var theUI = function theUI(options) {
  var themeColor = typeof MSTheme !== 'undefined' && MSTheme.sharedTheme().isDark() ? 'dark' : 'light';
  var theme = Object(_resources_views_theme_index__WEBPACK_IMPORTED_MODULE_5__["default"])(themeColor);
  var winOptions = {
    identifier: options.identifier,
    title: options.title,
    width: options.width,
    height: options.height,
    minimizable: false,
    maximizable: false,
    resizable: false,
    fullscreenable: false,
    backgroundColor: theme.bg,
    alwaysOnTop: true,
    show: false
  };
  var artboardSort = '';
  var checkSerial = false;
  var win = new sketch_module_web_view__WEBPACK_IMPORTED_MODULE_0___default.a(winOptions);
  var contents = win.webContents;
  win.once('ready-to-show', function () {
    win.show();
  }); // Sending a message to the plugin from the WebView

  win.on('closed', function (e) {
    win = null;
  });
  contents.on('cancel', function () {
    var needShowAlert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (needShowAlert) {
      contents.executeJavaScript("showExportAlert()");
    } else {
      if (handingTask) {
        Object(_lib_ExportMetadata__WEBPACK_IMPORTED_MODULE_4__["cancelTask"])();
      } else {
        win.setClosable(true);
        win.close();
      }
    }
  });
  win.loadURL(__webpack_require__(/*! ../../resources/webview.html */ "./resources/webview.html"));
  contents.on('createTableOfContent', function () {
    Object(_lib_CreateTableOfContents__WEBPACK_IMPORTED_MODULE_1__["createTableOfContents"])(artboardSort, checkSerial, contents, win);
  });
  contents.on('createContinue', function (value) {
    Object(_lib_CreateTableOfContents__WEBPACK_IMPORTED_MODULE_1__["setParentHeadingOrOverrideValue"])(value);
    Object(_lib_CreateTableOfContents__WEBPACK_IMPORTED_MODULE_1__["createTableOfContents"])(artboardSort, checkSerial, contents, win, true);
  });
  contents.on('resetParentHeadingApply', function (heading) {
    Object(_lib_ResetParentHeading__WEBPACK_IMPORTED_MODULE_2__["resetParentHeading"])(heading, contents, win);
  });
  contents.on('resetParentHeadingOK', function (heading) {
    Object(_lib_ResetParentHeading__WEBPACK_IMPORTED_MODULE_2__["resetParentHeading"])(heading, contents, win);
    win.close();
  });
  contents.on('addPageNumber', function () {
    Object(_lib_AddPageNumber__WEBPACK_IMPORTED_MODULE_3__["addPageNumber"])(artboardSort, contents, win);
  });
  contents.on('exportMetadata', function (path) {
    handingTask = true;
    win.setClosable(false);
    Object(_lib_ExportMetadata__WEBPACK_IMPORTED_MODULE_4__["exportMetadata"])(path + '/' + Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["getExportDir"])(), contents, win); // handingTask = false;
  });
  contents.on('openFolder', function () {
    var array = _skpm_dialog__WEBPACK_IMPORTED_MODULE_7___default.a.showOpenDialogSync({
      properties: ['openDirectory']
    });

    if (array && array.length) {
      var result = array[0];
      contents.executeJavaScript("setExportDir(".concat(JSON.stringify(result), ")"));
    }
  });
  contents.on('artboardSort', function (s) {
    artboardSort = s;
  });
  contents.on('checkSerial', function (s) {
    checkSerial = s;
  });
  contents.on('artboardInnerLayersSort', function (s) {
    artboardInnerLayersSort = s;
  });
  contents.on('nativeLog', function (s) {
    console.log('nativeLog: ', s);
  });

  var getData = function getData() {
    // Sending a message to the WebView from your plugin command
    contents.executeJavaScript("setTheme(".concat(JSON.stringify(themeColor), ")"));
    contents.executeJavaScript("setRedirectTo(".concat(JSON.stringify(options.redirectTo), ")"));

    if (options.redirectTo === '/export_metadata') {
      contents.executeJavaScript("setExportDir(".concat(JSON.stringify(Object(_Utilities__WEBPACK_IMPORTED_MODULE_6__["getDefaultExportDir"])()), ")"));
      setTimeout(function () {
        contents.executeJavaScript("setExportNodes(".concat(JSON.stringify(Object(_lib_ExportMetadata__WEBPACK_IMPORTED_MODULE_4__["getTargetLayers"])()), ")"));
      }, 1000);
    }
  };

  contents.on('did-start-loading', function () {
    return getData();
  });
  contents.on('getData', function () {
    return getData();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (theUI);

/***/ }),

/***/ "./src/lib/Utilities.js":
/*!******************************!*\
  !*** ./src/lib/Utilities.js ***!
  \******************************/
/*! exports provided: getArtboardsSorted, getPagePosterities, getDefaultExportDir, getExportDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArtboardsSorted", function() { return getArtboardsSorted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPagePosterities", function() { return getPagePosterities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultExportDir", function() { return getDefaultExportDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExportDir", function() { return getExportDir; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/lib/Constants.js");


var os = __webpack_require__(/*! os */ "os");

var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

function hasLayers(layer) {
  return typeof layer.layers !== 'undefined' && layer.layers.length !== 0;
}

function checkArtboardSort(artboardSort) {
  if (artboardSort === 'Top to Bottom') {
    return _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Top2BottomByLayerList;
  } else if (artboardSort === 'Bottom to Top') {
    return _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Bottom2TopByLayerList;
  } else if (artboardSort === 'Left to Right') {
    return _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Left2RightByArtboard;
  } else if (artboardSort === 'Right to Left') {
    return _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Right2LeftByArtboard;
  } else if (artboardSort === 'Top to Bottom 1') {
    return _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Top2BottomByArtboard;
  }
}

function getArtboardsSorted(page, artboardSort) {
  var sort = checkArtboardSort(artboardSort);
  var artboards = [];
  page.layers.slice().forEach(function (layer) {
    if (layer.type === 'Artboard') artboards.push(layer);
  });

  if (sort === _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Top2BottomByLayerList) {
    return artboards.reverse();
  } else if (sort === _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Bottom2TopByLayerList) {
    return artboards;
  } else if (sort === _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Left2RightByArtboard) {
    return artboards.sort(function (a, b) {
      if (a.frame.y > b.frame.y + b.frame.height / 2) {
        return a.frame.y - b.frame.y + b.frame.height / 2;
      }

      return a.frame.x - b.frame.x;
    });
  } else if (sort === _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Right2LeftByArtboard) {
    return artboards.sort(function (a, b) {
      if (a.frame.y > b.frame.y + b.frame.height / 2) {
        return a.frame.y - b.frame.y + b.frame.height / 2;
      }

      return b.frame.x - a.frame.x;
    });
  } else if (sort === _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Top2BottomByArtboard) {
    return artboards.sort(function (a, b) {
      if (a.frame.x > b.frame.x + b.frame.width / 2) {
        return a.frame.x - b.frame.x + b.frame.width / 2;
      }

      return a.frame.y - b.frame.y;
    });
  } else {
    return undefined;
  }
}

function tailGetLayerPosterities(layer, posterities) {
  // sort from top to bottom by left layer list
  if (!hasLayers(layer)) {
    return posterities;
  }

  var reverse = layer.layers.slice().reverse();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = reverse[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _layer = _step.value;
      posterities.push(_layer);
      tailGetLayerPosterities(_layer, posterities);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function getPagePosterities(page) {
  var artboardSort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtboardSortEnum"].Left2RightByArtboard;
  var artboardLayersSort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtbaordLayersSortEnum"].Bottom2TopByLayerList;
  var posterities = []; // get artboards

  var artboards = getArtboardsSorted(page, artboardSort); // get artboards's layers

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = artboards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var artboard = _step2.value;
      posterities.push(artboard);
      var list = [];
      tailGetLayerPosterities(artboard, list);

      if (artboardLayersSort === _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtbaordLayersSortEnum"].Top2BottomByLayerList) {
        posterities = posterities.concat(list);
      } else if (artboardLayersSort === _Constants__WEBPACK_IMPORTED_MODULE_0__["ArtbaordLayersSortEnum"].Bottom2TopByLayerList) {
        posterities = posterities.concat(list.reverse());
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return posterities;
}
function getDefaultExportDir() {
  var dir = os.homedir() + '/Desktop';
  return dir;
}
function getExportDir() {
  var documentName = document.path.replace(/^.*[\\\/]/, '').replace('.sketch', '').replace(/%20/g, ' ');
  return documentName + '_output';
}

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else if (typeof exports[key] !== 'function') {
    throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
  } else {
    exports[key](context);
  }
}
globalThis['onSelectedChanged'] = __skpm_run.bind(this, 'onSelectedChanged');
globalThis['showUI'] = __skpm_run.bind(this, 'showUI');
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=commandResetParentHeading.js.map