# Testing OpenNezt Error Capture Features

This repository is set up to test the error capture features of the OpenNezt Coding Assessment extension.

## Prerequisites

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make sure the OpenNezt extension is installed and an assessment session is active.

## Test 1: PROBLEM_PANEL_ERROR (VS Code Problems Panel)

**What it tests:** Capturing TypeScript/ESLint errors from the Problems panel.

**How to test:**
1. Open `src/utils/buggy-code.ts` in VS Code
2. The Problems panel should show multiple TypeScript errors
3. The extension should capture these errors and send PROBLEM_PANEL_ERROR events

**Expected errors in Problems panel:**
- Type 'string' is not assignable to type 'number' (line 15)
- Property 'phone' does not exist on type 'User' (line 24)
- Property 'price' is missing (line 33)
- Argument of type 'number' is not assignable... (line 41)
- Cannot find name 'undeclaredVariable' (line 44)
- And more...

## Test 2: TEST_FAILURE (Test Failures)

**What it tests:** Parsing test output for individual test failures.

**How to test:**
```bash
npm test
```

**Expected:** The test suite will run with intentional failures:
- "should have a non-existent element" - expects "Hello World" but finds "Vite + React"
- "should have correct initial count" - expects count to be 5, but it's 0
- "should add numbers correctly" - expects 2+2=5
- "should format strings correctly" - expects wrong string

The extension should capture these as TEST_FAILURE events with:
- testName
- testSuite
- message
- expected/actual values
- framework: "vitest"

## Test 3: TERMINAL_ERROR (Stack Traces)

**What it tests:** Detecting and parsing stack traces from terminal output.

### Option A: TypeScript Error
```bash
npm run error:runtime
```

This throws a TypeError with a full stack trace showing:
- `deepFunction()` at throw-error.ts:13
- `middleFunction()` at throw-error.ts:17
- `topFunction()` at throw-error.ts:21

### Option B: JavaScript Error
```bash
npm run error:stack
```

This throws a TypeError during user validation with a stack trace showing:
- `validateUser()` at stack-trace.mjs:14
- `processUsers()` at stack-trace.mjs:21
- `main()` at stack-trace.mjs:33

**Expected:** The extension should capture TERMINAL_ERROR events with:
- errorType: "TypeError" or "ReferenceError"
- message: The error message
- stackTrace: The full stack trace
- fileReferences: Array of {filePath, line, functionName}
- language: "javascript"

## Verifying Capture

To verify events are being captured:

1. Check the extension's debug console for log messages:
   - `[ERROR COLLECTOR] ERROR: ...`
   - `[TERMINAL COLLECTOR] Stack trace detected...`
   - `[TERMINAL COLLECTOR] TEST_FAILURE: ...`

2. Check the backend database for events:
   ```javascript
   // In MongoDB
   db.events.find({ type: 'PROBLEM_PANEL_ERROR' })
   db.events.find({ type: 'TERMINAL_ERROR' })
   db.events.find({ type: 'TEST_FAILURE' })
   ```

## Cleanup

To fix the intentional errors (after testing):
- Delete or rename `src/utils/buggy-code.ts`
- Fix the failing tests in `src/test/App.test.tsx`
