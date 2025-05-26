'use client';
import { useEffect, useState } from 'react';
import {
  AppConfig,
  UserSession,
  showConnect,
} from '@stacks/connect';
import { sendTip } from '@/lib/stacks';

const appConfig = new AppConfig(['store_write']);
const userSession = new UserSession({ appConfig });

export default function Home() {
  const [userData, setUserData] = useState<any>(null);
  const [recipient, setRecipient] = useState('');

  const connectWallet = () => {
    showConnect({
      appDetails: {
        name: 'STX Tipping App',
        icon: '/icon.png',
      },
      userSession,
      onFinish: () => {
        setUserData(userSession.loadUserData());
      },
    });
  };

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>STX Tipping Platform</h1>
      {!userData ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <p>Your Address: {userData.profile.stxAddress.testnet}</p>
          <input
            type="text"
            placeholder="Recipient Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <button
            onClick={() => sendTip(userSession, recipient)}
            disabled={!recipient}
            style={{ marginLeft: '10px' }}
          >
            Send 1 STX Tip
          </button>
        </>
      )}
    </main>
  );
}
