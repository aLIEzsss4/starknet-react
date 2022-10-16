import { erc20Abi, testAbi, expectType } from '../test'
import {
  AbiParameterToPrimitiveType,
  ExtractAbiFunction,
  ExtractAbiFunctionName,
  ExtractAbiFunctions,
  ExtractAbiStruct,
  ExtractAbiStructNames,
  ExtractAbiStructs,
} from './extract'

describe('functions', () => {
  it('extract functions', () => {
    const func = {
      type: 'function',
      name: 'test',
      stateMutability: 'view',
      inputs: [],
      outputs: [],
    } as const
    expectType<ExtractAbiFunctions<[typeof func]>>(func)
    expectType<ExtractAbiFunctions<[]>>(undefined as never)
  })

  it('extract function names', () => {
    const func = {
      type: 'function',
      name: 'test',
      stateMutability: 'view',
      inputs: [],
      outputs: [],
    } as const
    expectType<ExtractAbiFunctionName<[typeof func]>>('test')
    expectType<ExtractAbiFunctionName<[]>>(undefined as never)
  })

  it('extract a function by name', () => {
    const func = {
      type: 'function',
      name: 'test',
      stateMutability: 'view',
      inputs: [],
      outputs: [],
    } as const
    expectType<ExtractAbiFunction<[typeof func], 'test'>>(func)
  })
})

describe('structs', () => {
  it('extracts all structs', () => {
    const struct = {
      type: 'struct',
      size: 2,
      name: 'Uint256',
      members: [
        {
          name: 'low',
          offset: 0,
          type: 'felt',
        },
        {
          name: 'high',
          offset: 1,
          type: 'felt',
        },
      ],
    } as const
    expectType<ExtractAbiStructs<[typeof struct]>>(struct)
    expectType<ExtractAbiStructs<typeof erc20Abi>>(struct)
  })

  it('extracts all struct names', () => {
    expectType<ExtractAbiStructNames<typeof erc20Abi>>('Uint256')
  })

  it('extracts a struct by name', () => {
    expectType<ExtractAbiStruct<typeof erc20Abi, 'Uint256'>>({
      type: 'struct',
      size: 2,
      name: 'Uint256',
      members: [
        {
          name: 'low',
          offset: 0,
          type: 'felt',
        },
        {
          name: 'high',
          offset: 1,
          type: 'felt',
        },
      ],
    })
  })
})

describe('abi parameter to primitive type', () => {
  it('works with felt', () => {
    expectType<AbiParameterToPrimitiveType<typeof erc20Abi, { name: ''; type: 'felt' }>>(123)
  })

  it('works with simple structs', () => {
    expectType<AbiParameterToPrimitiveType<typeof erc20Abi, { name: ''; type: 'Uint256' }>>({
      low: 123,
      high: 0,
    })
  })

  it('works with nested structs', () => {
    expectType<AbiParameterToPrimitiveType<typeof testAbi, { name: ''; type: 'PointPair' }>>({
      p1: {
        x: 0,
        y: 0,
      },
      p2: {
        x: 1,
        y: 1,
      },
      extra: 2,
    })
  })

  it('works with tuples', () => {
    expectType<
      AbiParameterToPrimitiveType<typeof erc20Abi, { name: ''; type: '(felt, felt, felt)' }>
    >([1, 2, 3])
  })

  it('works with structs inside tuples', () => {
    expectType<
      AbiParameterToPrimitiveType<typeof erc20Abi, { name: ''; type: '(felt, Uint256, felt)' }>
    >([1, { low: 0, high: 2 }, 3])
  })
})
