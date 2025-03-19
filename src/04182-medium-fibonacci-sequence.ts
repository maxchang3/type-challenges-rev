// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]


// ============= Your Code Here =============
type Fibonacci<
  T extends number,
  I extends unknown[] = [unknown],
  A extends unknown[] = [unknown],
  B extends unknown[] = [unknown]
> =
  T extends I['length'] 
    ? A['length']
    : Fibonacci<T, [...I, unknown], B, [...A, ...B]>
