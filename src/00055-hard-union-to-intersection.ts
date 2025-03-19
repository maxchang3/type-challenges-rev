// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]


// ============= Your Code Here =============
type UnionToFunction<U> = U extends infer I ? (x: I) => void : never

type UnionToIntersection<U> = UnionToFunction<U> extends (x: infer A) => void ? A : never

