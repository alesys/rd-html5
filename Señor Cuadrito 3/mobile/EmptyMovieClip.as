package  {
	import flash.display.MovieClip;
	
	public class EmptyMovieClip extends MovieClip {
		public var type:String;
		public var c:int;
		public var r:int;
		public function EmptyMovieClip(type:String, x:Number, y:Number, c:int, r:int) {
			this.type = type;
			this.x = x;
			this.y = y;
			this.c = c;
			this.r = r;
		}

	}
	
}
