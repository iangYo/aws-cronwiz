import { isInRange, isNumber } from "@/utils/common"
import { describe, expect, test } from "vitest"

describe("Function: isNumber", () => {
  test("should returns true if valid number is provided", () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-1)).toBe(true)
    expect(isNumber("2")).toBe(true)
    expect(isNumber("-1")).toBe(true)
  })

  test("should returns false if invalid value is provided", () => {
    expect(isNumber("a")).toBe(false)
    expect(isNumber("1bc")).toBe(false)
    expect(isNumber("bc1")).toBe(false)
    expect(isNumber("1-")).toBe(false)
  })
})

describe("Function: isInRange", () => {
  test("should returns true if value provided is in range", () => {
    expect(isInRange(0, 0, 59)).toBe(true)
    expect(isInRange(59, 0, 59)).toBe(true)
    expect(isInRange(10, 0, 59)).toBe(true)
    expect(isInRange(0.7, 0, 1)).toBe(true)
    expect(isInRange("10", 0, 20)).toBe(true)
  })

  test("should returns false if value provided is not in range", () => {
    expect(isInRange(60, 0, 59)).toBe(false)
    expect(isInRange(-1, 0, 59)).toBe(false)
    expect(isInRange(100, 0, 59)).toBe(false)
    expect(isInRange(-100, 0, 1)).toBe(false)
    expect(isInRange("-100", 0, 1)).toBe(false)
  })
})
