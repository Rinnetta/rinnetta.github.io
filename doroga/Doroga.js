(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Doroga_atlas_1", frames: [[796,0,144,144],[0,0,794,282]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Doroga_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Doroga_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#016300").s().p("EidWAdQID6mwIieAAID6myIieAAID6mxIifAAID7mxIifAAID6mxIieAAID6myIieAAID6mxIifAAIGbrIIGbLIIieAAID6GxIifAAID7GyIifAAIClEeICmkeIifAAID6myIieAAID6mxIieAAIGbrIIGbLIIifAAID7GxIifAAID6GyIieAAIClEeIClkeIieAAID6myIieAAID6mxIifAAIGbrIIGbLIIieAAID6GxIieAAID6GyIieAAIClEeIClkeIieAAID6myIifAAID6mxIieAAIGbrIIGbLIIieAAID6GxIifAAID7GyIifAAIClEeICmkeIifAAID6myIieAAID6mxIieAAIGbrIIGbLIIifAAID7GxIifAAID6GyIieAAIClEeIClkeIieAAID6myIieAAID6mxIifAAIGbrIIGcLIIifAAID6GxIieAAID6GyIieAAIClEeIClkeIieAAID6myIifAAID7mxIifAAIGbrIIGbLIIieAAID6GxIieAAID6GyIifAAICmEeIClkeIifAAID7myIifAAID6mxIieAAIGbrIIGbLIIieAAID6GxIifAAID6GyIieAAICiEaICikaIieAAID6myIieAAID6mxIifAAIGbrIIGbLIIieAAID6GxIieAAID6GyIieAAIClEeIClkeIieAAID6myIifAAID7mxIifAAIGbrIIGbLIIieAAID6GxIieAAID6GyIifAAICmEeIClkeIifAAID6myIieAAID6mxIieAAIGbrIIGbLIIifAAID7GxIifAAID6GyIieAAIClEeIClkeIieAAID6myIieAAID6mxIieAAIGbrIIGbLIIifAAID6GxIieAAID6GyIieAAIClEeIClkeIieAAID6myIifAAID7mxIifAAIGbrIIGbLIIieAAID6GxIieAAID6GyIifAAICmEeIClkeIifAAID7myIifAAID6mxIieAAIGbrIIGbLIIieAAID6GxIifAAID7GyIifAAIClEeIClkeIieAAID6myIieAAID6mxIieAAIGbrIIGbLIIifAAID6GxIieAAID6GyIieAAIClEeIClkeIieAAID6myIieAAID6mxIifAAIGbrIIGbLIIieAAID6GxIieAAID6GyIieAAID6GxIifAAID6GxIieAAID6GxIieAAID6GyIieAAID6GwgECDgAELIBJh/IiSAAgEBwtAELIBKh/IiTAAgEBd7AELIBJh/IiTAAgEBLIAELIBJh/IiTAAgEA4VAELIBKh/IiTAAgEAljAELIBJh/IiTAAgASwELIBJh/IiTAAgAyvELIBJh/IiTAAgEgliAELIBJh/IiTAAgEg4VAELIBKh/IiTAAgEhLIAELIBKh/IiTAAgEhd6AELIBJh/IiTAAgEhwtAELIBJh/IiSAAgEiDgAELIBKh/IiTAAgAAAEGIBHh6IiNAAg");
	this.shape.setTransform(1007.075,187.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,2014.2,374.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,72,72), null);


