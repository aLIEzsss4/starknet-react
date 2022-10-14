export const erc20Abi = [
  {
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
    name: 'Uint256',
    size: 2,
    type: 'struct',
  },
  {
    inputs: [
      {
        name: 'name',
        type: 'felt',
      },
      {
        name: 'symbol',
        type: 'felt',
      },
      {
        name: 'recipient',
        type: 'felt',
      },
    ],
    name: 'constructor',
    outputs: [],
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: 'name',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: 'symbol',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: 'totalSupply',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: 'decimals',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'account',
        type: 'felt',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: 'spender',
        type: 'felt',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        name: 'remaining',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'recipient',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'sender',
        type: 'felt',
      },
      {
        name: 'recipient',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'added_value',
        type: 'Uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'subtracted_value',
        type: 'Uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'recipient',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    type: 'function',
  },
] as const

export const testAbi = [
  {
    members: [
      {
        name: 'x',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'y',
        offset: 1,
        type: 'felt',
      },
    ],
    name: 'Point',
    size: 2,
    type: 'struct',
  },
  {
    members: [
      {
        name: 'p1',
        offset: 0,
        type: 'Point',
      },
      {
        name: 'p2',
        offset: 2,
        type: 'Point',
      },
      {
        name: 'extra',
        offset: 4,
        type: 'felt',
      },
    ],
    name: 'PointPair',
    size: 5,
    type: 'struct',
  },
  {
    inputs: [],
    name: 'get_felt',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_array_of_felts',
    outputs: [
      {
        name: 'res_len',
        type: 'felt',
      },
      {
        name: 'res',
        type: 'felt*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_struct',
    outputs: [
      {
        name: 'res',
        type: 'Point',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_array_of_structs',
    outputs: [
      {
        name: 'res_len',
        type: 'felt',
      },
      {
        name: 'res',
        type: 'Point*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_nested_structs',
    outputs: [
      {
        name: 'res',
        type: 'PointPair',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_tuple',
    outputs: [
      {
        name: 'res',
        type: '(felt, felt, felt)',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_mixed_types',
    outputs: [
      {
        name: 'tuple',
        type: '(felt, felt)',
      },
      {
        name: 'number',
        type: 'felt',
      },
      {
        name: 'array_len',
        type: 'felt',
      },
      {
        name: 'array',
        type: 'felt*',
      },
      {
        name: 'point',
        type: 'Point',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'num',
        type: 'felt',
      },
    ],
    name: 'request_felt',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'arr_len',
        type: 'felt',
      },
      {
        name: 'arr',
        type: 'felt*',
      },
    ],
    name: 'request_array_of_felts',
    outputs: [
      {
        name: 'res_len',
        type: 'felt',
      },
      {
        name: 'res',
        type: 'felt*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'str',
        type: 'Point',
      },
    ],
    name: 'request_struct',
    outputs: [
      {
        name: 'res',
        type: 'Point',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'str_len',
        type: 'felt',
      },
      {
        name: 'str',
        type: 'Point*',
      },
    ],
    name: 'request_array_of_structs',
    outputs: [
      {
        name: 'res_len',
        type: 'felt',
      },
      {
        name: 'res',
        type: 'Point*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'str',
        type: 'PointPair',
      },
    ],
    name: 'request_nested_structs',
    outputs: [
      {
        name: 'res',
        type: 'PointPair',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'tup',
        type: '(felt, felt)',
      },
    ],
    name: 'request_tuple',
    outputs: [
      {
        name: 'res',
        type: '(felt, felt)',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'num',
        type: 'felt',
      },
      {
        name: 'point',
        type: 'Point',
      },
      {
        name: 'arr_len',
        type: 'felt',
      },
      {
        name: 'arr',
        type: 'felt*',
      },
    ],
    name: 'request_mixed_types',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
