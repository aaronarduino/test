var ancestor = document.getElementById('id'),
    descendents = ancestor.getElementsByTagName('*');

var i, e, d;
for (i = 0; i < descendents.length; ++i) {
    e = descendents[i];
    console.log(e.className);
    //e.removeAttribute('style');
}
