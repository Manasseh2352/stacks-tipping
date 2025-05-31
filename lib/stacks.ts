import {
    openContractCall,
    standardPrincipalCV,
  } from '@stacks/transactions';
  import { StacksNetwork } from '@stacks/network';
  import { UserSession } from '@stacks/connect';
  
  const CONTRACT_ADDRESS = 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5'; // Replace with your actual contract address
  const CONTRACT_NAME = 'tip-contract';
  
  export async function sendTip(userSession: UserSession, recipient: string) {
    const network = new StacksNetwork({
      url: 'https://stacks-node-api.testnet.stacks.co', // Explicitly set the testnet URL
    });
  
    const options = {
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'send-tip',
      functionArgs: [standardPrincipalCV(recipient)],
      network,
      appDetails: {
        name: 'STX Tipping App',
        icon: '/icon.png',
      },
      userSession,
      onFinish: (data: any) => {
        console.log('Tip sent!', data);
      },
    };
  
    try {
      await openContractCall(options);
    } catch (error) {
      console.error('Error sending tip:', error);
    }
  }