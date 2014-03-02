(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 832,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/Bitmap32.png", id:"Bitmap32"},
		{src:"images/Bitmap46.png", id:"Bitmap46"},
		{src:"images/e_abo.png", id:"e_abo"},
		{src:"images/e_blob.png", id:"e_blob"},
		{src:"images/e_eye.png", id:"e_eye"},
		{src:"images/e_helmet.png", id:"e_helmet"},
		{src:"images/e_master.png", id:"e_master"},
		{src:"images/e_minion.png", id:"e_minion"},
		{src:"images/i_bulb.png", id:"i_bulb"},
		{src:"images/i_coin.png", id:"i_coin"},
		{src:"images/i_energy.png", id:"i_energy"},
		{src:"images/i_gem.png", id:"i_gem"},
		{src:"images/i_gravitator.png", id:"i_gravitator"},
		{src:"images/i_hearth.png", id:"i_hearth"},
		{src:"images/i_hidden.png", id:"i_hidden"},
		{src:"images/i_medic.png", id:"i_medic"},
		{src:"images/i_treasure.png", id:"i_treasure"},
		{src:"images/srcuadrito.png", id:"srcuadrito"},
		{src:"images/sr_cuadrito_ded.png", id:"sr_cuadrito_ded"},
		{src:"images/sr_cuadrito_hurt.png", id:"sr_cuadrito_hurt"},
		{src:"images/t_end.png", id:"t_end"},
		{src:"images/t_floor.png", id:"t_floor"},
		{src:"images/t_floor_blood.png", id:"t_floor_blood"},
		{src:"images/t_floor_normal.png", id:"t_floor_normal"},
		{src:"images/t_start.png", id:"t_start"},
		{src:"images/t_wall.png", id:"t_wall"},
		{src:"images/t_wall_green.png", id:"t_wall_green"},
		{src:"images/t_wall_pink.png", id:"t_wall_pink"},
		{src:"images/t_wall_yellow.png", id:"t_wall_yellow"},
		{src:"images/trap.png", id:"trap"},
		{src:"images/w_deathray.png", id:"w_deathray"},
		{src:"images/w_laser.png", id:"w_laser"},
		{src:"images/w_machete.png", id:"w_machete"},
		{src:"sounds/end.mp3", id:"end"},
		{src:"sounds/intro.mp3", id:"intro"},
		{src:"sounds/loop.mp3", id:"loop"},
		{src:"sounds/SCoinwav.mp3", id:"SCoinwav"},
		{src:"sounds/SDeathwav.mp3", id:"SDeathwav"},
		{src:"sounds/SDeathRaywav.mp3", id:"SDeathRaywav"},
		{src:"sounds/SFightwav.mp3", id:"SFightwav"},
		{src:"sounds/SFight2wav.mp3", id:"SFight2wav"},
		{src:"sounds/SHeartwav.mp3", id:"SHeartwav"},
		{src:"sounds/SItemwav.mp3", id:"SItemwav"},
		{src:"sounds/SLazerwav.mp3", id:"SLazerwav"},
		{src:"sounds/SLevelUPwav.mp3", id:"SLevelUPwav"},
		{src:"sounds/SStepwav.mp3", id:"SStepwav"},
		{src:"sounds/SVoidwav.mp3", id:"SVoidwav"}
	]
};

