(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1238,642);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-619,-321);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-619,-321,1238,642);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96));

	// 图层_1
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(618,320);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-622.3},95).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1238,642);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//开启鼠标事件，高度自适应
		createjs.Touch.enable(stage);
		this.stop();
		this.main.rotation = 90;
		var _this =this;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhIAuQgDgTAAgVQADhzBMgFQAwABASA0IgGABQgPgvgtgBQhGAEgDBuIAAAQQARg2A3gBQBDAFAGBEQgEBHhHAEQg7AAgOhFgAhBAuQAKBAA4AAQBBgDAEhDQgFg+g+gFQhAACgEBHg");
	this.shape.setTransform(1645.9,-77.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhMABQAFhPBHgGQBLAEACBUIiTAAQAGBJBAADQA3gBANgqIAGACQgPAtg7ABQhIgFgEhPgAhGgBICNAAQgEhMhDgBQhAAFgGBIg");
	this.shape_1.setTransform(1618.1,-74.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AA7BUIAAhhQAAhBg3AAQg6AGgFBOIAABOIgFAAIAAilIAFAAIAAAzQATg0AsgBQA+AAgBBGIAABhg");
	this.shape_2.setTransform(1598.7,-74.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AhOABQAIhOBGgIQBIAIAGBOQgFBOhJAGQhHgGgHhOgAhHABQAFBJBCAFQBCgEAHhKQgHhJhCgHQhCAHgFBJg");
	this.shape_3.setTransform(1579.4,-74.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AA7ByIAAhjQAAg/g1AAQg8AGgFBOIAABOIgGAAIAAjjIAGAAIAABxQATg0AugCQA7ABAABEIAABjg");
	this.shape_4.setTransform(1560,-77.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhFBwIAAjdIAGAAIAAAwQATgxAtgBQBBAFAEBSQgCBShCABQgugBgTgxIAABngAg/gYQAFBJA8AEQA9gBABhMQgEhMg7gFQg8AFgEBMg");
	this.shape_5.setTransform(1541.4,-71.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgCBzIAAimIAFAAIAACmgAgKhuIAFgEIAQAaIgFADg");
	this.shape_6.setTransform(1529,-77.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAABIhZByIgFgEIBchxIhUhsIAEgEIBSBrIBShrIAFAEIhTBsIBbBxIgFAEg");
	this.shape_7.setTransform(1820,-68.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMABQAFhPBHgGQBLAEACBUIiTAAQAGBJBAADQA3gBANgqIAGACQgPAtg7ABQhIgFgEhPgAhGgBICNAAQgEhMhDgBQhAAFgGBIg");
	this.shape_8.setTransform(1800.1,-65.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA8BUIAAhhQAAhBg3AAQg7AGgFBOIAABOIgFAAIAAilIAFAAIAAAzQATg0AtgBQA8AAAABGIAABhg");
	this.shape_9.setTransform(1780.7,-66);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhOABQAIhOBGgIQBHAIAIBOQgHBOhIAGQhHgGgHhOgAhIABQAGBIBCAHQBDgFAFhKQgFhJhDgHQhCAHgGBJg");
	this.shape_10.setTransform(1761.4,-65.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA8ByIAAhjQAAg/g2AAQg8AGgFBOIAABOIgFAAIAAjjIAFAAIAABxQATg0AugCQA8ABgBBEIAABjg");
	this.shape_11.setTransform(1742,-68.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhFBwIAAjdIAGAAIAAAwQATgxAtgBQBBAFAEBSQgCBShCABQgugBgTgxIAABngAg/gYQAFBJA8AEQA9gBABhMQgEhMg7gFQg8AFgEBMg");
	this.shape_12.setTransform(1723.4,-63.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCBzIAAimIAFAAIAACmgAgKhuIAFgEIAQAaIgFADg");
	this.shape_13.setTransform(1711,-69);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhgpgATMDBUAAn");
	this.shape_14.setTransform(1257.7,-38.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#99FF00").ss(1,1,1).p("EhQjAAAMChHAAA");
	this.shape_15.setTransform(1154.7,-113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_2
	this.main = new lib.元件1();
	this.main.name = "main";
	this.main.parent = this;
	this.main.setTransform(640,0.1,1,1,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.1,400.5,1239.3,755.6);
// library properties:
lib.properties = {
	id: 'A6884732E68D459480F25FAFF18F0553',
	width: 640,
	height: 1030,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png?1527670629687", id:"Bitmap2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A6884732E68D459480F25FAFF18F0553'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;