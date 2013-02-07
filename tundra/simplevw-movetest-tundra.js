engine.IncludeFile("simplevw-tundra.js");
engine.IncludeFile("testmove.js");

function update() {
    frame.DelayedExecute(0.5).Triggered.connect(update);
    testmove();
}

frame.DelayedExecute(0.5).Triggered.connect(update);
