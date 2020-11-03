export default class ArrayHelper {
  static forceArray<TResponse>(input: TResponse | Array<TResponse>): Array<TResponse> {
    return Array.isArray(input) ? input : [input];
  }
}
