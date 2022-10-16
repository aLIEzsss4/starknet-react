export type Felt = 'felt'
export type CairoFunction = 'function'

type MAX_TUPLE_SIZE = 20

type _BuildTuple<
  R extends unknown = never,
  A extends string = '',
  D extends readonly number[] = []
> = D['length'] extends MAX_TUPLE_SIZE
  ? `${A})` | R
  : A extends ''
  ? _BuildTuple<R, `(${string}`, [...D, 1]>
  : _BuildTuple<`${A})` | R, `${A}, ${string}`, [...D, 1]>

export type CairoTuple = _BuildTuple

export type AbiType = Felt | CairoFunction | CairoTuple

export type ResolvedAbiType = AbiType

export type AbiParameter = {
  type: string
  name: string
}

export type AbiStateMutability = 'view' | 'external'

export type AbiFunction = {
  name: string
  inputs: readonly AbiParameter[]
  outputs: readonly AbiParameter[]
} & (
  | {
      type: 'function'
      stateMutability?: AbiStateMutability
    }
  | {
      type: 'constructor'
    }
)

export type AbiMember = {
  name: string
  offset: number
  type: string
}

export type AbiStruct = {
  type: 'struct'
  name: string
  size: number
  members: readonly AbiMember[]
}

export type Abi = readonly (AbiFunction | AbiStruct)[]
