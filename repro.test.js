const { recoverPublicKey } = require("viem");

const run = async () => {
  const address = await recoverPublicKey({
    hash: "0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68",
    signature:
      "0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c",
  });

  console.log(address);
};

test("repro", async () => {
  for (let i = 0; i < 500; i++) {
    await run();
  }
});
