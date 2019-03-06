function fib(n) {
  if (typeof n !== 'number') return 0;
  if (n <= 1) return n === 0 ? 0 : 1;
  return n + fib(n - 1);
}

module.exports = fib;
