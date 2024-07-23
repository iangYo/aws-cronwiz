export const isNumber = (n: any) => !isNaN(parseInt(n)) && isFinite(n)

export const isInRange = (n: number | string, min: number, max: number) => Number(n) >= min && Number(n) <= max
