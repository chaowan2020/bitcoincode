<template>
  <div id="app">
    <section class="network-tip" v-if="showNetTip" :style="{top:(netTipTop?'30px':'90px')}">
        {{nowTip}} <img src="~@/assets/images/svg/close-icon.svg" @click="hideNetTip" alt="DCrush Labs" width="14">
    </section>
    <!-- header -->
    <header id="header">
      <section class="wrapper clearfix">
        <section class="slogan nft-left">
            <img src="~@/assets/images/svg/slogan.svg" alt="DCrush Labs">
        </section>
        <ul class="nft-right clearfix">
            <!-- <li><img src="~@/assets/images/wallet.png" alt="DCrush Labs"></li> -->
            <li  class="wallet-li">
              <img src="~@/assets/images/svg/Wallet-little.svg" class="wallet-img" alt="DCrush Labs" @click="showWallet">
              <section class="wallet-container" v-show="isAccount">
                <section class="wallet-balance">ETH: {{balance}}</section>
                <section class="wallet-nft" @click="toOSAccount">
                  My NFTs
                </section>
                <section class="wallet-address-title">wallet address</section>
                <section class="wallet-address-container">
                    <section class="wallet-address">
                      {{wallet.substring(0,12)+"****"+wallet.substr(-12)}}<img src="~@/assets/images/svg/copy-icon.svg" @click="copy" class="wallet-copy" alt="DCrush Labs" width="18" style="margin-left:20px">
                  </section>
                </section>         
                <section class="wallet-btns clearfix">
                    <section class="wallet-btn" @click="toEthExplorer">View on Explorer</section>
                    <!-- <section class="wallet-btn" @click="disconnect">Disconnect</section> -->
                </section>
              </section>
            </li>
            <!-- <li @click="toOpenSea"><img src="~@/assets/images/opensea.png" alt="DCrush Labs"></li> -->
            <li @click="toTwitter"><img src="~@/assets/images/svg/Twitter-little.svg" alt="DCrush Labs"></li>
            <li style="margin-left:154px" @click="toDiscord"><img src="~@/assets/images/svg/Discord-little.svg" alt="DCrush Labs"></li>
            <li @click="fastLink('faq')" :class="activeId=='faq'?'marl-76 active':'marl-76'">
              <div class="link-name"><i></i>FAQs</div>              
            </li>
            <li @click="fastLink('snowball')" :class="activeId=='snowball'?'marl-76 active':'marl-76'">
              <div class="link-name"><i></i>Snowball</div>     
            </li>
            <li @click="fastLink('mint')" :class="activeId=='mint'?'marl-76 active':'marl-76'">
              <div class="link-name"><i></i>Mint</div> 
            </li>
            <li @click="fastLink('nft')" :class="activeId=='nft'?'active':''">
              <div class="link-name"><i></i>NFTs</div> 
            </li>
        </ul>
      </section>
    </header>
    
    <!-- content -->
    <section class="content-container">
        <!-- links -->
        <section class="wrapper" id="links">
          <section class="link-part clearfix">
            <div class="link-img nft-left" @click="toDiscord"><img src="~@/assets/images/svg/Discord-big.svg" alt="DCrush Labs" ></div>
            <div class="link-img nft-left" @click="toTwitter"><img src="~@/assets/images/svg/Twitter-big.svg" alt="DCrush Labs" ></div>
            <div class="nft-right link-wallet" >
              <img src="~@/assets/images/svg/Wallet-big.svg" class="wallet-img" alt="DCrush Labs" @click="showWallet">
              <section class="wallet-container" v-show="isAccount">
                <section class="wallet-balance">ETH: {{balance}}</section>
                <section class="wallet-nft" @click="toOSAccount">
                  My NFTs
                </section>
                <section class="wallet-address-title">wallet address</section>
                <section class="wallet-address-container">
                    <section class="wallet-address">
                      {{wallet.substring(0,12)+"****"+wallet.substr(-12)}}<img src="~@/assets/images/svg/copy-icon.svg" @click="copy" class="wallet-copy" alt="DCrush Labs" width="18" style="margin-left:20px">
                  </section>
                </section>                
                <section class="wallet-btns clearfix">
                    <section class="wallet-btn" @click="toEthExplorer">View on Explorer</section>
                    <!-- <section class="wallet-btn" @click="disconnect">Disconnect</section> -->
                </section>
              </section>
            </div>
          </section>
        </section>
        <!-- nfts -->
        <section class="btc-part" id="nft">
            <div class="btc-title">BitcoinCode.NFT</div>
            <div class="btc-subtitle">An NFT community experiment</div>
        </section>
        <!-- code bg -->
        <section class="code-part">
          <!-- <img src="~@/assets/images/code.png"  alt="DCrush Labs"> -->
        </section>
        <!-- intro -->
        <section class="wrapper">
           <section class="intro-part">
              <section class="intro-title clearfix">
                  <img src="~@/assets/images/svg/computer.svg" alt="DCrush Labs" width="130" class="nft-left">
                  <section class="intro-subtitle nft-left">
                      <p class="intro-subtitle-main">control of code is power.</p>
                      <p>—William J. Mitchell, 1996</p>
                  </section>
              </section>
              <section class="intro-content">
                  <p><span><</span><span class="pink">Bitcoin </span><span class="green">is the first </span><span class="golden">experimental project to achieve code</span></p>
                  <p><span class="golden">&nbsp;freedom and code sovereignty.</span></p>
                  <p><span><</span><span class="pink">It </span><span class="green">has redefined our world </span><span class="golden">by creating a new set of rules outside</span></p>
                  <p><span class="golden">&nbsp;of morality and law.</span></p>
                  <p></p>
                  <p><span><</span><span class="pink">In </span><span class="green">order to pay tribute to Bitcoin </span><span class="golden">and Blockchain</span></p>
                  <p><span><</span><span class="pink">DCrush Labs </span><span> has generated 6,483 unique NFTs from the codebase </span></p>
                  <p><span>&nbsp;currently used to run Bitcoin.</span></p>
                  <p></p>
                  <p><span><</span><span class="pink">Now</span><span>,</span><span class="golden">everyone can get them through this NFT community</span></p>
                  <p><span class="golden">&nbsp;experiment--Free Mint.</span></p>
              </section>
           </section>
        </section>
        <!-- mint -->
        <section class="wrapper" id="mint"> 
            <section class="mint-part">               
                <section class="mint-container">   
                  <section class="mint-charge-title">Mint a BitcoinCodeNFT</section>    
                  <section class="mint-charge-subtitle">
                    6483 unique items stored on the Ethereum blockchain
                  </section>     
                  <div class="mint-select-box" @mouseleave="removeSelect">
                      <div class="mint-select" @click="toSelect">
                        {{mintValue}}
                        <i :class="selecting?'active':''"></i>
                      </div>
                      <div class="mint-options" v-show="selecting">
                        <div :class="mintValue==item?'mint-option active':'mint-option'" v-for="item in mintOptions" :key="item" @click="choose(item)">
                          {{item}}
                          <img src="~@/assets/images/svg/get.svg" v-if="mintValue==item" class="isChecked" width="16" alt="DCrush Labs">
                        </div>
                      </div>
                  </div> 
                  <img src="~@/assets/images/svg/Coming.svg" v-if="mintCode=='comingsoon'" class="mint-btn" alt="DCrush Labs">  
                  <img src="~@/assets/images/svg/soldOut.svg" v-if="mintCode=='soldout'" class="mint-btn" alt="DCrush Labs">      
                  <img src="~@/assets/images/svg/Mint.svg" v-if="mintCode=='mint'" class="mint-btn curp" @click="mint" alt="DCrush Labs">     
                  <!-- <div class="mint-charge">
                    <div :class="isMinting?'mint-charge-btn disabled':'mint-charge-btn'" v-show="canmint" @click="mint">Mint</div>
                    <div class="mint-charge-btn disabled" v-show="!canmint" id="cantmint">Mint</div>
                  </div> -->

                </section>
                <section class="mint-opensea-tip" >
                  <section class="mint-table">
                      <p>The FreeMint experiment will be issued in NFT Snowball Offering (NSO) mode.</p>
                      <p>The 359 NFTs in this collection that contain the developer's signatures will be given to the developers for free.</p>
                  </section>                  
                </section>
            </section>
        </section>
        <!-- images grid -->
        <section class="wrapper">
          <section class="imgGrid-part clearfix">
            <img :src="item.url" alt="DCrush Labs" class="imgGrid-item" v-for="(item,index) in imgGrid" :key="index" @click="enlargeImg(item)">
          </section>
        </section>
        <!-- Roadmap -->
        <!-- <section class="wrapper" id="roadmap">
            <section class="roadmap-part">
                <section class="roadmap-title">Roadmap</section>
                <section class="roadmap-table" v-for="item in roadmaps" :key="item.per">
                    <section class="roadmap-per">{{item.per}}</section>
                    <section class="roadmap-detail" v-html="item.content"></section>
                </section>
            </section>
        </section> -->
        <!-- Snowball -->
        <section class="wrapper" id="snowball">
            <section class="snowball-part">
              <section class="snowball-title">NFT Snowball Offering</section>
              <section class="snowball-table">
                  <p>NFT Snowball Offering (NSO) is a revolutionary NFT issue experiment driven completely by the community.  </p>
                  <p>After the issuance cycle begins, the minting price will decrease as the community member grows. </p>
                  <p>And eventually reaches Free Mint when the community is at a large enough size.</p>
                  <!-- <p>And this process will continue until the realization of Free Mint!</p> -->
              </section>
              
              <section class="snowball-nfo-container">
                <section class="snowball-nfo-content">
                    <section class="snowball-nfo-title">BitcoinCodeNFT NSO</section>
                    <section class="snowball-nfo-table">
                        <p>Initial NFT minting price: 1ETH</p>
                        <p>Initial community size: 1000 members</p>                        
                    </section>
                    <section class="snowball-nfo-table">
                        <p>As the community doubles its size, the minting price will correspond by dropping 50%. </p>
                        <p>Eventually, as the community size reaches 128k, free mint will be achieved.</p>
                    </section>
                </section>
              </section>
              <section class="snowball-count-down">
                  <section class="snowball-count-down-title">NSO Circle Countdown: </section>
                  <section class="snowball-count-down-table">
                    <span class="dayFrom">{{dayFrom}}</span>
                    <span class="daysFont">Days</span>
                    <span class="timeFrom">{{timeFrom}}</span>
                  </section>
              </section>
              <section class="snowball-step dark-blue disabled">
                <img src="~@/assets/images/svg/tip.svg" class="snowball-step-flag"  alt="DCrush Labs">
                <section class="snowball-step-title">BitcoinCodeNFT Start-up</section>
                <section class="snowball-step-content">
                  Begin outreach to bitcoin developers. Invite global coders and NFT enthusiasts to join the experiment.
                </section>
              </section>
              <section class="snowball-step purple disabled">
                <img src="~@/assets/images/svg/tip.svg" class="snowball-step-flag"  alt="DCrush Labs">
                <section class="snowball-step-title">Number of memebers hits 1000<span class="snowball-step-italic">1ETH/item</span></section>
                <section class="snowball-step-content">
                  The NFT Snowball Offering (NSO) community experiment begins.
                </section>
              </section>
              <section class="snowball-step dark-green">
                <img src="~@/assets/images/svg/snowball.svg" class="snowball-step-snowball"  alt="DCrush Labs">
                <section class="snowball-step-title">2000<span class="snowball-step-members">members</span><span class="snowball-step-through">1ETH</span><span class="snowball-step-italic">0.5ETH/item</span></section>
                <section class="snowball-step-content">
                  <p>Start #FindingDevelopers and gifting them Bitcoin Code NFTs.</p>
                  <p>The awesome community experiment goes on!</p>
                </section>
              </section>
              <section class="snowball-step brown">
                <section class="snowball-step-title">4000<span class="snowball-step-members">members</span><span class="snowball-step-through">0.5ETH</span><span class="snowball-step-italic">0.25ETH/item</span></section>
                <section class="snowball-step-content">
                  <div class="snowball-step-table">
                      <i></i>
                      <p>#Memecoin Gift Pack Giveaway#</p>
                      <p>Our large gift pack contains several varieties of meme coin. This is our way of paying tribute </p>
                      <p>to the meme coin community!</p>
                      <p>The awesome community experiment goes on!</p>
                  </div>
                  <div class="snowball-step-table">
                    <i></i>
                    <p>More whitelist spots open.</p>
                  </div>
                </section>
              </section>
              <section class="snowball-step light-blue">
                <section class="snowball-step-title">8000<span class="snowball-step-members">members</span><span class="snowball-step-through">0.25ETH</span><span class="snowball-step-italic">0.125ETH/item</span></section>
                <section class="snowball-step-content">
                  <div class="snowball-step-table">
                      <i></i>
                      <p>Develop mutual collaborations with influencers or communities.</p>
                  </div>
                  <div class="snowball-step-table">
                    <i></i>
                    <p>More whitelist spots open.</p>
                  </div>
                </section>
              </section>
              <section class="snowball-step light-red">
                <section class="snowball-step-title">16K<span class="snowball-step-members">members</span><span class="snowball-step-through">0.125ETH</span><span class="snowball-step-italic">0.0625ETH/item</span></section>
                <section class="snowball-step-content">
                  <div class="snowball-step-table">
                      <i></i>
                      <p>#My story with BTC#</p>
                      <p>Host a large-scale code themed party, inviting Bitcoin developers and holders to share their</p>
                      <p>stories/histories with Bitcoin.</p>
                  </div>
                  <div class="snowball-step-table">
                    <i></i>
                    <p>More whitelist spots open.</p>
                  </div>
                </section>
              </section>
              <section class="snowball-step light-brown">
                <section class="snowball-step-title">32K<span class="snowball-step-members">members</span><span class="snowball-step-through">0.0625ETH</span><span class="snowball-step-italic">0.0312ETH/item</span></section>
                <section class="snowball-step-content">
                  <div class="snowball-step-table">
                      <i></i>
                      <p>#Magical Social Network#</p>
                      <p>Invite your friends to join this experiment.</p>
                      <p>Let NFT not only be exclusive to the rich, you can also get them for free and enjoy the fun.</p>
                  </div>
                  <div class="snowball-step-table">
                    <i></i>
                    <p>More whitelist spots open.</p>
                  </div>
                </section>
              </section>
              <section class="snowball-step light-green">
                <section class="snowball-step-title">64K<span class="snowball-step-members">members</span><span class="snowball-step-through">0.0312ETH</span><span class="snowball-step-italic">0.0156ETH/item</span></section>
                <section class="snowball-step-content">
                  <div class="snowball-step-table">
                      <i></i>
                      <p>Outreach to BTC whale holders to further increase our exposure.</p>
                      <p>Our community then will be strong and large enough to have a solid online presence, and we will</p>
                      <p>gain more attention by interacting and inviting them to our community. Hopefully, the idea of ​​code</p>
                      <p>freedom as well as NFT freedom will become more dominant because of our efforts!</p>
                  </div>
                  <div class="snowball-step-table">
                    <i></i>
                    <p>More whitelist spots open.</p>
                  </div>
                </section>
              </section>
              <section class="snowball-step dark-red" style="margin-bottom:64px;">
                <section class="snowball-step-title">128K<span class="snowball-step-members">members</span><span class="snowball-step-free">FREE MINT！</span></section>
                <section class="snowball-step-content">
                  <div class="snowball-step-table">
                      <i></i>
                      <p>#Elon! Join us!#</p>
                      <p>Our effort to reach out to arguably the most influential figure in the crypto. </p>
                      <p>A community of more than 128k people will call for Elon Musk’s attention.</p>
                  </div>
                  <div class="snowball-step-table"><i></i><span>Opening the FREE MINT!</span></div>
                  <div class="snowball-step-table">
                    <i></i>
                    <p>More whitelist spots open.</p>
                  </div>
                </section>
              </section>
              <section class="snowball-next">
                  <section class="snowball-next-title">Later planning</section>
                  <section class="snowball-next-subtitle">Propose further plans based on the DAO governance, including but not limited to:</section>
                  <section class="snowball-next-content"><img src="~@/assets/images/svg/star.svg" alt="DCrush Labs" width="16">Move forward with the donations to global code developers and other related organizations.</section>
                  <section class="snowball-next-content"><img src="~@/assets/images/svg/star.svg" alt="DCrush Labs" width="16">Issue code avatars that are AI-generated. </section>
                  <section class="snowball-next-content"><img src="~@/assets/images/svg/star.svg" alt="DCrush Labs" width="16">Send out invitations to developers to join in Code Metaverse. </section>
                  <section class="snowball-next-content"><img src="~@/assets/images/svg/star.svg" alt="DCrush Labs" width="16">And more information on SocialFi products will be available.</section>
              </section>
            </section>
        </section>
        <!-- FAQ -->
        <section class="wrapper">
            <section class="faq-part" id="faq">
                <section class="faq-title">FAQs</section>
                <section class="faq-table" v-for="(item,index) in faqs" :key="index">
                  <img src="~@/assets/images/svg/faq.svg" alt="DCrush Labs" :class="item.spread?'faq-arrow faq-rotate':'faq-arrow'" @click="showDetail(item)">
                  <p >{{item.title}}</p>
                  <div class="faq-contents" v-show="item.spread">
                      <div v-html="el" class="faq-content"  v-for="el in item.content" :key="el"></div>
                  </div>
                </section>
                <section class="faq-title faq-address">Smart Contract</section>
                <section class="faq-address-container">
                  <section class="faq-address-content">
                    <section class="faq-address-title">
                      <p>Address</p>
                      <p>ERC721</p>
                    </section>
                    <!--production  -->
                    <section class="faq-address-detail">{{contract}}</section>
                    <!-- <img src="~@/assets/images/addressMask.png" alt="DCrush Labs" width="327"> -->
                  </section>
                </section>
                <section class="faq-links">
                  <ul class="clearfix">
                    <li class="nft-left" @click="toDiscord"><img src="~@/assets/images/svg/discord-s.svg" alt="DCrush Labs"></li>
                    <li class="nft-left" @click="toTwitter"><img src="~@/assets/images/svg/twitter-s.svg" alt="DCrush Labs"></li>
                    <li class="nft-right" @click="toOpenSea" style="margin:0px"><img src="~@/assets/images/svg/opensea-s.svg" alt="DCrush Labs"></li>
                  </ul>
                </section>
            </section>
        </section>        
        <!-- About -->        
        <section class="about-part">
          <section class="wrapper">
              <section class="about-content">
                <section class="logo">
                    <img src="~@/assets/images/svg/logo.svg" alt="DCrush Labs">
                    <img src="~@/assets/images/svg/fontIcon.svg" alt="DCrush Labs" style="margin-left:24px;">
                </section>
                <section class="about-intro">
                  <p>The full name of DCrush is “Dimension Crush”. We are a long-term development team that pays attention to new technologies</p>
                  <p>and is committed to making new ideas a reality. </p>
                  <p>Our team members have rich experience in contract development, social networking service and finance.</p>
                </section>
              </section>
              <section class="about-copyright">
                Copyright © 2021 DCrush Labs. All rights reserved.
              </section>
          </section>
        </section>
    </section>    
    <!-- connect -->
    <section class="mask" v-show="showConnect">
      <section class="connect-container" >
          <section class="connect-title">
            Connect Your Wallet
            <section class="connect-close" @click="cancelConnect"></section>
          </section>
          <div class="connect-wallet-container">
              <div class="connect-wallet-content">
                  <section class="connect-wallet" @click="connectWallect">
                    <img src="~@/assets/images/svg/matemask.svg" alt="DCrush Labs" width="36" style="margin-left:24px;margin-right:12px;">MetaMask 
                    <section class="connect-loading" v-if="connecting">
                        <img src="~@/assets/images/svg/upload-icon.svg" alt="DCrush Labs" width="30" style="text-align:center"> 
                    </section>           
                </section>
              </div>
          </div>
          
      </section>
    </section>
    <!-- uninstall -->
    <section class="mask" v-show="uninstall">
      <section class="uninstall-mask" >
          <section class="uninstall-close" @click="uninstall=false"></section>
          <section class="uninstall-content">
              Please install metamask and refresh page to containue.
          </section>
          <a class="uninstall-btn" href="https://metamask.io/download.html">Download</a>
      </section>
    </section> 
    <!-- img click -->
    <section class="mask" v-show="isEnlarge">
      <section class="img-enlarge" id="enlargeImg" >
          <img :src="imgSrc" alt="DCrush Labs" class="enlargeImg">
      </section>
    </section>   
    <!-- toast -->
    <section class="mask" v-show="isCopy">
      <section class="copy-container"  >
          {{copyText}}
      </section>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';
