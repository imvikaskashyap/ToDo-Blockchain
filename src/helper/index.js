const { ethers } = require("ethers");
const { TODO_ABI } = require("../../contracts/ABIs/todoList");
const { TODO_CONTRACT_ADDRESS } = require("../../contracts/Address");

const getContract = () =>{
    if( typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            TODO_CONTRACT_ADDRESS,
            TODO_ABI,
            signer
            
        )

        return contract
    }
}

