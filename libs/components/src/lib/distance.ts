/**
 * Return distance between coordinates in meters
 *
 * More info on formula:
 * https://www.movable-type.co.uk/scripts/latlong.html
 */
export default function distance(
  a: [number, number],
  b: [number, number]
): number {
  const lon1 = a[0];
  const lon2 = b[0];
  const lat1 = a[1];
  const lat2 = b[1];

  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const α =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(α), Math.sqrt(1 - α));

  return R * c; // in metres
}
