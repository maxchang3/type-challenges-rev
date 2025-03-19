// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]


// ============= Your Code Here =============
// type MinusOne<T extends number, Count extends unknown[] = []> =
//   Count['length'] extends T 
//     ? Count extends [unknown, ...infer Rest] ? Rest['length']  : never 
//     : MinusOne<T, [unknown, ...Count]>

type DigitMinusOne<T extends string> = "09876543210" extends `${string}${T}${infer R}${string}` ? R : never

type MinusOne<T extends number, 

type _ = DigitMinusOne<'0'>
