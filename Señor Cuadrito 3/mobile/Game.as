package  {
	
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.text.TextField;
	import flash.display.SimpleButton;
	
	
	public class Game extends MovieClip {
		
		private var maps = [
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
		private var hero:Hero;
		public var currentmap:Array;
		public var wrapper:Wrapper;
		public var ind_level:MovieClip;
		public var ind_coins:MovieClip;
		public var ind_exp:MovieClip;
		public var ind_hp:MovieClip;
		public var enemyframe:MovieClip;
		public var playAgain:SimpleButton;
		public function Game() {
			this.addEventListener(Event.ADDED_TO_STAGE, init);
			trace('hmm');
		}
		private function init(e)
		{
			trace('wtf');
			this.wrapper = this.parent as Wrapper;
			this.createmap(wrapper.level);
			this.addEventListener(Event.ENTER_FRAME, update);
			this.playAgain.visible = false;
		}
		private function update(e:Event):void
		{
			
			this.depths();
		}
		
		private function depths():void
		{
				this.setChildIndex(this.hero		, this.numChildren-1);
				this.setChildIndex(this.ind_level	, this.numChildren-1);
				this.setChildIndex(this.ind_coins	, this.numChildren-1);
				this.setChildIndex(this.ind_exp		, this.numChildren-1);
				this.setChildIndex(this.ind_hp		, this.numChildren-1);
				this.setChildIndex(this.enemyframe	, this.numChildren-1);
				this.setChildIndex(this.playAgain	, this.numChildren-1);
		}
		private function createmap (id)
		{
			var r, c;
			var map = maps[id];
			currentmap = [];
			trace( 'create map' );
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
					var color = id;
					if ( color > 3 ) color = 3;
					clip = new TileEmpty();
					clip.x = c * 64;
					clip.y = r * 64;
					addChild(clip);
					switch(cel)
					{
						case '1':
							clip = new TileWall();
							clip.x = c * 64;
							clip.y = r * 64;
							clip.stop();
							clip.type = 'wall'
							clip.gotoAndStop(color);
							addChild(clip);
							currentmap[r][c] = clip;
						break;
						case 'A':
							
							
							clip = new TileEmpty();
							clip.x = c * 64;
							clip.y = r * 64;
							clip.c = c;
							clip.r = r;
							clip.type = 'entrance';
							currentmap[r][c] = clip;
							addChild(clip);
						
							hero = new Hero();
							hero.x = c * 64;
							hero.y = r * 64;
							hero.r = r;
							hero.c = c;
							addChild(hero);
						break;
						case 'B':
							clip = new TileExit();
							clip.x = c * 64;
							clip.y = r * 64;
							clip.type = 'exit';
							currentmap[r][c] = clip;
							addChild(clip);
						break;
						//Enemies: Eye, Minion, Bubble, Grunt, Heis
						case 'E':
							enemy = new Enemy();
							enemy.view.gotoAndStop(1);
							enemy.type = 'eye';
							enemy.description = 'EYE OF EVIL\nCan see your soul\nHP 01\nAT 01\nEXP 01';
							enemy.hp = 1;
							enemy.at = 1;
							enemy.exp = 1;
						break;
						case 'M':
							enemy = new Enemy();
							enemy.view.gotoAndStop(2);
							enemy.type = 'minion';
							enemy.description = 'MINION OF PAIN\nInflicts pain via Dubstep\nHP 03\nAT 02\nEXP 02';	
							enemy.hp = 3;
							enemy.at = 2;
							enemy.exp = 2;
						break;
						case 'U':
							enemy = new Enemy();
							enemy.view.gotoAndStop(3);
							enemy.type = 'bubble';
							enemy.description = 'BLUBBY\nEats your soul\nHP 05\nAT 03\nEXP 04';	
							enemy.hp = 5;
							enemy.at = 3;
							enemy.exp = 4;
						break;
						case 'G':
							enemy = new Enemy();
							enemy.view.gotoAndStop(4);
							enemy.type = 'grunt';
							enemy.description = 'GUARD OF DOOM\nGuards the secrets of the Universe\nHP 07\nAT 05\nEXP 06';	
							enemy.hp = 7;
							enemy.at = 5;
							enemy.exp = 6;
						break;
						case 'H':
							enemy = new Enemy();
							enemy.view.gotoAndStop(5);
							enemy.type = 'heis';
							enemy.description = 'EMPEROR HEIS\nLord of Destruction and Cupcakes\nHP 12\nAT 12\nEXP 12';	
							enemy.hp = 12;
							enemy.at = 12;
							enemy.exp = 12;
						break;
						//Weapons: a/Machete, b/Lazer, c/Death Ray
						case 'a':
							weapon = new Weapon();
							weapon.view.gotoAndStop(1);
							weapon.type = 'machete';
						break;
						case 'b':
							weapon = new Weapon();
							weapon.view.gotoAndStop(2);
							weapon.type = 'lazer';
						break;
						case 'c':
							weapon = new Weapon();
							weapon.view.gotoAndStop(3);
							weapon.type = 'death ray';
						break;
						//Items: g/bulb, 0/coin, i/energy, j/gem, k/grav, l/heart, m/question, n/medic, o/monolit, p/trap, q/helm
						case 'g':
							item = new Item();
							item.view.gotoAndStop(1);
							item.type = 'bulb';
						break;
						case '0':
							item = new Item();
							item.view.gotoAndStop(2);
							item.type = 'coin';
						break;
						case 'i':
							item = new Item();
							item.view.gotoAndStop(3);
							item.type = 'energy';
						break;
						case 'j':
							item = new Item();
							item.view.gotoAndStop(4);
							item.type = 'gem';
						break;
						case 'k':
							item = new Item();
							item.view.gotoAndStop(5);
							item.type = 'grav';
						break;
						case 'l':
							item = new Item();
							item.view.gotoAndStop(6);
							item.type = 'heart';
						break;
						case 'm':
							item = new Item();
							item.view.gotoAndStop(7);
							item.type = 'question';
						break;
						case 'n':
							item = new Item();
							item.view.gotoAndStop(8);
							item.type = 'medic';
						break;
						case 'o':
							item = new Item();
							item.view.gotoAndStop(9);
							item.type = 'monolit';
						break;
						case 'p':
							item = new Item();
							item.view.gotoAndStop(10);
							item.type = 'trap';
						break;
						case 'q':
							item = new Item();
							item.view.gotoAndStop(11);
							item.type = 'helm';
						break;
					}
					if ( enemy )
					{
						enemy.x = c * 64;
						enemy.y = r * 64;
						enemy.c = c;
						enemy.r = r;
						addChild(enemy);
						currentmap[r][c] = enemy;
					}
					if ( weapon )
					{
						weapon.x = c * 64;
						weapon.y = r * 64;
						weapon.c = c;
						weapon.r = r;
						addChild(weapon);
						currentmap[r][c] = weapon;
					}
					if ( item )
					{
						item.x = c * 64;
						item.y = r * 64;
						item.c = c;
						item.r = r;
						addChild(item);
						currentmap[r][c] = item;
					}
				}
			}
			////console.log( currentmap );
			//currentmap = currentmap;
			//console.log(root);
			////console.log(this.currentmap);
		}
		public function hideEnemyFrame()
		{
			
		}
		public function hideStory()
		{
			
		}
		public function showInd(type:String, n:String)
		{
			
		}
		public function showStory(msg:String, isCuadrito:Boolean)
		{
			
		}
		public function showEnemyFrame(tile:MovieClip)
		{
			
		}
	}
	
}
/*

import flash.events.Event;



/* 
	start: A
	exit: B
	
	enemies: Eye, Minion, bUbble, Grunt, Heis
	weapons: a/Machete, b/Lazer, c/Death Ray
	
	items: g/bulb, 0/coin, i/energy, j/gem, k/grav, l/heart, m/question, n/medic, o/monolit, p/trap, q/helm
	


//var root = this, hero;
var hero;
var currentmap = this.currentmap || [];
var listener;
var level;

this.addEventListener(Event.ADDED_TO_STAGE, init);
function init(e)
{
	var p = parent;
	level = p.level;
	createmap(level);
	trace('createmap');
}

/*
this.enemyframe.visible = false;
this.cuadritoframe.visible = false;
this.playAgain.visible = false;
this.playAgain.on('click', function(){
	parent.reset();
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
	this.setChildIndex(this.playAgain	, this.children.length-1);
}

function stringnumber(n)
{
	return n < 10 ? '0' + n.toString() : n.toString();
}

/*
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
*/