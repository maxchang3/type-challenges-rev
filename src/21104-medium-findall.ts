// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
]


// ============= Your Code Here =============

type FindAll<T extends string, P extends string, I extends unknown[] = []> = P extends "" ? [] :
   T extends `${string}${infer R}`
    ? [
      ...(T extends `${P}${string}` ? [I['length']] : []),
      ...FindAll<R, P, [unknown, ...I]>,
    ]
    : []

type _ = FindAll<'Collection of TypeScript type challenges', ''>
