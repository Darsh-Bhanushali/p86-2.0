var canvas = new fabric.Canvas("c");
playerx = 10;
playery = 10;
blockw = 30;
blockh = 30;
var player = "";
var block = "";

function playeru() {

    fabric.Image.fromURL("player.png", function(Img){
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(130);
        player.set({
            top:playery,
            left:playerx
        });
        canvas.add(player);


    });
}

 







