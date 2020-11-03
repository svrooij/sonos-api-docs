export default class StringHelper {
  public static camelToKebab(input: string): string {
    return `${input[0].toLowerCase()}${input.slice(1)}`.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }
}
