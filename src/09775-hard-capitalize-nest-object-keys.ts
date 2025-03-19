// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]


// ============= Your Code Here =============

type CapitalizeNestObjectKeys<T> = 
    T extends any[]
      ? {
        [K in keyof T]: CapitalizeNestObjectKeys<T[K]>;
      }
      : T extends Record<string, any>
        ? {
          [K in keyof T as  Capitalize<K & string>]: CapitalizeNestObjectKeys<T[K]>
        }
        : T

type _ = CapitalizeNestObjectKeys<foo>

type test<T>= {
  [K in keyof T]: T[K];
} 
