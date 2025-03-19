// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type obj = {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string; age: {} } }>>,
]


// ============= Your Code Here =============
type DeepOmit<T, P extends string> = 
  P extends `${infer F}.${infer Rest}`
    ? {
      [K in keyof T]: F extends K ? DeepOmit<T[K], Rest>: T[K]
    }
    : Omit<T, P>

type _ = DeepOmit<obj, 'person'>
