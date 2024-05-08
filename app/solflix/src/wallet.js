import {
    ConnectionProvider,
    WalletProvider,
    useAnchorWallet,
  } from '@solana/wallet-adapter-react';
  import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
  } from '@solana/wallet-adapter-wallets';
  import { clusterApiUrl } from '@solana/web3.js';
  import React, { useMemo } from 'react';
  
  const WalletAdapterSetup: React.FC = ({ children }) => {
    const network = clusterApiUrl('devnet');
    const wallets = useMemo(() => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ], [network]);
  
    return (
      <ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
          {children}
        </WalletProvider>
      </ConnectionProvider>
    );
  };
  
  export default WalletAdapterSetup;