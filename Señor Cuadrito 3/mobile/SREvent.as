package  {
	import flash.events.Event;
	
	public class SREvent extends Event{

		public var data:Object;
		public function SREvent(type:String, data:Object) {
			this.data = data;
			super(type);
		}

	}
	
}
