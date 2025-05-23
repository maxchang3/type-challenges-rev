// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
  Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>,
]


// ============= Your Code Here =============
type FilterOut<T extends any[], F, R extends any[] = []> = 
  T extends [infer First, ...infer Rest]
    ? [First] extends [F]
      ? FilterOut<Rest, F, R>
      : FilterOut<Rest, F, [...R, First]>
    : R

type _ = FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>
