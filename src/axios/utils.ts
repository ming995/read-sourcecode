const toString = Object.prototype.toString
export function isPlainObject(object: unknown): boolean {
  return toString.call(object) === '[object Object]'
}