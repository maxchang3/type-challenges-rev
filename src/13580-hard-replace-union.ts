// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null], [Date, Function]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>, undefined | string | object>>,
]


// ============= Your Code Here =============
type UnionReplace<T, U extends [any, any][]> =  
  U extends [infer First, ...infer Rest extends [any, any][]]
  ? First extends [T, infer Replace]
      ? UnionReplace<Exclude<T, First[0]> | Replace, Rest>
      : T
  : T

type _ = UnionReplace<number | string, [[string, null], [Date, Function]]>
