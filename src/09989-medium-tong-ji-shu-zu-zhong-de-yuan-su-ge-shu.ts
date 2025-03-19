// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
type cases = [
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
    1: 1
    2: 1
    3: 1
    4: 1
    5: 1
  }
  >>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
    1: 2
    2: 2
    3: 2
    4: 1
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>, {
    1: 3
    2: 3
    3: 2
    4: 3
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<Equal<CountElementNumberToObject<['1', '2', '0']>, {
    0: 1
    1: 1
    2: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<['a', 'b', ['c', ['d']]]>, {
    'a': 1
    'b': 1
    'c': 1
    'd': 1
  }>>,
]


// ============= Your Code Here =============
type Flatten<T extends unknown[], R extends unknown[] = []> =
  T extends [infer Front, ...infer Rest]
    ?  Front extends unknown[]
      ? Flatten<[...Front, ...Rest], R>
      : Flatten<Rest, [...R, Front]>
    : R

type Count<T, U, R extends unknown[]= []> = 
  T extends [infer First, ...infer Rest]
    ? Equal<First, U> extends true
      ? Count<Rest, U, [...R, unknown]> 
      : Count<Rest, U, R> 
    : R['length']

type CountElementNumberToObject<T extends any[], U extends any[] = Flatten<T>> = {
  [K in U[number]]: Count<U, K>
}
