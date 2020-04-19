console.log("Hello!");
document.onLoad = function() {
    var contentDiv = document.getElementById('content');
    var sty = document.createElement("style");
    sty.innerHTML = ".hcc-livestream-player { padding-bottom: none; } .hcc-livestream-player div { padding-bottom: none; } .hcc-livestream-player div div { padding-bottom: none; }";
    contentDiv.appendChild(sty);
};
var ancestor = document.getElementById('la1-videoContainer');
while (typeof ancestor === 'undefined'){
    ancestor = document.getElementById('la1-videoContainer');
}
var descendents = ancestor.getElementsByTagName('*');

var i, e, d;
for (i = 0; i < descendents.length; ++i) {
    e = descendents[i];
    console.log(e.className);
    //e.removeAttribute('style');
}
