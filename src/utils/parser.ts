import { isInRange, isNumber } from "./common"

const invalidExpr = false

export function parser(originalExpr: string): boolean {
  if (typeof originalExpr !== "string") return invalidExpr

  const [minutes] = originalExpr.split(" ").filter(Boolean) ?? []

  return validateMinutes(minutes)
}

function validateMinutes(minutesExpr: string) {
  return !minutesExpr.split(",").some((minute) => !isNumber(minute) || !isInRange(minute, 0, 59))
}
