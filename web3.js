const Web3 = require('web3');
const Tx = require('ethereumjs-tx')

const contract = require('./contracts/SimpleOracle')

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.defaultAccount = web3.eth.accounts[0];

const TestContract = new web3.eth.Contract(contract.CONTRACT_ABI, contract.CONTRACT_ADDRESS);

const account = "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1";

const privateKey = new Buffer('0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d');

module.export = {
    TestContract,
    account,
    privateKey,
    contract
}
