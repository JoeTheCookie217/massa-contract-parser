# Massa Contract Parser

[![](https://img.shields.io/github/stars/NEARFoundation/near-contract-parser)](https://github.com/NEARFoundation/near-contract-parser)
[![](https://img.shields.io/npm/dt/near-contract-parser)](https://www.npmjs.com/package/near-contract-parser)

Collection of utilities for parsing base64-encoded WASM smart contracts on [Massa Protocol](https://massa.net), extracting exported members, and detecting likely candidates for [standard contract interface implementation](https://nomicon.io/Standards/README.html).

# Usage

## Installation

```text
$ npm install --save near-contract-parser
```

## Example

```js
import Parser from 'near-contract-parser';

(async () => {
  const { code_base64 } = await getBytecode("")
  console.log(parseContract(code_base64));
})();
```

# Attribution

This package is based on the [NEAR Contract Parser](https://github.com/nearfoundation/near-contract-parser) by [NEAR Foundation](https://near.org).
