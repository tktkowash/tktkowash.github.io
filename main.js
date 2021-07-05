// var web3 = new Web3(new Web3.providers.WebsocketProvider("http://192.168.10.24:7545"));
// const web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.10.24:7545"));

window.addEventListener('load', function() {
    alert("event listner start");
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
        alert("succeeded");
    } else {
        alert("MetaMaskをインストールしてください");
    }
    alert("event listner end");
});

//console.log(web3js.eth.accounts[0]);

/*
web3.eth.getAccounts(function(err, accounts) {
    coinbase = web3.eth.accounts[0];
    console.log("coinbase is " + coinbase);
    if (typeof coinbase === 'undefined') {
        alert("MetaMaskを起動してください")
    }
});
*/

function gacha(){
    NFT = Math.random();

    if (document.getElementById){
        document.getElementById("gacha-imgfile").src = "img/img-gacha-animation.gif";
    }

    if (document.getElementById){
        document.getElementById("NFTId").textContent = "";

        var changeImage = function(){
            document.getElementById("NFTId").textContent = NFT;
        };
        setTimeout(changeImage, 4000);
    }
}

function showETHInfo() {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.10.24:7545"));
    var ETHInfo = web3.eth.accounts[0];

    document.getElementById("ETHInfo").textContent = ETHInfo;
}