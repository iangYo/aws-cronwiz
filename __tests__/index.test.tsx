import Home from "@/pages"
import { parser } from "@/utils/parser"
import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import { Mock, expect, test, vi } from "vitest"

const mockedParser = parser as Mock

vi.mock("@/utils/parser", () => ({
  parser: vi.fn(() => true),
}))

test("input should have type text", () => {
  render(<Home />)
  expect(screen.getByRole("textbox")).toHaveAttribute("type", "text")
  expect(screen.getByDisplayValue("* * * * * *")).toBeDefined()
})

test("input should call handleChange when user types", async () => {
  render(<Home />)
  const expr = "0 18 ? * MON-FRI *"
  const input = screen.getByRole("textbox")
  await user.clear(input)
  await user.type(input, expr)
  expect(input).toHaveValue(expr)
  expect(parser).toHaveBeenCalledWith(expr)
})

test("input border should be green when expression valid", async () => {
  render(<Home />)
  const input = screen.getByRole("textbox")
  await user.clear(input)
  await user.type(input, "0 18 ? * MON-FRI *")
  expect(input).toHaveStyle({ borderColor: "green" })
})

test("input border should be red when expression invalid", async () => {
  render(<Home />)
  mockedParser.mockReturnValue(false)
  const input = screen.getByRole("textbox")
  await user.clear(input)
  await user.type(input, "any")
  expect(input).toHaveStyle({ borderColor: "red" })
})
