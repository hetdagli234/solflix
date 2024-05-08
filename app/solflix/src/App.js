import React from 'react';
import { WalletAdapterSetup } from './WalletAdapterSetup';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import Button from '@material-ui/core/Button';

function App() {
  const wallet = useAnchorWallet();

  return (
    <WalletAdapterSetup>
      <div className="App">
        <header className="App-header">
          {wallet ? (
            <p>Wallet Address: {wallet.publicKey.toString()}</p>
          ) : (
            <Button variant="contained" color="primary" onClick={() => wallet.connect()}>
              Connect Wallet
            </Button>
          )}
        </header>
      </div>
    </WalletAdapterSetup>
  );
}

export default App;