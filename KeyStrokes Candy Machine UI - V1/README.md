# About
This package is derived from [Metaplex's Candy Machine Mint UI Example](https://github.com/metaplex-foundation/js-examples/tree/main/mint-ui-example)

The original Candy Machine UI did not have allowlist functionality. KeyStrokes added allowlist functionality to it, along with some minor optimizations to avoid 429's from Solana endpoints, and to add more information if a user is not allowed to mint, and the status of the Candy Machine.

# Caution
Using this for production is not recommended, as this was created for demonstrating allowlist minting process.
If you end up using this, then its at your own risk, and the authors are not responsible for any damages, loss, unexpected behaviors or bugs.

# Mint from candy machine through the browser

In this tutorial, we will see how to mint from candy machine with wallet in the browser using the [Solana Wallet Adapter Library](https://github.com/solana-labs/wallet-adapter) and the [Metaplex JS SDK](https://github.com/metaplex-foundation/js).

The Guide is available in the [official Metaplex docs](https://docs.metaplex.com/programs/candy-machine/how-to-guides/my-first-candy-machine-part2).