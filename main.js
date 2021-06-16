function gacha(){
    NFT = Math.random();

    if (document.getElementById){
        document.getElementById("NFTId").textContent = NFT;
    }
}