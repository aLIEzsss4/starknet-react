import { erc20Abi, expectType } from '../test'
import { CairoFunction, CairoTuple, Felt } from './abi'

describe('cairo types', () => {
  test('felt', () => {
    expectType<Felt>('felt')
  })
  test('cairo function', () => {
    expectType<CairoFunction>('function')
  })
  test('cairo tuple', () => {
    expectType<CairoTuple>('(felt, felt)')
    expectType<CairoTuple>('(felt, Uint256)')
  })
})

describe('abi', () => {
  test('erc20', () => {
    expectType<typeof erc20Abi>(erc20Abi)
  })
})
