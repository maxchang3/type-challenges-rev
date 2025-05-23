// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]


// ============= Your Code Here =============
type PercentageParser<
  A extends string, 
  Sign extends string = "", 
  Digit extends string = "", 
  Percent extends string = ""
> = A extends `${infer First}${infer Rest}`
  ? First extends '+' | '-'  // if `First` is a sign, store it in `Sign`
    ? PercentageParser<Rest, First, Digit, Percent>
    : First extends '%'  // if `First` is a percent sign, store it in `Percent`
      ? [Sign, Digit, First]
      : PercentageParser<Rest, Sign, `${Digit}${First}`, Percent> // Otherwise, it's a digit, append it to `Digit`
  : [Sign, Digit, Percent] // Base case
