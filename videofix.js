var ancestor = document.getElementById('la1-video-player'),
    descendents = ancestor.getElementsByTagName('*');

var i, e, d;
for (i = 0; i < descendents.length; ++i) {
    e = descendents[i];
    console.log(e.className);
    //e.removeAttribute('style');
}
