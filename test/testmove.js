//walks a square around origo, y is up like in Tundra
posseq = [
    [ 5, 0,  5],
    [ 0, 0,  5],
    [-5, 0,  5],
    [-5, 0,  0],
    [-5, 0, -5],
    [ 0, 0, -5],
    [ 5, 0, -5],
    [ 5, 0,  0]
];

var i = 0; //counter for the stepping

function testmove() {
    var ob = getObject("testobject");
    var nextpos = posseq[i % posseq.length];
    ob.move(nextpos[0],
            nextpos[1],
            nextpos[2]);
    i++;
}