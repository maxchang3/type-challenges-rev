// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
]


// ============= Your Code Here =============
// type UnionToFunction<U> = U extends infer I ? (x: I) => void : never

// type UnionToIntersection<U> = UnionToFunction<U> extends (x: infer A) => void ? A : never

// type ObjectFromEntries<T extends [PropertyKey, unknown]> =
//   Omit<UnionToIntersection<T extends any
//     ? {
//       [K in T['0']]: T['1']
//     }
//     : never>, never>

// type ObjectFromEntries<T extends [PropertyKey, unknown]> = {
//   [K in T['0']]: T extends [K, T['1']] ? T['1'] : never
// }

type ObjectFromEntries<T extends [string, any]> = {
  [K in T as K[0]]: K[1]
}

type _ = ObjectFromEntries<ModelEntries>
