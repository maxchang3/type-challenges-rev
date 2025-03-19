// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]


// ============= Your Code Here =============
type Without<T, U1 extends any[] | any, U2 = U1 extends any[] ? U1[number] : U1> = 
  T extends [infer F, ...infer R]
    ? F extends U2
      ? Without<R, U1> 
      : [F, ...Without<R, U1>]
    : T 

type _  =Without<[1, 2, 4, 1, 5], [1, 2]>
