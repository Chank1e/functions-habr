function factorial(n) {
  if (typeof n !== 'number') return 0;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial;
