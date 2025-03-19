// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<ParseUrlParams<''>, never>>,
  Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
]


// ============= Your Code Here =============
// type _ParseUrlParams<T, R extends string[] = []> = 
//   T extends `${infer Front}/${infer Rest}`
//     ? _ParseUrlParams<Rest, [...R , Front]>
//     : R[number] extends infer U 
//       ?  U extends `:${infer Param}` 
//         ? Param 
//         : never 
//       : never

// type ParseUrlParams<T extends string> =  _ParseUrlParams<`${T}/`>

type ParseUrlParams<T extends string> = 
  T extends `${string}:${infer R}`
    ? R extends `${infer P}/${infer L}` // check if rest have slash
      ? P | ParseUrlParams<L>
      : R
    : never
type _ = ParseUrlParams<'posts/:id/:user'>
