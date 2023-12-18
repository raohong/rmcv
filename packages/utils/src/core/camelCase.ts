export default function camelCase(target: string) {
  return target.toLowerCase().replace(/[_-]([a-z])/g, (_, $1) => $1.toUpperCase());
}
