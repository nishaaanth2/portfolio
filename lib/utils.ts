export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const yearsOfExperience = (): number => {
  const startDate = new Date("2020-01-01");
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Considering leap years
  return Math.floor(diffInMilliseconds / millisecondsInYear);
}