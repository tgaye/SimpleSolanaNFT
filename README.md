# Please leave a ⭐ if this helps you.

## Video Example:
https://twitter.com/boobs_scary/status/1740248580898824416

## Currently Supported:
✅ Mobile View As A React App <br>
✅ Easy Vercel Deployment <br>
✅ Mint Gaurd (wallet caps) <br>
✅ Time Based Mint Delay (set a start time) <br>
✅ Batch Minting

## Coming Soon:
✅ Whitelist Examples <br>
✅ Captcha Examples

Clone the repo into a new directory and input the prompts from commands.sh into your terminal in the order they are written.

Pre-Required Setup:
GIT
Node

Install Git:
<https://git-scm.com/download/win>
git --version

Install Node:
<https://nodejs.org/en/download>
npm --version

### If you have these this demo should work on a windows machine without any complicated subsystems or VMs. <br>

# list of commands:


Install Solana Tool Suite: <br>
<https://docs.solana.com/cli/install-solana-cli-tools#windows> <br>
cmd /c "curl https://release.solana.com/v1.15.2/solana-install-init-x86_64-pc-windows-msvc.exe --output C:\solana-install-tmp\solana-install-init.exe --create-dirs" <br>
solana --version <br>
solana-keygen --version

Get current directory:  <br>
cd SimpleSolanaNFT

<Owner Wallet Public Key>  <br>
<Owner Wallet Phrase>  <br>
solana-keygen new --outfile C:\Users\User\Desktop\Metaplex\Owner.json  <br>
<Paste Here For Ease>


<Creator Wallet Public Key>  <br>
<Creator Wallet Phrase>  <br>
solana-keygen new --outfile C:\Users\User\Desktop\Metaplex\Creator.json  <br>
<Paste Here For Ease>


###  Do the below if you haven't setup config before 
solana config set --keypair C:\Users\User\Desktop\Metaplex\Owner.json  <br>
solana config set --url https://api.devnet.solana.com  <br>
solana config get  <br>

solana airdrop 1 "<creator wallet>" --url https://api.devnet.solana.com  <br>
solana airdrop 1 "<creator wallet>" --url https://api.devnet.solana.com


### Create Candy Machine Config File  <br>
./sugar create-config

### Upload assets  <br>
./sugar upload

### Deploy Candy Machine  <br>
./sugar deploy

[1/3] Creating collection NFT for candy machine  <br>
<Paste Here For Ease>  <br>
Collection mint ID: CD2dtKYKLhrPWz47iWKdpkdehKnapF1NQugD8Ks1qeTt

[2/3] Creating candy machine  <br>
<Paste Here For Ease>  <br>
Candy machine ID: Dh7dw1DFsQ7VpuyA8Eu3vS89kZ1d9LEebQj9QX6J4wfM

### Verify Candy Machine Deployment and Setup  <br>
./sugar verify

### Add Candy Guards  <br>
./sugar guard add  <br>
./sugar guard show

### Setup KeyStrokes Candy Machine UI  <br>
cd '.\CandyMachineSite\'  <br>
cp .\.env.example .env

### Update .env file with Candy Machine
npm install
npm run dev
