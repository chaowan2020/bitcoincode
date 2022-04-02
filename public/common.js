(function (doc, win) {
    var remFull = 7.5 // 7.5rem
    var docEl = doc.documentElement
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return;
        if(clientWidth>750){
            clientWidth = 750;
        }
      var fontSize = clientWidth / (remFull * 100) * 100
      docEl.style.fontSize = fontSize + 'px'
  
      var eDivWidth = 0
      var eDiv = document.createElement('div')
  
      eDiv.style.width = remFull + 'rem'
      eDiv.style.height = '1px'
      eDiv.style.position = 'fixed'
      eDiv.style.boxSizing = 'border-box'
      document.body.appendChild(eDiv)
      eDivWidth = eDiv.clientWidth
  
      if (clientWidth !== eDivWidth) {
        var timer = setInterval((function () {
          clientWidth = docEl.clientWidth
          eDivWidth = eDiv.clientWidth
  
          if (clientWidth !== eDivWidth) {
            docEl.style.fontSize = fontSize * (clientWidth / eDivWidth) + 'px'
          } else {
            clearInterval(timer)
            document.body.removeChild(eDiv)
          }
          return arguments.callee
        })(), 100)
      } else {
        document.body.removeChild(eDiv)
      }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })(document, window);

  function toTwitter(){
    window.location.href = "https://twitter.com/BTCcodeNFT"
  }
  function toDiscord(){
    window.location.href = "https://discord.gg/WnbsRmbH"
  }
  function toOpenSea(){
    window.location.href = "https://opensea.io/collection/bitcoin-code-nft"
  }
  window.onload = function(){
    initCountDown()
    setInterval(()=>{
      initCountDown()
    },1000)
    function initCountDown(){
      var EndTime = new Date("2022/01/08 11:00:00");
      var NowTime = new Date();
      var t = EndTime.getTime() - NowTime.getTime();
      var d = Math.floor(t / 1000 / 60 / 60 / 24);
      var h = Math.floor(t / 1000 / 60 / 60 % 24)>=10?Math.floor(t / 1000 / 60 / 60 % 24):"0"+Math.floor(t / 1000 / 60 / 60 % 24);
      var m = Math.floor(t / 1000 / 60 % 60)>=10?Math.floor(t / 1000 / 60 % 60):"0"+Math.floor(t / 1000 / 60 % 60);
      var s = Math.floor(t / 1000 % 60)>=10?Math.floor(t / 1000 % 60):"0"+Math.floor(t / 1000 % 60);
      document.getElementById("dayFrom").innerHTML = d;
      document.getElementById("timeFrom").innerHTML  = h+":"+m+":"+s;
    }
  }