// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]


// ============= Your Code Here =============
type Merge<F, S> =  {
  [K in (keyof F | keyof S)] : 
    K extends keyof S ? S[K] :
    K extends keyof F ? F[K] : 
      never
}

type _ = Merge<Foo, Bar>
