import styles from "../styles/Home.module.css";
import { useMemo, useState, useEffect } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { MetaplexProvider } from "../components/MetaplexProvider";
import { MintNFTs } from "../components/MintNFTs";
import "@solana/wallet-adapter-react-ui/styles.css";
import dynamic from 'next/dynamic';
import keyStrokes from '../public/images/Key Strokes.jpeg'
import yT from '../public/images/promo3.png'
import Image from 'next/image';

function LaunchTime() {
  // Assuming the launch time is a future Unix timestamp
  const launchTime = 1703735394 * 1000; // Convert to milliseconds

  const calculateTimeRemaining = () => {
    const currentTime = Date.now();
    const timeLeft = launchTime - currentTime;
    return timeLeft > 0 ? Math.floor(timeLeft / 1000) : 0;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    if (time <= 0) {
      return '';
    } else {
      const days = Math.floor(time / (60 * 60 * 24));
      const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((time % (60 * 60)) / 60);
      const seconds = time % 60;
  
      const formattedDays = days < 10 ? `0${days}` : days;
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
      return `${formattedDays} : ${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
    }
  };

  return (
    <div style={{ color: 'white', fontSize: '3vh', position: 'absolute', left: '50%', top: '78%', transform: 'translate(-50%, -50%)', textShadow: '1px 1px black', fontFamily: 'Goldman, sans-serif' }}>
      {formatTime(timeRemaining)}
    </div>
  );
}


export default function Home() {
  const [network, setNetwork] = useState(WalletAdapterNetwork.Devnet);

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  const handleChange = (event) => {
    switch (event.target.value) {
      case "devnet":
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
      case "mainnet":
        setNetwork(WalletAdapterNetwork.Mainnet);
        break;
      case "testnet":
        setNetwork(WalletAdapterNetwork.Testnet);
        break;
      default:
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
    }
  };

  const ButtonWrapper = dynamic(() =>
    import('@solana/wallet-adapter-react-ui', { ssr: false }).then((mod) => mod.WalletMultiButton)
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <MetaplexProvider>
          <div className={styles.App}>
          <ButtonWrapper style={{ fontSize: '3vh', padding: '10px 20px', width: '45vh', textAlign: 'center', color: 'black',
            border: "2px solid black", justifyContent: "center", position: "fixed", top: "10%", left: "50%", transform: "translate(-50%,-50%)" }} />
          <h2 style={{ color: 'white', position: 'absolute', left: '50%', top: '16%', transform: 'translate(-50%, -50%)', fontSize: '3vh', textShadow: '2px 2px black', fontFamily: 'Goldman, sans-serif' }}>NFT Collection Name</h2>
          
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
            <Image src={yT} alt="Your Image" width="500vh" height="400vh" style={{ border: "2px solid black", borderRadius: "2vh" }} />
          </div>
          {/* <h2 style={{ color: 'white', position: 'absolute', left: '50%', top: '68%', transform: 'translate(-50%, -50%)', fontSize: '3vh', textShadow: '1px 1px black', fontFamily: 'Goldman, sans-serif' }}>Mint: 0/2000</h2> */}
{/* 
          <div id="windowsXPWindow" style={{display:'none', position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: 'center', justifyContent: 'center', zIndex: '1000000000000000000000000000000000'}}>
            <WindowsXPWindow 
              id="windowsXPWindow"
              title="Learn More"
              style={{ width: '45vh', height: '30vh', textAlign: 'center', justifyContent: 'center'}}
            >
              <p style={{marginTop: '4vh', width: '32vh', textAlign: 'center', justifyContent: 'center', marginLeft: '5.5vh'}}>SOLbuddy is the first example of an on-chain interactive video game on the Solana blockchain. ...</p>
            </WindowsXPWindow>
          </div> */}

          <MintNFTs onClusterChange={handleChange} onLearnMoreClick={() => setShowLearnMore(true)} />       
          <LaunchTime /> 
          </div>
          </MetaplexProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}