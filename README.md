# Massa Contract Parser

Collection of utilities for parsing base64-encoded WASM smart contracts on [Massa](https://massa.net), extracting exported members, and detecting likely candidates for [standard contract interface implementation](https://docs.massa.net/docs/build/standards).

# Usage

## Installation

```text
$ npm install massa-contract-parser
```

## Example

```js
import Parser from 'massa-contract-parser';

(async () => {
  const { code_base64 } = await getBytecode("")
  console.log(parseContract(code_base64));
})();
```

# Attribution

This package is based on the [NEAR Contract Parser](https://github.com/nearfoundation/near-contract-parser) by [NEAR Foundation](https://near.org).
