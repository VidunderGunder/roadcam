import distance from './distance';

const a: [number, number] = [0, 0];
const b: [number, number] = [1, 1];
const c: [number, number] = [2, 4];

const bn: [number, number] = [-1, -1];
const cn: [number, number] = [-2, -4];

test('Distance 0 when same point', () => {
  expect(distance(a, a)).toBe(0);
  expect(distance(b, b)).toBe(0);
  expect(distance(c, c)).toBe(0);
});

test('Correct distances', () => {
  expect(distance(a, b).toFixed(1)).toBe('157249.4');
  expect(distance(a, c).toFixed(1)).toBe('497198.0');
  expect(distance(b, c).toFixed(1)).toBe('351591.7');
});

test('Sign is irrelevant', () => {
  expect(distance(bn, cn).toFixed(1)).toBe('351591.7');
  expect(distance(bn, cn)).toBe(distance(cn, bn));
  expect(distance(bn, cn)).toBe(distance(c, b));
});

test('Order should not matter', () => {
  expect(distance(a, b)).toBe(distance(b, a));
  expect(distance(a, c)).toBe(distance(c, a));
  expect(distance(b, c)).toBe(distance(c, b));
});
