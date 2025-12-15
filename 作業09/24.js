(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"24_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["24_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.圖層3 = function() {
	this.initialize(img.圖層3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1535,3726);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_12
	this.instance = new lib.圖層3();
	this.instance.setTransform(0,0,0.1227,0.1227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,188.4,457.4), null);


// stage content:
(lib._24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_38
	this.instance = new lib.元件1();
	this.instance.setTransform(286.2,525,1,1,0,0,0,94.2,228.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86).to({_off:false},0).wait(1).to({y:554.95},0).wait(1).to({y:573.5},0).to({_off:true},1).wait(11));

	// 圖層_37 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_86 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_graphics_87 = new cjs.Graphics().p("AAZEkQg2gGgngiQgogigOg1QgOg1ARgxQAEgMAGgKQgbgKgWgTQgoghgOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAygYAvQAnAPAdAiQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_graphics_88 = new cjs.Graphics().p("AgsGDQg3gGgngiQgogigOg1QgOg1ARgxQATg2AxgfIgBgDQgOg1ARgwQAEgMAGgKQgbgKgWgTQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAygYAvQAnAPAdAjQAkAqAFAyQAFA0gaAwQgUAngiAXQAEAOABAOQAFA0gaAwQgaAxguAYQgkASgoAAIgXgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_graphics_86,x:311.7069,y:292.041}).wait(1).to({graphics:mask_graphics_87,x:316.2069,y:304.041}).wait(1).to({graphics:mask_graphics_88,x:316.2069,y:313.541}).wait(12));

	// lady11
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86).to({_off:false},0).wait(14));

	// 圖層_36
	this.instance_2 = new lib.元件1();
	this.instance_2.setTransform(136.25,486,1,1,0,0,0,94.2,228.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({_off:true},1).wait(14));

	// 圖層_35 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_85 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_1_graphics_85,x:168.7069,y:259.041}).wait(15));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85).to({_off:false},0).wait(15));

	// 圖層_34
	this.instance_3 = new lib.元件1();
	this.instance_3.setTransform(219.8,487.6,1,1,0,0,0,94.2,228.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({_off:false},0).wait(1).to({x:200.65},0).to({_off:true},1).wait(15));

	// 圖層_33 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_83 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_2_graphics_84 = new cjs.Graphics().p("ABkDFQg3gGgngiQgRgQgNgUIgPAJQguAYg2gHQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghBAASQAyAOAiAqIAOARIAOgIQA/ghBAASQAyAOAjAqQAkAqAFAyQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_2_graphics_83,x:256.7069,y:265.041}).wait(1).to({graphics:mask_2_graphics_84,x:244.7069,y:262.541}).wait(16));

	// 圖層_15
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("ACaA8QgwgwgLAAQgmAEgWAAQgKAAgQgFQgPgFgLAAQgYAAhdAUIhNgHQAAgGAHgDQAxgUAmgVQBKgnAkAAQAGAAASAIQAUAIAJAAQAEAAAXgIQARgGARAGQAaALAhAmQAmArAHAnIABACg");
	this.shape_1.setTransform(243.425,265.975);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(83).to({_off:false},0).wait(17));

	// 圖層_32
	this.instance_4 = new lib.元件1();
	this.instance_4.setTransform(215.25,497.4,1,1,0,0,0,94.2,228.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(81).to({_off:false},0).wait(1).to({x:193.45},0).to({_off:true},1).wait(17));

	// 圖層_31 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_81 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AB4CsQg3gGgngiQgPgNgLgQQgXAhgkATQguAYg2gHQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqIAHAJQAXgeAlgUQA/ghBAASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgXgBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(81).to({graphics:mask_3_graphics_81,x:254.7069,y:274.041}).wait(1).to({graphics:mask_3_graphics_82,x:240.7069,y:274.041}).wait(18));

	// 圖層_17
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("AhhAhQgWgXgpgfQgoghgEgEQgIgIAAgGIBOAIIgEAAQAYAAA7ARQBDAVAOABQAYAFAsgFIA8gFIA6AMQABADgHAIIgUASIgkAmQgdAYggAAQiRAAgpgog");
	this.shape_2.setTransform(243.4017,275);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(81).to({_off:false},0).wait(19));

	// 圖層_30
	this.instance_5 = new lib.元件1();
	this.instance_5.setTransform(255.8,586.5,1,1,0,0,0,94.2,228.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({_off:false},0).wait(1).to({x:228.8,y:605.5},0).wait(1).to({x:200.65,y:619.25},0).wait(1).to({x:183.15},0).wait(1).to({x:151.55,y:631.85},0).wait(1).to({x:127.55},0).to({_off:true},1).wait(19));

	// 圖層_29 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_75 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AikDAQg3gGgngiQgogigOg1QgOg1ARgwQAWg+A/ghQA/ghBAASQAxANAkAqQAWgzA3gdQA/ghBAASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQguAYg2gHQg3gGgngiQgKgJgJgKIgFAJQgZAxguAYQgkASgpAAIgXgBg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AkmELQg3gGgngiQgogigOg1QgOg1ARgxQAWg9A/ghQA/ghBAASQAVAFASALQAAgdAJgbQAWg+A/ghQA/ghA/ASQAxANAkAqQAXgzA3gdQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAwguAYQguAYg2gHQg3gGgngiQgKgJgJgKIgFAJQgaAxguAYQguAYg1gHQgkgEgegRQAAAqgWAnQgaAxguAYQgkASgpAAIgXgBg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AneE4QgygXgagtQgig5AQhHQAQhGA4glQArgbA2AAQAwABAnAWQACgNAFgOQAWg+A/ggQA/ghA/ARQAVAGATALQgBgdAKgcQAWg+A+ggQA/ghA/ARQAyAOAjApQAYgzA3gcQA/ghA/ARQAyAOAkAqQAjAqAFA0QAGAzgaAxQgaAwguAYQguAXg3gGQg2gHgoghQgKgIgIgKIgFAJQgaAvguAYQguAYg3gGQgkgEgegRQAAApgVAoQgZAwguAYQguAYg3gGQgmgFgegSIgCAJQgMAzgoAlQgoAlgzAIQgNADgOAAQglAAgkgRg");
	var mask_4_graphics_79 = new cjs.Graphics().p("ApzFxQg2gdgYg+QgYg9AUg6QAUg4AxghQAzgiBBAJQA0AGAkAcIAEgWQARhGA3gkQArgdA3ABQAwABAmAXQADgOAEgOQAWg+A/ggQA/ghA/ARQAVAGASALQAAgdAJgcQAWg+A/ggQA/ghBAARQAxAOAkApQAXgzA3gcQA/giBAASQAyAOAjAqQAkAqAFA0QAFAzgaAxQgaAwguAYQguAYg2gGQg3gHgngiQgKgJgJgKIgFAKQgaAwguAYQguAXg2gFQglgFgdgQQgBAogVAoQgaAwguAYQguAYg1gGQgmgFgfgSIgCAJQgLAzgoAlQgoAlgzAIQgzAIgygWQgTgJgPgNQgEAzgfAoQglAwhBAOQgVAEgUAAQgpAAgkgTg");
	var mask_4_graphics_80 = new cjs.Graphics().p("Ar8GWQg2gbgagyQgagyALg7QAKg7ApgnQAqgmA8gGQA7gGAxAeQASALAPAPIABgEQAUg5AxggQAzgiBBAIQA0AGAkAdIAEgWQARhGA3gkQArgdA3ABQAwAAAmAXQACgOAFgNQAWg+A+ghQA/ghBAASQAUAFATALQgBgdAKgbQAWg+A/ghQA/ghBAASQAxANAjAqQAYg0A3gcQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgLgJgIgKIgFAJQgaAxguAYQguAYg2gHQglgEgdgRQgBAqgVAmQgaAxguAYQguAYg2gHQgmgFgfgRIgCAJQgLAygnAmQgoAlgzAIQgzAIgygXQgTgJgQgMQgDAzgfAoQglAwhBANQhAAOg2gdQgYgNgRgTQgLAigaAdQgnAtg4ALQgRAEgRAAQgmAAglgSg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_4_graphics_75,x:296.7069,y:362.041}).wait(1).to({graphics:mask_4_graphics_76,x:282.2069,y:364.041}).wait(1).to({graphics:mask_4_graphics_77,x:269.2069,y:371.541}).wait(1).to({graphics:mask_4_graphics_78,x:256.267,y:377.5615}).wait(1).to({graphics:mask_4_graphics_79,x:242.2185,y:383.4997}).wait(1).to({graphics:mask_4_graphics_80,x:227.7449,y:387.0481}).wait(20));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).wait(25));

	// 圖層_28
	this.instance_7 = new lib.元件1();
	this.instance_7.setTransform(248.5,546.95,1,1,0,0,0,94.2,228.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},0).wait(1).to({x:273.75,y:579.5},0).wait(1).to({x:299.2,y:566.5},0).wait(1).to({x:325.6},0).wait(1).to({x:359.6,y:579.5},0).wait(1).to({x:375.6,y:595.05},0).wait(1).to({x:389.05,y:619.25},0).wait(1).to({y:626.3},0).to({_off:true},1).wait(25));

	// 圖層_27 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_67 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AAPEzQgqgJghgbQgfgZgQgmQgRgmACgpQADgyAdgrIACgDQgxgIgjgeQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAxAOAjAqQAkAqAFAzQAFA0gaAwIgJAPQAyAIAmAfQAmAgAPAyQAQAygOAwQgMAtgjAiQgjAigtAMQgYAHgZAAQgSAAgSgEg");
	var mask_5_graphics_69 = new cjs.Graphics().p("ACqFbQg3gGgngiQgggcgQgoQgaATggAJQgqAMgrgJQgrgJghgbQgfgZgQgmQgRgmACgpQADgyAdgqIACgDQgwgJgkgeQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwIgIAPQAxAIAlAfQAiAdAQArIATgLQA/ggBAARQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AAjFbQg2gGgngiQgggcgQgoQgaATghAJQgqAMgrgJQgrgJghgbQgfgZgQgmQgRgmACgpQADgyAdgqIACgDQgwgJgkgeQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwIgIAPQAyAIAlAfQAiAdAQArIATgLQA+ggBAARQAkAKAdAYQAXgyA3gcQA/ghBAASQAyAOAjApQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg2gGgnghIgFAJQgaAxguAYQgkASgpAAIgXgBg");
	var mask_5_graphics_71 = new cjs.Graphics().p("Ah3FbQg3gGgngiQgggcgQgoQgaATghAJQgqAMgrgJQgrgJghgbQgfgZgQgmQgRgmACgpQADgyAdgqIACgDQgwgJgkgeQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwIgIAPQAyAIAlAfQAiAdAQArIATgLQA/ggBAARQAkAKAcAYQAXgyA3gcQA/ghBAASQAyAOAjApQAMANAIAPQAYgyA2gcQA/ghBAASQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgYgVgPgcIgFAJQgaAxguAYQguAYg2gHQg2gGgnghIgFAJQgaAxgtAYQgkASgpAAIgXgBg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AI1F0Qg3gGgngiQgmghgPgyQgeAHghgEQg3gGgngiQgYgVgPgcIgFAJQgaAxguAYQguAYg2gHQg1gGgnghIgFAJQgaAxguAYQguAYg2gHQg3gGgngiQgggcgQgoQgaATghAJQgqAMgrgJQgrgJghgbQgfgZgQgmQgRgmACgpQADgyAdgqIACgDQgwgJgkgeQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwIgIAPQAyAIAlAfQAiAdAQArIATgKQA/ghBAASQAkAKAdAXQAXgyA3gcQA+ghBAASQAyAOAjAqQAMANAIAOQAYgyA2gcQA/ghBAASQAyAOAjAqQAaAdAJAiQAtgNAtANQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AKZHiQg3gGgngiQgogigOg1QgMgxANgtQgaAEgbgDQg3gGgngiQgmghgPgyQgeAHghgEQg3gGgngiQgYgVgPgcIgFAJQgaAxguAYQgtAYg2gHQg2gGgnghIgFAJQgaAxguAYQguAYg2gHQg3gGgngiQgggcgQgoQgaATghAJQgqAMgrgJQgrgJghgbQgfgZgQgmQgRglACgpQADgyAdgrIACgDQgwgJgkgeQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwIgIAPQAyAIAlAfQAiAdAQAsIATgLQA/ghBAASQAkAKAdAYQAXgzA3gcQA/ghA/ASQAyAOAjAqQAMANAIAPQAYgzA2gcQA/ghBAASQAyAOAjAqQAaAdAJAjQAtgNAtANQAyAOAjAqQAkApAFAzQAEAjgLAiQAogKApAMQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AJmIoQg3gagcg8Qgdg7APg7QAFgSAIgPQgMgUgGgYQgNgxANgtQgZAEgcgDQg2gGgogiQgmghgOgyQgeAHgigEQg2gGgogiQgYgUgPgcIgEAJQgaAwguAYQgtAYg3gHQg1gGgnghIgFAJQgaAxguAYQguAYg3gHQg2gGgogiQgggcgPgoQgbATghAJQgpAMgrgJQgsgJghgbQgegYgRgmQgQgmACgpQACgyAdgrIACgDQgwgJgkgeQgngigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAkAqQAjAqAFAzQAGA0gaAwIgJAPQAyAIAlAfQAjAdAQAsIATgLQA/ghA/ASQAlAKAcAYQAYgzA3gcQA/ghA+ASQAyAOAkAqQALANAJAPQAXgzA3gcQA/ghA/ASQAyAOAkAqQAZAdAKAjQAtgNAsANQAyAOAkAqQAjAqAFAzQAEAigLAiQApgKAoAMQAyAOAkAqQAjAqAFAzQAFAtgTArQAXAkADAwQAEBCgkAxQgkAyg/AQQgZAGgXAAQglAAgigPg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_5_graphics_67,x:276.7069,y:313.041}).wait(1).to({graphics:mask_5_graphics_68,x:282.6481,y:326.8024}).wait(1).to({graphics:mask_5_graphics_69,x:295.7069,y:330.541}).wait(1).to({graphics:mask_5_graphics_70,x:309.2069,y:330.541}).wait(1).to({graphics:mask_5_graphics_71,x:324.7069,y:330.541}).wait(1).to({graphics:mask_5_graphics_72,x:335.2069,y:333.041}).wait(1).to({graphics:mask_5_graphics_73,x:345.2069,y:344.041}).wait(1).to({graphics:mask_5_graphics_74,x:345.7541,y:352.4421}).wait(26));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({_off:false},0).wait(33));

	// 圖層_26
	this.instance_9 = new lib.元件1();
	this.instance_9.setTransform(255.8,506.5,1,1,0,0,0,94.2,228.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(61).to({_off:false},0).wait(1).to({x:235.8,y:525.5},0).wait(1).to({x:205.8,y:538.5},0).wait(1).to({x:177.8,y:517.5},0).wait(1).to({x:158.8,y:501.5},0).wait(1).to({x:142.75,y:475.45},0).to({_off:true},1).wait(33));

	// 圖層_25 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_61 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AhjEfQg3gGgngiQgogigOg1QgOg1ARgxQAWg9A/ghQAmgUAmgBIgEgMQgOg1ARgxQAWg+A+ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAwguAYQgjASgpABQAHASACAUQAFA0gaAwQgaAxguAYQgjASgpAAIgXgBg");
	var mask_6_graphics_63 = new cjs.Graphics().p("AjRFvQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ARQABgZAIgXQAWg+A/ghQAmgUAlgBIgEgMQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgjASgpABQAHASACATQAFA0gaAwQgaAxguAYQguAYg2gHQgNgCgMgDQgCAmgUAlQgaAxguAYQgkASgpAAIgXgBg");
	var mask_6_graphics_64 = new cjs.Graphics().p("AgwFvQg2gGgogiQghgdgQgrQgSAfgfAWQgnAdgtAFQgpAEgogQQgogPgcgfQgcgegNgpQgNgoAEgpQAEgnASgiQASgjAegXQAYgRAegJQAegKAeACQAtADAoAaQAoAZAXAoQALATAGAVQAYgkArgWQA+ghA+ARQABgZAJgXQAWg+A/ghQAlgUAmgBIgDgMQgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAkAqQAjAqAFAzQAGA0gaAwQgaAxguAYQgkASgoABQAGASACATQAGA0gaAwQgaAxguAYQguAYg3gHQgNgCgNgDQgCAmgTAlQgaAxguAYQgkASgpAAIgXgBg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AAyFvQg2gGgngiQgigdgPgrQgSAfgfAWQgnAdguAFQgpAEgogQQgngPgdgfQgcgegNgpQgNgoAEgpQACgNADgMQgYADgZgDQg3gGgngiQgogigOg0QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQADAagGAZQATgDATABQAuADAoAaQAoAZAWAoQAMATAGAVQAYgkAqgWQA+ghA/ARQABgZAIgXQAWg+A/ghQAmgUAmgBIgEgMQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgjASgpABQAHASACATQAFA0gaAwQgaAxguAYQguAYg2gHQgOgCgMgDQgCAmgUAlQgaAxguAYQgkASgpAAIgXgBg");
	var mask_6_graphics_66 = new cjs.Graphics().p("AB4GmQg3gGgngiQghgdgPgrQgSAfgfAWQgnAdguAFQgpAEgogQQgngPgdgfQgcgegNgpQgNgoAEgpQACgNADgMQgYADgZgDQg3gGgngiQgogigOg1QgOg0ARgxIAFgLQg3gHgnghQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFAsgSApQANACAOAEQAyAOAjAqQAkAqAFAzQADAagGAYQATgDATABQAuADAoAaQAoAaAWAoQAMATAGAVQAXgkAqgWQA/ghA/ARQABgZAIgYQAWg9A/ghQAmgUAmgBIgEgMQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAXQgjASgpABQAHASACAUQAFA0gaAwQgaAxguAYQguAYg2gHQgOgCgMgDQgCAmgUAlQgaAxguAYQgkASgpAAIgXgBg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_6_graphics_61,x:287.7069,y:270.041}).wait(1).to({graphics:mask_6_graphics_62,x:279.7069,y:281.541}).wait(1).to({graphics:mask_6_graphics_63,x:268.7069,y:289.541}).wait(1).to({graphics:mask_6_graphics_64,x:252.576,y:289.541}).wait(1).to({graphics:mask_6_graphics_65,x:242.7069,y:289.541}).wait(1).to({graphics:mask_6_graphics_66,x:235.7069,y:284.041}).wait(34));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(61).to({_off:false},0).wait(39));

	// 圖層_24
	this.instance_11 = new lib.元件1();
	this.instance_11.setTransform(156.5,521.5,1,1,0,0,0,94.2,228.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(53).to({_off:false},0).wait(1).to({y:558.95},0).wait(1).to({y:587.95},0).wait(1).to({x:145.5,y:607.95},0).wait(1).to({x:120.8,y:623.95},0).wait(1).to({x:101.1},0).wait(1).to({x:78.1,y:643.95},0).wait(1).to({x:65.1,y:658.35},0).to({_off:true},1).wait(39));

	// 圖層_23 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_53 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_7_graphics_54 = new cjs.Graphics().p("AAFFRQg2gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghIAMgGIgCAAQg3gGgnghQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYIgGADQALABAMAEQAyANAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_7_graphics_55 = new cjs.Graphics().p("AAKHiQg2gGgngiQgogigOg1QgOg1ARgxQATg0AvgfQgNgIgMgKQgogigOg1QgOg1ARgwQAWg+A/ghIAMgGIgCAAQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYIgGADQALABAMAEQAyAOAjAqQAkAqAFAyQAFA0gaAwQgTAlggAXQAXAOASAXQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_7_graphics_56 = new cjs.Graphics().p("Ag2JaQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQgLgUgHgXQgOg1ARgxQATg0AvgfQgNgIgMgKQgoghgOg1QgOg1ARgxQAWg+A/ghIAMgGIgCAAQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYIgGADQALABAMAEQAyAOAjAqQAkAqAFAzQAFA0gaAwQgTAkggAXQAXAOASAXQAkAqAFAzQAFA0gaAwQgZAwguAYQASAgAEAkQAFA0gaAwQgaAxguAYQgkASgoAAIgXgBg");
	var mask_7_graphics_57 = new cjs.Graphics().p("AiQLIQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQAvgYAuADIgBgCQgOg1ARgxQAWg+A/ghQgLgUgHgXQgOg1ARgxQATgzAugfQgNgIgMgKQgngigOg1QgOg1ARgxQAWg+A+ghIAMgGIgCAAQg2gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA+ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYIgGADQALABAMAEQAyAOAjAqQAkAqAFAzQAFA0gaAwQgTAlggAXQAXAOASAXQAkApAFAzQAFA0gaAwQgZAwguAYQASAgAEAkQAFA0gaAwQgaAxguAYQgqAWgzgEQAEAOACAPQAFA0gaAwQgaAxgtAYQgkASgpAAIgXgBg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AjQLuQg7gBgygpQgxgpgMg7QgIgoALgpQAKgpAcgfQAogsA9gMQAegFAcAEQAXgcAjgSQAugYAuADIAAgDQgOg1ARgxQAWg+A+ggQgMgUgGgYQgOg1ARgwQASg0AwgfQgOgIgLgKQgoghgOg2QgOg1ARgxQAWg+A/ggIAMgGIgCAAQg3gHgogiQgmghgOg2QgOg1ARgxQAVg+A/ggQA/ghA/ARQAyAOAkAqQAkAqAEA0QAGAzgaAxQgaAwguAYIgHAEQAMABAMADQAxAOAkAqQAjAqAGA0QAFAzgaAxQgUAlgfAXQAWAOATAWQAjAqAGAzQAFAzgaAxQgaAwgtAYQASAgADAkQAGAzgaAxQgaAwguAYQgrAXgygEQAEAOABAPQAGAzgaAxQgaAwguAYQgtAYg2gGQgPAUgXARQgxAlg5AAIgEAAg");
	var mask_7_graphics_59 = new cjs.Graphics().p("Am/MUQg2gdgYg9QgYg9AUg6QAUg5AzghQAzghBBAJQBBAIApAuIAMANQgDgfAIggQALgpAbgfQAogsA+gMQAegFAcADQAVgbAjgSQAugZAvADIgBgCQgOg1ARgxQAWg+A/ggQgLgUgHgYQgOg0ARgxQATg0AvgfQgNgIgMgKQgoghgOg2QgOg1ARgxQAWg+A/ggIAMgGIgCAAQg3gHgngiQgoghgOg2QgOg1ARgxQAWg+A/ggQA/ghBAARQAyAOAjAqQAkAqAFA0QAFAzgaAxQgaAwguAYIgGADQALACAMADQAyAOAjAqQAkAqAFA0QAFAzgaAxQgUAlgfAXQAXAOASAWQAkAqAFA0QAFAygaAxQgaAwgtAYQASAfAEAlQAFAzgaAxQgaAwguAYQgrAWgygEQAEAOACAQQAFAzgaAxQgaAwguAYQguAYg2gGQgPAUgWARQgzAmg6gBQg8gBgxgpQgUgQgNgTIABAOQACBCgmAwQglAwhAANQgUAEgTAAQgqAAglgUg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AnfOGQg3gHgngiQgoghgOg2QgOg1ARgxQAWg+A/ggQAxgaAwAFQgEglAMgkQAUg5AzghQAzghBBAIQBBAJApAtIAMAOQgDgfAIggQALgqAbgfQAogsA9gLQAegFAcADQAWgbAjgTQAvgYAuADIgBgCQgOg1ARgxQAWg+A/gfQgLgUgHgYQgOg1ARgxQATg0AvgfQgNgIgMgKQgogigOg1QgOg1ARgxQAWg+A/ghIAMgFIgCgBQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYIgGADQALACAMADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgTAlggAXQAXAPASAWQAkAqAFAzQAFA0gaAwQgZAwguAYQASAfAEAkQAFA0gaAwQgaAxguAYQgqAWgzgEQAEAOACAPQAFA0gaAwQgaAxguAYQgtAYg3gHQgPAVgWAQQgzAmg7gBQg7gBgxgpQgTgQgOgSIABAOQACBBgmAwQglAwhAAOQgbAFgZgCQAFA0gaAwQgaAwguAYQgkATgpAAIgXgBg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_7_graphics_53,x:181.7069,y:280.041}).wait(1).to({graphics:mask_7_graphics_54,x:184.2069,y:296.541}).wait(1).to({graphics:mask_7_graphics_55,x:184.7069,y:311.041}).wait(1).to({graphics:mask_7_graphics_56,x:184.2069,y:323.041}).wait(1).to({graphics:mask_7_graphics_57,x:175.2069,y:334.041}).wait(1).to({graphics:mask_7_graphics_58,x:166.85,y:337.6731}).wait(1).to({graphics:mask_7_graphics_59,x:151.2185,y:343.498}).wait(1).to({graphics:mask_7_graphics_60,x:141.7069,y:353.016}).wait(40));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53).to({_off:false},0).wait(47));

	// 圖層_22
	this.instance_13 = new lib.元件1();
	this.instance_13.setTransform(128.5,398.55,1,1,0,0,0,94.2,228.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(41).to({_off:false},0).wait(1).to({x:110.15},0).wait(1).to({x:85.15,y:416.55},0).wait(1).to({x:74.15,y:449.95},0).wait(1).to({x:86.15,y:468.95},0).wait(1).to({x:97.8,y:485.9},0).wait(1).to({y:508.95},0).wait(1).to({x:85.8,y:527.95},0).wait(1).to({x:101.1,y:546.95},0).wait(1).to({y:579.5},0).wait(1).to({x:128.1,y:606.5},0).wait(1).to({x:138.1,y:619.25},0).to({_off:true},1).wait(47));

	// 圖層_21 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_41 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_8_graphics_42 = new cjs.Graphics().p("AiQDUQg3gGgngiQgogigOg1QgOg1ARgwQAWg+A/ghQA/ghBAASQAXAGAUAMQAXg1A4geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAvQgaAxguAYQguAYg2gHQgngFgggTIgHAOQgaAxgtAYQgkASgpAAIgXgBg");
	var mask_8_graphics_43 = new cjs.Graphics().p("Ak5DvQg+gQgkgwQgjgwADhAQADg/AogtQAogsBAgKQA/gKA0AfQAVANARASIAAgBQAWg+A/ghQA+ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAvQgaAxguAYQguAYg2gHQgogFgfgTIgHAOQgaAxguAYQguAYg2gHQg2gGgngiIgNgMQgLAhgYAbQgYAbghAPQghAPgkAAQgXAAgYgGg");
	var mask_8_graphics_44 = new cjs.Graphics().p("AlTGDQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQAYgMAYgGIgLgNQgjgvADhAQADhAAogtQAogsBAgKQA/gKA0AfQAWAMAQATIAAgBQAWg+A/ghQA+ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQgngFgggTIgHAOQgaAxguAXQguAYg2gHQg2gGgnghIgNgMQgLAggYAbQgYAbghAPQgUAJgWAEIADAEQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_8_graphics_45 = new cjs.Graphics().p("AlsH7Qg3gGgngiQgogigOg1QgOg1ARgxQAUg3AygfQgPgXgIgdQgOg1ARgxQAWg9A/ghQAYgMAYgGIgLgNQgjgwADhAQADhAAogtQAogsBAgKQA/gKA0AfQAWAMAQATIAAgBQAWg+A+ghQA/ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQgngFgggTIgHAOQgaAxguAYQguAYg2gHQg3gGgmgiIgNgMQgLAhgYAbQgYAbghAPQgUAJgWAEIADAEQAkApAFAzQAFA0gaAwQgVAogkAYQAYAjAEApQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_8_graphics_46 = new cjs.Graphics().p("Ak6J4Qg3gGgngiQgogigOg1QgOg1ARgxQAJgZAPgUQgMgHgLgJQgogigOg1QgOg1ARgxQAUg3AygfQgPgXgIgdQgOg0ARgxQAWg+A/ghQAYgMAYgGIgLgNQgjgwADhAQADhAAogtQAogsBAgKQA/gKA0AfQAWAMAQATIAAgBQAWg+A+ghQA/ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQgngFgggTIgHAOQgaAxguAYQguAYg2gHQg3gGgmgiIgNgMQgLAhgYAbQgYAbghAPQgUAJgWAEIADAEQAkAqAFAzQAFAzgaAwQgVAogkAYQAYAjAEApQAFA0gaAwIgMAUQAXAOATAXQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_8_graphics_47 = new cjs.Graphics().p("Ah8KqQg3gGgngiQgdgZgQgkQgYAEgbgDQg3gGgngiQgogigOg1QgOg1ARgxQAJgZAPgUQgMgHgLgJQgogigOg1QgOg1ARgxQAUg3AygfQgPgWgIgdQgOg1ARgxQAWg+A/ghQAYgMAYgGIgLgNQgjgwADhAQADhAAogtQAogsBAgKQA/gKA0AfQAWAMAQATIAAgBQAWg+A+ghQA/ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQgngFgggTIgHAOQgaAxguAYQguAYg2gHQg3gGgmgiIgNgMQgLAhgYAbQgYAbghAPQgUAJgWAEIADAEQAkAqAFAzQAFA0gaAvQgVAogkAYQAYAjAEApQAFA0gaAwIgMAUQAXAOATAXQARATAKAWQAngIAnALQAyAOAiAqQAkAqAFAzQAFA0gaAwQgaAxgtAYQgkASgpAAIgXgBg");
	var mask_8_graphics_48 = new cjs.Graphics().p("AjMMnQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghIAMgGQgGgKgFgLQgYAEgbgDQg3gGgngiQgogigOg1QgOg1ARgxQAJgZAPgUQgMgHgLgJQgogigOg1QgOg1ARgwQAUg3AygfQgPgXgIgdQgOg1ARgxQAWg+A/ghQAYgMAYgGIgLgNQgjgwADhAQADhAAogtQAogsBAgKQA/gKA0AfQAWAMAQATIAAgBQAWg+A+ghQA/ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQgngFgggTIgHAOQgaAxguAYQguAYg2gHQg3gGgmgiIgNgMQgLAhgYAbQgYAbghAPQgUAJgWAEIADAEQAkAqAFAzQAFA0gaAwQgVAogkAYQAYAjAEAoQAFA0gaAwIgMAUQAXAOATAXQARATAKAWQAngIAnALQAyAOAiAqQAkAqAFAzQAFA0gaAwQgaAxgtAYIgMAFQAVAiAEAmQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_8_graphics_49 = new cjs.Graphics().p("AjMOpQg3gGgngiQgogigOg1QgOg1ARgxQAQgrAigdQgnghgOg1QgOg1ARgxQAWg+A/ghIAMgGQgGgKgFgLQgYAEgbgDQg3gGgngiQgogigOg1QgOg1ARgxQAJgZAPgUQgMgHgLgJQgogigOg0QgOg1ARgxQAUg3AygfQgPgXgIgdQgOg1ARgxQAWg+A/ghQAYgMAYgGIgLgNQgjgwADhAQADhAAogtQAogsBAgKQA/gKA0AfQAWAMAQATIAAgBQAWg+A+ghQA/ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQgngFgggTIgHAOQgaAxguAYQguAYg2gHQg3gGgmgiIgNgMQgLAhgYAbQgYAbghAPQgUAJgWAEIADAEQAkAqAFAzQAFA0gaAwQgVAogkAYQAYAjAEApQAFA0gaAwIgMATQAXAOATAXQARATAKAWQAngIAnALQAyAOAiAqQAkAqAFAzQAFA0gaAwQgaAxgtAYIgMAFQAVAiAEAmQAFA0gaAwQgPAdgWAUQAJAIAIAKQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_8_graphics_50 = new cjs.Graphics().p("AhhP/Qg2gdgYg9QgTgzAKgwIgUgBQg3gHgngiQgoghgOg2QgOg1ARgxQAQgrAigcQgngigOg1QgOg1ARgxQAWg+A/ggIAMgGQgGgKgFgLQgYAEgbgDQg3gHgngiQgoghgOg2QgOg1ARgwQAJgYAPgUQgMgIgLgJQgoghgOg2QgOg1ARgxQAUg2AyggQgPgXgIgdQgOg1ARgxQAWg+A/ggQAYgNAYgFIgLgNQgjgxADhAQADhAAogsQAogtBAgJQA/gKA0AeQAWANAQASIAAgBQAWg+A+ggQA/ghBAARQAXAGAUANQAXg2A5gdQA/ghBAARQAyAOAjAqQAkAqAFA0QAFAzgaAxQgaAwguAYQguAYg2gGQgngFgggTIgHAOQgaAwguAYQguAYg2gGQg3gHgmgiIgNgMQgLAigYAbQgYAbghAPQgUAJgWAEIADADQAkAqAFA0QAFAzgaAxQgVAogkAXQAYAjAEAqQAFAzgaAxIgMATQAXAPATAWQARAUAKAWQAngJAnALQAyAOAiApQAkAqAFA0QAFAzgaAxQgaAwgtAYIgMAGQAVAhAEAnQAFAzgaAxQgPAcgWAUQAJAIAIAKQAkAqAFA0QADAcgHAbIAVACQBCAIApAtQApAtADBCQACBBglAxQgmAwhAANQgUAEgSAAQgqAAglgUg");
	var mask_8_graphics_51 = new cjs.Graphics().p("AgESyQg3gHgngiQgoghgOg2QgOg1ARgxQAWg+A/ggIACgBQgSgFgRgJQg2gegYg9QgTgyAKgwIgUgCQg3gGgngiQgogigOg1QgOg1ARgxQAQgrAigdQgnghgOg1QgOg1ARgxQAWg+A/ghIAMgFQgGgLgFgLQgYAFgbgEQg3gGgngiQgoghgOg1QgOg1ARgxQAJgZAPgTQgMgIgLgJQgogigOg1QgOg1ARgxQAUg2AyggQgPgXgIgdQgOg1ARgxQAWg+A/ghQAYgMAYgFIgLgOQgjgwADhAQADhAAogtQAogsBAgKQA/gKA0AfQAWANAQASIAAgBQAWg+A+ghQA/ghBAASQAXAGAUANQAXg2A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQgngEgggTIgHANQgaAxguAYQguAYg2gHQg3gGgmgiIgNgMQgLAhgYAbQgYAbghAPQgUAKgWADIADAEQAkAqAFAzQAFA0gaAwQgVApgkAXQAYAjAEApQAFA0gaAwIgMAUQAXAOATAXQARAUAKAVQAngIAnALQAyAOAiAqQAkAqAFAzQAFAzgaAwQgaAxgtAYIgMAGQAVAhAEAmQAFA0gaAwQgPAdgWAUQAJAIAIAKQAkAqAFAzQADAdgHAbIAVACQBCAIApAtQApAtADBBQACBCglAwQgXAegiAQQAwAPAiAoQAkAqAFA0QAFAzgaAxQgaAwguAYQgkATgpAAIgWgBg");
	var mask_8_graphics_52 = new cjs.Graphics().p("ACKUeQgvgMgignQgjgmgJgwQgIgqANgpIgWgBQg3gHgngiQgoghgOg2QgOg1ARgxQAWg+A/ggIACgBQgSgFgRgJQg2gegYg9QgTgyAKgwIgUgCQg3gGgngiQgogigOg1QgOg1ARgxQAQgrAigdQgnghgOg1QgOg1ARgxQAWg+A/ggIAMgFQgGgKgFgMQgYAFgbgEQg3gGgngiQgogigOg1QgOg1ARgxQAJgZAPgTQgMgIgLgJQgogigOg1QgOg1ARgxQAUg2AyggQgPgXgIgdQgOg1ARgxQAWg+A/ghQAYgMAYgFIgLgOQgjgwADhAQADhAAogtQAogsBAgKQA/gKA0AfQAWANAQASIAAgBQAWg+A+ghQA/ghBAASQAXAGAUANQAXg2A5geQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQgngEgggTIgHANQgaAxguAYQguAYg2gHQg3gGgmgiIgNgMQgLAhgYAbQgYAbghAPQgUAKgWADIADAEQAkAqAFAzQAFA0gaAwQgVApgkAXQAYAjAEApQAFA0gaAwIgMAUQAXAOATAXQARAUAKAVQAngIAnALQAyAOAiAqQAkAqAFAzQAFA0gaAwQgaAwgtAYIgMAGQAVAhAEAmQAFA0gaAwQgPAdgWAUQAJAIAIAKQAkAqAFAzQADAdgHAbIAVACQBCAIApAtQApAtADBBQACBCglAwQgXAegiAQQAwAPAiAoQAkAqAFA0QADAhgJAgQAPAAAQACQA7AJAnApQAXAYANAhQAMAgAAAiQAAAogSAmQgTAmgfAYQggAZgpAIQgSAEgSAAQgWAAgWgGg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_8_graphics_41,x:174.7069,y:161.041}).wait(1).to({graphics:mask_8_graphics_42,x:162.2069,y:165.041}).wait(1).to({graphics:mask_8_graphics_43,x:147.6363,y:168.234}).wait(1).to({graphics:mask_8_graphics_44,x:142.7069,y:182.541}).wait(1).to({graphics:mask_8_graphics_45,x:140.2069,y:194.541}).wait(1).to({graphics:mask_8_graphics_46,x:140.2069,y:207.041}).wait(1).to({graphics:mask_8_graphics_47,x:140.2069,y:212.041}).wait(1).to({graphics:mask_8_graphics_48,x:140.2069,y:224.541}).wait(1).to({graphics:mask_8_graphics_49,x:140.2069,y:237.541}).wait(1).to({graphics:mask_8_graphics_50,x:140.2069,y:247.998}).wait(1).to({graphics:mask_8_graphics_51,x:140.2069,y:264.016}).wait(1).to({graphics:mask_8_graphics_52,x:140.2069,y:275.3119}).wait(48));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(41).to({_off:false},0).wait(59));

	// 圖層_20
	this.instance_15 = new lib.元件1();
	this.instance_15.setTransform(171,405.05,1,1,0,0,0,94.2,228.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({_off:false},0).wait(1).to({x:151.55,y:432.05},0).wait(1).to({x:132.55,y:446.1},0).wait(1).to({x:110.15,y:458.05},0).wait(1).to({y:480},0).wait(1).to({x:128.15,y:495},0).wait(1).to({y:525.95},0).wait(1).to({y:546.95},0).wait(1).to({y:567.95},0).wait(1).to({y:579.5},0).to({_off:true},1).wait(59));

	// 圖層_19 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_31 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_9_graphics_32 = new cjs.Graphics().p("AgsEuQg3gGgngiQgogigOg1QgOg1ARgxQAWg8A6gfQgXgcgKgmQgOg1ARgxQAWg+A/ghQA+ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgYAugrAXQAhApAFAxQAFA0gaAwQgaAxguAYQgkASgoAAIgXgBg");
	var mask_9_graphics_33 = new cjs.Graphics().p("AiQGIQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA1gcA1AIQgCghALgfQAWg8A6ggQgXgcgKgmQgOg1ARgxQAWg+A+ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgYAugrAYQAhApAFAwQAFA0gaAwQgaAxguAYQguAYg2gHIgGgBQACAvgYAsQgaAxgtAYQgkASgpAAIgXgBg");
	var mask_9_graphics_34 = new cjs.Graphics().p("AkhG6Qg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAoALAfAdQACgPAFgPQAWg+A/ghQA1gbA0AIQgCghALggQAWg8A6ggQgXgcgKgmQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgYAugrAYQAhApAFAxQAFAzgaAwQgaAxguAYQguAYg2gHIgGgBQACAvgYAsQgaAxguAYQguAYg2gHQg2gGgngiIgFgEQgEAbgPAbQgaAxguAYQgkASgpAAIgXgBg");
	var mask_9_graphics_35 = new cjs.Graphics().p("AlTIeQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghIAMgFQgNg0AQgwQAWg+A/ghQA/ggBAARQAoALAfAdQACgPAFgPQAWg9A/ghQA0gcA1AIQgCghALggQAWg8A6ggQgXgcgKgmQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgYAugrAYQAhApAFAxQAFA0gaAwQgaAwguAYQguAYg2gHIgGgBQACAvgYAsQgaAxguAYQguAYg2gHQg2gGgngiIgFgEQgEAbgPAbQgaAxguAYIgLAFQADALABALQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_9_graphics_36 = new cjs.Graphics().p("AizKCQg3gGgngiQgogigOg1QgJglAFgjIgIgBQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghIAMgFQgNg0AQgwQAWg9A/ghQA/ghBAASQAoALAfAdQACgPAFgPQAWg+A/ghQA0gcA1AIQgCghALggQAWg8A6ggQgXgcgKgmQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgYAugrAYQAhApAFAxQAFA0gaAwQgaAxguAYQguAYg2gHIgGgBQACAugYAsQgaAxguAYQguAYg2gHQg2gGgngiIgFgEQgEAbgPAbQgaAxguAYIgLAFQADALABALQACAXgDAWQARABASAFQAyAOAjAqQAjAqAFAzQAFA0gZAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_9_graphics_37 = new cjs.Graphics().p("AhjLmQg3gGgngiQgogigOg1QgMgxANgtQgOgIgNgLQgogigOg1QgJglAFgjIgIgBQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghIAMgFQgNgzAQgwQAWg+A/ghQA/ghBAASQAoALAfAdQACgPAFgPQAWg+A/ghQA0gcA1AIQgCghALggQAWg8A6ggQgXgcgKgmQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgYAugrAYQAhApAFAxQAFA0gaAwQgaAxguAYQguAYg2gHIgGgBQACAvgYAsQgaAwguAYQguAYg2gHQg2gGgngiIgFgDQgEAagPAbQgaAxguAYIgLAFQADALABALQACAXgDAWQARABASAFQAyAOAjAqQAjAqAFAzQAEAigLAhQAaAPAUAZQAkAqAFAzQAFA0gaAwQgaAxguAYQgjASgpAAIgXgBg");
	var mask_9_graphics_38 = new cjs.Graphics().p("AhPNtQg3gGgngiQgogigOg1QgOg1ARgxQAPgpAggcIgQgMQgogigOg1QgMgxANgtQgOgIgNgLQgogigOg1QgJglAFgjIgIgBQg3gGgngiQgogigOg1QgOg1ARgwQAWg+A/ghIAMgFQgNg0AQgwQAWg+A/ghQA/ghBAASQAoALAfAdQACgPAFgPQAWg+A/ghQA0gcA1AIQgCghALggQAWg8A6ggQgXgcgKgmQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgYAugrAYQAhApAFAxQAFA0gaAwQgaAxguAYQguAYg2gHIgGgBQACAvgYAsQgaAxguAYQguAYg2gHQg2gGgngiIgFgEQgEAbgPAbQgaAxguAYIgLAFQADAKABALQACAXgDAWQARABASAFQAyAOAjAqQAjAqAFAzQAEAigLAhQAaAPAUAZQAkAqAFAzQAFA0gaAwQgOAagTATQASANAPATQAkAqAFAzQAFA0gaAwQgaAxguAYQgjASgpAAIgXgBg");
	var mask_9_graphics_39 = new cjs.Graphics().p("AhpPCQg1gegXg+QgXg+AVg5IAJgUQgnghgOg1QgOg1ARgxQAPgpAggcIgQgMQgogigOg1QgMgxANgtQgOgIgNgLQgogigOg1QgJglAFgjIgIgBQg3gGgngiQgogigOg0QgOg1ARgxQAWg+A/ghIAMgFQgNg0AQgwQAWg+A/ghQA/ghBAASQAoALAfAdQACgPAFgPQAWg+A/ghQA0gbA1AIQgCgiALggQAWg8A6ggQgXgcgKgmQgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgYAugrAYQAhApAFAxQAFA0gaAwQgaAxguAYQguAYg2gHIgGAAQACAugYAsQgaAxguAYQguAYg2gHQg2gGgngiIgFgEQgEAcgPAaQgaAxguAYIgLAFQADALABALQACAXgDAWQARABASAFQAyAOAjApQAjAqAFAzQAEAjgLAhQAaAPAUAYQAkAqAFAzQAFA0gaAwQgOAbgTATQASANAPASQAkAqAFAzQAFAygYAvIAPAPQApAtACBCQACBCgnAwQgmAvhBANQgSAEgSAAQgrAAgmgVg");
	var mask_9_graphics_40 = new cjs.Graphics().p("AhNRAQg5gGgtgrQgsgqgJg5QgIg5Aeg2QAQgbAVgTIgIgTQgXg9AVg6IAJgTQgngigOg1QgOg1ARgxQAPgoAggcIgQgNQgoghgOg2QgMgwANguQgOgIgNgLQgoghgOg2QgJgkAFgiIgIgBQg3gHgngiQgoghgOg2QgOg1ARgxQAWg+A/ggIAMgGQgNg0AQgwQAWg+A/ggQA/ghBAARQAoAMAfAdQACgQAFgPQAWg+A/ggQA0gcA1AIQgCgiALggQAWg7A6ggQgXgcgKgnQgOg1ARgxQAWg+A/ggQA/ghBAARQAyAOAjAqQAkAqAFA0QAFAzgaAxQgYAugrAYQAhAoAFAyQAFAzgaAxQgaAwguAYQguAYg2gGIgGgBQACAvgYAsQgaAwguAYQguAYg2gGQg2gHgngiIgFgEQgEAcgPAbQgaAwguAYIgLAGQADALABALQACAXgDAWQARABASAEQAyAOAjAqQAjAqAFAzQAEAigLAhQAaAPAUAYQAkAqAFA0QAFAzgaAxQgOAagTATQASANAPASQAkAqAFA0QAFAygYAvIAPAOQApAuACBCQACBCgnAvQgJAMgMAKQAJATAFAVQAMA0gRAvQgUA2g0AhQgrAcgxAAIgQgBg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_9_graphics_31,x:197.7069,y:166.041}).wait(1).to({graphics:mask_9_graphics_32,x:195.2069,y:179.041}).wait(1).to({graphics:mask_9_graphics_33,x:185.2069,y:188.041}).wait(1).to({graphics:mask_9_graphics_34,x:170.7069,y:193.041}).wait(1).to({graphics:mask_9_graphics_35,x:165.7069,y:203.041}).wait(1).to({graphics:mask_9_graphics_36,x:165.7069,y:213.041}).wait(1).to({graphics:mask_9_graphics_37,x:165.7069,y:223.041}).wait(1).to({graphics:mask_9_graphics_38,x:165.7069,y:236.541}).wait(1).to({graphics:mask_9_graphics_39,x:165.7069,y:247.0056}).wait(1).to({graphics:mask_9_graphics_40,x:165.7069,y:257.5616}).wait(60));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(31).to({_off:false},0).wait(69));

	// 圖層_18
	this.instance_17 = new lib.元件1();
	this.instance_17.setTransform(234,411.1,1,1,0,0,0,94.2,228.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20).to({_off:false},0).wait(1).to({x:264,y:429.1},0).wait(1).to({x:289.5},0).wait(1).to({x:298.8,y:404.15},0).wait(1).to({y:374.85},0).wait(1).to({x:286.75,y:342.7},0).wait(1).to({x:272.85,y:324.85},0).wait(1).to({x:240.15,y:306},0).wait(1).to({x:206.55,y:317.3},0).wait(1).to({x:187.55,y:327.3},0).wait(1).to({x:171.55,y:337.3},0).to({_off:true},1).wait(69));

	// 圖層_16 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_20 = new cjs.Graphics().p("AgtCqQgvgMgjgnQgigmgJgwQgLg2Aag2QAag3AxgaQAygaA6AJQA8AJAmApQAYAYAMAhQANAgAAAiQgBAngSAmQgSAmggAYQggAZgoAIQgTAEgRAAQgWAAgVgGg");
	var mask_10_graphics_21 = new cjs.Graphics().p("ABfELQg2gHgogiQgmghgOg2QgJghAEggQgMAEgMACQgpAJgngLQgvgMgjgnQgiglgJgwQgLg3Aag2QAag3AxgaQAygaA7AJQA8AJAlApQAYAYAMAhQANAgAAAiQAAANgCANQA0gUA0AOQAyAOAkAqQAjApAFA0QAGAzgaAxQgaAwguAYQgkATgqAAIgXgBg");
	var mask_10_graphics_22 = new cjs.Graphics().p("ADXFlQg2gHgogiQgnghgOg2QgJggADgfQgoAQgugFQg2gHgogiQgnghgOg2QgJghAEgfQgMAEgMACQgpAJgngLQgvgMgjgnQgigmgJgwQgLg3Aag2QAag3AxgaQAygaA7AJQA8AJAmApQAYAYAMAhQANAgAAAiQAAANgCANQA0gUAzAOQAyAOAkAqQAjAqAFA0QACATgCAUQA5gaA5AQQAyAOAkAqQAjAqAFA0QAGAzgaAxQgaAwguAYQgkATgqAAIgXgBg");
	var mask_10_graphics_23 = new cjs.Graphics().p("ABzFlQg2gHgogiQgmghgOg2QgJggADgfQgoAQgvgFQg2gHgogiQgnghgOg2QgJghAEgfQgMAEgMACQgpAJgngLQgvgMgjgnQgigmgJgwQgLg3Aag2QAag3AxgaQAygaA7AJQA8AJAmApQAYAYAMAhQANAgAAAiQAAANgCANQA0gUA0AOQAyAOAjAqQAjAqAFA0QACATgCAUQAxgWAxAJQgLgxAQgvQAWg+A/ggQA/ghA/ARQAyAOAkAqQAjAqAFA0QAGAygaAxQgaAwguAYQguAYg3gGIgKgCIADAWQAGAzgaAxQgaAwguAYQgkATgqAAIgXgBg");
	var mask_10_graphics_24 = new cjs.Graphics().p("ABQGwQg2gGgngiQgngigOg1QgJghADgfQgoARgvgGQg2gGgogiQgngigOg1QgJgiAEggQgMAEgMADQgpAIgngKQgvgNgjgmQgiglgJgxQgLg3Aag2QAag2AxgaQAygbA7AKQA8AJAmApQAYAYAMAhQANAgAAAiQAAANgCAMQA0gUA0APQAyAOAkAqQAiApAFAzQACAUgCAUQAxgWAxAJQgLgyAQgtQAWg+A/ghQAXgMAYgFIgMgJQgngigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAkAqQAjAqAFAzQAGA0gaAwQgaAxguAYQgXALgYAFQAPAMAOAQQAjAqAFAyQAGA0gaAwQgaAxguAYQguAYg3gHIgKgBIADAVQAGA0gaAwQgaAxguAYQgkASgqAAIgXgBg");
	var mask_10_graphics_25 = new cjs.Graphics().p("ABQJGQg2gGgngiQgngigOg1QgJghADgfQgoARgvgGQg2gGgogiQgngigOg1QgJgiAEggQgMAEgMADQgpAIgngKQgvgNgjgmQgigmgJgxQgLg3Aag1QAag2AxgaQAygbA7AKQA8AJAmApQAYAYAMAhQANAfAAAiQAAANgCAMQA0gUA0APQAyAOAkAqQAiAqAFAzQACAUgCAUQAxgWAxAJQgLgyAQguQAWg+A/ghQAXgMAYgFIgMgJQgnghgOg1QgOg1ARgxQAPgsAkgdQgugJgjgdQgngigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAkAqQAjAqAFAzQAGA0gaAwQgPAcgWAUIALADQAyAOAkAqQAjAqAFAzQAGA0gaAwQgaAwguAYQgXALgYAFQAPAMAOAQQAjAqAFAzQAGA0gaAwQgaAxguAYQguAYg3gHIgKgBIADAVQAGA0gaAwQgaAxguAYQgkASgqAAIgXgBg");
	var mask_10_graphics_26 = new cjs.Graphics().p("ABQKqQg2gGgngiQgngigOg1QgJghADgfQgoARgvgGQg2gGgogiQgngigOg1QgJgiAEggQgMAEgMADQgpAIgngKQgvgNgjgmQgigmgJgxQgLg3Aag2QAag2AxgZQAygbA7AKQA8AJAmAoQAYAYAMAhQANAgAAAiQAAANgCAMQA0gUA0APQAyAOAkAqQAiAqAFAzQACAUgCAUQAxgWAxAJQgLgyAQguQAWg+A/ghQAXgMAYgFIgMgJQgngigOg1QgOg0ARgxQAPgsAkgdQgugJgjgdQgngigOg1QgKglAFgjIgSgBQg2gGgogiQgmgigOg1QgOg1ARgxQAWg+A+ghQA/ghA/ASQAyAOAkAqQAjAqAFAzQADAXgEAWQAXgBAWAHQAyAOAkAqQAjAqAFAzQAGA0gaAwQgPAcgWAUIALADQAyAOAkAqQAjAqAFAzQAGAzgaAwQgaAxguAYQgXALgYAFQAPAMAOAQQAjAqAFAzQAGA0gaAwQgaAxguAYQguAYg3gHIgKgBIADAVQAGA0gaAwQgaAxguAYQgkASgqAAIgXgBg");
	var mask_10_graphics_27 = new cjs.Graphics().p("ABQL/Qg2gGgngiQgngigOg1QgJghADgfQgoARgvgGQg2gGgogiQgngigOg1QgJgiAEggQgMAEgMADQgpAIgngKQgvgNgjgmQgigmgJgxQgLg3Aag2QAag2AxgaQAygbA7AKQA8AJAmApQAYAYAMAhQANAgAAAiQAAANgCAMQA0gUA0APQAyAOAkAqQAiAqAFAzQACAUgCAUQAxgWAxAJQgLgyAQguQAWg+A/ghQAXgMAYgFIgMgJQgngigOg1QgOg1ARgxQAPgrAkgdQgugJgjgdQgngigOg1QgKglAFgjIgSgBQg2gGgogiQgmgigOg1QgLgpAIgmQgOAKgPAJQguAYg3gHQg2gGgogiQgngigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAkAqQAiAqAFAzQADAcgGAcQAOgLARgJQA/ghA/ASQAyAOAkAqQAjAqAFAzQADAXgEAWQAXgBAWAHQAyAOAkAqQAjAqAFAzQAGA0gaAwQgPAcgWAUIALADQAyAOAkAqQAjApAFAzQAGA0gaAwQgaAxguAYQgXALgYAFQAPAMAOAQQAjAqAFAzQAGA0gaAwQgaAxguAYQguAYg3gHIgKgBIADAVQAGA0gaAwQgaAxguAYQgkASgqAAIgXgBg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AB4MiQg3gGgngiQgngigOg1QgIghADgfQgoARgvgGQg3gGgngiQgogigOg1QgIgiADggQgLAEgNADQgpAIgngKQgvgNgigmQgjgmgJgxQgKg3Aag2QAZg2AygaQAygbA7AKQA7AJAnApQAXAYANAhQAMAgAAAiQAAANgCAMQA0gUA1APQAyAOAiAqQAkAqAFAzQACAUgDAUQAygWAxAJQgMgyAQguQAWg+A/ghQAYgMAXgFIgLgJQgogigOg1QgOg1ARgxQAQgsAkgcQgugJgjgdQgogigOg1QgJglAFgjIgSgBQg3gGgngiQgogigNg1QgKgpAHgmQgNAKgQAJQguAYg2gHQg3gGgngiQglgggPgxQgTAVgZANQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAYAcAKAgQATgSAZgNQA/ghBAASQAyAOAiAqQAkAqAFAzQADAcgHAcQAOgLARgJQA/ghBAASQAyAOAjAqQAkAqAFAzQACAXgDAWQAWgBAXAHQAyAOAjAqQAkAqAFAzQAFA0gaAwQgPAcgVAUIALADQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQgWALgZAFQAQAMANAQQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHIgLgBIAEAVQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AD1MiQg3gGgngiQgogigOg1QgIghADgfQgoARgvgGQg2gGgngiQgogigOg1QgIgiADggQgLAEgNADQgpAIgngKQgvgNgigmQgjgmgJgxQgKg3Aag2QAZg2AygaQAygbA7AKQA7AJAnApQAXAYANAhQAMAgAAAiQAAANgCAMQAzgUA1APQAyAOAjAqQAkAqAFAzQACAUgDAUQAygWAxAJQgMgyAQguQAWg+A/ghQAYgMAXgFIgLgJQgogigOg1QgOg1ARgxQAQgsAkgcQgugJgjgdQgogigOg1QgJglAFgjIgSgBQg3gGgngiQgogigOg1QgKgpAHgmQgNAKgQAJQguAYg1gHQg3gGgngiQglgggPgxQgTAVgZANQguAYg2gHQgngFgggTIgHAOQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAYAcAKAgQATgSAZgNQA/ghA/ASQAyAOAjAqQAkAqAFAzQADAcgHAcQAOgLARgJQA/ghBAASQAyAOAjAqQAkAqAFAzQACAXgDAWQAWgBAXAHQAyAOAjAqQAkAqAFAzQAFA0gaAwQgPAcgVAUIALADQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQgWALgZAFQAQAMANAQQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHIgLgBIAEAVQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AFjMiQg3gGgngiQgogigOg1QgIghADgfQgoARgvgGQg3gGgngiQgngigOg1QgIgiADggQgLAEgNADQgpAIgngKQgvgNgigmQgjgmgJgxQgKg3Aag2QAZg2AygaQAygbA7AKQA7AJAmApQAXAYANAhQAMAgAAAiQAAANgCAMQA0gUA1APQAyAOAjAqQAkAqAFAzQACAUgDAUQAygWAxAJQgMgyAQguQAWg+A/ghQAYgMAXgFIgLgJQgogigOg1QgOg1ARgxQAQgsAkgcQgugJgjgdQgogigOg1QgJglAFgjIgSgBQg3gGgngiQgogigOg1QgKgpAHgmQgNAKgQAJQguAYg2gHQg3gGgngiQgkgggPgxQgTAVgZANQguAYg2gHQgngFgggTIgHAOQgaAxguAYQguAYg2gHQgPgCgNgDQgFAcgPAbQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASIABAAQACgPAFgPQAWg+A/ghQA/ghBAASQAXAGAUAMQAXg1A5geQA/ghBAASQAyAOAjAqQAYAcAKAgQASgSAZgNQA/ghBAASQAyAOAjAqQAkAqAFAzQADAcgHAcQAOgLARgJQA/ghBAASQAyAOAjAqQAkAqAFAzQACAXgDAWQAWgBAXAHQAyAOAjAqQAkAqAFAzQAFA0gaAwQgPAcgVAUIALADQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQgWALgZAFQAQAMANAQQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHIgLgBIAEAVQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_10_graphics_20,x:258.699,y:171.3648}).wait(1).to({graphics:mask_10_graphics_21,x:270.172,y:180.5689}).wait(1).to({graphics:mask_10_graphics_22,x:282.172,y:189.5689}).wait(1).to({graphics:mask_10_graphics_23,x:292.172,y:189.5689}).wait(1).to({graphics:mask_10_graphics_24,x:295.672,y:182.041}).wait(1).to({graphics:mask_10_graphics_25,x:295.672,y:167.041}).wait(1).to({graphics:mask_10_graphics_26,x:295.672,y:157.041}).wait(1).to({graphics:mask_10_graphics_27,x:295.672,y:148.541}).wait(1).to({graphics:mask_10_graphics_28,x:291.7069,y:145.041}).wait(1).to({graphics:mask_10_graphics_29,x:279.2069,y:145.041}).wait(1).to({graphics:mask_10_graphics_30,x:268.2069,y:145.041}).wait(70));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(20).to({_off:false},0).wait(80));

	// 圖層_14
	this.instance_19 = new lib.元件1();
	this.instance_19.setTransform(54,424.05,1,1,0,0,0,94.2,228.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:44,y:391},0).wait(1).to({y:362.4},0).wait(1).to({x:60,y:335.4},0).wait(1).to({x:85,y:323.4},0).wait(1).to({x:113},0).wait(1).to({x:137,y:333.4},0).wait(1).to({x:163.55,y:352.4},0).wait(1).to({x:178.55,y:375.4},0).wait(1).to({x:198.55,y:402.4},0).wait(1).to({x:214.55,y:419.35},0).wait(1).to({x:233.55,y:445.35},0).wait(1).to({x:250.55,y:472.95},0).wait(1).to({x:273.55,y:493.95},0).wait(1).to({x:296.55,y:512.95},0).wait(1).to({x:318.55,y:528.95},0).wait(1).to({x:349.55},0).wait(1).to({x:338.55,y:494.95},0).wait(1).to({x:324.55,y:469.95},0).wait(1).to({x:305.9,y:443.65},0).to({_off:true},1).wait(80));

	// 圖層_13 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AgTCsQg3gGgngiQgogigOg1QgOg0ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFAzgaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AAjEuQg2gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgoghgOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAxAOAjAqQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjApQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AAyG7Qg2gHgngiQgoghgOg2QgOg1ARgxQAHgSAKgPQgrgJghgdQgoghgOg2QgOg1ARgwQAPgoAfgbQgMgHgLgJQgfgagQgmQgRgmACgoQADgyAdgsQAdgrAugUQAugVA0AHQAzAIAmAgQAmAgAPAzQAQAygOAwQgMAtgjAiIgHAGQAWAPASAVQAkAqAFA0QAFAygaAxIgEAIIAJACQAyAOAjAqQAkAqAFA0QAFAzgaAxQgaAwguAYQgkATgpAAIgXgBg");
	var mask_11_graphics_3 = new cjs.Graphics().p("AAyJaQg2gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQglQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghA/ASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAhIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_4 = new cjs.Graphics().p("AgTK0Qg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgoQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A+ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgWAMgbAEQALAHAKAIQAlAhAPAyQAQAygOAvQgMAtgiAiIgHAHQAVAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgWgBg");
	var mask_11_graphics_5 = new cjs.Graphics().p("AikLXQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgxAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghA/ASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg1gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAxgOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAjAqAFAzQAFA0gaAwQgZAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AkcLXQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgxAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIABgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxgtAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAxgOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AmPLXQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgxAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA+ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg2gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAxgOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AnuLXQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgxAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghA/ASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAXQguAYg2gHQg3gGgnghQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQgtAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAxgOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_9 = new cjs.Graphics().p("ApXLXQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgxAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIASgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgnghQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgmgiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAxgOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AqYLXQg3gGgngiQgogigOg1QgOg1ARgxQAGgSAKgQQgrgJgggcQgogigOg1QgOg1ARgxQAOgoAggcQgNgHgKgJQgfgZgQgmQgRgmACgpQADgxAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA6AMQgCgjALggQAWg+A/ghQA/ghBAASQArAMAhAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA+ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQAzgUA1APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAygTA0APQAyAOAjAqQAkApAFAzQAFAvgWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAogSAlQgTAmgfAZQggAZgpAIQgpAIgngKQgvgNgigmQgjgmgJgxQgKg3Aag2IAAgBQgzgHglggQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgnghQgogigOg1QgIggACgeQgRABgTgCQg3gGgngiQgogigOg1QgIgfACgdQgkAMgogFQg2gGgngiQgQgNgLgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgRgDQADAwgYAtQgaAxguAYQgYAMgaAEQALAHAKAIQAmAhAPAyQAQAxgOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgFAIIAKADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgqAAIgWgBg");
	var mask_11_graphics_11 = new cjs.Graphics().p("ANwLcQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgvgNgigmQgjgmgJgxQgKg3Aag2IAAgBQgzgHglggQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgnghQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgngigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAxgOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgxAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAxAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAyAOAjAqQAkApAFAzQAFAvgWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAhgNAgQA6gaA6AQQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_12 = new cjs.Graphics().p("APKNFQg3gGgngiQgogigOg1QgLgqAJgoQgPABgPgCQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgvgNgigmQgjgmgJgxQgKg3Aag2IAAgBQgzgHglggQgogigOg1QgOg0ARgxIAHgRQgiALgmgFQg3gGgngiQgogigOg1QgIggADgeQgSABgTgCQg2gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAhIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQglQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQAzgUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAyAOAjAqQAkAqAFAzQAFAugWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAhgNAgQA6gaA6AQQAyAOAjAqQAkAqAFAzQADAcgGAbQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AQaPHQg3gGgngiQgogigOg1QgOg1ARgxQAGgQAIgOQgOABgPgCQg3gGgngiQgogigOg1QgLgqAJgoQgPABgPgCQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgvgNgigmQgjgmgJgxQgKg3Aag2IAAgBQgzgHglgfQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgngiQgogigNg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAyQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg1QgOg1ARgwQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUAzAPQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAyAOAjAqQAkAqAFAzQAFAvgWAtIACABQA7AJAnApQAXAXANAhQAMAgAAAiQAAAhgNAgQA6gaA6AQQAyAOAjAqQAkAqAFAzQADAcgGAbQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwIgCAFQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_14 = new cjs.Graphics().p("ASNREQg3gGgngiQgogigOg1QgOg1ARgxQAJgXANgTIgHAEQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAGgQAIgOQgOABgPgCQg3gGgngiQgogigOg1QgLgqAJgoQgPABgPgCQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgvgNgigmQgjgmgJgxQgKg2Aag2IAAgBQgzgHglggQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg2gGgngiQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAvIgEAIIAJADQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgcQgogigOg0QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAjAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAyAOAjAqQAkAqAFAzQAFAvgWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAggNAgQA6gaA6AQQAyAOAjAqQAkAqAFAzQADAcgGAbQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwIgCAFQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwQgGAMgIALIAMgHQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_15 = new cjs.Graphics().p("AUFSPQg3gGgngiQgogigOg1QgEgRgBgRQgpARgugGQg3gGgngiQgogigOg1QgOg1ARgxQAJgXANgTIgHAEQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAGgQAIgOQgOABgPgCQg3gGgngiQgogigOg1QgLgqAJgoQgPABgPgCQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgvgNgigmQgjglgJgxQgKg3Aag2IAAgBQgzgHglggQgngigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgngiQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjApQAkAqAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgQQgrgJghgbQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAxAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAyAOAjAqQAkAqAFAzQAFAvgWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAhgNAgQA6gaA6AQQAyAOAjApQAkAqAFAzQADAcgGAbQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwIgCAFQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwQgGAMgIALIAMgHQA/ghBAASQAyAOAjAqQAkAqAFAzIABAKQA4gZA5AQQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_16 = new cjs.Graphics().p("AWRS3Qg3gGgngiQglgggPgxQgPAOgTAKQguAYg2gHQg3gGgngiQgogigOg1QgEgRgBgRQgpARgugGQg3gGgngiQgogigOg1QgOg1ARgxQAJgXANgTIgHAEQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAGgQAIgOQgOABgPgCQg3gGgngiQgogigOg1QgLgqAJgoQgPABgPgCQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgvgNghglQgjgmgJgxQgKg3Aag2IAAgBQgzgHglggQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgngiQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgPQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAyAPQAyAOAjAqQAkAqAFAzQAFAvgWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAhgNAgQA6gaA6AQQAyAOAjAqQAkApAFAzQADAcgGAbQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwIgCAFQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwQgGAMgIALIAMgHQA/ghBAASQAyAOAjAqQAkAqAFAzIABAKQA4gZA5AQQAyAOAjAqQAYAcALAhQAPgMASgKQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AVVS3Qg3gGgngiQglgggPgxQgPAOgTAKQguAYg2gHQg3gGgngiQgogigOg1QgEgRgBgRQgpARgugGQg3gGgngiQgogigOg1QgOg1ARgxQAJgXANgTIgHAEQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAGgQAIgOQgOABgPgCQg3gGgngiQgogigOg1QgLgqAJgoQgPABgPgCQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgugNgiglQgjgmgJgxQgKg3Aag2IAAgBQgzgHglggQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgngiQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgPQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAxAOAjAqQAkAqAFAzQAFAvgWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAhgNAgQA6gaA6AQQAyAOAjAqQAkApAFAzQADAcgGAbQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwIgCAFQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwQgGAMgIALIAMgHQA/ghBAASQAyAOAjAqQAkAqAFAzIABAKQA4gZA5AQQAyAOAjAqQAYAcALAhQAPgMASgKQAOgHAOgFQgHgrAOgoQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgNAHgPAEIABAGQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_18 = new cjs.Graphics().p("AVVS3Qg3gGgngiQglgggPgxQgPAOgTAKQguAYg2gHQg3gGgngiQgogigOg1QgEgRgBgRQgpARgugGQg3gGgngiQgogigOg1QgOg1ARgxQAJgXANgTIgHAEQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAGgQAIgOQgOABgPgCQg3gGgngiQgogigOg1QgLgqAJgoQgPABgPgCQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgugNgiglQgjgmgJgxQgKg3Aag2IAAgBQgzgHglggQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgngiQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgPQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAxAOAjAqQAkAqAFAzQAFAvgWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAhgNAgQA6gaA6AQQAyAOAjAqQAkApAFAzQADAcgGAbQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwIgCAFQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwQgGAMgIALIAMgHQA/ghBAASQAyAOAjAqQAkAqAFAzIABAKQA4gZA5AQQAyAOAjAqQAYAcALAhQAPgMASgKQAOgHAOgFQgHgrAOgoQAJgYAOgTQgvgIgjgeQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwIgKARIAPAEQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgNAHgPAEIABAGQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AVVS3Qg3gGgngiQglgggPgxQgPAOgTAKQguAYg2gHQg3gGgngiQgogigOg1QgEgRgBgRQgpARgugGQg3gGgngiQgogigOg1QgOg1ARgxQAJgXANgTIgHAEQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAGgQAIgOQgOABgPgCQg3gGgngiQgogigOg1QgLgqAJgoQgPABgPgCQg3gGgngiQgogigOg1QgOg1ARgxIABgCQgQAGgRAEQgpAIgngKQgugNgiglQgjgmgJgxQgKg3Aag2IAAgBQgzgHglggQgogigOg1QgOg1ARgxIAHgRQgiALgmgFQg3gGgngiQgogigOg1QgIggADgeQgSABgTgCQg3gGgngiQgogigOg1QgIgfADgdQgkAMgpgFQg3gGgngiQgPgNgMgQIgTAMQguAYg2gHQg3gGgngiIgLgKQgFAPgIAPQgaAxguAYQguAYg2gHIgQgDQADAwgZAtQgaAxguAYQgXAMgbAEQALAHAKAIQAmAhAPAyQAQAygOAwQgMAtgjAiIgHAHQAWAOASAWQAkAqAFAzQAFA0gaAwIgEAIIAJADQAyAOAjAqQAkApAFAzQAFA0gaAwQgaAxguAYQguAYg2gHQg3gGgngiQgogigOg1QgOg1ARgxQAHgSAKgPQgrgJghgcQgogigOg1QgOg1ARgxQAPgoAfgcQgMgHgLgJQgfgZgQgmQgRgmACgpQADgyAdgrQAdgsAugUQAVgJAXgEQgLgHgKgIQgogigOg1QgOg1ARgxQAWg+A/ghQA6geA7AMQgDgjALggQAWg+A/ghQA/ghBAASQAsAMAgAiIACgGQAWg+A/ghQA/ghBAASQAyAOAjAqIAJAKIATgLQA/ghBAASQAyAOAjAqQAkAqAFAzQACASgCASQA0gUA0APQAyAOAjAqQAkAqAFAzQACASgCASQAggEAgAJQAyAOAjAqQAkAqAFAzQAFAxgXAuQAzgTAzAPQAxAOAjAqQAkAqAFAzQAFAvgWAtIACABQA7AJAnApQAXAYANAhQAMAgAAAiQAAAhgNAgQA6gaA6AQQAyAOAjAqQAkApAFAzQADAcgGAbQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwIgCAFQAcgCAdAIQAyAOAjAqQAkAqAFAzQAFA0gaAwQgGAMgIALIAMgHQA/ghBAASQAyAOAjAqQAkAqAFAzIABAKQA4gZA5AQQAyAOAjAqQAYAcALAhQAPgMASgKQAOgHAOgFQgHgrAOgoQAJgYAOgTQgvgIgjgeQgogigOg1QgOg1ARgxQAJgYAOgTQgcAGgegEQg3gGgngiQgogigOg1QgOg1ARgxQAWg+A/ghQA/ghBAASQAyAOAjAqQAkAqAFAzQAFA0gaAwIgMAUQArgLAsAMQAyAOAjAqQAkAqAFAzQAFA0gaAwIgKARIAPAEQAyAOAjAqQAkAqAFAzQAFA0gaAwQgaAxguAYQgNAHgPAEIABAGQAFA0gaAwQgaAxguAYQgkASgpAAIgXgBg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:88.7069,y:205.041}).wait(1).to({graphics:mask_11_graphics_1,x:83.2069,y:192.041}).wait(1).to({graphics:mask_11_graphics_2,x:81.7122,y:177.9552}).wait(1).to({graphics:mask_11_graphics_3,x:81.7122,y:162.041}).wait(1).to({graphics:mask_11_graphics_4,x:88.7122,y:153.041}).wait(1).to({graphics:mask_11_graphics_5,x:103.2122,y:149.541}).wait(1).to({graphics:mask_11_graphics_6,x:115.2122,y:149.541}).wait(1).to({graphics:mask_11_graphics_7,x:126.7122,y:149.541}).wait(1).to({graphics:mask_11_graphics_8,x:136.2122,y:149.541}).wait(1).to({graphics:mask_11_graphics_9,x:146.7122,y:149.541}).wait(1).to({graphics:mask_11_graphics_10,x:153.2392,y:149.541}).wait(1).to({graphics:mask_11_graphics_11,x:164.7122,y:150.041}).wait(1).to({graphics:mask_11_graphics_12,x:173.7122,y:160.541}).wait(1).to({graphics:mask_11_graphics_13,x:181.7122,y:173.541}).wait(1).to({graphics:mask_11_graphics_14,x:193.2122,y:186.041}).wait(1).to({graphics:mask_11_graphics_15,x:205.2122,y:193.541}).wait(1).to({graphics:mask_11_graphics_16,x:219.2122,y:197.541}).wait(1).to({graphics:mask_11_graphics_17,x:225.2122,y:197.541}).wait(1).to({graphics:mask_11_graphics_18,x:225.2122,y:197.541}).wait(1).to({graphics:mask_11_graphics_19,x:225.2122,y:197.541}).wait(81));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(100));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(186.8,330.3,296.5,556.7);
// library properties:
lib.properties = {
	id: 'C405201D6DBF1B48A5CB16214301F9DE',
	width: 474,
	height: 506,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/圖層3.png?1765808151159", id:"圖層3"},
		{src:"images/24_atlas_1.png?1765808151144", id:"24_atlas_1"}
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
an.compositions['C405201D6DBF1B48A5CB16214301F9DE'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;