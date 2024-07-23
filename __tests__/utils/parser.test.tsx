import { parser } from "@/utils/parser"
import { describe, expect, test } from "vitest"
import { buildInvalidMinutes, buildMinutesNotInRange, buildValidMinutes } from "../../tests/generate"

describe("Particle validations: values", () => {
  test("should returns true if minutes are a number", () => {
    buildValidMinutes().forEach((expr: any) => expect(parser(expr)).toBeTruthy())
  })

  test("should returns false if minutes are not a number", () => {
    buildInvalidMinutes().forEach((expr: any) => expect(parser(expr)).toBeFalsy())
  })

  test("should returns true if minutes are in the range 0-59", () => {
    buildValidMinutes().forEach((expr: any) => expect(parser(expr)).toBeTruthy())
  })

  test("should returns false if minutes are not in the range 0-59", () => {
    buildMinutesNotInRange().forEach((expr: any) => expect(parser(expr)).toBeFalsy())
  })

  test("comma can be used in expression", () => {
    expect(parser("0,1,4,6 * * * * *")).toBeTruthy()
  })
})
