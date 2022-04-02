import Vue from 'vue'
import App from './App.vue'

import Axios from "axios"
// babel
import 'babel-polyfill';
import "@/assets/css/reset.css"
import "@/assets/css/index.scss"


import Web3 from 'web3'
Vue.config.productionTip = false;
//init
var web3;
if(window.ethereum){
  web3 = window.ethereum;
}else if(window.web3){
  web3 = window.web3.currentProvider;
}else {
  // set the provider you want from Web3.providers
  web3 = new Web3.providers.HttpProvider(window.location.origin);
}

var rushAbi = [
  {
    constant: false,
    inputs: [],
    name: "maxMint",
    outputs: [
      {
        name: "",
        type: "uint256"
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "quantity",
        type: "uint256"
      }
    ],
    name: "dryRun",
    outputs: [
      {name:"code", type:"uint256"},
      {name:"msg", type:"string"},
      {name: "value", type:"uint256"}
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "quantity",
        type: "uint256"
      }
    ],
    name: "safeMint",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },  
  {
    constant: false,
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "tokensOfOwner",
    outputs: [
      {
        name: "",
        type: "uint256[]"
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  }
];

var rushAddress = "0x7b0881E15B62746da28026C348B3FC0001f89746";

var globalWeb3 = new Web3(web3);
Vue.prototype.Web3 = globalWeb3;

Vue.prototype.$http = Axios;
Vue.prototype.RushAbi = rushAbi;
Vue.prototype.RushAddress = rushAddress;
var mContract = new globalWeb3.eth.Contract(rushAbi, rushAddress);
Vue.prototype.RushContract = mContract;

// copy
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

new Vue({
  render: h => h(App),
}).$mount('#app')
