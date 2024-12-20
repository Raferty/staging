export function useDollarToRouble(value) {
  const exchangeRate = 96.1079;
  const result = parseInt(value) * exchangeRate;
  return result.toFixed(2);
}