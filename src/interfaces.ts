import { JsonType } from './JsonType';

export enum StandardInterfaceId {
  ERC20 = 'erc20',
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

/**
 * Mapping interface ID to interface specification
 */
export const interfaces: Readonly<
  Record<StandardInterfaceId, StandardInterface>
> = Object.freeze({
  [StandardInterfaceId.ERC20]: {
    id: StandardInterfaceId.ERC20,
    name: 'FT Core (NEP-141)',
    methods: [
      {
        name: 'ft_transfer',
        args: [
          { name: 'receiver_id', type: 'string' },
          { name: 'amount', type: 'string' },
          { name: 'memo', type: ['string', 'null'] },
        ],
      },
      {
        name: 'ft_transfer_call',
        args: [
          { name: 'receiver_id', type: 'string' },
          { name: 'amount', type: 'string' },
          { name: 'memo', type: ['string', 'null'] },
          { name: 'msg', type: 'string' },
        ],
      },
      {
        name: 'ft_total_supply',
        args: [],
      },
      {
        name: 'ft_balance_of',
        args: [{ name: 'account_id', type: 'string' }],
      },
    ],
  },
});
