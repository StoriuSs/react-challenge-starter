/**
 * Script that generates various error types with stack traces.
 *
 * Run with: npm run error:stack
 *
 * This tests the TERMINAL_ERROR capture feature with different error types.
 */

function validateUser(user) {
  if (!user.name) {
    throw new ReferenceError('user.name is not defined')
  }
  if (typeof user.age !== 'number') {
    throw new TypeError('user.age must be a number')
  }
  return true
}

function processUsers(users) {
  return users.map(user => validateUser(user))
}

function main() {
  console.log('Starting user validation...')

  const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: '25' }, // Invalid: age is string
    { age: 40 }, // Invalid: no name
  ]

  try {
    processUsers(users)
  } catch (error) {
    console.error('Validation failed!')
    throw error
  }
}

main()
