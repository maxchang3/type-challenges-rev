// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

// @ts-expect-error
type error = Flatten<'1'>


// ============= Your Code Here =============
type Flatten<T extends unknown[], R extends unknown[] = []> =
  T extends [infer Front, ...infer Rest]
    ?  Front extends unknown[]
      ? Flatten<[...Front, ...Rest], R>
      : Flatten<Rest, [...R, Front]>
    : R

type _ = Flatten<[1, 2, [3, 4], [[[5]]]]>
