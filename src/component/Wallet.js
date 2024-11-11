import React from 'react';

const Wallet = () => {
    const connect = async ({ account, setAccount }) => {
        if (typeof window.ethereum !== 'undefined') {  
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setAccount(accounts[0]); 
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Please install MetaMask!");
        }
    };

    return (
        <button onClick={() => connect({})}>Connect</button>
    );
};

export default Wallet;


