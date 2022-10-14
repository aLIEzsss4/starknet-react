export type Felt = 'felt'
export type CairoFunction = 'function'

export type AbiType = Felt | CairoFunction

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
