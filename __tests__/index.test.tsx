import Home from '@/pages'
import { parser } from '@/utils/parser'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'

vi.mock('@/utils/parser', () => ({
  parser: vi.fn()
}))

test('input should have type text', () => {
  render(<Home />)
  expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
})

test('input should have 6 asterisks as default value', () => {
  render(<Home />)
  expect(screen.getByDisplayValue('* * * * * *')).toBeDefined()
})

test('input should call handleChange when user types', async () => {
  render(<Home />)
  const expr = '0 18 ? * MON-FRI *'
  const input = screen.getByRole('textbox')
  await user.clear(input)
  await user.type(input, expr)
  expect(input).toHaveValue(expr)
  expect(parser).toHaveBeenCalledWith(expr)
})