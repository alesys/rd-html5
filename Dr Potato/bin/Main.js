(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 640,
	height: 800,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/wadafologo2.png", id:"wadafologo2"}
	]
};

// stage content:
(lib.Main = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Splash();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(320,400,640,800);
p.frameBounds = [rect];


// symbols:
(lib.wadafologo2 = function() {
	this.initialize(img.wadafologo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,68);


(lib.Splash = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wadafologo2();
	this.instance.setTransform(171,266);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2pWqMAAAgtTMAtTAAAMAAAAtTg");
	this.shape.setTransform(320,400,2.206,2.758);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,640,800);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;