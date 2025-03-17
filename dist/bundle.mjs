
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $8301a56bee88331f$exports = {};

$parcel$export($8301a56bee88331f$exports, "getProbableInterfaces", function () { return $8301a56bee88331f$export$b351edbeb0c38b0c; });
var $30d3da9d5bab9f1b$exports = {};

$parcel$export($30d3da9d5bab9f1b$exports, "StandardInterfaceId", function () { return $30d3da9d5bab9f1b$export$94bf4ff490ded96e; });
$parcel$export($30d3da9d5bab9f1b$exports, "interfaces", function () { return $30d3da9d5bab9f1b$export$bc1125d123d9fc6; });
var $30d3da9d5bab9f1b$export$94bf4ff490ded96e;
(function(StandardInterfaceId) {
    StandardInterfaceId["ERC20"] = "erc20";
    StandardInterfaceId["ERC20Mintable"] = "erc20_mintable";
    StandardInterfaceId["ERC20Burnable"] = "erc20_burnable";
})($30d3da9d5bab9f1b$export$94bf4ff490ded96e || ($30d3da9d5bab9f1b$export$94bf4ff490ded96e = {}));
const $30d3da9d5bab9f1b$var$ftCoreMethods = [
    {
        name: "version",
        args: []
    },
    {
        name: "name",
        args: []
    },
    {
        name: "symbol",
        args: []
    },
    {
        name: "total_supply",
        args: []
    },
    {
        name: "decimals",
        args: []
    },
    {
        name: "balanceOf",
        args: [
            {
                name: "addr",
                type: "string"
            }
        ]
    },
    {
        name: "transfer",
        args: [
            {
                name: "to",
                type: "string"
            },
            {
                name: "amount",
                type: "number"
            }
        ]
    },
    {
        name: "transferFrom",
        args: [
            {
                name: "from",
                type: "string"
            },
            {
                name: "to",
                type: "string"
            },
            {
                name: "amount",
                type: "number"
            }
        ]
    },
    {
        name: "allowance",
        args: [
            {
                name: "owner",
                type: "string"
            },
            {
                name: "spender",
                type: "string"
            }
        ]
    },
    {
        name: "increaseAllowance",
        args: [
            {
                name: "spender",
                type: "string"
            },
            {
                name: "amount",
                type: "number"
            }
        ]
    },
    {
        name: "decreaseAllowance",
        args: [
            {
                name: "spender",
                type: "string"
            },
            {
                name: "amount",
                type: "number"
            }
        ]
    }
];
const $30d3da9d5bab9f1b$export$bc1125d123d9fc6 = Object.freeze({
    ["erc20"]: {
        id: "erc20",
        name: "FT Core (ERC-20)",
        methods: $30d3da9d5bab9f1b$var$ftCoreMethods
    },
    ["erc20_mintable"]: {
        id: "erc20_mintable",
        name: "FT Mint (ERC-20)",
        methods: [
            ...$30d3da9d5bab9f1b$var$ftCoreMethods,
            {
                name: "mint",
                args: [
                    {
                        name: "to",
                        type: "string"
                    },
                    {
                        name: "amount",
                        type: "number"
                    }
                ]
            }
        ]
    },
    ["erc20_burnable"]: {
        id: "erc20_burnable",
        name: "FT Burn (ERC-20)",
        methods: [
            ...$30d3da9d5bab9f1b$var$ftCoreMethods,
            {
                name: "burn",
                args: [
                    {
                        name: "amount",
                        type: "number"
                    }
                ]
            },
            {
                name: "burnFrom",
                args: [
                    {
                        name: "from",
                        type: "string"
                    },
                    {
                        name: "amount",
                        type: "number"
                    }
                ]
            }
        ]
    }
});


function $8301a56bee88331f$export$b351edbeb0c38b0c(methodNames) {
    const probableInterfaces = Object.keys((0, $30d3da9d5bab9f1b$export$bc1125d123d9fc6)).filter((i)=>(0, $30d3da9d5bab9f1b$export$bc1125d123d9fc6)[i].methods.every((m)=>methodNames.indexOf(m.name) !== -1));
    const byMethod = {};
    methodNames.forEach((methodName)=>{
        byMethod[methodName] = probableInterfaces.filter((i)=>(0, $30d3da9d5bab9f1b$export$bc1125d123d9fc6)[i].methods.map((m)=>m.name).indexOf(methodName) !== -1);
    });
    return {
        probableInterfaces: probableInterfaces,
        byMethod: byMethod
    };
}



var $0096a15788e4b6e3$exports = {};
/**
 * Data types supported by JSON format
 */ 

var $eba7685fd792abc0$exports = {};

$parcel$export($eba7685fd792abc0$exports, "parseContract", function () { return $eba7685fd792abc0$export$326d4dd2b9ef7090; });

async function $eba7685fd792abc0$export$326d4dd2b9ef7090(wasmBase64) {
    const bytes = $eba7685fd792abc0$var$base64StringToUint8Array(wasmBase64);
    const wasmModule = await WebAssembly.compile(bytes);
    const methodNames = await $eba7685fd792abc0$var$exportedFunctionNames(wasmModule);
    const probableInterfaces = (0, $8301a56bee88331f$export$b351edbeb0c38b0c)(methodNames);
    return {
        methodNames: methodNames,
        ...probableInterfaces
    };
}
/**
 * Converts a base64-encoded string to a byte array. Works in browser and Node
 * environments.
 *
 * @param strb64 base64 string
 * @returns Decoded byte array
 */ function $eba7685fd792abc0$var$base64StringToUint8Array(strb64) {
    return new Uint8Array(atob(strb64.toString().trim()).split("").map((c)=>c.charCodeAt(0)));
}
/**
 * Retrieves the names of all exported functions from a WebAssembly module.
 *
 * @param {WebAssembly.Module} wasmModule - The WebAssembly module to extract the exported function names from.
 * @return {Promise<string[]>} An array of strings containing the names of all exported functions.
 */ async function $eba7685fd792abc0$var$exportedFunctionNames(wasmModule) {
    const exports = WebAssembly.Module.exports(wasmModule);
    const exportedFunctionNames = exports.filter((e)=>e.kind === "function").map((e)=>e.name);
    return exportedFunctionNames;
}


var $4faef76cdc67f746$exports = {};




export {$8301a56bee88331f$export$b351edbeb0c38b0c as getProbableInterfaces, $30d3da9d5bab9f1b$export$94bf4ff490ded96e as StandardInterfaceId, $30d3da9d5bab9f1b$export$bc1125d123d9fc6 as interfaces, $eba7685fd792abc0$export$326d4dd2b9ef7090 as parseContract};
//# sourceMappingURL=bundle.mjs.map
