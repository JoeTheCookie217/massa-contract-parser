import { JsonType } from './JsonType';

export enum StandardInterfaceId {
  ERC20 = 'erc20',
  ERC20Mintable = 'erc20_mintable',
  ERC20Burnable = 'erc20_burnable',
}

/**
 * Well-known smart contract interface specification
 */
export interface StandardInterface {
  /** Unique interface ID */
  id: StandardInterfaceId;
  /** Human-readable interface name */
  name: string;
  /** Methods provided by interface */
  methods: StandardInterfaceMethod[];
}

export interface StandardInterfaceArgument {
  name: string;
  /**
   * An argument can support one or multiple types
   * (e.g. Rust's `Option<String>` becomes `['string', 'null']`)
   */
  type: JsonType | JsonType[];
}

export interface StandardInterfaceMethod {
  name: string;
  args: StandardInterfaceArgument[];
}

const ftCoreMethods: StandardInterfaceMethod[] = [
  {
    name: 'version',
    args: [],
  },
  {
    name: 'name',
    args: [],
  },
  {
    name: 'symbol',
    args: [],
  },
  {
    name: 'total_supply',
    args: [],
  },
  {
    name: 'decimals',
    args: [],
  },
  {
    name: 'balanceOf',
    args: [{ name: 'addr', type: 'string' }],
  },
  {
    name: 'transfer',
    args: [
      { name: 'to', type: 'string' },
      { name: 'amount', type: 'number' },
    ],
  },
  {
    name: 'transferFrom',
    args: [
      { name: 'from', type: 'string' },
      { name: 'to', type: 'string' },
      { name: 'amount', type: 'number' },
    ],
  },
  {
    name: 'allowance',
    args: [
      { name: 'owner', type: 'string' },
      { name: 'spender', type: 'string' },
    ],
  },
  {
    name: 'increaseAllowance',
    args: [
      { name: 'spender', type: 'string' },
      { name: 'amount', type: 'number' },
    ],
  },
  {
    name: 'decreaseAllowance',
    args: [
      { name: 'spender', type: 'string' },
      { name: 'amount', type: 'number' },
    ],
  },
];

/**
 * Mapping interface ID to interface specification
 */
export const interfaces: Readonly<
  Record<StandardInterfaceId, StandardInterface>
> = Object.freeze({
  [StandardInterfaceId.ERC20]: {
    id: StandardInterfaceId.ERC20,
    name: 'FT Core (ERC-20)',
    methods: ftCoreMethods,
  },
  [StandardInterfaceId.ERC20Mintable]: {
    id: StandardInterfaceId.ERC20Mintable,
    name: 'FT Mint (ERC-20)',
    methods: [
      ...ftCoreMethods,
      {
        name: 'mint',
        args: [
          { name: 'to', type: 'string' },
          { name: 'amount', type: 'number' },
        ],
      },
    ],
  },
  [StandardInterfaceId.ERC20Burnable]: {
    id: StandardInterfaceId.ERC20Burnable,
    name: 'FT Burn (ERC-20)',
    methods: [
      ...ftCoreMethods,
      {
        name: 'burn',
        args: [{ name: 'amount', type: 'number' }],
      },
      {
        name: 'burnFrom',
        args: [
          { name: 'from', type: 'string' },
          { name: 'amount', type: 'number' },
        ],
      },
    ],
  },
});
