// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
]


// ============= Your Code Here =============
// " 1|20|200|150 extends 20 ? never : U " ==>> " 1|200|150 "
type Maximum<T extends any[], U = T[number], N extends any[] = []>
    = T extends [] ? never
    : Equal<U, N['length']> extends true ? U
    : Maximum<T, (U extends N['length'] ? never : U), [...N, unknown]>