import Axios from "axios"
const { ethereum } = window;
export default {
  name: 'App',
  data(){
    return{
      isGoOn:false,
      mintCode:"mint",
      netTipTop:true,
      comming:true,
      // production
      // netTip:`Bitcoin Code NFT is only available on Ethereum  "Rinkeby" test network.`,
      netTip:`Bitcoin Code NFT is only available on Ethereum "mainnet" network.`,
      nowTip:"",
      copyText:"",
      showNetTip:false,
      isCopy:false,
      isAccount:false,
      balance:"",
      imgSrc:"",
      // production
      // contract:"0x8931f14BD4657e73f0D609AA0343e903EaC0cCBB",
      contract:"0x7b0881E15B62746da28026C348B3FC0001f89746",
      wallet:"",
      showConnect:false,
      isEnlarge:false,
      canmint:true,
      isMinting:false,
      connecting:false,
      uninstall:false,
      timer:null,
      imgGrid:[],
      activeId:"nft",
      mintValue:1,
      selecting:false,
      mintOptions:[1],
      // roadmaps:[
      //   {
      //     per:"25%",
      //     content:"Donation."
      //   },
      //   {
      //     per:"50%",
      //     content:'Donation.'
      //   },
      //   {
      //     per:"75%",
      //     content:'Donation and Creation of a new collection: pixel-art avatar generated by Bitcoin Code.<br>25% of new collection will be randomly airdropped to Bitcoin Code NFT buyers.'
      //   },
      //   {
      //     per:"100%",
      //     content:"Donation and a DAO composed of Bitcoin code NFT holders will continue to conduct community experiments and vote on whether to issue code tokens ( CODE )."
      //   }
      // ],
      dayFrom:"29",
      timeFrom:"23:21:24",
      faqs:[
        {
          spread:false,
          title:'What are the contents of the Bitcoin Code NFTs?',
          content:["They consist of the codes of Bitcoin's latest version (v22.X). ",
          "There are 685,786 lines of codes in the Bitcoin codebase. ",
          "After removing comments, documentation and unit test codes, 180,000 lines of pure C++ code ",
          "(including blank lines) finally remain, and each NFT was formed by 28 lines of codes."
          ]
        },
        {
          spread:false,
          title:'What are the attributes of the Bitcoin Code NFTs?',
          content:["They contains three attributes: ₿ Color, Contributor's Signature, and Background Color.",
          "The colors of ₿ are generated by a program automatically, each one is unique.","The backgrounds contain 12 different scarcity colors.","Only 365 NFTs have Contributor's Signatures, including 7 signatures of ",
          "Satoshi Nakamoto and 358 signatures of core Bitcoin contributors cited by Bitcoin.org."
          ]
        },
        {
          spread:false,
          title:'How do I obtain Bitcoin Code NFT?',
          content:["Participate in the NSO and you will get a chance at getting a Bitcoin Code NFT for free. ","Whitelisted members will get minting priority.","For detailed information, follow our community updates."]
        },
        {
          spread:false,
          title:'What is a NFT Snowball Offering (NSO)?',
          content:["A NFT Snowball offering (NSO) is a revolutionary NFT issue experiment driven completely by community.","After the issuance cycle begins, the minting price will decreases as the community member grows. And eventually reaches Free Mint when the community is at a large enough size."]
        },
        {
          spread:false,
          title:'How is this project unique from others?',
          content:["This collection is generated by the Bitcoin code, and each row is unique.","It is an experimental project originating from the community and giving back to the community, everyone can participate and enjoy the Free Mint! ","This experiment aims to remind people of the freedom that code gives us."]
        },
        {
          spread:false,
          title:'Does Bitcoin Code NFT involve copyright infringement?',
          content: ["It does not. Bitcoin is an open-source project under the MIT license. ","The MIT license allows anyone who obtains a copy of the software to deal in the software without restriction, and free of charge.","Thereupon we have added a copyright notice and permission notice to the last two of this collection."]
        }
        
      ]
    }
  },
  methods:{
    initCountDown(){
      var EndTime = new Date("2022/01/08 11:00:00");
      var NowTime = new Date();
      var t = EndTime.getTime() - NowTime.getTime();
      var d = Math.floor(t / 1000 / 60 / 60 / 24);
      var h = Math.floor(t / 1000 / 60 / 60 % 24)>=10?Math.floor(t / 1000 / 60 / 60 % 24):"0"+Math.floor(t / 1000 / 60 / 60 % 24);
      var m = Math.floor(t / 1000 / 60 % 60)>=10?Math.floor(t / 1000 / 60 % 60):"0"+Math.floor(t / 1000 / 60 % 60);
      var s = Math.floor(t / 1000 % 60)>=10?Math.floor(t / 1000 % 60):"0"+Math.floor(t / 1000 % 60);
      this.dayFrom = d;
      this.timeFrom = h+":"+m+":"+s;
    },
    isCanMint(){
      let me = this;
      this.$http.get("/api/user/can_mint").then(res=>{
        if(res.data.code=="200"){
          // if(me.isGoOn){// clicked mint
          //   me.minting();
          // }
          me.mintCode = "mint";
        }else if(res.data.code=="Coming Soon"){
          me.mintCode = "comingsoon";
        }else if(res.data.code=="Sold out"){
          me.mintCode = "soldout";
        }
        me.initMaxMint();
      })
    },
    hideNetTip(){
      this.nowTip = this.netTip;
      this.showNetTip = false;
    },
    copy(){
      let me = this;
      this.$copyText(this.wallet).then( e=> {
        me.copyText = "Copied!"
        me.isCopy = true;
        me.copyTextClose()
        console.log(e)
      }, e=> {
        me.copyText = "Copy Faild!"
        me.isCopy = true;
        me.copyTextClose()
        console.log(e)
      })
    },
    copyTextClose(){
      setTimeout(()=>{
        this.isCopy = false;
      },3000)
    },
    enlargeImg(data){
      this.imgSrc = data.url;      
      let shadow = "0px 0px 30px 0 "+data.color;
      // console.log(data);
      $("#enlargeImg").css({
          "box-shadow":shadow
      })
      this.isEnlarge = true;
    },
    disconnect(){
      this.wallet = "";
      this.balance = ""
      this.isAccount = false;
    },    
    mint(){ //FIXME called, after get address or address changed
      let me = this;
      if(me.wallet){// have connect
        // console.log(me.wallet);
        me.minting();
      }else{
        me.showConnect = true;
      }
    },
    initMaxMint() {
      let me = this;
      me.RushContract.methods.maxMint().call({from: me.wallet})
        .then(function(maxMintNum){
          console.log(maxMintNum);
          if( maxMintNum <=1 ) maxMintNum = 1;
          if( maxMintNum > 10 ) maxMintNum = 10;
          // FIXME 
          // show mint dialog accrossing maxMintNum
          let mintOptions = [];
          for(let i = 1;i<=maxMintNum;i++){
            mintOptions.push(i)
          }
          me.mintOptions = mintOptions;
        })
        .catch(function(error){
            console.log(error);
            var errMsg = error.message;
            console.log(errMsg);
            me.nowTip = errMsg || "mint failed";
            me.showNetTip = true;
        });
    },
    minting(){  //FIXME called when mint button clicked
      let me = this;
      if(me.isMinting)return;
      me.isMinting = true;
      me.RushContract.methods.dryRun(me.mintValue).call({from: me.wallet})
        .then(function(res){
            // console.log(res);
            if( res.code == 1 ) {
              me.isMinting = false;
              me.nowTip = res.msg;
              me.showNetTip = true;
              return;
            }
            if( res.code == 2 ) {
              me.isMinting = false;
              me.nowTip = res.msg;
              me.showNetTip = true;
              return;
            }
            if( res.code == 3 ) {
              me.isMinting = false;
              me.nowTip = res.msg;
              me.showNetTip = true;
              return;
            }
            if( res.code == 4 ) {
              me.isMinting = false;
              me.nowTip = res.msg;
              me.showNetTip = true;
              return;
            }

            let value = res.value;
            let gas = 300000 * me.mintValue;
            var _hash = "";
            me.RushContract.methods.safeMint(me.mintValue).send({from: me.wallet, value, gas})
            .on('transactionHash', function(hash){
              _hash = hash;
            })
            .on('receipt', function(receipt){
              console.log("receipt "+receipt);
              me.isMinting = false;
              me.initMaxMint();
            })
            .on('confirmation', function(confirmationNumber, receipt){ 
              console.log("confirmationNumber, receipt" + confirmationNumber + receipt);
            })
            .on('error', function(errObj) {
              // console.log(errObj);
              me.Web3.eth.getTransaction(_hash).then(function(tx){
                console.log(tx);
                me.Web3.eth.call(tx, tx.blockNumber).then(function(result){
                  me.isMinting = false;
                  result = result.startsWith('0x') ? result : `0x${result}`
                  if (result && result.substr(138)) {
                    const reason = self.Web3.utils.toAscii(result.substr(138))
                    // FIXME  ${reason}
                    me.nowTip = reason||"mint failed";
                    me.showNetTip = true;
                  } else {
                    console.log('Cannot get reason - No return value')
                    me.nowTip = "mint failed";
                    me.showNetTip = true;
                  }
                }).catch(function(err){
                  me.isMinting = false;
                  var errMsg = "";
                  if ( err.message == 'out of gas' ) {
                    errMsg = err.message;
                  } else {
                    const jsonStr = err.message.substr(err.message.indexOf('{'));
                    const json = JSON.parse(jsonStr);
                    errMsg = json.originalError.message;
                  }
                  me.nowTip = errMsg||"mint failed";
                  me.showNetTip = true;
                })
              }).catch(function(err){
                me.isMinting = false;
                // console.log(err);
                me.nowTip = "mint failed";
                me.showNetTip = true;
              })
            });
            // .then(function(res){
            //   console.log(res);
            //   me.isMinting = false;
            // })
            // .catch(function(error){
            //   console.log(error);
            //   var errMsg = error.message;
            //   console.log(errMsg);
            //   me.isMinting = false;
            //   me.nowTip = errMsg || "mint failed";
            //   me.showNetTip = true;
            // });
        })
        .catch(function(error){
            console.log(error);
            var errMsg = error.message;
            console.log(errMsg);
            me.isMinting = false;
            me.nowTip = errMsg || "mint failed";
            me.showNetTip = true;
        });
    },
    cancelConnect(){
      this.showConnect = false;
      this.connecting = false;
    },
    connectWallect(){
      this.connecting = true;
      this.MetaMaskClientCheck()
    },
    isMetaMaskInstalled(){
      //haveInstall dapp
      
      return Boolean(ethereum && ethereum.isMetaMask);
    },
    MetaMaskClientCheck(){
      // uninstall dapp  tips to download
      if(!this.isMetaMaskInstalled()){
        this.uninstall = true;
        this.connecting = false;
      }else{
        this.onClickConnect()
      }
    },
    async onClickConnect(){
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      if(accounts[0]){
        this.wallet = accounts[0];
        Axios.defaults.headers.common['address'] = accounts[0];
        this.isGoOn = true;
        this.isCanMint()
        this.cancelConnect()
      }
      // console.log( accounts[0] || 'Not able to get accounts');
    },
    async showWallet(){
      if(!this.comming){
        this.copyText = "Coming soon!"
        this.isCopy = true;
        this.copyTextClose()
        return;
      }
      if(this.wallet){
        // query balance
        let weiBalance = await this.Web3.eth.getBalance(this.wallet)
        // console.log(weiBalance);
        let balance = this.Web3.utils.fromWei(weiBalance,"ether");
        // console.log(Number(balance).toFixed(3));
        this.balance = Number(balance).toFixed(3);     
        this.isAccount = true;
      }else{
        this.showConnect = true;
      }
      
      
    },
    toSelect(){
      this.selecting = !this.selecting;
    },
    choose(data){
      this.mintValue = data;
      this.removeSelect()
    },
    removeSelect(){
      this.selecting = false;
    },
    getLocalTime(i) { //newyork - -5
      if (typeof i !== 'number') return;
      var d = new Date();
      var len = d.getTime();
      var offset = d.getTimezoneOffset() * 60000;
      var utcTime = len + offset;
      return new Date(utcTime + 3600000 * i);
    },
    fastLink(id){
      // console.log(id,$("#"+id)[0].offsetTop);
      $('html, body').animate({ scrollTop: $("#"+id)[0].offsetTop+2}, 500, "linear")
    },
    showDetail(data){
      data.spread = !data.spread;
    },
    toEthExplorer(){
      window.open("https://etherscan.io/address/"+this.wallet)
    },
    toTwitter(){
      window.open("https://twitter.com/BTCcodeNFT")
    },
    toDiscord(){
      window.open("https://discord.gg/WnbsRmbH")
    },
    toOpenSea(){
      window.open("https://opensea.io/collection/bitcoin-code-nft")
    },
    toOSAccount(){
      window.open("https://opensea.io/account")
    },
    initImgGrid(){
      this.$http.get("/api/user/v2/images").then(res=>{
        // console.log(res);
        this.imgGrid = res.data.data;
      })
      
    },
  },
  mounted(){
    this.nowTip = this.netTip;
    let me = this;
    me.initCountDown()
    setInterval(()=>{
      me.initCountDown()
    },1000)
    $(window).scroll(function() {
      var juantop= $(document).scrollTop();
      // console.log(juantop);
      if(juantop>=150){
        me.netTipTop = false;
        $("#header").show()
        $("#links").addClass("hidden")
      }else{
        me.netTipTop = true;
        $("#header").hide()
        $("#links").removeClass("hidden")
      }
      if(juantop<$("#mint")[0].offsetTop){
        me.activeId = "nft";
      }else if(juantop>=$("#mint")[0].offsetTop&&juantop<$("#snowball")[0].offsetTop){
        me.activeId = "mint";
      }else if(juantop>=$("#snowball")[0].offsetTop&&juantop<$("#faq")[0].offsetTop){
        me.activeId = "snowball";
      }else if(juantop>=$("#faq")[0].offsetTop){
        me.activeId = "faq";
      }
    })
    this.initImgGrid() 
    $(".mask").click(function(e){
      let e_class = e.target.className;
      if (e_class !== 'enlargeImg'&&me.isEnlarge){
          me.isEnlarge = false;
      }
    })      
    //close enlarge
    $(document).ready(function () {
      if(!me.comming){
        me.mintCode='comingsoon';
        return
      }
      if(ethereum){
        setTimeout(()=>{
          // console.log(ethereum.chainId);
          // production
          if(ethereum.chainId!="0x1"){
          // if(ethereum.chainId!="0x4"){
            me.showNetTip = true;
          }else{
            me.showNetTip = false;
          }
          if(ethereum.selectedAddress){
            me.wallet = ethereum.selectedAddress;            
            Axios.defaults.headers.common['address'] = ethereum.selectedAddress;
            me.isCanMint()
          }
        },500)
        
        ethereum.on('accountsChanged', accounts => {
          // console.log(accounts)
          me.wallet = accounts[0];
          Axios.defaults.headers.common['address'] = accounts[0];
          me.isCanMint()
          me.isAccount = false;
          me.canmint = true;
        });
        ethereum.on("chainChanged", function (networkIDstring) {
          // ...
          console.log(networkIDstring);
          // production
          if(networkIDstring!=1){
          // if(networkIDstring!=4){
            me.showNetTip = true;
          }else{
            me.showNetTip = false;
          }
        })
        console.log(me.showNetTip);
      }
        
        $(document).click(function(e){
          // console.log(e);
          let e_class = e.target.className;
          if ((e_class.indexOf("wallet-")==-1&&e.target.nodeName!="BUTTON")&&me.isAccount){
            // console.log(1);
              me.isAccount = false;
          }
        })
    });
    
  }
}
</script>


