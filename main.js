window.addEventListener('load', function() {
    if (typeof ethereum !== 'undefined') {
        // write some code
    } else {
        alert('Please install MetaMask.');
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

function connectWallet() {
    ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((value1) => {
        // Connected to Metamask successfully
        ethereum
        .request({ method: 'eth_getBalance', params: value1})
        .then((value2) => {
            document.getElementById("ethAddress").textContent = "Your Address: " + value1;
            document.getElementById("ethBalance").textContent = "Your Balance: " + value2;
        })
    })
    .catch((error) => {
        if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
        } else {
        console.error(error);
        }
    });
}