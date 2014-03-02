package  {
	
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.display.StageScaleMode;
	import flash.display.StageAlign;
	
	
	public class Wrapper extends MovieClip {
		
		public var instructions:MovieClip;
		public var end:MovieClip;
		public var game:Array;
		public var level:int = 0;
		public var stats:Object;
		public function Wrapper() {
			this.addEventListener(Event.ADDED_TO_STAGE, init);
		}
		private function init(e:Event):void
		{
			stage.scaleMode = StageScaleMode.NO_BORDER;
			stage.align = StageAlign.TOP;
			this.game = [];
			this.addEventListener(Event.ENTER_FRAME, update);
			this.end.visible = false;
			this.createGame();
		}
		private function update(e):void
		{
			this.setChildIndex(this.instructions, this.numChildren-1);
			this.setChildIndex(this.end, this.numChildren-1);
		}
		public function createGame():void
		{
			if ( !game[level] )
			{
				var g:Game = new Game();
				game[level] = g;
				g.addEventListener('next', onNext);
				g.addEventListener('previous', onPrevious);
			}
			this.addChild( game[level]);
		}
		private function onNext(e)
		{
			
		}
		private function onPrevious(e)
		{
			
		}
	}
	
}
/*

import flash.events.Event;
import flash.display.MovieClip;

var instructions:MovieClip;
var end:MovieClip;
var game:Array;
var level:int = 0;
var stats:Object;

this.game = [];

this.addEventListener(Event.ENTER_FRAME, update);

this.end.visible = false;
createGame();

function update(e:Event):void
{
	this.setChildIndex( this.instructions, this.numChildren-1);
	this.setChildIndex( this.end, this.numChildren-1);
}

function reset ()
{
	for (var i=0;i< game.length; i++)
	{
		removeChild(game[i]);	
	}
	level = 0;
	stats = null;
	end.visible = false;
	game = [];
	createGame();
	//showAd();
}

function createGame()
{
	var lvl= level;
	if ( game[lvl] )
	{
		// Ya existe
		trace('existe');
	}
	else
	{
		// No existe
		trace('no existe');
		
		game[lvl] = new Game();
		var g = game[lvl]
		g.addEventListener('next', onNext);
		g.addEventListener('previous', onPrevious);
		//game[lvl].on('next', onNext);
		//game[lvl].on('previous', onPrevious);
	}
	addChild (game[lvl]);
	
}
function onNext(evt)
{
	var lvl= level;
	stats = evt.data;
	removeChild(game[lvl]);
	level++;
	if ( level == 5 )
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
	var lvl= level;
	if ( lvl == 0 ) return;
	stats = evt.data;
	removeChild(game[lvl]);
	level--;
	createGame();
}

/* createjs.Touch.enable(stage, true, false);


var game;
var root;
var end;


root = this;
createjs.level = 0;
this.end.visible = false;
end = this.end;
game = [];

createGame();

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

*/
