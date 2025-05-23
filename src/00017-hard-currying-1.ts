// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
]


// ============= Your Code Here =============
type Curried<F> =
  F extends (...args: infer Args) => infer R
    ? Args extends [infer First, ...infer Rest]
      ? Rest extends []
        ? (arg: First) => R 
        : (arg: First) => Curried<(...args: Rest) => R>
      : () => R
    : never


declare function Currying<F>(fn: F): Curried<F>
