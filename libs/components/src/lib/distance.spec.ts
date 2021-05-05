import distance, { distanceSq } from './distance';

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
  expect(distance(a, b).toFixed(4)).toBe('1.4142');
  expect(distance(a, c).toFixed(4)).toBe('4.4721');
  expect(distance(b, c).toFixed(3)).toBe('3.162');
});

test('Sign is irrelevant', () => {
  expect(distance(bn, cn).toFixed(3)).toBe('3.162');
  expect(distance(bn, cn)).toBe(distance(cn, bn));
  expect(distance(bn, cn)).toBe(distance(c, b));
});

test('Order should not matter', () => {
  expect(distance(a, b)).toBe(distance(b, a));
  expect(distance(a, c)).toBe(distance(c, a));
  expect(distance(b, c)).toBe(distance(c, b));
});

test('Same tests for squared distance', () => {
  expect(distanceSq(a, a)).toBe(0);
  expect(distanceSq(b, b)).toBe(0);
  expect(distanceSq(c, c)).toBe(0);
  expect(distanceSq(a, b)).toBe(2);
  expect(distanceSq(a, c)).toBe(20);
  expect(distanceSq(b, c)).toBe(10);
  expect(distanceSq(bn, cn)).toBe(10);
  expect(distanceSq(bn, cn)).toBe(distanceSq(cn, bn));
  expect(distanceSq(bn, cn)).toBe(distanceSq(c, b));
  expect(distanceSq(a, b)).toBe(distanceSq(b, a));
  expect(distanceSq(a, c)).toBe(distanceSq(c, a));
  expect(distanceSq(b, c)).toBe(distanceSq(c, b));
});
