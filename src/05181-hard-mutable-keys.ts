// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MutableKeys<{ a: number; readonly b: string }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<MutableKeys<{}>, never>>,
]


// ============= Your Code Here =============
type MutableKeys<T, RT = Readonly<T>> = keyof {
  [K in keyof T as 
      K extends keyof RT 
      ? Equal<Pick<T, K>, Pick<RT, K>> extends true
        ? never 
        : K
      : never
    ]: any
}

type _ = MutableKeys<{ a: number; readonly b: string }>
