import { Abi, AbiMember, AbiParameter, AbiType, CairoFunction, Felt } from './abi'

export type ExtractAbiFunctions<TAbi extends Abi> = Extract<TAbi[number], { type: 'function' }>

export type ExtractAbiFunctionName<TAbi extends Abi> = ExtractAbiFunctions<TAbi>['name']

export type ExtractAbiFunction<
  TAbi extends Abi,
  TFunctionName extends ExtractAbiFunctionName<TAbi>
> = Extract<ExtractAbiFunctions<TAbi>, { name: TFunctionName }>

export type ExtractAbiStructs<TAbi extends Abi> = Extract<TAbi[number], { type: 'struct' }>

export type ExtractAbiStructNames<TAbi extends Abi> = ExtractAbiStructs<TAbi>['name']

export type ExtractAbiStruct<
  TAbi extends Abi,
  TStructName extends ExtractAbiStructNames<TAbi>
> = Extract<ExtractAbiStructs<TAbi>, { name: TStructName }>

export type AbiTypeToPrimitiveType<TAbiType extends AbiType> = PrimitiveTypeLookup[TAbiType]

type PrimitiveTypeLookup = {
  [_ in Felt]: number
} & {
  [_ in CairoFunction]: number
}

/* eslint-disable */
export type AbiParameterToPrimitiveType<
  TAbi extends Abi,
  TAbiParameter extends AbiParameter
> =
  TAbiParameter['type'] extends AbiType
    ? AbiTypeToPrimitiveType<TAbiParameter['type']>
    : ExtractAbiStruct<TAbi, TAbiParameter['type']> extends {
        type: 'struct',
        members: infer TMembers extends readonly AbiMember[]
      }
    ?
      {
        [Member in TMembers[number] as Member['name']]: AbiParameterToPrimitiveType<TAbi, Member>
      }
    : unknown
/* eslint-enable */