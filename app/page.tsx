'use client';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar'
import {
  AppConfig,
  UserSession,
  showConnect,
} from '@stacks/connect';
import { sendTip } from '@/lib/stacks';
import Image from 'next/image';

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
    <main className='mx-5'>
      <NavBar/>
     
     <div className='place-items-center mt-10'>
      <Image 
      src='/img/tip-jar.png'
      alt='Tip Jar'
      width={200}
      height={200}
      className='mx-auto mb-5'
      priority
      />
     <div className=' text-center'>
     <h1 className='font-extrabold text-3xl'>TipJar</h1>
     <p className=''>A fun competitive way to tip your favourite creators and support the community</p>
      {!userData ? (
        <button onClick={connectWallet}
        className='ml-5 bg-blue-500 p-1 rounded'
        >Connect Wallet</button>
      ) : (
        <>
          <p>Your Address: {userData.profile.stxAddress.testnet}</p>
          <input
            type="text"
            placeholder="Recipient Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className='border-2 border-blue-600 outline-0 p-1 rounded mt-2'
          />
          <button
            onClick={() => sendTip(userSession, recipient)}
            disabled={!recipient}
            className='ml-5 bg-blue-500 p-1 rounded'
          >
            Send 1 STX Tip
          </button>
        </>
      )}
     </div>
     </div>
    </main>
  );
}
