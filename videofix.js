document.onload = function() {
    var ancestor = document.getElementById('la1-videoContainer'),
    descendents = ancestor.getElementsByTagName('*');

    var i, e, d;
    for (i = 0; i < descendents.length; ++i) {
        e = descendents[i];
        console.log(e.className);
        //e.removeAttribute('style');
    }
};
