// var web3 = new Web3(new Web3.providers.WebsocketProvider("http://192.168.10.24:7545"));
// const web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.10.24:7545"));

window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
    } else {
        alert("Please install MetaMask.");
    }
});

web3js.eth.getAccounts.then(function(err, accounts) {
    myAccount = web3js.eth.accounts[0];
    console.log("Account info:" + myAccount);
    if (typeof myAccount === 'undefined') {
        alert("Please activate MetaMask.")
    }
});

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

    var ETHInfo = web3.eth.accounts[0];

    document.getElementById("ETHInfo").textContent = ETHInfo;
}