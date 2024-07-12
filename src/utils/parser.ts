export function parser(originalExpression: string): boolean {
  if (typeof originalExpression !== "string") return false

  const expression = originalExpression.split(" ").filter(Boolean)
  const minutes = +expression[0]

  if (!isNumber(minutes) || !isInRange(minutes, 0, 59)) return false

  return true
}

const isNumber = (n: any) => !isNaN(parseInt(n)) && isFinite(n)

const isInRange = (n: number, min: number, max: number) => n >= min && n <= max
