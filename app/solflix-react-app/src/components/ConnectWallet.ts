import React, { FC, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from 'react-router-dom';
import { hasNFT } from '../utils/nftCheck';

const ConnectWallet: FC = () => {
  const { publicKey, connected } = useWallet();
  const history = useNavigate();

  useEffect(() => {
    const checkNFT = async () => {
      if (publicKey && connected) {
        const hasRequiredNFT = await hasNFT(publicKey);
        if (hasRequiredNFT) {
          history('/home');
        } else {
          alert('You do not have the required NFT to access SolFlix.');
        }
      }
    };

    checkNFT();
  }, [publicKey, connected, history]);

  return (
    <div>
      <h1>Welcome to SolFlix!</h1>
      <p>Connect your wallet to access exclusive NFT content.</p>
      <button onClick={() => history('/connect')}>Connect Wallet</button>
    </div>
  );
}

export default ConnectWallet;
