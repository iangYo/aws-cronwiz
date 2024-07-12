export const buildValidMinutes = () => ["0", "45 * * * * *", "59 * * * * *"]

export const buildInvalidMinutes = () => ["any", "any * * * * *", undefined, null, "abc * * * * *"]

export const buildMinutesNotInRange = () => ["-1", "60 * * * * *", "100 * * * * *"]
