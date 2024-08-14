module.exports = function reverse (n) {
  n = Math.abs(n);
  let a = String(n);
  return a.split('').reverse().join('');
}
