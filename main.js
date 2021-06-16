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