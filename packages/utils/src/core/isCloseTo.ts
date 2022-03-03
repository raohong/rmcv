export default function isCloseTo(x: number, target = 0, dist = 1) {
  return Math.abs(x - target) < dist;
}
