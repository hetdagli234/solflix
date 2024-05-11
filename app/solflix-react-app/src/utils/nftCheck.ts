import { PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useConnection } from '@solana/wallet-adapter-react';

const NFT_MINT_ADDRESS = '';

export const hasNFT = async (publicKey: PublicKey): Promise<boolean> => {
  const { connection } = useConnection();

  const nftMintPublicKey = new PublicKey(NFT_MINT_ADDRESS);
  const tokenAccounts = await connection.getTokenAccountsByOwner(publicKey, {
    programId: TOKEN_PROGRAM_ID,
  });
  const nftAccount = tokenAccounts.value.find((account) => {
    const accountInfo = account.account.data; // Assuming accountInfo is already a Buffer
    const parsedInfo = accountInfo.toString(); // Directly convert Buffer to string
    const mintInfo = JSON.parse(parsedInfo).info.mint;
    return mintInfo === nftMintPublicKey.toBase58();
  });

  return !!nftAccount;
};
