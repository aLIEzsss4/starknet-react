import { erc20Abi, expectType } from '../test'
import { CairoFunction, Felt } from './abi'

describe('cairo types', () => {
  test('felt', () => {
    expectType<Felt>('felt')
  })
  test('cairo function', () => {
    expectType<CairoFunction>('function')
  })
})

describe('abi', () => {
  test('erc20', () => {
    expectType<typeof erc20Abi>(erc20Abi)
  })
})
