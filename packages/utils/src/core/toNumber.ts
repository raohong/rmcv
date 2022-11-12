export default function toNumber(val: any, defaultValue = 0) {
  return Number.isNaN(Number(val)) ? defaultValue : Number(val);
}
