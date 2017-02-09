console.log('Loaded!');
var image = document.getElementById("image");
var marginleft=0;
function moveright(){
    marginleft = marginleft + 10;
    image.style.marginLeft = marginleft + 'px';
}
image.onclick = function(){
    var interval = setInterval(moveright, 50);
};