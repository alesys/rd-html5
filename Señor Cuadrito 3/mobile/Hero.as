package  {
	
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.display.SimpleButton;
	import flash.events.MouseEvent;
	
	
	public class Hero extends MovieClip {
		
		public var r:int;
		public var c:int;
		public var view:MovieClip;
		private var game:Game;
		public var stats:Object;
		public var isDead:Boolean;
		//top down left right
		public var top:SimpleButton;
		public var down:SimpleButton;
		public var left:SimpleButton;
		public var right:SimpleButton;
		public function Hero() {
			this.addEventListener(Event.ADDED_TO_STAGE, init);
		}
		private function init(e:Event):void
		{
			this.game = parent as Game;
			this.stats = this.game.wrapper.stats || {
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
			};
			this.view.helm.visible = false;
			this.view.weapon.visible = false;
			this.view.stop();
			
			this.top.addEventListener(MouseEvent.CLICK, click);
			this.down.addEventListener(MouseEvent.CLICK, click);
			this.left.addEventListener(MouseEvent.CLICK, click);
			this.right.addEventListener(MouseEvent.CLICK, click);
			
		}
		private function click(e:MouseEvent):void
		{
			var t:SimpleButton = e.currentTarget as SimpleButton;
			if ( isDead ) return;
			var targetC:int;
			var targetR:int;
			var tile:MovieClip;
			switch ( t.name )
			{
				case 'top':
					targetC = c;
					targetR = r-1;
					tile = getTile(targetR, targetC);
					if (tile) react(tile);
				break;
				case 'down':
					targetC = c;
					targetR = r+1;
					tile = getTile(targetR, targetC);
					if (tile) react(tile);
				break;
				case 'left':
					targetC = c-1;
					targetR = r;
					tile = getTile(targetR, targetC);
					if (tile) react(tile);
				break;
				case 'right':
					targetC = c+1;
					targetR = r;
					tile = getTile(targetR, targetC);
					if (tile) react(tile);
				break;
				
			}
		}
		public function playSound(id:String)
		{
			
		}
		private function react(tile:MovieClip):void
		{
			var type = tile.type;
			//console.log(type);
			trace( 'react', type );
			switch (type)
			{
				case 'void':
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.hideEnemyFrame();
					playSound('SStepwav');
					game.hideStory();
				break;
				case 'coin':
					stats.coins++;
				
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.showInd('coins', '1');
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					game.showStory('Oh! A Coin!', true);
					playSound('SCoinwav');
				break;
				case 'gem':
					stats.coins+=5;
				
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.showInd('coins', '5');
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					playSound('SItemwav');
					game.showStory('Oh! Lots of Coins!', true);
				break;
				case 'energy':
					stats.maxhp+=5;
					stats.at+=3;
				
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.showInd('hp', '5hp');
					game.showInd('coins', '3at');
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					playSound('SLevelUPwav');
					game.showStory('I\'m Unstopable!!!', true);
				break;
				case 'monolit':
					stats.coins+=25;
				
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.showInd('coins', '25');
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					playSound('SLevelUPwav');
					game.showStory('I\'m rich!!!', true);
				break;
				case 'heart':
					if ( stats.hp < stats.maxhp ) stats.hp++;
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.showInd('hp', '1');
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					game.showStory('Oh! I feel better!', true);
					playSound('SHeartwav');
				break;
				case 'medic':
					stats.hp+=5;
					if ( stats.hp > stats.maxhp ) stats.hp  = stats.maxhp;
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.showInd('hp', '5');
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					game.showStory('I\'m healty!', true);
					playSound('SHeartwav');
				break;
				////Enemies: Eye, Minion, Bubble, Grunt, Heis
				case 'eye': case 'minion': case 'bubble': case 'grunt': case 'heis':
					////console.log('monster');
					game.showEnemyFrame( tile );
					playSound('SItemwav');
				break;
				//weapons: a/Machete, b/Lazer, c/Death Ray
				case 'machete':
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					stats.weapon = 0;
					playSound('SLazerwav');
					game.showStory('Señor Cuadrito grabs a Machete and he is stronger for the next fight!', false);
				break;
				case 'lazer':
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					stats.weapon = 1;
					playSound('SDeathRaywav');
					game.showStory('Señor Cuadrito grabs a Neural Laser and will scramble his enemies brains!', false);
				break;
				case 'death ray':
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					stats.weapon = 2;
					playSound('SDeathRaywav');
					game.showStory('Señor Cuadrito grabs a Death Ray and can destroy the Universe!', false);
				break;
				case 'grav':
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					stats.grav = 1;
					playSound('SVoidwav');
					game.showStory('Señor Cuadrito grabs a Graviton and can close Black Holes!', false);
				break;
				case 'helm':
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					game.removeChild(tile);
					game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
					game.hideEnemyFrame();
					stats.helm = 1;
					playSound('SLazer');
					game.showStory('It\'s heavy but I feel safer', true);
				break;
				case 'trap':
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
				
					if (stats.grav == 1)
					{
						// pasa y no le pasa nada
						game.currentmap[r][c] = new EmptyMovieClip('void',x,y,c,r);
						game.removeChild(tile);
						playSound('SVoidwav');
						game.showStory('I float!', true);
					}
					else
					{
						// se muere
						stats.hp = 0;
						isDead = true;
						playSound('SDeathwav');
						game.showStory('Señor Cuadrito enters the Void and his soul wont have rest!', false);
					}
					game.hideEnemyFrame();
					stats.grav = 0;
					
				break;
				case 'exit':
					//var event = new createjs.Event('next');
					var event:SREvent = new SREvent('next', stats);
					game.dispatchEvent( event );
					playSound('SLevelUPwav');
				break;
				case 'entrance':
					x = tile.x;
					y = tile.y;
					r = tile.r;
					c = tile.c;
					var event:SREvent = new SREvent('next', stats);
					game.dispatchEvent( event );
					playSound('SStepwav');
				break;
			}
		}
		private function getTile(r, c)
		{
			return game.currentmap[r][c];
		}
	}
	
}
/* this.view.helm.visible = false;
this.view.weapon.visible = false;
this.view.stop();

var update_listener;

var hero = this;
var game = this.parent;


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
this.game.ministop();
this.game.minihelm.visible = false;
this.game.miniweapon.visible = false;

update_listener = this.on('tick', update);


this.getAttack = function ()
{
	var at = stats.at;
	at += stats.weapon + 1;
	return at;
}
this.getHP = function ()
{
	var hp = stats.hp;
	if ( stats.helm == 1 )
	{
		hp += 2;
	}
	return hp;
}



function update()
{
	
}*/