(lib.koleso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,36,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:15},0).wait(1).to({rotation:30,y:0.1},0).wait(1).to({rotation:45,x:0},0).wait(1).to({rotation:60,x:-0.05},0).wait(1).to({rotation:75,y:0.05},0).wait(1).to({rotation:90},0).wait(1).to({rotation:105},0).wait(1).to({rotation:120,x:-0.1},0).wait(1).to({rotation:135,y:0},0).wait(1).to({rotation:150,y:-0.05},0).wait(1).to({rotation:165,x:-0.05},0).wait(1).to({rotation:180},0).wait(1).to({rotation:195},0).wait(1).to({rotation:210,y:-0.1},0).wait(1).to({rotation:225,x:0},0).wait(1).to({rotation:240,x:0.05},0).wait(1).to({rotation:255,y:-0.05},0).wait(1).to({rotation:270},0).wait(1).to({rotation:285},0).wait(1).to({rotation:300,x:0.1},0).wait(1).to({rotation:315,y:0},0).wait(1).to({rotation:330,y:0.05},0).wait(1).to({rotation:345,x:0.05},0).wait(1).to({rotation:360},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


(lib.korpus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.koleso();
	this.instance.setTransform(79.1,54.05);

	this.instance_1 = new lib.koleso();
	this.instance_1.setTransform(-153,54.05);

	this.instance_2 = new lib.koleso();
	this.instance_2.setTransform(155,54.05);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(-198.4,-70.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.korpus, new cjs.Rectangle(-198.4,-70.4,397,160.5), null);


// stage content:
(lib.Doroga = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhBwAugMAAAhc/MCDhAAAMAAABc/g");
	mask.setTransform(420.925,297.625);

	// mashina
	this.instance = new lib.korpus();
	this.instance.setTransform(410,442.85,1,1,0,0,0,0,9.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// les
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(901.8,292.5,1,1,0,0,0,1007.1,187.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:897.8},0).wait(1).to({x:893.75},0).wait(1).to({x:889.75},0).wait(1).to({x:885.7},0).wait(1).to({x:881.65},0).wait(1).to({x:877.65},0).wait(1).to({x:873.6},0).wait(1).to({x:869.55},0).wait(1).to({x:865.55},0).wait(1).to({x:861.5},0).wait(1).to({x:857.45},0).wait(1).to({x:853.45},0).wait(1).to({x:849.4},0).wait(1).to({x:845.35},0).wait(1).to({x:841.35},0).wait(1).to({x:837.3},0).wait(1).to({x:833.25},0).wait(1).to({x:829.25},0).wait(1).to({x:825.2},0).wait(1).to({x:821.15},0).wait(1).to({x:817.15},0).wait(1).to({x:813.1},0).wait(1).to({x:809.05},0).wait(1).to({x:805.05},0).wait(1).to({x:801},0).wait(1).to({x:796.95},0).wait(1).to({x:792.95},0).wait(1).to({x:788.9},0).wait(1).to({x:784.85},0).wait(1).to({x:780.85},0).wait(1).to({x:776.8},0).wait(1).to({x:772.75},0).wait(1).to({x:768.75},0).wait(1).to({x:764.7},0).wait(1).to({x:760.65},0).wait(1).to({x:756.65},0).wait(1).to({x:752.6},0).wait(1).to({x:748.55},0).wait(1).to({x:744.55},0).wait(1).to({x:740.5},0).wait(1).to({x:736.45},0).wait(1).to({x:732.45},0).wait(1).to({x:728.4},0).wait(1).to({x:724.35},0).wait(1).to({x:720.35},0).wait(1).to({x:716.3},0).wait(1).to({x:712.25},0).wait(1).to({x:708.25},0).wait(1).to({x:704.2},0).wait(1).to({x:700.15},0).wait(1).to({x:696.15},0).wait(1).to({x:692.1},0).wait(1).to({x:688.05},0).wait(1).to({x:684.05},0).wait(1).to({x:680},0).wait(1).to({x:675.95},0).wait(1).to({x:671.95},0).wait(1).to({x:667.9},0).wait(1).to({x:663.85},0).wait(1).to({x:659.85},0).wait(1).to({x:655.8},0).wait(1).to({x:651.75},0).wait(1).to({x:647.75},0).wait(1).to({x:643.7},0).wait(1).to({x:639.65},0).wait(1).to({x:635.65},0).wait(1).to({x:631.6},0).wait(1).to({x:627.55},0).wait(1).to({x:623.55},0).wait(1).to({x:619.5},0).wait(1).to({x:615.45},0).wait(1).to({x:611.45},0).wait(1).to({x:607.4},0).wait(1).to({x:603.35},0).wait(1).to({x:599.35},0).wait(1).to({x:595.3},0).wait(1).to({x:591.25},0).wait(1).to({x:587.25},0).wait(1).to({x:583.2},0).wait(1).to({x:579.15},0).wait(1).to({x:575.15},0).wait(1).to({x:571.1},0).wait(1).to({x:567.05},0).wait(1).to({x:563.05},0).wait(1).to({x:559},0).wait(1).to({x:554.95},0).wait(1).to({x:550.95},0).wait(1).to({x:546.9},0).wait(1).to({x:542.85},0).wait(1).to({x:538.85},0).wait(1).to({x:534.8},0).wait(1).to({x:530.75},0).wait(1).to({x:526.75},0).wait(1).to({x:522.7},0).wait(1).to({x:518.65},0).wait(1).to({x:514.65},0).wait(1).to({x:510.6},0).wait(1).to({x:506.55},0).wait(1).to({x:502.55},0).wait(1).to({x:498.5},0).wait(1).to({x:494.45},0).wait(1).to({x:490.45},0).wait(1).to({x:486.4},0).wait(1).to({x:482.35},0).wait(1).to({x:478.35},0).wait(1).to({x:474.3},0).wait(1).to({x:470.25},0).wait(1).to({x:466.25},0).wait(1).to({x:462.2},0).wait(1).to({x:458.15},0).wait(1).to({x:454.15},0).wait(1).to({x:450.1},0).wait(1).to({x:446.05},0).wait(1).to({x:442.05},0).wait(1).to({x:438},0).wait(1).to({x:433.95},0).wait(1).to({x:429.95},0).wait(1).to({x:425.9},0).wait(1).to({x:421.85},0).wait(1).to({x:417.85},0).wait(1).to({x:413.8},0).wait(1).to({x:409.75},0).wait(1).to({x:405.75},0).wait(1).to({x:401.7},0).wait(1).to({x:397.65},0).wait(1).to({x:393.65},0).wait(1).to({x:389.6},0).wait(1).to({x:385.55},0).wait(1).to({x:381.55},0).wait(1).to({x:377.5},0).wait(1).to({x:373.45},0).wait(1).to({x:369.45},0).wait(1).to({x:365.4},0).wait(1).to({x:361.35},0).wait(1).to({x:357.35},0).wait(1).to({x:353.3},0).wait(1).to({x:349.25},0).wait(1).to({x:345.25},0).wait(1).to({x:341.2},0).wait(1).to({x:337.15},0).wait(1).to({x:333.15},0).wait(1).to({x:329.1},0).wait(1).to({x:325.05},0).wait(1).to({x:321.05},0).wait(1).to({x:317},0).wait(1).to({x:312.95},0).wait(1).to({x:308.95},0).wait(1).to({x:304.9},0).wait(1).to({x:300.85},0).wait(1).to({x:296.85},0).wait(1).to({x:292.8},0).wait(1).to({x:288.75},0).wait(1).to({x:284.75},0).wait(1).to({x:280.7},0).wait(1).to({x:276.65},0).wait(1).to({x:272.65},0).wait(1).to({x:268.6},0).wait(1).to({x:264.55},0).wait(1).to({x:260.55},0).wait(1).to({x:256.5},0).wait(1).to({x:252.45},0).wait(1).to({x:248.45},0).wait(1).to({x:244.4},0).wait(1).to({x:240.35},0).wait(1).to({x:236.35},0).wait(1).to({x:232.3},0).wait(1).to({x:228.25},0).wait(1).to({x:224.25},0).wait(1).to({x:220.2},0).wait(1).to({x:216.15},0).wait(1).to({x:212.15},0).wait(1).to({x:208.1},0).wait(1).to({x:204.05},0).wait(1).to({x:200.05},0).wait(1).to({x:196},0).wait(1).to({x:191.95},0).wait(1).to({x:187.95},0).wait(1).to({x:183.9},0).wait(1).to({x:179.85},0).wait(1).to({x:175.85},0).wait(1).to({x:171.8},0).wait(1).to({x:167.75},0).wait(1).to({x:163.75},0).wait(1).to({x:159.7},0).wait(1).to({x:155.65},0).wait(1).to({x:151.65},0).wait(1).to({x:147.6},0).wait(1).to({x:143.55},0).wait(1).to({x:139.55},0).wait(1).to({x:135.5},0).wait(1).to({x:131.45},0).wait(1).to({x:127.45},0).wait(1).to({x:123.4},0).wait(1).to({x:119.35},0).wait(1).to({x:115.35},0).wait(1).to({x:111.3},0).wait(1).to({x:107.25},0).wait(1).to({x:103.25},0).wait(1).to({x:99.2},0).wait(1).to({x:95.15},0).wait(1).to({x:91.15},0).wait(1).to({x:87.1},0).wait(1).to({x:83.05},0).wait(1).to({x:79.05},0).wait(1).to({x:75},0).wait(1).to({x:70.95},0).wait(1).to({x:66.95},0).wait(1).to({x:62.9},0).wait(1).to({x:58.85},0).wait(1).to({x:54.85},0).wait(1).to({x:50.8},0).wait(1).to({x:46.75},0).wait(1).to({x:42.75},0).wait(1).to({x:38.7},0).wait(1).to({x:34.65},0).wait(1).to({x:30.65},0).wait(1).to({x:26.6},0).wait(1).to({x:22.55},0).wait(1).to({x:18.55},0).wait(1).to({x:14.5},0).wait(1).to({x:10.45},0).wait(1).to({x:6.45},0).wait(1).to({x:2.4},0).wait(1).to({x:-1.65},0).wait(1).to({x:-5.65},0).wait(1).to({x:-9.7},0).wait(1).to({x:-13.75},0).wait(1).to({x:-17.75},0).wait(1).to({x:-21.8},0).wait(1).to({x:-25.85},0).wait(1).to({x:-29.85},0).wait(1).to({x:-33.9},0).wait(1).to({x:-37.95},0).wait(1).to({x:-41.95},0).wait(1).to({x:-46},0).wait(1).to({x:-50.05},0).wait(1).to({x:-54.05},0).wait(1).to({x:-58.1},0).wait(1).to({x:-62.15},0).wait(1));

	// doroga
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#543102").s().p("EhBwAJBIAAyBMCDhAAAIAASBg");
	this.shape.setTransform(420.925,537.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// nebo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#70E6F2").s().p("EhBwAnLMAAAhOVMCDhAAAMAAABOVg");
	this.shape_1.setTransform(420.925,250.7);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(420,297.5,421.9,297.79999999999995);
// library properties:
lib.properties = {
	id: '5257391C0017A14C8EB2CAB615FC092F',
	width: 840,
	height: 595,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Doroga_atlas_1.png", id:"Doroga_atlas_1"}
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
an.compositions['5257391C0017A14C8EB2CAB615FC092F'] = {
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