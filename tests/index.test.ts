import * as fs from 'fs';
import * as lib from '../src/index';
import { test, expect } from '@jest/globals';

test('wrap', async () => {
  const payload = fs.readFileSync('./tests/wrap.base64', 'utf8');
  const parsed = await lib.parseContract(payload);

  const expectedMethodNames = [
    'storage_minimum_balance',
    'new',
    'ft_transfer',
    'ft_transfer_call',
    'ft_total_supply',
    'ft_balance_of',
    'ft_resolve_transfer',
    'storage_deposit',
    'storage_withdraw',
    'storage_unregister',
    'storage_balance_bounds',
    'storage_balance_of',
    'ft_metadata',
  ];
  expect(parsed.methodNames.length).toEqual(expectedMethodNames.length);
  expect(parsed.methodNames).toEqual(
    expect.arrayContaining(expectedMethodNames),
  );

  const expectedInterfaces = [lib.StandardInterfaceId.ERC20];

  expect(parsed.probableInterfaces).toEqual(
    expect.arrayContaining(expectedInterfaces),
  );
  expect(parsed.probableInterfaces.length).toEqual(expectedInterfaces.length);
});
