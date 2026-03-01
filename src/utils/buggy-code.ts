/**
 * Buggy Code - Intentional TypeScript Errors
 *
 * This file contains intentional TypeScript errors to test the
 * PROBLEM_PANEL_ERROR capture feature of the OpenNezt extension.
 *
 * When you open this file in VS Code, errors should appear in
 * the Problems panel and be captured by the extension.
 */

// ERROR 1: Type mismatch - assigning string to number
const age: number = "twenty-five"

// ERROR 2: Property does not exist
interface User {
  name: string
  email: string
}

const user: User = {
  name: "John",
  email: "john@example.com",
}
console.log(user.phone) // 'phone' does not exist on type 'User'

// ERROR 3: Missing required property
interface Product {
  id: number
  name: string
  price: number
}

const product: Product = {
  id: 1,
  name: "Widget",
  // Missing 'price' property
}

// ERROR 4: Wrong argument type
function greet(name: string): string {
  return `Hello, ${name}!`
}

greet(123) // Argument of type 'number' is not assignable to parameter of type 'string'

// ERROR 5: Cannot find name
console.log(undeclaredVariable) // Cannot find name 'undeclaredVariable'

// ERROR 6: Array type mismatch
const numbers: number[] = [1, 2, "three", 4] // Type 'string' is not assignable to type 'number'

// ERROR 7: Return type mismatch
function calculateSum(a: number, b: number): number {
  return `${a + b}` // Type 'string' is not assignable to type 'number'
}

// ERROR 8: Unused variable (warning with strict settings)
const unusedValue = "I'm never used"

export { age, user, product, greet, numbers, calculateSum }
