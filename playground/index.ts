export const getBytecode = async (contractAddress: string) => {
  const req: QueryStateRequest = {
    queries: [
      {
        requestItem: {
          oneofKind: 'addressBytecodeCandidate',
          addressBytecodeCandidate: { address: contractAddress },
        },
      },
    ],
  };

  const bytecodeRes = await baseClient
    .queryState(req)
    .then(res => res.response.responses[0].response);
  if (bytecodeRes.oneofKind === 'result') {
    console.log(bytecodeRes.result.responseItem.oneofKind);
    if (bytecodeRes.result.responseItem.oneofKind === 'bytes') {
      const bytecode = bytecodeRes.result.responseItem.bytes;
      const base64 = Buffer.from(bytecode).toString('base64');

      console.log(bytecode);
      console.log(base64);

      const parsed = await Parser.parseContract(base64);
      console.log(parsed);
    }
  }
};
