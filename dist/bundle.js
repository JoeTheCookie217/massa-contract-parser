
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9a72f76b8c599aaa$exports = {};

$parcel$export($9a72f76b8c599aaa$exports, "getProbableInterfaces", function () { return $9a72f76b8c599aaa$export$b351edbeb0c38b0c; });
var $82c8e41b6d1c6b83$exports = {};

$parcel$export($82c8e41b6d1c6b83$exports, "StandardInterfaceId", function () { return $82c8e41b6d1c6b83$export$94bf4ff490ded96e; });
$parcel$export($82c8e41b6d1c6b83$exports, "interfaces", function () { return $82c8e41b6d1c6b83$export$bc1125d123d9fc6; });
var $82c8e41b6d1c6b83$export$94bf4ff490ded96e;
(function(StandardInterfaceId) {
    StandardInterfaceId["ERC20"] = "erc20";
    StandardInterfaceId["ERC20Mintable"] = "erc20_mintable";
    StandardInterfaceId["ERC20Burnable"] = "erc20_burnable";
})($82c8e41b6d1c6b83$export$94bf4ff490ded96e || ($82c8e41b6d1c6b83$export$94bf4ff490ded96e = {}));
const $82c8e41b6d1c6b83$var$ftCoreMethods = [
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
const $82c8e41b6d1c6b83$export$bc1125d123d9fc6 = Object.freeze({
    ["erc20"]: {
        id: "erc20",
        name: "FT Core (ERC-20)",
        methods: $82c8e41b6d1c6b83$var$ftCoreMethods
    },
    ["erc20_mintable"]: {
        id: "erc20_mintable",
        name: "FT Mint (ERC-20)",
        methods: [
            ...$82c8e41b6d1c6b83$var$ftCoreMethods,
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
            ...$82c8e41b6d1c6b83$var$ftCoreMethods,
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


function $9a72f76b8c599aaa$export$b351edbeb0c38b0c(methodNames) {
    const probableInterfaces = Object.keys((0, $82c8e41b6d1c6b83$export$bc1125d123d9fc6)).filter((i)=>(0, $82c8e41b6d1c6b83$export$bc1125d123d9fc6)[i].methods.every((m)=>methodNames.indexOf(m.name) !== -1));
    const byMethod = {};
    methodNames.forEach((methodName)=>{
        byMethod[methodName] = probableInterfaces.filter((i)=>(0, $82c8e41b6d1c6b83$export$bc1125d123d9fc6)[i].methods.map((m)=>m.name).indexOf(methodName) !== -1);
    });
    return {
        probableInterfaces: probableInterfaces,
        byMethod: byMethod
    };
}



var $a9c28d60919e4e65$exports = {};
/**
 * Data types supported by JSON format
 */ 

var $d151980726130bd9$exports = {};

$parcel$export($d151980726130bd9$exports, "parseContract", function () { return $d151980726130bd9$export$326d4dd2b9ef7090; });

async function $d151980726130bd9$export$326d4dd2b9ef7090(wasmBase64) {
    const bytes = $d151980726130bd9$var$base64StringToUint8Array(wasmBase64);
    const wasmModule = await WebAssembly.compile(bytes);
    const methodNames = await $d151980726130bd9$var$exportedFunctionNames(wasmModule);
    const probableInterfaces = (0, $9a72f76b8c599aaa$export$b351edbeb0c38b0c)(methodNames);
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
 */ function $d151980726130bd9$var$base64StringToUint8Array(strb64) {
    return new Uint8Array(atob(strb64.toString().trim()).split("").map((c)=>c.charCodeAt(0)));
}
/**
 * Retrieves the names of all exported functions from a WebAssembly module.
 *
 * @param {WebAssembly.Module} wasmModule - The WebAssembly module to extract the exported function names from.
 * @return {Promise<string[]>} An array of strings containing the names of all exported functions.
 */ async function $d151980726130bd9$var$exportedFunctionNames(wasmModule) {
    const exports = WebAssembly.Module.exports(wasmModule);
    const exportedFunctionNames = exports.filter((e)=>e.kind === "function").map((e)=>e.name);
    return exportedFunctionNames;
}


var $671d8eed8033b627$exports = {};


$parcel$exportWildcard(module.exports, $9a72f76b8c599aaa$exports);
$parcel$exportWildcard(module.exports, $82c8e41b6d1c6b83$exports);
$parcel$exportWildcard(module.exports, $a9c28d60919e4e65$exports);
$parcel$exportWildcard(module.exports, $d151980726130bd9$exports);
$parcel$exportWildcard(module.exports, $671d8eed8033b627$exports);


//# sourceMappingURL=bundle.js.map
