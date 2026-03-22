/**
 * Calculates the Greatest Common Divisor of two numbers
 */
export const gcd = (a: number, b: number): number => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    a %= b;
    [a, b] = [b, a];
  }
  return a;
};

/**
 * Calculates the Least Common Multiple of two numbers
 */
export const lcm = (a: number, b: number): number => {
  if (!a || !b) return 0;
  return Math.abs(a * b) / gcd(a, b);
};

/**
 * Calculates the Least Common Multiple of an array of numbers
 */
export const lcmArray = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, val) => lcm(acc, val));
};

/**
 * Calculates the impact of a specific number on the total LCM of a set.
 * Returns a factor (totalLCM / lcmWithoutTarget).
 */
export const calculateLcmImpact = (numbers: number[], targetIndex: number): number => {
  if (numbers.length <= 1) return 1;
  const totalLcm = lcmArray(numbers);
  const others = [...numbers];
  others.splice(targetIndex, 1);
  const otherLcm = lcmArray(others);
  return otherLcm === 0 ? 1 : totalLcm / otherLcm;
};
