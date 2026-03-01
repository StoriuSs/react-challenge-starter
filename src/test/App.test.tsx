/**
 * App Component Tests
 *
 * These tests include intentional failures to test the TEST_FAILURE
 * error capture feature of the OpenNezt extension.
 */

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App Component', () => {
  it('should render the Vite + React heading', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('should render the count button', () => {
    render(<App />)
    expect(screen.getByRole('button')).toHaveTextContent('count is 0')
  })

  // INTENTIONAL FAILURE: This test will fail to test TEST_FAILURE capture
  it('should have a non-existent element (INTENTIONAL FAILURE)', () => {
    render(<App />)
    // This expects "Hello World" but the app shows "Vite + React"
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  // INTENTIONAL FAILURE: Wrong expected value
  it('should have correct initial count (INTENTIONAL FAILURE)', () => {
    render(<App />)
    // This expects count to be 5, but it starts at 0
    expect(screen.getByRole('button')).toHaveTextContent('count is 5')
  })
})

describe('Math Utils (Placeholder)', () => {
  // INTENTIONAL FAILURE: Basic assertion failure
  it('should add numbers correctly (INTENTIONAL FAILURE)', () => {
    const result = 2 + 2
    // Expecting 5, but 2+2=4
    expect(result).toBe(5)
  })

  it('should multiply numbers correctly', () => {
    const result = 3 * 3
    expect(result).toBe(9)
  })

  // INTENTIONAL FAILURE: String comparison failure
  it('should format strings correctly (INTENTIONAL FAILURE)', () => {
    const greeting = 'Hello, World!'
    // Wrong expectation
    expect(greeting).toBe('Hi, Universe!')
  })
})
