export default class StringHelper {
  public static initCapsToKebab(input: string): string {
    return StringHelper.replaceInitCapLetters(input).replace(/([a-z0-9])([A-Z]+)/g, '$1-$2').toLowerCase()
  }

  public static initCapsToSnake(input: string): string {
    return StringHelper.replaceInitCapLetters(input).replace(/([a-z0-9])([A-Z]+)/g, '$1_$2').toLowerCase()
  }

  static replaceInitCapLetters(input: string): string {
    // Looking for leading capital letters and lowercase all but the last one. For example: 'AVTransport' -> 'avTransport'
    const m = input.match(/[A-Z]+/)
    if (m === null || m[0].length === input.length) {
      return input
    }
    return input.slice(0, m[0].length - 1).toLowerCase() + input.slice(m[0].length - 1)
  }
}
