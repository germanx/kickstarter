import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3B11aE71859a27642Bd7d2052cf79e79eC4BBDEc'
);

export default instance;