// stage content:
(lib.SrCuadrito_3 = function() {
	this.initialize();

	// Wrapper
	this.wrapper = new lib.Wrapper();

	this.addChild(this.wrapper);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(320,416,640.1,896);


// symbols:
(lib.Bitmap32 = function() {
	this.initialize(img.Bitmap32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,832);


(lib.Bitmap46 = function() {
	this.initialize(img.Bitmap46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,148);


(lib.e_abo = function() {
	this.initialize(img.e_abo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.e_blob = function() {
	this.initialize(img.e_blob);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.e_eye = function() {
	this.initialize(img.e_eye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.e_helmet = function() {
	this.initialize(img.e_helmet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.e_master = function() {
	this.initialize(img.e_master);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.e_minion = function() {
	this.initialize(img.e_minion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_bulb = function() {
	this.initialize(img.i_bulb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_coin = function() {
	this.initialize(img.i_coin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_energy = function() {
	this.initialize(img.i_energy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_gem = function() {
	this.initialize(img.i_gem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_gravitator = function() {
	this.initialize(img.i_gravitator);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_hearth = function() {
	this.initialize(img.i_hearth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_hidden = function() {
	this.initialize(img.i_hidden);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_medic = function() {
	this.initialize(img.i_medic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.i_treasure = function() {
	this.initialize(img.i_treasure);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.srcuadrito = function() {
	this.initialize(img.srcuadrito);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.sr_cuadrito_ded = function() {
	this.initialize(img.sr_cuadrito_ded);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.sr_cuadrito_hurt = function() {
	this.initialize(img.sr_cuadrito_hurt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_end = function() {
	this.initialize(img.t_end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_floor = function() {
	this.initialize(img.t_floor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_floor_blood = function() {
	this.initialize(img.t_floor_blood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_floor_normal = function() {
	this.initialize(img.t_floor_normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_start = function() {
	this.initialize(img.t_start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_wall = function() {
	this.initialize(img.t_wall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_wall_green = function() {
	this.initialize(img.t_wall_green);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_wall_pink = function() {
	this.initialize(img.t_wall_pink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.t_wall_yellow = function() {
	this.initialize(img.t_wall_yellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.trap = function() {
	this.initialize(img.trap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.w_deathray = function() {
	this.initialize(img.w_deathray);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.w_laser = function() {
	this.initialize(img.w_laser);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.w_machete = function() {
	this.initialize(img.w_machete);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.WeaponView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w_machete();

	this.instance_1 = new lib.w_laser();

	this.instance_2 = new lib.w_deathray();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.TileWall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t_wall();

	this.instance_1 = new lib.t_wall_green();

	this.instance_2 = new lib.t_wall_pink();

	this.instance_3 = new lib.t_wall_yellow();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.TileExit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t_end();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.TileEmpty = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t_floor_normal();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(4,2,0,3).dr(-92,-31,184,62);
	this.shape.setTransform(92,31,1,1.001);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,188,66);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t_start();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.e_helmet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.screen_home = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap32();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,832);


(lib.invarea = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak/E/IAAp+IJ+AAIAAJ+g");
	this.shape.setTransform(32,32);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.ind_level = function() {
	this.initialize();

	// Layer 1
	this.label = new cjs.Text("LEVEL 2", "16px 'Press Start 2P'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 18;
	this.label.lineWidth = 151;
	this.label.setTransform(75.5,0);

	this.addChild(this.label);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155,20);


(lib.ind_hp = function() {
	this.initialize();

	// Layer 1
	this.label = new cjs.Text("+1", "16px 'Press Start 2P'", "#00FF00");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 18;
	this.label.lineWidth = 51;
	this.label.setTransform(25.5,0);

	this.addChild(this.label);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,38);


(lib.ind_gold = function() {
	this.initialize();

	// Layer 1
	this.label = new cjs.Text("+1", "16px 'Press Start 2P'", "#FECC00");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 18;
	this.label.lineWidth = 51;
	this.label.setTransform(25.5,0);

	this.addChild(this.label);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,38);


(lib.ind_exp = function() {
	this.initialize();

	// Layer 1
	this.label = new cjs.Text("+1", "16px 'Press Start 2P'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 18;
	this.label.lineWidth = 52;
	this.label.setTransform(26,0);

	this.addChild(this.label);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,20);


(lib.HelmView = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.e_helmet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9C0202").s().p("AgSE/IAAp+IAlAAIAAJ+g");
	this.shape.setTransform(62,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C0202").s().p("Ak/ATIAAglIJ+AAIAAAlg");
	this.shape_1.setTransform(32,62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA7CLIAAgnIgnAAIAAgpIgnAAIAAApIgnAAIAAAnIhRAAIAAhQIAoAAIAAgnIApAAIAAgnIgpAAIAAgnIgoAAIAAhRIBRAAIAAAoIAnAAIAAApIAnAAIAAgpIAnAAIAAgoIBQAAIAABRIgnAAIAAAnIgpAAIAAAnIApAAIAAAnIAnAAIAABQg");
	this.shape_2.setTransform(32,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0404").s().p("Ak/E/IAAp+IJ+AAIAAJ+g");
	this.shape_3.setTransform(32,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak/k/IJ/AAIAAJ/Ip/AAg");
	this.shape_4.setTransform(32,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{x:32,y:32}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{x:34,y:34}}]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:32,y:32}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.button_play_state = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap46();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,376,148);


(lib.btnfm3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AphCkIAAlHITDAAIAAFHg");
	this.shape.setTransform(61,16.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,122,33);


(lib.btnfm2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGZBFIAAgTIgUAAIAAgUIgTAAIAAAnIgpAAIAAiKIApAAIAAA8IAnAAIAAgTIA9AAIAAATIgUAAIAAASIgUAAIAAAVIAUAAIAAAUIAUAAIAAATgAC+BFIAAgTIgUAAIAAg7IAUAAIAAgTIB3AAIAAATIhkAAIAAA7IBkAAIAAATgAAdBFIAAgTIgTAAIAAgUIATAAIAAgVIBRAAIAAgSIhRAAIAAgTIBkAAIAAATIAUAAIAABOgAAxAyIA9AAIAAgUIg9AAgAhYBFIAAhOIgpAAIAAgTIApAAIAAgpIAnAAIAAApIApAAIAAATIgpAAIAABOgAj5BFIAAhOIgnAAIAAgTIAnAAIAAgpIAoAAIAAApIApAAIAAATIgpAAIAABOgAlwBFIAAgnIg9AAIAAAnIgnAAIAAhhIAUAAIAAgUIATAAIAAgVIA9AAIAAAVIAUAAIAAAUIATAAIAABhgAmtAJIA9AAIAAglIgVAAIAAgUIgUAAIAAAUIgUAAg");
	this.shape.setTransform(61,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,2,0,3).p("AphijITDAAIAAFHIzDAAg");
	this.shape_1.setTransform(61,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AphCkIAAlHITDAAIAAFHgAGFAYIAAAUIAUAAIAAAUIA9AAIAAgUIgUAAIAAgUIgUAAIAAgUIAUAAIAAgSIAUAAIAAgUIg9AAIAAAUIgnAAIAAg8IgpAAIAACKIApAAIAAgogACqAsIAUAAIAAAUIB3AAIAAgUIhkAAIAAg6IBkAAIAAgUIh3AAIAAAUIgUAAgAAKAsIATAAIAAAUIB4AAIAAhOIgUAAIAAgUIhkAAIAAAUIBRAAIAAASIhRAAIAAAUIgTAAgAiBgOIApAAIAABOIAnAAIAAhOIApAAIAAgUIgpAAIAAgoIgnAAIAAAoIgpAAgAkggOIAnAAIAABOIAoAAIAAhOIApAAIAAgUIgpAAIAAgoIgoAAIAAAoIgnAAgAlwAYIAAAoIAnAAIAAhiIgTAAIAAgUIgUAAIAAgUIg9AAIAAAUIgTAAIAAAUIgUAAIAABiIAnAAIAAgogAAxAsIAAgUIA9AAIAAAUgAmtAEIAAgmIAUAAIAAgUIAUAAIAAAUIAVAAIAAAmg");
	this.shape_2.setTransform(61,16.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,126,37);


(lib.btnfm1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGZBFIAAgTIgUAAIAAgUIgTAAIAAAnIgpAAIAAiKIApAAIAAA8IAnAAIAAgTIA9AAIAAATIgUAAIAAASIgUAAIAAAVIAUAAIAAAUIAUAAIAAATgAC+BFIAAgTIgUAAIAAg7IAUAAIAAgTIB3AAIAAATIhkAAIAAA7IBkAAIAAATgAAdBFIAAgTIgTAAIAAgUIATAAIAAgVIBRAAIAAgSIhRAAIAAgTIBkAAIAAATIAUAAIAABOgAAxAyIA9AAIAAgUIg9AAgAhYBFIAAhOIgpAAIAAgTIApAAIAAgpIAnAAIAAApIApAAIAAATIgpAAIAABOgAj5BFIAAhOIgnAAIAAgTIAnAAIAAgpIAoAAIAAApIApAAIAAATIgpAAIAABOgAlwBFIAAgnIg9AAIAAAnIgnAAIAAhhIAUAAIAAgUIATAAIAAgVIA9AAIAAAVIAUAAIAAAUIATAAIAABhgAmtAJIA9AAIAAglIgVAAIAAgUIgUAAIAAAUIgUAAg");
	this.shape.setTransform(61,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,2,0,3).p("AphijITDAAIAAFHIzDAAg");
	this.shape_1.setTransform(61,16.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,126,37);


(lib.trap_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.trap();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.e_abo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.e_master();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.e_eye();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.e_blob();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.e_minion();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_treasure();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_medic();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_hidden();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_hearth();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_gravitator();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_gem();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_energy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_coin();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i_bulb();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.sr_cuadrito_ded();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sr_cuadrito_hurt();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.srcuadrito();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Weapon = function() {
	this.initialize();

	// Layer 1
	this.view = new lib.WeaponView();

	this.addChild(this.view);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.playAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PLAY AGAIN
	this.text = new cjs.Text("PLAY\nAGAIN", "24px 'Press Start 2P'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 193;
	this.text.setTransform(94.5,5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:NaN},0).to({_off:true},1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#FFFFFF").ss(4,2,0,3).dr(-92,-31,184,62);
	this.shape.setTransform(92,31,1,1.001);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(92,30.9,1,1,0,0,0,92,30.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,197,66.1);


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_play_state();
	this.instance.setTransform(188,74,1,1,0,0,0,188,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376,148);


(lib.moreGames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PLAY AGAIN
	this.text = new cjs.Text("MORE\nGAMES", "24px 'Press Start 2P'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 193;
	this.text.setTransform(94.5,5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:NaN},0).to({_off:true},1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#FFFFFF").ss(4,2,0,3).dr(-92,-31,184,62);
	this.shape.setTransform(92,31,1,1.001);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(92,30.9,1,1,0,0,0,92,30.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,197,66.1);


(lib.Menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		var timeline = this;
		this.stop();
		this.play_btn.on('click', function (){ timeline.play(); });
		
		if ( fgl.crossPromotionEnabled )
		{
			this.moreGames.on('click', function () { fgl.showMoreGames(); } );
		}
		else
		{
			this.moreGames.visible = false;
		}
	}
	this.frame_49 = function() {
		this.stop();
		var event = new createjs.Event('done');
		this.dispatchEvent( event );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(20).call(this.frame_49).wait(1));

	// Layer 2
	this.moreGames = new lib.moreGames();
	this.moreGames.setTransform(247.6,545.1);
	this.moreGames._off = true;
	new cjs.ButtonHelper(this.moreGames, 0, 1, 2, false, new lib.moreGames(), 3);

	this.timeline.addTween(cjs.Tween.get(this.moreGames).wait(29).to({_off:false},0).to({_off:true},5).wait(16));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(320,456,0.1,0.1,0,0,0,188,74);
	this.play_btn._off = true;
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(17).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).wait(5).to({scaleX:1.1,scaleY:1.1},3).to({scaleX:0.1,scaleY:0.1},9).to({_off:true},1).wait(3));

	// Layer 1
	this.instance = new lib.screen_home();
	this.instance.setTransform(320,416,1,1,0,0,0,320,416);
	this.instance.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,832);


(lib.ItemsView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bulb:0,coin:1,energy:2,gem:3,grav:4,heart:5,question:6,medic:7,monolit:8,trap:9,helm:10});

	// Layer 1
	this.instance = new lib.Symbol4_1();

	this.instance_1 = new lib.Symbol5();

	this.instance_2 = new lib.Symbol6();

	this.instance_3 = new lib.Symbol7();

	this.instance_4 = new lib.Symbol8();

	this.instance_5 = new lib.Symbol9();

	this.instance_6 = new lib.Symbol10();

	this.instance_7 = new lib.Symbol11();

	this.instance_8 = new lib.Symbol12();

	this.instance_9 = new lib.trap_1();
	this.instance_9.setTransform(32,32,1,1,0,0,0,32,32);

	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(32,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Item = function() {
	this.initialize();

	// Layer 1
	this.view = new lib.ItemsView();

	this.addChild(this.view);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.invarea();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.HeroView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grav
	this.grav = new lib.Symbol8();
	this.grav.setTransform(2,20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.grav).wait(3));

	// helm
	this.helm = new lib.HelmView();
	this.helm.setTransform(32,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.helm).wait(3));

	// sr cuadrito
	this.instance = new lib.Symbol1_1();
	this.instance.setTransform(32,32,1,1,0,0,0,32,32);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(32,32,1,1,0,0,0,32,32);

	this.instance_2 = new lib.Symbol3_1();
	this.instance_2.setTransform(32,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// weapon
	this.weapon = new lib.WeaponView();
	this.weapon.setTransform(27,5,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.weapon).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,64);


(lib.Hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.view.helm.visible = false;
		this.view.weapon.visible = false;
		this.view.stop();
		
		var update_listener;
		
		var hero = this;
		var game = this.parent;
		
		this.stats = createjs.stats || {
			hp		: 2,
			maxhp	: 2,
			at		: 1,
			exp		: 1,
			maxexp	: 5,
			coins	: 0,
			level	: 1,
			weapon	: -1,
			helm	: 0,
			grav	: 0
		}
		// TEST STATS
		this.stats2 = {
			hp		: 20,
			maxhp	: 20,
			at		: 10,
			exp		: 1,
			maxexp	: 5,
			coins	: 0,
			level	: 1,
			weapon	: 2,
			helm	: 1,
			grav	: 1
		}
		// TEST STATS
		this.isDead = false;
		this.parent.minihero.stop();
		this.parent.minihero.helm.visible = false;
		this.parent.minihero.weapon.visible = false;
		
		update_listener = this.on('tick', update);
		
		this.top.on('click', function (){
			if ( hero.isDead ) return;
			var targetC = hero.c;
			var targetR = hero.r-1;
			var tile = getTile(targetR, targetC);
			if ( tile )
			{
				react(tile);
			}
		});
		this.down.on('click', function (){
			if ( hero.isDead ) return;
			var targetC = hero.c;
			var targetR = hero.r+1;
			var tile = getTile(targetR, targetC);
			if ( tile )
			{
				react(tile);
			}
		});
		this.left.on('click', function (){
			if ( hero.isDead ) return;
			var targetC = hero.c-1;
			var targetR = hero.r;
			var tile = getTile(targetR, targetC);
			if ( tile )
			{
				react(tile);
			}
		});
		this.right.on('click', function (){
			if ( hero.isDead ) return;
			var targetC = hero.c+1;
			var targetR = hero.r;
			var tile = getTile(targetR, targetC);
			if ( tile )
			{
				react(tile);
			}
		});
		
		function react(tile)
		{
		
			var type = tile.type;
			//console.log(type);
			switch (type)
			{
				case 'void':
					hero.x = tile.x;
				hero.y = tile.y;
				hero.r = tile.r;
				hero.c = tile.c;
				hero.parent.hideEnemyFrame();
				playSound('SStepwav');
				game.hideStory();
				break;
				case 'coin':
					hero.stats.coins++;
				
				hero.x = tile.x;
				hero.y = tile.y;
				hero.r = tile.r;
				hero.c = tile.c;
				hero.parent.showInd('coins', 1);
				tile.parent.removeChild(tile);
				game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
				hero.parent.hideEnemyFrame();
				game.showStory('Oh! A Coin!', true);
				playSound('SCoinwav');
				break;
				case 'gem':
					hero.stats.coins+=5;
				
				hero.x = tile.x;
				hero.y = tile.y;
				hero.r = tile.r;
				hero.c = tile.c;
				hero.parent.showInd('coins', 5);
				tile.parent.removeChild(tile);
				game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
				hero.parent.hideEnemyFrame();
				playSound('SItemwav');
				game.showStory('Oh! Lots of Coins!', true);
				break;
				case 'energy':
					hero.stats.maxhp+=5;
					hero.stats.at+=3;
				
				hero.x = tile.x;
				hero.y = tile.y;
				hero.r = tile.r;
				hero.c = tile.c;
				hero.parent.showInd('hp', '5hp');
				hero.parent.showInd('coins', '3at');
				tile.parent.removeChild(tile);
				game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
				hero.parent.hideEnemyFrame();
				playSound('SLevelUPwav');
				game.showStory('I\'m Unstopable!!!', true);
				break;
				case 'monolit':
					hero.stats.coins+=25;
				
				hero.x = tile.x;
				hero.y = tile.y;
				hero.r = tile.r;
				hero.c = tile.c;
				hero.parent.showInd('coins', 25);
				tile.parent.removeChild(tile);
				game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
				hero.parent.hideEnemyFrame();
				playSound('SLevelUPwav');
				game.showStory('I\'m rich!!!', true);
				break;
				case 'heart':
					if ( hero.stats.hp < hero.stats.maxhp ) hero.stats.hp++;
				hero.x = tile.x;
				hero.y = tile.y;
				hero.r = tile.r;
				hero.c = tile.c;
				hero.parent.showInd('hp', 1);
				tile.parent.removeChild(tile);
				game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
				hero.parent.hideEnemyFrame();
				game.showStory('Oh! I feel better!', true);
				playSound('SHeartwav');
				break;
				case 'medic':
					hero.stats.hp+=5;
				if ( hero.stats.hp > hero.stats.maxhp ) hero.stats.hp  = hero.stats.maxhp;
				hero.x = tile.x;
				hero.y = tile.y;
				hero.r = tile.r;
				hero.c = tile.c;
				hero.parent.showInd('hp', 5);
				tile.parent.removeChild(tile);
				game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
				hero.parent.hideEnemyFrame();
				game.showStory('I\'m healty!', true);
				playSound('SHeartwav');
				break;
				////Enemies: Eye, Minion, Bubble, Grunt, Heis
				case 'eye': case 'minion': case 'bubble': case 'grunt': case 'heis':
					////console.log('monster');
					hero.parent.showEnemyFrame( tile );
					playSound('SItemwav');
				break;
				//weapons: a/Machete, b/Lazer, c/Death Ray
				case 'machete':
					hero.x = tile.x;
					hero.y = tile.y;
					hero.r = tile.r;
					hero.c = tile.c;
					tile.parent.removeChild(tile);
					game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
					hero.parent.hideEnemyFrame();
					hero.stats.weapon = 0;
					playSound('SLazerwav');
					game.showStory('Señor Cuadrito grabs a Machete and he is stronger for the next fight!', false);
				break;
				case 'lazer':
					hero.x = tile.x;
					hero.y = tile.y;
					hero.r = tile.r;
					hero.c = tile.c;
					tile.parent.removeChild(tile);
					game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
					hero.parent.hideEnemyFrame();
					hero.stats.weapon = 1;
					playSound('SDeathRaywav');
					game.showStory('Señor Cuadrito grabs a Neural Laser and will scramble his enemies brains!', false);
				break;
				case 'death ray':
					hero.x = tile.x;
					hero.y = tile.y;
					hero.r = tile.r;
					hero.c = tile.c;
					tile.parent.removeChild(tile);
					game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
					hero.parent.hideEnemyFrame();
					hero.stats.weapon = 2;
					playSound('SDeathRaywav');
					game.showStory('Señor Cuadrito grabs a Death Ray and can destroy the Universe!', false);
				break;
				case 'grav':
					hero.x = tile.x;
					hero.y = tile.y;
					hero.r = tile.r;
					hero.c = tile.c;
					tile.parent.removeChild(tile);
					game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
					hero.parent.hideEnemyFrame();
					hero.stats.grav = 1;
					playSound('SVoidwav');
					game.showStory('Señor Cuadrito grabs a Graviton and can close Black Holes!', false);
				break;
				case 'helm':
					hero.x = tile.x;
					hero.y = tile.y;
					hero.r = tile.r;
					hero.c = tile.c;
					tile.parent.removeChild(tile);
					game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
					hero.parent.hideEnemyFrame();
					hero.stats.helm = 1;
					playSound('SLazer');
					game.showStory('It\'s heavy but I feel safer', true);
				break;
				case 'trap':
					hero.x = tile.x;
					hero.y = tile.y;
					hero.r = tile.r;
					hero.c = tile.c;
				
					if (hero.stats.grav == 1)
					{
						// pasa y no le pasa nada
						game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
						tile.parent.removeChild(tile);
						playSound('SVoidwav');
						game.showStory('I float!', true);
					}
					else
					{
						// se muere
						hero.stats.hp = 0;
						hero.isDead = true;
						playSound('SDeathwav');
						game.showStory('Señor Cuadrito enters the Void and his soul wont have rest!', false);
					}
					hero.parent.hideEnemyFrame();
					hero.stats.grav = 0;
					
				break;
				case 'exit':
					var event = new createjs.Event('next');
					event.data = hero.stats;
					hero.parent.dispatchEvent( event );
					playSound('SLevelUPwav');
				break;
				case 'entrance':
					hero.x = tile.x;
					hero.y = tile.y;
					hero.r = tile.r;
					hero.c = tile.c;
					var event = new createjs.Event('previous');
					event.data = hero.stats;
					hero.parent.dispatchEvent( event );
					playSound('SStepwav');
				break;
			}
		}
		this.getAttack = function ()
		{
			var at = hero.stats.at;
			at += hero.stats.weapon + 1;
			return at;
		}
		this.getHP = function ()
		{
			var hp = hero.stats.hp;
			if ( hero.stats.helm == 1 )
			{
				hp += 2;
			}
			return hp;
		}
		
		function getTile(r, c)
		{
			//console.log( 'getTile(r,c)', r, c );
			return game.currentmap[r][c];
		}
		
		function update()
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.left = new lib.inv();
	this.left.setTransform(-512,0,8,1);
	new cjs.ButtonHelper(this.left, 0, 1, 2, false, new lib.inv(), 3);

	this.down = new lib.inv();
	this.down.setTransform(0,64,1,8);
	new cjs.ButtonHelper(this.down, 0, 1, 2, false, new lib.inv(), 3);

	this.top = new lib.inv();
	this.top.setTransform(0,-512,1,8);
	new cjs.ButtonHelper(this.top, 0, 1, 2, false, new lib.inv(), 3);

	this.right = new lib.inv();
	this.right.setTransform(64,0,8,1);
	new cjs.ButtonHelper(this.right, 0, 1, 2, false, new lib.inv(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.right},{t:this.top},{t:this.down},{t:this.left}]}).wait(1));

	// Layer 1
	this.view = new lib.HeroView();
	this.view.setTransform(32,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.view).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-512,1088,1088);


(lib.EnemyView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.setTransform(32,32,1,1,0,0,0,32,32);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(32,32,1,1,0,0,0,32,32);

	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(32,32,1,1,0,0,0,32,32);

	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(32,32,1,1,0,0,0,32,32);

	this.instance_4 = new lib.Symbol17();
	this.instance_4.setTransform(32,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Enemy = function() {
	this.initialize();

	// Layer 1
	this.view = new lib.EnemyView();
	this.view.setTransform(32,32,1,1,0,0,0,32,32);

	this.addChild(this.view);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.End = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this.parent;
		
		this.playAgain.on('click', function(){
			root.reset();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.text = new cjs.Text("Señor Cuadrito,you\nhave defeated my army.\nBut I will be back!", "24px 'Press Start 2P'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 531;
	this.text.setTransform(73,61);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 4
	this.playAgain = new lib.playAgain();
	this.playAgain.setTransform(233,524);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false, new lib.playAgain(), 3);

	this.text_1 = new cjs.Text("THE END", "24px 'Press Start 2P'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 193;
	this.text_1.setTransform(318,431);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF00").s().dr(-118,-32,236,64);
	this.shape.setTransform(320,444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s("#FFFFFF").ss(4,2,0,3).dr(-272,-60.5,544,121);
	this.shape_1.setTransform(336,106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.playAgain}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(128,384,2,2);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(256,384,2,2);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(384,384,2,2);

	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(384,256,2,2);

	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(384,128,2,2);

	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(256,128,2,2);

	this.instance_6 = new lib.e_abo();
	this.instance_6.setTransform(256,256,2,2);

	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(128,128,2,2);

	this.instance_8 = new lib.srcuadrito();
	this.instance_8.setTransform(128,256,2,2);

	this.instance_9 = new lib.TileEmpty();
	this.instance_9.setTransform(512.1,768,2,2);

	this.instance_10 = new lib.TileEmpty();
	this.instance_10.setTransform(384,768,2,2);

	this.instance_11 = new lib.TileEmpty();
	this.instance_11.setTransform(256,768,2,2);

	this.instance_12 = new lib.TileEmpty();
	this.instance_12.setTransform(128,768,2,2);

	this.instance_13 = new lib.TileEmpty();
	this.instance_13.setTransform(0,768,2,2);

	this.instance_14 = new lib.TileEmpty();
	this.instance_14.setTransform(512.1,640,2,2);

	this.instance_15 = new lib.TileEmpty();
	this.instance_15.setTransform(384,640,2,2);

	this.instance_16 = new lib.TileEmpty();
	this.instance_16.setTransform(256,640,2,2);

	this.instance_17 = new lib.TileEmpty();
	this.instance_17.setTransform(128,640,2,2);

	this.instance_18 = new lib.TileEmpty();
	this.instance_18.setTransform(0,640,2,2);

	this.instance_19 = new lib.TileEmpty();
	this.instance_19.setTransform(512.1,512,2,2);

	this.instance_20 = new lib.TileEmpty();
	this.instance_20.setTransform(384,512,2,2);

	this.instance_21 = new lib.TileEmpty();
	this.instance_21.setTransform(256,512,2,2);

	this.instance_22 = new lib.TileEmpty();
	this.instance_22.setTransform(128,512,2,2);

	this.instance_23 = new lib.TileEmpty();
	this.instance_23.setTransform(0,512,2,2);

	this.instance_24 = new lib.TileEmpty();
	this.instance_24.setTransform(512.1,384,2,2);

	this.instance_25 = new lib.TileEmpty();
	this.instance_25.setTransform(384,384,2,2);

	this.instance_26 = new lib.TileEmpty();
	this.instance_26.setTransform(256,384,2,2);

	this.instance_27 = new lib.TileEmpty();
	this.instance_27.setTransform(128,384,2,2);

	this.instance_28 = new lib.TileEmpty();
	this.instance_28.setTransform(0,384,2,2);

	this.instance_29 = new lib.TileEmpty();
	this.instance_29.setTransform(512.1,256,2,2);

	this.instance_30 = new lib.TileEmpty();
	this.instance_30.setTransform(384,256,2,2);

	this.instance_31 = new lib.TileEmpty();
	this.instance_31.setTransform(256,256,2,2);

	this.instance_32 = new lib.TileEmpty();
	this.instance_32.setTransform(128,256,2,2);

	this.instance_33 = new lib.TileEmpty();
	this.instance_33.setTransform(0,256,2,2);

	this.instance_34 = new lib.TileEmpty();
	this.instance_34.setTransform(512.1,128,2,2);

	this.instance_35 = new lib.TileEmpty();
	this.instance_35.setTransform(384,128,2,2);

	this.instance_36 = new lib.TileEmpty();
	this.instance_36.setTransform(256,128,2,2);

	this.instance_37 = new lib.TileEmpty();
	this.instance_37.setTransform(128,128,2,2);

	this.instance_38 = new lib.TileEmpty();
	this.instance_38.setTransform(0,128,2,2);

	this.instance_39 = new lib.TileEmpty();
	this.instance_39.setTransform(512.1,0,2,2);

	this.instance_40 = new lib.TileEmpty();
	this.instance_40.setTransform(384,0,2,2);

	this.instance_41 = new lib.TileEmpty();
	this.instance_41.setTransform(256,0,2,2);

	this.instance_42 = new lib.TileEmpty();
	this.instance_42.setTransform(128,0,2,2);

	this.instance_43 = new lib.TileEmpty();
	this.instance_43.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().dr(-48,-48,96,96);
	this.shape_2.setTransform(320,416,6.667,8.667);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640.1,896);


(lib.cuadritoframe = function() {
	this.initialize();

	// Layer 1
	this.foco = new lib.Symbol4_1();
	this.foco.setTransform(32,32,1,1,0,0,0,32,32);

	this.cuadrito = new lib.Symbol1_1();
	this.cuadrito.setTransform(32,32,1,1,0,0,0,32,32);

	this.label = new cjs.Text("", "16px 'Press Start 2P'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 18;
	this.label.lineWidth = 316;
	this.label.setTransform(61,16);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,2,0,3).p("A9/qOMA7/AAAIAAUdMg7/AAAg");
	this.shape.setTransform(194,67.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#177272").s().p("A9/KOIAA0bMA7/AAAIAAUbg");
	this.shape_1.setTransform(194,67.1);

	this.addChild(this.shape_1,this.shape,this.label,this.cuadrito,this.foco);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.4,388,135);


(lib.attack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btnfm1();
	this.instance.setTransform(61,16.4,1,1,0,0,0,61,16.4);

	this.instance_1 = new lib.btnfm2();
	this.instance_1.setTransform(61,16.4,1,1,0,0,0,61,16.4);

	this.instance_2 = new lib.btnfm3();
	this.instance_2.setTransform(61,16.4,1,1,0,0,0,61,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-2.6,127.3,38.3);


(lib.questionButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ItemsView("single",6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.monsterframe = function() {
	this.initialize();

	// Layer 1
	this.attack = new lib.attack();
	this.attack.setTransform(317,106.4,1,1,0,0,0,61,16.4);
	new cjs.ButtonHelper(this.attack, 0, 1, 2, false, new lib.attack(), 3);

	this.description = new cjs.Text("EYE OF EVIL\na\na\na\na\na", "16px 'Press Start 2P'", "#FFFFFF");
	this.description.name = "description";
	this.description.lineHeight = 18;
	this.description.lineWidth = 316;
	this.description.setTransform(61,16);

	this.enemy = new lib.EnemyView();
	this.enemy.setTransform(32,32,1,1,0,0,0,32,32);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,2,0,3).p("A9/qOMA7/AAAIAAUdMg7/AAAg");
	this.shape.setTransform(194,67.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000608").s().p("A9/KOIAA0bMA7/AAAIAAUbg");
	this.shape_1.setTransform(194,67.1);

	this.addChild(this.shape_1,this.shape,this.enemy,this.description,this.attack);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.4,388,135);


(lib.instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var timeline = this;
		this.stop();
		this.open.on('click', function ()
		{
			timeline.gotoAndStop(1);
		});
	}
	this.frame_1 = function() {
		var timeline = this;
		this.stop();
		this.close.on('click', function ()
		{
			timeline.gotoAndStop(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// question
	this.open = new lib.questionButton();
	this.open.setTransform(576,0);
	new cjs.ButtonHelper(this.open, 0, 1, 2, false, new lib.questionButton(), 3);

	this.close = new lib.close();
	this.close.setTransform(576,0);
	new cjs.ButtonHelper(this.close, 0, 1, 2, false, new lib.close(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.open}]}).to({state:[{t:this.close}]},1).wait(1));

	// Layer 1
	this.label = new cjs.Text("Somehow Señor Cuadrito got trapped in the 5th dimension in a spaceship. Now he must save the universe!", "12px 'Press Start 2P'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 14;
	this.label.lineWidth = 406;
	this.label.setTransform(96,69.9,1.051,1);

	this.label_1 = new cjs.Text("+2HP Temporal", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_1.name = "label_1";
	this.label_1.lineHeight = 10;
	this.label_1.lineWidth = 183;
	this.label_1.setTransform(416,704.1);

	this.label_2 = new cjs.Text("Helm of Justice", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_2.name = "label_2";
	this.label_2.lineHeight = 16;
	this.label_2.lineWidth = 216;
	this.label_2.setTransform(416,686);

	this.label_3 = new cjs.Text("Crushes your soul!", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_3.name = "label_3";
	this.label_3.lineHeight = 10;
	this.label_3.lineWidth = 183;
	this.label_3.setTransform(416,640.1);

	this.label_4 = new cjs.Text("Black Hole", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_4.name = "label_4";
	this.label_4.lineHeight = 16;
	this.label_4.lineWidth = 201;
	this.label_4.setTransform(416,622);

	this.label_5 = new cjs.Text("Disapears Black Holes", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_5.name = "label_5";
	this.label_5.lineHeight = 10;
	this.label_5.lineWidth = 183;
	this.label_5.setTransform(416,576.1);

	this.label_6 = new cjs.Text("Graviton", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_6.name = "label_6";
	this.label_6.lineHeight = 16;
	this.label_6.lineWidth = 210;
	this.label_6.setTransform(416,558);

	this.label_7 = new cjs.Text("Permanent", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_7.name = "label_7";
	this.label_7.lineHeight = 10;
	this.label_7.lineWidth = 144;
	this.label_7.setTransform(416,521);

	this.label_8 = new cjs.Text("+5HP +3AT", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_8.name = "label_8";
	this.label_8.lineHeight = 16;
	this.label_8.lineWidth = 172;
	this.label_8.setTransform(416,503);

	this.label_9 = new cjs.Text("+5HP", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_9.name = "label_9";
	this.label_9.lineHeight = 16;
	this.label_9.lineWidth = 172;
	this.label_9.setTransform(416,439);

	this.label_10 = new cjs.Text("+1HP", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_10.name = "label_10";
	this.label_10.lineHeight = 16;
	this.label_10.lineWidth = 172;
	this.label_10.setTransform(416,375);

	this.label_11 = new cjs.Text("+25 Coins", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_11.name = "label_11";
	this.label_11.lineHeight = 16;
	this.label_11.lineWidth = 172;
	this.label_11.setTransform(416,311);

	this.label_12 = new cjs.Text("+5 Coins", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_12.name = "label_12";
	this.label_12.lineHeight = 16;
	this.label_12.lineWidth = 172;
	this.label_12.setTransform(416,247);

	this.label_13 = new cjs.Text("+1 Coin", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_13.name = "label_13";
	this.label_13.lineHeight = 16;
	this.label_13.lineWidth = 172;
	this.label_13.setTransform(416,183);

	this.label_14 = new cjs.Text("Destroys your enemies and makes juice with their tears!\n+3AT", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_14.name = "label_14";
	this.label_14.lineHeight = 10;
	this.label_14.lineWidth = 230;
	this.label_14.setTransform(96,704.1);

	this.label_15 = new cjs.Text("Death Ray", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_15.name = "label_15";
	this.label_15.lineHeight = 16;
	this.label_15.lineWidth = 230;
	this.label_15.setTransform(96,686);

	this.label_16 = new cjs.Text("Eats the brain of your enemies!\n+2AT", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_16.name = "label_16";
	this.label_16.lineHeight = 10;
	this.label_16.lineWidth = 230;
	this.label_16.setTransform(96,640.1);

	this.label_17 = new cjs.Text("Neural Laser", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_17.name = "label_17";
	this.label_17.lineHeight = 16;
	this.label_17.lineWidth = 230;
	this.label_17.setTransform(96,622);

	this.label_18 = new cjs.Text("Made of Awesomeness!\n+1AT", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_18.name = "label_18";
	this.label_18.lineHeight = 10;
	this.label_18.lineWidth = 230;
	this.label_18.setTransform(96,576.1);

	this.label_19 = new cjs.Text("Machete", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_19.name = "label_19";
	this.label_19.lineHeight = 16;
	this.label_19.lineWidth = 230;
	this.label_19.setTransform(96,558);

	this.instance = new lib.ItemsView("single",0);
	this.instance.setTransform(32,64);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1AA3D3").s().p("Egn+AE/IAAp+MBP9AAAIAAJ+g");
	this.shape.setTransform(288,96);

	this.label_20 = new cjs.Text("Champion of Justice!", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_20.name = "label_20";
	this.label_20.lineHeight = 10;
	this.label_20.lineWidth = 230;
	this.label_20.setTransform(96,192);

	this.label_21 = new cjs.Text("Lord of Destruction and Cupcakes\nHP12 AT12 EXP12", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_21.name = "label_21";
	this.label_21.lineHeight = 10;
	this.label_21.lineWidth = 230;
	this.label_21.setTransform(96,512.1);

	this.label_22 = new cjs.Text("Guards the secrets of the universe\nHP07 AT05 EXP06", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_22.name = "label_22";
	this.label_22.lineHeight = 10;
	this.label_22.lineWidth = 230;
	this.label_22.setTransform(96,448.1);

	this.label_23 = new cjs.Text("He will eat your soul\nHP04 AT03 EXP04", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_23.name = "label_23";
	this.label_23.lineHeight = 10;
	this.label_23.lineWidth = 230;
	this.label_23.setTransform(96,384);

	this.label_24 = new cjs.Text("Inflicts pain via Dubstep\nHP03 AT02 EXP02", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_24.name = "label_24";
	this.label_24.lineHeight = 10;
	this.label_24.lineWidth = 230;
	this.label_24.setTransform(96,320);

	this.label_25 = new cjs.Text("He can see your soul\nHP01 AT01 EXP01", "8px 'Press Start 2P'", "#FFFFFF");
	this.label_25.name = "label_25";
	this.label_25.lineHeight = 10;
	this.label_25.lineWidth = 230;
	this.label_25.setTransform(96,256);

	this.label_26 = new cjs.Text("Emperor Heis", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_26.name = "label_26";
	this.label_26.lineHeight = 16;
	this.label_26.lineWidth = 230;
	this.label_26.setTransform(96,494);

	this.label_27 = new cjs.Text("Guard of Doom", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_27.name = "label_27";
	this.label_27.lineHeight = 16;
	this.label_27.lineWidth = 230;
	this.label_27.setTransform(96,430);

	this.label_28 = new cjs.Text("Blubby", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_28.name = "label_28";
	this.label_28.lineHeight = 16;
	this.label_28.lineWidth = 230;
	this.label_28.setTransform(96,366);

	this.label_29 = new cjs.Text("Minion of Pain", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_29.name = "label_29";
	this.label_29.lineHeight = 16;
	this.label_29.lineWidth = 230;
	this.label_29.setTransform(96,302);

	this.label_30 = new cjs.Text("Eye of Evil", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_30.name = "label_30";
	this.label_30.lineHeight = 16;
	this.label_30.lineWidth = 230;
	this.label_30.setTransform(96,238);

	this.label_31 = new cjs.Text("Señor Cuadrito", "14px 'Press Start 2P'", "#FFFFFF");
	this.label_31.name = "label_31";
	this.label_31.lineHeight = 16;
	this.label_31.lineWidth = 230;
	this.label_31.setTransform(96,174);

	this.instance_1 = new lib.ItemsView("single",10);
	this.instance_1.setTransform(352,672);

	this.instance_2 = new lib.ItemsView("single",9);
	this.instance_2.setTransform(352,608);

	this.instance_3 = new lib.ItemsView("single",8);
	this.instance_3.setTransform(352,288);

	this.instance_4 = new lib.ItemsView("single",7);
	this.instance_4.setTransform(352,416);

	this.instance_5 = new lib.ItemsView("single",5);
	this.instance_5.setTransform(352,352);

	this.instance_6 = new lib.ItemsView("single",4);
	this.instance_6.setTransform(352,544);

	this.instance_7 = new lib.ItemsView("single",3);
	this.instance_7.setTransform(352,224);

	this.instance_8 = new lib.ItemsView("single",2);
	this.instance_8.setTransform(352,480);

	this.instance_9 = new lib.ItemsView("single",1);
	this.instance_9.setTransform(352,160);

	this.instance_10 = new lib.WeaponView("single",2);
	this.instance_10.setTransform(32,672);

	this.instance_11 = new lib.WeaponView("single",1);
	this.instance_11.setTransform(32,608);

	this.instance_12 = new lib.EnemyView("synched",4);
	this.instance_12.setTransform(96,480,1,1,0,0,180);

	this.instance_13 = new lib.EnemyView("synched",3);
	this.instance_13.setTransform(96,416,1,1,0,0,180);

	this.instance_14 = new lib.EnemyView("synched",2);
	this.instance_14.setTransform(96,352,1,1,0,0,180);

	this.instance_15 = new lib.EnemyView("synched",1);
	this.instance_15.setTransform(96,288,1,1,0,0,180);

	this.instance_16 = new lib.Symbol1_1();
	this.instance_16.setTransform(32,160);

	this.instance_17 = new lib.WeaponView("single",0);
	this.instance_17.setTransform(32,544);

	this.instance_18 = new lib.EnemyView("synched",0);
	this.instance_18.setTransform(96,224,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.label_31},{t:this.label_30},{t:this.label_29},{t:this.label_28},{t:this.label_27},{t:this.label_26},{t:this.label_25},{t:this.label_24},{t:this.label_23},{t:this.label_22},{t:this.label_21},{t:this.label_20},{t:this.shape},{t:this.instance},{t:this.label_19},{t:this.label_18},{t:this.label_17},{t:this.label_16},{t:this.label_15},{t:this.label_14},{t:this.label_13},{t:this.label_12},{t:this.label_11},{t:this.label_10},{t:this.label_9},{t:this.label_8},{t:this.label_7},{t:this.label_6},{t:this.label_5},{t:this.label_4},{t:this.label_3},{t:this.label_2},{t:this.label_1},{t:this.label}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Egx/BA/MAAAiB+MBj+AAAMAAACB+g");
	this.shape_1.setTransform(320,416);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(576,0,64,64);


(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
			start: A
			exit: B
			
			enemies: Eye, Minion, bUbble, Grunt, Heis
			weapons: a/Machete, b/Lazer, c/Death Ray
			
			items: g/bulb, 0/coin, i/energy, j/gem, k/grav, l/heart, m/question, n/medic, o/monolit, p/trap, q/helm
			
		*/
		var maps = [
			[
				'1111111111'.split(''),
				'10l00l00a1'.split(''),
				'A0E1l010l1'.split(''),
				'10010lE001'.split(''),
				'1E00001l01'.split(''),
				'1l01E01001'.split(''),
				'10M0l0alM1'.split(''),
				'111l111E0B'.split(''),
				'1l0E0lE0l1'.split(''),
				'1111111111'.split('')
			],
			[
				'1111111B11'.split(''),
				'1bM0l10U01'.split(''),
				'1M10010l01'.split(''),
				'1ln10l1101'.split(''),
				'100MalM001'.split(''),
				'10l101b101'.split(''),
				'10E10l1lU1'.split(''),
				'A0010n10j1'.split(''),
				'10E1laUll1'.split(''),
				'1111111111'.split('')
			],
			[
				'1111111111'.split(''),
				'1bMlnlnpq1'.split(''),
				'1010010111'.split(''),
				'1UU100lM01'.split(''),
				'1jk10Enal1'.split(''),
				'1nl1a01lU1'.split(''),
				'11110E1E01'.split(''),
				'1kjEM001GB'.split(''),
				'1nlc10n001'.split(''),
				'1111111A11'.split('')
			],
			[
				'1111111111'.split(''),
				'1n00j000n1'.split(''),
				'10000j0001'.split(''),
				'100000000B'.split(''),
				'1000jn0001'.split(''),
				'1000nj0001'.split(''),
				'1000000001'.split(''),
				'A000j00001'.split(''),
				'1n000j00n1'.split(''),
				'1111111111'.split('')
			],
			[
				'1111111111'.split(''),
				'1oGnbMEGq1'.split(''),
				'111b1nUE11'.split(''),
				'AEpM1bEGi1'.split(''),
				'111n011n11'.split(''),
				'1jbUnG0G01'.split(''),
				'1oM1Enb101'.split(''),
				'1na1bE01n1'.split(''),
				'1c0na0b1HB'.split(''),
				'1111111111'.split('')
			]
		];
		var root = this, hero;
		this.currentmap = this.currentmap || [];
		var listener;
		createmap(createjs.level);
		
		this.enemyframe.visible = false;
		this.cuadritoframe.visible = false;
		this.playAgain.visible = false;
		this.moreGames.visible = false;
		this.playAgain.on('click', function(){
			root.parent.reset();
		});
		this.moreGames.on('click', function (){
			fgl.showMoreGames();
		});
		listener = this.on('tick', update);
		
		
		function update()
		{
			//update attributes
			//HP
			var hp = hero.stats.hp;
			var maxhp = hero.stats.maxhp;
			if ( hero.stats.helm == 1 )
			{
				hp += 2;
				maxhp += 2;
			}
			this.hp_text.text = 'HP ' + 
				stringnumber(hp) + '/' + stringnumber(maxhp);
			//Attack
			this.at_text.text = 'AT ' + stringnumber(hero.getAttack());
			//Experience
			this.ex_text.text = 'EX ' + 
				stringnumber(hero.stats.exp) + '/' + stringnumber(hero.stats.maxexp);
			//Coins
			this.co_text.text = hero.stats.coins;
			//Level
			this.lv_text.text = 'LVL ' + stringnumber(hero.stats.level);
		
			// SKINS
			
			// Weapons
			if (hero.stats.weapon>-1&&!hero.isDead)
			{
				// Tablero
				this.weapon.visible = true;
				this.weapon.gotoAndStop( hero.stats.weapon );
				// Hero
				hero.view.weapon.visible = true;
				hero.view.weapon.gotoAndStop( hero.stats.weapon );
				// Minihero
				this.minihero.weapon.visible = true;
				this.minihero.weapon.gotoAndStop( hero.stats.weapon );
			}
			else
			{
				this.weapon.visible = false;
				hero.view.weapon.visible = false;
				this.minihero.weapon.visible = false;
			}
			// Grav
			if (hero.stats.grav == 0 )
			{
				// Grav Off
				hero.view.grav.visible = false;
				this.minihero.grav.visible = false;
			}
			else
			{
				// Grav On
				hero.view.grav.visible = true;
				this.minihero.grav.visible = true;
			}
			// Helm
			if (hero.stats.helm == 0 )
			{
				// Helm Off
				hero.view.helm.visible = false;
				this.minihero.helm.visible = false;
			}
			else
			{
				// Helm On
				hero.view.helm.visible = true;
				this.minihero.helm.visible = true;
			}
			// Eval view cuadrito
			if ( hero.stats.hp <= 0 )
			{
				hero.view.gotoAndStop(2);
				this.minihero.gotoAndStop(2);
			}
			else if ( hero.stats.hp == 1 )
			{
				hero.view.gotoAndStop(1);
				this.minihero.gotoAndStop(1);
			}
			else
			{
				hero.view.gotoAndStop(0);
				this.minihero.gotoAndStop(0);
			}
			
			//depths
			this.setChildIndex(hero				, this.children.length-1);
			this.setChildIndex(this.ind_level	, this.children.length-1);
			this.setChildIndex(this.ind_coins	, this.children.length-1);
			this.setChildIndex(this.ind_exp		, this.children.length-1);
			this.setChildIndex(this.ind_hp		, this.children.length-1);
			this.setChildIndex(this.enemyframe	, this.children.length-1);
			if ( this.playAgain.visible ) this.setChildIndex(this.playAgain	, this.children.length-1);
			if ( this.moreGames.visible ) this.setChildIndex(this.moreGames	, this.children.length-1);
		}
		
		function stringnumber(n)
		{
			return n < 10 ? '0' + n.toString() : n.toString();
		}
		
		function createmap (id)
		{
			var r, c;
			var map = maps[id];
			var currentmap = [];
			for ( r=0; r<10 ; r++)
			{
				currentmap[r] = [];
				for ( c=0; c<10; c++)
				{
					var cel = map[r][c];
					var clip, enemy, item, weapon;
					clip = null;
					enemy = null;
					item = null;
					weapon = null;
					// Piso
					var color = createjs.level;
					if ( color > 3 ) color = 3;
					clip = new lib.TileEmpty();
					clip.x = c * 64;
					clip.y = r * 64;
					root.addChild(clip);
					switch(cel)
					{
						case '1':
							clip = new lib.TileWall();
							clip.x = c * 64;
							clip.y = r * 64;
							clip.stop();
							clip.type = 'wall'
							clip.gotoAndStop(color);
							root.addChild(clip);
							currentmap[r][c] = clip;
						break;
						case 'A':
							
							hero = new lib.Hero();
							hero.x = c * 64;
							hero.y = r * 64;
							hero.r = r;
							hero.c = c;
							root.addChild(hero);
							clip = new lib.TileEmpty();
							clip.x = c * 64;
							clip.y = r * 64;
							clip.c = c;
							clip.r = r;
							clip.type = 'entrance';
							currentmap[r][c] = clip;
							root.addChild(clip);
						break;
						case 'B':
							clip = new lib.TileExit();
							clip.x = c * 64;
							clip.y = r * 64;
							clip.type = 'exit';
							currentmap[r][c] = clip;
							root.addChild(clip);
						break;
						//Enemies: Eye, Minion, Bubble, Grunt, Heis
						case 'E':
							enemy = new lib.Enemy();
							enemy.view.gotoAndStop(0);
							enemy.type = 'eye';
							enemy.description = 'EYE OF EVIL\nCan see your soul\nHP 01\nAT 01\nEXP 01';
							enemy.hp = 1;
							enemy.at = 1;
							enemy.exp = 1;
						break;
						case 'M':
							enemy = new lib.Enemy();
							enemy.view.gotoAndStop(1);
							enemy.type = 'minion';
							enemy.description = 'MINION OF PAIN\nInflicts pain via Dubstep\nHP 03\nAT 02\nEXP 02';	
							enemy.hp = 3;
							enemy.at = 2;
							enemy.exp = 2;
						break;
						case 'U':
							enemy = new lib.Enemy();
							enemy.view.gotoAndStop(2);
							enemy.type = 'bubble';
							enemy.description = 'BLUBBY\nEats your soul\nHP 05\nAT 03\nEXP 04';	
							enemy.hp = 5;
							enemy.at = 3;
							enemy.exp = 4;
						break;
						case 'G':
							enemy = new lib.Enemy();
							enemy.view.gotoAndStop(3);
							enemy.type = 'grunt';
							enemy.description = 'GUARD OF DOOM\nGuards the secrets of the Universe\nHP 07\nAT 05\nEXP 06';	
							enemy.hp = 7;
							enemy.at = 5;
							enemy.exp = 6;
						break;
						case 'H':
							enemy = new lib.Enemy();
							enemy.view.gotoAndStop(4);
							enemy.type = 'heis';
							enemy.description = 'EMPEROR HEIS\nLord of Destruction and Cupcakes\nHP 12\nAT 12\nEXP 12';	
							enemy.hp = 12;
							enemy.at = 12;
							enemy.exp = 12;
						break;
						//Weapons: a/Machete, b/Lazer, c/Death Ray
						case 'a':
							weapon = new lib.Weapon();
							weapon.view.gotoAndStop(0);
							weapon.type = 'machete';
						break;
						case 'b':
							weapon = new lib.Weapon();
							weapon.view.gotoAndStop(1);
							weapon.type = 'lazer';
						break;
						case 'c':
							weapon = new lib.Weapon();
							weapon.view.gotoAndStop(2);
							weapon.type = 'death ray';
						break;
						//Items: g/bulb, 0/coin, i/energy, j/gem, k/grav, l/heart, m/question, n/medic, o/monolit, p/trap, q/helm
						case 'g':
							item = new lib.Item();
							item.view.gotoAndStop(0);
							item.type = 'bulb';
						break;
						case '0':
							item = new lib.Item();
							item.view.gotoAndStop(1);
							item.type = 'coin';
						break;
						case 'i':
							item = new lib.Item();
							item.view.gotoAndStop(2);
							item.type = 'energy';
						break;
						case 'j':
							item = new lib.Item();
							item.view.gotoAndStop(3);
							item.type = 'gem';
						break;
						case 'k':
							item = new lib.Item();
							item.view.gotoAndStop(4);
							item.type = 'grav';
						break;
						case 'l':
							item = new lib.Item();
							item.view.gotoAndStop(5);
							item.type = 'heart';
						break;
						case 'm':
							item = new lib.Item();
							item.view.gotoAndStop(6);
							item.type = 'question';
						break;
						case 'n':
							item = new lib.Item();
							item.view.gotoAndStop(7);
							item.type = 'medic';
						break;
						case 'o':
							item = new lib.Item();
							item.view.gotoAndStop(8);
							item.type = 'monolit';
						break;
						case 'p':
							item = new lib.Item();
							item.view.gotoAndStop(9);
							item.type = 'trap';
						break;
						case 'q':
							item = new lib.Item();
							item.view.gotoAndStop(10);
							item.type = 'helm';
						break;
					}
					if ( enemy )
					{
						enemy.x = c * 64;
						enemy.y = r * 64;
						enemy.c = c;
						enemy.r = r;
						root.addChild(enemy);
						currentmap[r][c] = enemy;
					}
					if ( weapon )
					{
						weapon.x = c * 64;
						weapon.y = r * 64;
						weapon.c = c;
						weapon.r = r;
						root.addChild(weapon);
						currentmap[r][c] = weapon;
					}
					if ( item )
					{
						item.x = c * 64;
						item.y = r * 64;
						item.c = c;
						item.r = r;
						root.addChild(item);
						currentmap[r][c] = item;
					}
				}
			}
			////console.log( currentmap );
			root.currentmap = currentmap;
			//console.log(root);
			////console.log(this.currentmap);
		}
		this.showStory = function (msg, isCuadrito)
		{
			this.cuadritoframe.visible = true;
			this.cuadritoframe.label.text = msg;
			this.cuadritoframe.cuadrito.visible = isCuadrito;
			this.cuadritoframe.foco.visible = !this.cuadritoframe.cuadrito.visible;
			this.enemyframe.visible = false;
		}
		this.hideStory = function ()
		{
			this.cuadritoframe.visible = false;
		}
		this.showEnemyFrame = function (tile)
		{
			this.enemyframe.visible = true;
			this.enemyframe.description.text = tile.description;
			this.enemyframe.enemy.gotoAndStop(tile.view.currentFrame);
			this.cuadritoframe.visible = false;
			var ef = this.enemyframe;
			var game = this;
			if ( ef.list ) ef.attack.off('click', ef.list);
			this.enemyframe.list = this.enemyframe.attack.on('click', function ()
			{
				var isLeveling, killedMonster;
				ef.attack.off('click', ef.list);
				hero.x = tile.x;
				hero.y = tile.y;
				hero.c = tile.c;
				hero.r = tile.r;
				hero.stats.hp -= tile.at;
				if ( hero.stats.helm == 1 ) hero.stats.hp+= 2; // compensa el daño que aguanta el helmet
				//
				if ( tile.hp <= hero.getAttack() )
				{
					
					//currentmap[hero.r][hero.c]={}
					// mato al mounstro, give me exp and gold
					killedMonster = true;
					hero.stats.exp+= tile.exp;
					hero.stats.coins+= tile.exp;
					game.showInd('exp', tile.exp);
					game.showInd('coins', tile.exp);
					
					////console.log(game);
					game.currentmap[hero.r][hero.c] = {type:'void',x:hero.x,y:hero.y,c:hero.c,r:hero.r};
					// checar exp
					if ( hero.stats.exp >= hero.stats.maxexp )
					{
						game.levelUp();
						isLeveling = true;
					}
					// Si tiene arma, quitarsela
					hero.stats.weapon = -1;
					// Quitar el tile
					if ( tile.parent ) tile.parent.removeChild(tile);
				}
				// Eval hero dies or not
				var hp = hero.stats.hp;
				if ( hero.stats.helm == 1 ) hp += 2;
				if ( hp  < 1 )
				{
					// hero dies
					hero.isDead = true;
					playSound('SDeathwav');
					game.showStory('Congratulations! You killed Señor Cuadrito!');
					game.playAgain.visible = true;
					logocontainer.style.display = 'block';
					if ( fgl.crossPromotionEnabled ) game.moreGames.visible = true;
				}
				else
				{
					if ( isLeveling ) {
						game.showStory('I feel stronger!', true);
						playSound('SLevelUPwav');
					}
					else {
						if (killedMonster)
							game.showStory('Señor Cuadrito wins!', false);
						else
							game.showStory('Oh ones! The monster is too strong! I need more attack power', false);
						playSound('SFight2wav');
					}
				}
				if ( hero.stats.hp < 0 ) hero.stats.hp = 0;
				hero.stats.helm = 0;
				game.hideEnemyFrame();
			});
		}
		this.levelUp = function()
		{
			// LVL
			hero.stats.level++;
			// HP
			hero.stats.maxhp+= 1;
			hero.stats.hp += 1;
			
			// AT
			hero.stats.at+= 1;
			// EXP
			hero.stats.exp = 1;
			hero.stats.maxexp+= hero.stats.level*2;
			
			this.showInd('level', hero.stats.level);
		}
		this.hideEnemyFrame = function ()
		{
			this.enemyframe.visible = false;
			this.enemyframe.attack.off('click', this.enemyframe.list);
		}
		
		
		this.showInd = function(type, n)
		{
			switch(type)
			{
				case 'level':
					this.ind_level.label.text = 'LEVEL ' + n ;
					this.ind_level.alpha = 1;
					this.ind_level.x = hero.x;
					this.ind_level.y = hero.y;
					createjs.Tween.get( this.ind_level ).wait(500).to({y:hero.y-48, alpha:0},1000);
				break;
				case 'coins':
					this.ind_coins.label.text = '+'+n;
					this.ind_coins.alpha = 1;
					this.ind_coins.x = hero.x+64;
					this.ind_coins.y = hero.y;
					createjs.Tween.get( this.ind_coins ).to({y:hero.y-32, alpha:0},1000);
				break;
				case 'exp':
					this.ind_exp.label.text = '+'+n;
					this.ind_exp.alpha = 1;
					this.ind_exp.x = hero.x+32;
					this.ind_exp.y = hero.y;
					createjs.Tween.get( this.ind_exp ).to({y:hero.y-32, alpha:0},1000);
				break;
				case 'hp':
					this.ind_hp.label.text = '+'+n;
					this.ind_hp.alpha = 1;
					this.ind_hp.x = hero.x+32;
					this.ind_hp.y = hero.y;
					createjs.Tween.get( this.ind_hp ).to({y:hero.y-32, alpha:0},1000);
				break;
			}
		}
		
		
		if (createjs.level == 0 )
		{
			this.showStory('Señor Cuadrito awakes in a spaceship');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.ind_hp = new lib.ind_hp();
	this.ind_hp.setTransform(-191.9,450,1,1,0,0,0,15.8,6.5);

	this.ind_exp = new lib.ind_exp();
	this.ind_exp.setTransform(-192,384,1,1,0,0,0,15.5,6.5);

	this.ind_coins = new lib.ind_gold();
	this.ind_coins.setTransform(-191.9,320,1,1,0,0,0,15.8,6.5);

	this.ind_level = new lib.ind_level();
	this.ind_level.setTransform(-204,274,1,1,0,0,0,34.2,6.5);

	this.minihero = new lib.HeroView();
	this.minihero.setTransform(15.5,740,0.5,0.5,0,0,0,32,32);

	this.lv_text = new cjs.Text("LVL", "16px 'Press Start 2P'", "#FFFFFF");
	this.lv_text.name = "lv_text";
	this.lv_text.lineHeight = 18;
	this.lv_text.lineWidth = 146;
	this.lv_text.setTransform(33,731.2);

	this.co_text = new cjs.Text("", "16px 'Press Start 2P'", "#FFFFFF");
	this.co_text.name = "co_text";
	this.co_text.lineHeight = 18;
	this.co_text.lineWidth = 146;
	this.co_text.setTransform(33,756.2);

	this.instance = new lib.i_coin();
	this.instance.setTransform(0,751,0.5,0.5);

	this.helm = new lib.HelmView();
	this.helm.setTransform(19,665,0.5,0.5,0,0,0,32,32);

	this.ex_text = new cjs.Text("EX 01/05", "16px 'Press Start 2P'", "#FFFFFF");
	this.ex_text.name = "ex_text";
	this.ex_text.lineHeight = 18;
	this.ex_text.lineWidth = 146;
	this.ex_text.setTransform(33,706.2);

	this.weapon = new lib.WeaponView();
	this.weapon.setTransform(-1,676,0.5,0.5);

	this.at_text = new cjs.Text("AT 01", "16px 'Press Start 2P'", "#FFFFFF");
	this.at_text.name = "at_text";
	this.at_text.lineHeight = 18;
	this.at_text.lineWidth = 102;
	this.at_text.setTransform(33,681.2);

	this.hp_text = new cjs.Text("HP 02/02", "16px 'Press Start 2P'", "#FFFFFF");
	this.hp_text.name = "hp_text";
	this.hp_text.lineHeight = 18;
	this.hp_text.lineWidth = 135;
	this.hp_text.setTransform(33,656.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hp_text},{t:this.at_text},{t:this.weapon},{t:this.ex_text},{t:this.helm},{t:this.instance},{t:this.co_text},{t:this.lv_text},{t:this.minihero},{t:this.ind_level},{t:this.ind_coins},{t:this.ind_exp},{t:this.ind_hp}]}).wait(1));

	// Layer 2
	this.moreGames = new lib.moreGames();
	this.moreGames.setTransform(233,576);
	new cjs.ButtonHelper(this.moreGames, 0, 1, 2, false, new lib.moreGames(), 3);

	this.playAgain = new lib.playAgain();
	this.playAgain.setTransform(233,504);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false, new lib.playAgain(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playAgain},{t:this.moreGames}]}).wait(1));

	// enemyframe
	this.enemyframe = new lib.monsterframe();
	this.enemyframe.setTransform(441,735.6,1,1,0,0,0,194,91.6);

	this.timeline.addTween(cjs.Tween.get(this.enemyframe).wait(1));

	// cuadritoframe
	this.cuadritoframe = new lib.cuadritoframe();
	this.cuadritoframe.setTransform(441,735.6,1,1,0,0,0,194,91.6);

	this.timeline.addTween(cjs.Tween.get(this.cuadritoframe).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-448,-320,1088,1103);


(lib.Wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage, true, false);
		
		
		var game;
		var root;
		var end;
		var menu;
		var music;
		var isOnMenu;
		var logo;
		
		root = this;
		createjs.level = 0;
		this.end.visible = false;
		end = this.end;
		game = [];
		
		brand();
		
		function brand()
		{
			if(fgl.brandingEnabled){
			var img = document.createElement('img'); img.src = fgl.getBrandingLogo(); img.onclick = fgl.handleBrandingClick;
			logocontainer.appendChild(img); }
		}
		
		
		this.showMenu = function()
		{
			menu = new lib.Menu();
			this.addChild(menu);
			//this.playMusic('intro');
			isOnMenu = true;
			var listener = menu.on('done', function (){ 
				menu.off('done',listener); 
				root.removeChild(menu); 
				menu = null; 
				playSound('SLevelUPwav');
				createGame();
				logocontainer.style.display = 'none';
			} );
		}
		
		this.playMusic = function (id)
		{
			if ( music && music.stop)
			{
				music.stop();
			}
			//music = createjs.Sound.play(id,createjs.Sound.INTERRUPT_EARLY, 0, 0, -1 );
		}
		
		
		this.showMenu();
		
		
		//createGame();
		
		this.on('tick', update );
		
		this.reset = function ()
		{
			for (var i=0;i< game.length; i++)
			{
				this.removeChild(game[i]);	
			}
			createjs.level = 0;
			createjs.stats = null;
			this.end.visible = false;
			game = [];
			createGame();
			logocontainer.style.display = 'none';
			showAd();
		}
		
		
		function update()
		{
			this.setChildIndex(this.instructions, this.children.length-1);
			this.setChildIndex(this.end, this.children.length-1);
		}
		
		function createGame()
		{
			var lvl= createjs.level;
			if ( game[lvl] )
			{
				// Ya existe
			}
			else
			{
				// No existe
				game[lvl] = new lib.Game();
				game[lvl].on('next', onNext);
				game[lvl].on('previous', onPrevious);
			}
			root.addChild (game[lvl]);
			if ( isOnMenu )
			{
				isOnMenu = false;
				//root.playMusic('loop');
			}
		}
		function onNext(evt)
		{
			var lvl= createjs.level;
			createjs.stats = evt.data;
			root.removeChild(game[lvl]);
			createjs.level++;
			if ( createjs.level == 5 )
			{
				end.visible = true;
			}
			else
			{
				createGame();
			}
		}
		
		function onPrevious(evt)
		{
			var lvl= createjs.level;
			if ( lvl == 0 ) return;
			createjs.stats = evt.data;
			root.removeChild(game[lvl]);
			createjs.level--;
			createGame();
		}
		
		function showAd()
		{
			if (fgl) fgl.showAd();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// instructions
	this.instructions = new lib.instructions();

	this.timeline.addTween(cjs.Tween.get(this.instructions).wait(1));

	// end
	this.end = new lib.End();

	this.timeline.addTween(cjs.Tween.get(this.end).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.2,0,878.3,896);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;