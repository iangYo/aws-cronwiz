import Home from '@/pages'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

test('input should have type text', () => {
  render(<Home />)
  expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
})

test('input should have 6 asterisks as default value', () => {
  render(<Home />)
  expect(screen.getByDisplayValue('* * * * * *')).toBeDefined()
})