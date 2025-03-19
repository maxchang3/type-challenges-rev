// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]>>,
]


// ============= Your Code Here =============
type Subsequence<T extends any[], P extends any[] = []> =
  T extends [infer F, ...infer R]
    ? Subsequence<R, P | [...P, F]>
    : P
type _ = Subsequence<[1, 2]>
