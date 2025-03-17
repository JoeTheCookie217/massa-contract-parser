/**
 * Data types supported by JSON format
 */
export type JsonType = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null';
export enum StandardInterfaceId {
    ERC20 = "erc20",
    ERC20Mintable = "erc20_mintable",
    ERC20Burnable = "erc20_burnable"
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
export const interfaces: Readonly<Record<StandardInterfaceId, StandardInterface>>;
/**
 * Guesses which standards a contract _probably_ implements based on exported
 * method names.
 *
 * @param methodNames Exported method names
 * @returns Interfaces the contract probably implements, as well as which
 *  methods likely constitute which interfaces
 */
export function getProbableInterfaces(methodNames: string[]): {
    probableInterfaces: StandardInterfaceId[];
    byMethod: Record<string, StandardInterfaceId[]>;
};
export interface ParsedContract {
    /**
     * Standard interfaces the original contract is likely to support
     */
    probableInterfaces: StandardInterfaceId[];
    /**
     * Maps method names to the ID of the interface they are likey to constitute
     */
    byMethod: Record<string, StandardInterfaceId[]>;
    /**
     * Names of functions exported from the original contract
     */
    methodNames: string[];
}
export function parseContract(wasmBase64: string): Promise<ParsedContract>;

//# sourceMappingURL=bundle.d.ts.map
