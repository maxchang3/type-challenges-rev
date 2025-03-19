// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
// type MyExclude<T, U> = T extends infer F | infer R
//   ? F extends U ? never : F | MyExclude<F, R>
//   : never

type MyExclude<T, U> = T extends U ? never : T

type _ = MyExclude<'a' | 'b' | 'c', 'a'>
