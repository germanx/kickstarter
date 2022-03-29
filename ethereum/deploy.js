const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'buddy angle main people olympic camera vault dance gaze view swim coffee',
  'https://rinkeby.infura.io/v3/93cbe95866084eae958bd1aaf79ddac6'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);

  provider.engine.stop();
};
deploy();

// 0x0361a4f8ABf3aB205784d892D1fA44AC907BafbA
