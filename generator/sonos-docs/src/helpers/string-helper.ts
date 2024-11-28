export default class StringHelper {
  public static initCapsToKebab(input: string): string {
    return `${input[0].toLowerCase()}${input.slice(1)}`.replace(/([a-z0-9])([A-Z]+)/g, '$1-$2').toLowerCase();
  }

  public static initCapsToSnake(input: string): string {
    return `${input[0].toLowerCase()}${input.slice(1)}`.replace(/([a-z0-9])([A-Z]+)/g, '$1_$2').toLowerCase();
  }
}
