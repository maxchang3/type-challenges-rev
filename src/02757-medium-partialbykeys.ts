// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
]


// ============= Your Code Here =============

// type Compute<T> = { [K in keyof T]: T[K] }

// type PartialByKeys<T, K extends keyof T = keyof T> = Compute<Omit<T, K> & Partial<T>>

type PartialByKeys<T, K extends keyof T = keyof T> = {
  [P in keyof (Partial<T> & Omit<T, K>)]: T[P]
}

type _ = PartialByKeys<User, 'name'>
