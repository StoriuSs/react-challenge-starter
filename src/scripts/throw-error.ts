/**
 * Script that throws a runtime error with stack trace.
 *
 * Run with: npm run error:runtime
 *
 * This tests the TERMINAL_ERROR capture feature of the OpenNezt extension.
 * It generates a JavaScript stack trace that should be detected and parsed.
 */

function deepFunction() {
  throw new TypeError('Cannot read property "foo" of undefined')
}

function middleFunction() {
  deepFunction()
}

function topFunction() {
  middleFunction()
}

console.log('About to throw an error...')
topFunction()
