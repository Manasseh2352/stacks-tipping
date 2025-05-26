import {
    openContractCall,
    standardPrincipalCV,
  } from '@stacks/transactions';
  import { StacksTestnet } from '@stacks/network';
  import { UserSession } from '@stacks/connect';
  
  const CONTRACT_ADDRESS = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
  const CONTRACT_NAME = 'tip-contract';
  
  export async function sendTip(userSession: UserSession, recipient: string) {
    const network = new StacksTestnet();
  
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
  
    await openContractCall(options);
  }
  