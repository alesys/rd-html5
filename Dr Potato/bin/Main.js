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
(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var splash, menu, game, instance;
		var brand_img;
		
		instance = this;
		
		init();
		
		function init()
		{
			splash = new lib.Splash();
			splash.on('done', function ()
			{
				showMenu();
				instance.removeChild(splash);
			});
			instance.addChild(splash);
		}
		function showMenu()
		{
			menu = menu || new lib.Menu();
			menu.listener_play = menu.listener_play || menu.on('play', function ()
			{
				instance.removeChild(menu);
				showBrand(false);
				showGame();
			});
			menu.listener_moregames = menu.listener_moregames || menu.on('moregames', showMoregames);
			instance.addChild(menu);
			showBrand(true);
			showAd();
		}
		function showAd()
		{
			if ( fgl && fgl.showAd ) 
				fgl.showAd();
		}
		function showMoregames()
		{
			if ( fgl && fgl.showMoreGames ) 
				fgl.showMoreGames();
		}
		function showBrand(state)
		{
			if(fgl.brandingEnabled && state)
			{
				brand_img = brand_img || document.createElement('img'); 
				brand_img.src = brand_img.src || fgl.getBrandingLogo(); 
				brand_img.onclick = fgl.handleBrandingClick;
				logocontainer.appendChild(brand_img);
				logocontainer.style.display = 'block';
			}
			else
			{
				logocontainer.style.display = 'none';
			}
		}
		
		function showGame()
		{
			game = new lib.Game();
			game.on('done', function () 
			{
				instance.removeChild(game);
				game = null;
				showMenu();
			});
			instance.addChild(game);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(320,400,1920,800);
p.frameBounds = [rect];


// symbols:
(lib.wadafologo2 = function() {
	this.initialize(img.wadafologo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,68);


(lib.Splash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
		this.dispatchEvent( new createjs.Event('done'));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.wadafologo2();
	this.instance.setTransform(171,266);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2pWqMAAAgtTMAtTAAAMAAAAtTg");
	this.shape.setTransform(320,400,2.206,2.758);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,640,800);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Game = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("AolPUIAA+nIRKAAIAAeng");
	this.shape.setTransform(320,400,5.818,4.081);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,640,800);
p.frameBounds = [rect];


(lib.btn_play = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("PLAY", "32px 'Press Start 2P'", "#FFFFFF");
	this.text.lineHeight = 34;
	this.text.lineWidth = 128;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,132.2,36);
p.frameBounds = [rect];


(lib.btn_moregames = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("MORE\nGAMES", "32px 'Press Start 2P'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 228;
	this.text.setTransform(114.1,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,232.1,76);
p.frameBounds = [rect];


(lib.Menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var instance = this;
		
		this.btn_play.on('click', function ()
		{
			instance.dispatchEvent( new createjs.Event('play') );
		});
		
		
		if ( fgl.crossPromotionEnabled )
			this.btn_moregames.on('click', function ()
			{
				instance.dispatchEvent( new createjs.Event('moregames'));
			});
		else
			this.btn_moregames.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_moregames
	this.btn_moregames = new lib.btn_moregames();
	this.btn_moregames.setTransform(204,486);
	new cjs.ButtonHelper(this.btn_moregames, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_moregames).wait(1));

	// btn_play
	this.btn_play = new lib.btn_play();
	this.btn_play.setTransform(254,406);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_play).wait(1));

	// {TITULO}
	this.text = new cjs.Text("{TITULO}", "48px 'Press Start 2P'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 50;
	this.text.lineWidth = 390;
	this.text.setTransform(318,150.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("A3HXIMAAAguPMAuPAAAMAAAAuPg");
	this.shape.setTransform(320,400,2.162,2.702);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,640,800);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;