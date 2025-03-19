// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]


// ============= Your Code Here =============
type FirstUniqueCharIndex<T extends string, Acc extends string[] = []> =
  T extends `${infer First}${infer Rest}`
    ? First extends Acc[number]  // 
      ? FirstUniqueCharIndex<Rest, [...Acc, First]>
      : Rest extends `${string}${First}${string}`
        ? FirstUniqueCharIndex<Rest, [...Acc, First]>
        : Acc['length']
    : -1

type _ = FirstUniqueCharIndex<'aabb'>
