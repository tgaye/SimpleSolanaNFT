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

Get current directory:
cd SimpleSolanaNFT

<Owner Wallet Public Key>
<Owner Wallet Phrase>
solana-keygen new --outfile C:\Users\User\Desktop\Metaplex\Owner.json
<Paste Here For Ease>


<Creator Wallet Public Key>
<Creator Wallet Phrase>
solana-keygen new --outfile C:\Users\User\Desktop\Metaplex\Creator.json
<Paste Here For Ease>


###  Do the below if you haven't setup config before 
solana config set --keypair C:\Users\User\Desktop\Metaplex\Owner.json
solana config set --url https://api.devnet.solana.com
solana config get

solana airdrop 1 "<creator wallet>" --url https://api.devnet.solana.com
solana airdrop 1 "<creator wallet>" --url https://api.devnet.solana.com


### Create Candy Machine Config File
./sugar create-config

### Upload assets
./sugar upload

### Deploy Candy Machine
./sugar deploy

[1/3] Creating collection NFT for candy machine
<Paste Here For Ease>
Collection mint ID: CD2dtKYKLhrPWz47iWKdpkdehKnapF1NQugD8Ks1qeTt

[2/3] Creating candy machine
<Paste Here For Ease>
Candy machine ID: Dh7dw1DFsQ7VpuyA8Eu3vS89kZ1d9LEebQj9QX6J4wfM

### Verify Candy Machine Deployment and Setup
./sugar verify

### Add Candy Guards
./sugar guard add
./sugar guard show

### Setup KeyStrokes Candy Machine UI
cd '.\CandyMachineSite\'
cp .\.env.example .env

### Update .env file with Candy Machine
npm install
npm run dev
