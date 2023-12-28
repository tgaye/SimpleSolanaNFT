# Candy Machine Windows Edition! Launch Solana NFT Collection with Metaplex Candy Machine V3 and Sugar

# Install Git
# https://git-scm.com/download/win
git --version

# Install Node
# https://nodejs.org/en/download
npm --version

# Install Solana Tool Suite
# https://docs.solana.com/cli/install-solana-cli-tools#windows
cmd /c "curl https://release.solana.com/v1.15.2/solana-install-init-x86_64-pc-windows-msvc.exe --output C:\solana-install-tmp\solana-install-init.exe --create-dirs"
solana --version
solana-keygen --version

# Download Sugar
# https://github.com/metaplex-foundation/sugar/releases/tag/sugar-cmv3-alpha.3
./sugar --version

# Get current directory
# C:\Users\User\Desktop\Metaplex
pwd

# <Owner Wallet Public Key>
# <Owner Wallet Phrase>
solana-keygen new --outfile C:\Users\User\Desktop\Metaplex\Owner.json
# <Paste Here For Ease>


# <Creator Wallet Public Key>
# <Creator Wallet Phrase>
solana-keygen new --outfile C:\Users\User\Desktop\Metaplex\Creator.json
# <Paste Here For Ease>


###  Do the below if you haven't setup config before 
# solana config set --keypair C:\Users\User\Desktop\Metaplex\Owner.json
# solana config set --url https://api.devnet.solana.com
# solana config get

# solana airdrop 1 "<creator wallet>" --url https://api.devnet.solana.com
# solana airdrop 1 "<creator wallet>" --url https://api.devnet.solana.com


# Create Candy Machine Config File
./sugar create-config

# Upload assets
./sugar upload

# Deploy Candy Machine
# <Candy Machine ID>
./sugar deploy

[1/3] Creating collection NFT for candy machine
Collection mint ID: CD2dtKYKLhrPWz47iWKdpkdehKnapF1NQugD8Ks1qeTt

[2/3] Creating candy machine
Candy machine ID: GP9p7g5DZr9A2JLkTQd6sf6rmAnwiqfYuQT2YTqtho3s

# Verify Candy Machine Deployment and Setup
./sugar verify

# Add Candy Guards
./sugar guard add
./sugar guard show

# Setup KeyStrokes Candy Machine UI
cd '.\CandyMachineSite\'
cp .\.env.example .env

# Update .env file with Candy Machine
npm install
npm run dev
