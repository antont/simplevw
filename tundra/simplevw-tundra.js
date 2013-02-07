//implementation of the simplevw api on realXtend Tundra SDK

var SimpleObject = function SimpleObject(ent) {
    this.ent = ent;
}
SimpleObject.prototype = {
    move: function move(x, y, z) {
        var plc = this.ent.placeable;
        plc.SetPosition(x, y, z);
    }
}

function getObject(obname) {
    var ent = scene.GetEntityByName(obname);
    return new SimpleObject(ent);
}