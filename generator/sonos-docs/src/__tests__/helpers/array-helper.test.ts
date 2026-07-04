import {describe, it, expect} from 'vitest'
import ArrayHelper from '../../helpers/array-helper'

describe('ArrayHelper.forceArray', () => {
  it('returns a single-element array when given a scalar', () => {
    expect(ArrayHelper.forceArray('hello')).toEqual(['hello'])
  })

  it('returns the same array when given an array', () => {
    expect(ArrayHelper.forceArray(['a', 'b'])).toEqual(['a', 'b'])
  })

  it('passes an empty array through unchanged', () => {
    expect(ArrayHelper.forceArray([])).toEqual([])
  })

  it('wraps a number in an array', () => {
    expect(ArrayHelper.forceArray(42)).toEqual([42])
  })

  it('wraps an object in an array', () => {
    const obj = {name: 'test'}
    expect(ArrayHelper.forceArray(obj)).toEqual([{name: 'test'}])
  })

  it('wraps null in an array', () => {
    expect(ArrayHelper.forceArray(null)).toEqual([null])
  })

  it('preserves multi-element arrays', () => {
    const input = [1, 2, 3]
    const result = ArrayHelper.forceArray(input)
    expect(result).toHaveLength(3)
    expect(result).toEqual([1, 2, 3])
  })
})
