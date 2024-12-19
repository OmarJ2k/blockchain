// src/js/contract.js
const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "vin",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "details",
          "type": "string"
        }
      ],
      "name": "VehicleAdded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_vin",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_details",
          "type": "string"
        }
      ],
      "name": "addVehicle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getVehicleCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getVehicleByIndex",
      "outputs": [
        {
          "internalType": "string",
          "name": "vin",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_vin",
          "type": "string"
        }
      ],
      "name": "isRegistered",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
const contractAddress = "0x686Ab5d5AE00c289CB5F731739a7eDB083bE2c0a"; // Update this after migration

// Connect to local blockchain
if (typeof window.ethereum !== 'undefined') {
    // Modern dapp browsers
    window.web3 = new Web3(window.ethereum);
    // Request account access if needed
    ethereum.request({ method: 'eth_requestAccounts' });
} else if (typeof window.web3 !== 'undefined') {
    // Legacy dapp browsers
    window.web3 = new Web3(window.web3.currentProvider);
} else {
    // Non-dapp browsers
    console.error("No web3 provider found. Please install MetaMask!");
}

const vehicleContract = new web3.eth.Contract(contractABI, contractAddress);

// Helper function to get current selected account
async function getCurrentAccount() {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    return accounts[0];
}
