export function distanceSq(a: [number, number], b: [number, number]): number {
  return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
}

export default function distance(
  a: [number, number],
  b: [number, number]
): number {
  return Math.sqrt(distanceSq(a, b));
}
