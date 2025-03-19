// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>,
]


// ============= Your Code Here =============
// type LengthOfString<S extends string, C extends string[] = []> =
//   S extends `${string}${infer R}`
//     ? LengthOfString<R, [string, ...C]>
//     : C['length'] 


// type UniqueLengthOfString<T extends string, R extends string[] = []> =
//   T extends `${infer First}${infer Rest}`
//     ? First extends R[number]
//       ? UniqueLengthOfString<Rest, R>
//       : UniqueLengthOfString<Rest, [...R, First]>
//     : R['length']
    
// type CheckRepeatedChars<T extends string> = UniqueLengthOfString<T> extends LengthOfString<T> ? false : true
type CheckRepeatedChars<T extends string> =
  T extends `${infer First}${infer Rest}`
    ? Rest extends `${string}${First}${string}`
      ? true
      : CheckRepeatedChars<Rest>
    : false

type _ = CheckRepeatedChars<'abc'>
