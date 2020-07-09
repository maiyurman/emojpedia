(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"emojipedia_atlas_1", frames: [[0,0,850,1519]]},
		{name:"emojipedia_atlas_2", frames: [[1081,1282,493,396],[1081,829,508,451],[1576,1568,344,445],[1591,646,399,463],[0,0,1383,827],[1591,1111,402,455],[744,829,335,688],[1385,0,598,644],[744,1519,333,469],[0,829,742,852]]},
		{name:"emojipedia_atlas_3", frames: [[1675,1028,347,105],[1869,0,166,166],[1052,1286,346,113],[1100,446,168,168],[0,1904,621,105],[1052,1101,621,105],[1203,1615,346,104],[1480,1949,296,82],[331,885,312,82],[1203,1401,347,105],[331,466,767,188],[1657,1208,346,107],[1203,1508,346,105],[1203,1787,411,64],[1551,1508,407,64],[1552,1426,463,49],[1552,1368,412,56],[1052,1208,603,76],[1203,1721,485,64],[1400,1317,635,49],[650,1886,666,156],[1534,876,398,150],[331,656,298,227],[658,1101,392,331],[976,1434,225,393],[1278,446,254,522],[1869,168,160,160],[1870,330,160,160],[658,656,309,442],[1255,0,304,444],[0,519,329,462],[329,983,327,450],[1870,492,160,160],[1561,0,306,438],[1561,440,307,434],[0,1441,323,461],[1870,654,160,160],[0,0,296,517],[0,983,327,456],[1616,1787,160,160],[1318,1853,160,160],[945,0,308,444],[622,0,321,446],[969,656,307,443],[298,0,322,464],[650,1435,324,449],[325,1441,323,458],[1690,1574,160,160]]},
		{name:"emojipedia_atlas_4", frames: [[305,101,65,2],[610,334,95,43],[561,669,95,43],[949,552,43,218],[660,662,168,67],[0,167,287,54],[289,170,287,54],[727,820,119,32],[0,835,119,32],[830,662,117,35],[727,783,117,35],[561,731,183,50],[198,746,89,89],[746,731,183,50],[273,470,226,54],[501,503,226,54],[0,470,271,49],[289,755,89,89],[783,56,70,70],[0,51,406,48],[408,56,373,52],[0,0,463,49],[610,222,21,72],[135,890,38,72],[459,897,38,72],[729,503,258,47],[989,473,32,72],[931,772,70,70],[994,660,21,72],[465,0,392,54],[1003,734,21,72],[764,916,21,72],[831,907,36,72],[678,918,21,72],[869,907,31,72],[789,854,40,72],[645,869,71,47],[330,669,229,41],[950,918,21,72],[175,899,38,72],[973,918,21,72],[910,906,38,72],[972,844,41,72],[330,712,229,41],[610,296,23,26],[320,908,55,40],[931,699,15,40],[619,783,55,75],[100,741,96,85],[0,741,98,92],[62,890,71,47],[964,473,16,24],[660,559,54,92],[501,470,74,23],[474,526,15,22],[996,918,22,62],[320,950,35,32],[380,755,39,196],[676,783,49,84],[440,526,32,30],[459,755,87,78],[421,755,36,203],[994,547,17,111],[330,636,68,21],[579,922,42,34],[623,922,20,57],[577,470,30,29],[400,636,30,29],[305,110,330,58],[578,714,13,13],[719,136,146,121],[561,714,15,15],[719,110,61,11],[867,136,146,121],[267,908,51,46],[787,928,40,35],[645,918,31,51],[718,916,44,43],[114,939,19,57],[964,259,55,212],[357,953,32,32],[267,956,32,32],[42,939,34,38],[579,958,32,32],[215,960,32,32],[859,0,153,134],[912,699,17,17],[548,783,69,69],[830,699,80,14],[0,931,40,35],[931,741,16,16],[499,916,44,44],[910,783,19,58],[301,987,191,4],[854,381,108,108],[545,916,32,51],[0,521,108,108],[78,939,34,38],[848,783,60,60],[0,223,120,120],[122,223,120,120],[701,990,191,4],[110,521,108,108],[220,526,108,108],[121,828,60,60],[244,226,120,120],[0,101,303,64],[578,170,50,50],[637,110,80,222],[459,835,60,60],[330,526,108,108],[366,226,120,120],[183,837,60,60],[729,552,108,108],[839,552,108,108],[910,844,60,60],[488,226,120,120],[719,259,120,120],[494,992,191,4],[440,559,108,108],[249,993,191,4],[841,259,120,120],[848,845,60,60],[0,345,120,120],[215,908,50,50],[550,559,108,108],[122,345,120,120],[0,631,108,108],[245,846,60,60],[307,846,60,60],[244,348,120,120],[521,854,60,60],[366,348,120,120],[110,631,108,108],[220,636,108,108],[488,348,120,120],[687,996,191,4],[727,854,60,60],[583,860,60,60],[610,381,120,120],[0,869,60,60],[732,381,120,120]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_209 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_193 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_194 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_206 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_208 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_198 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_192 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_197 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_203 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_196 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_202 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_200 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_201 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_185 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_186 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_199 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_204 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.angry_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.facewithtears_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.flushedface = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.flirt_ios = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.facewithtearsofjoy_1f602 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.flushedface_1f633 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.flushed_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.kiss_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.amit_3 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.grinacingface = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.freezing_ios = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.liron_4 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.facescreaminginfear_1f631 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.liron_6 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.logo50_new = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.love_eyes_cat_ios = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.mai_1 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_207 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.mai_4 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.mai_5 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.mai_6 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pensiveface = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.pensiveface_1f614 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.pensiveface_1f614_1 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.relievedface = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.relievedface_1f60c = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.relieved_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.liron_5pngcopy = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.liron_1 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.smilingfacewithheartshapedeyes_1f60d = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.smilingfacewithheartshapedeyes_1f60d_1 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.smilingfacewithheartshapedeyes_1f60d_2 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.angryface_1f620 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.mai_3 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.tired_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.tween_smile_ios = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.tween_surprise = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.unamusedface = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.tween_angry_ios = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.very_sad_ios = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.amit_2 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.teeth_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.תאוםפניםבוכותמאושר = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.תאוםפניםמפריחותנשיקה = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.תאוםפניםסמוקות = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.liron2 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.smile_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.facescreaminginfear = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.facethrowingakiss = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.amit_5 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.smilingfacewithsmilingeyes_1f60a = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.liron_3 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.facewithtearsofjoy = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.amit_6 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.amit_4 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.amit_1 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.facethrowingakiss_1f618 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.facescreaming_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.upset_android = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.sad_tween_ios = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.yawningface = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.angry = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.unamusedface_1f612 = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.smilingfacewithsmilingeyes = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.yawningface_1f971 = function() {
	this.initialize(ss["emojipedia_atlas_3"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.grimacingface_1f62c = function() {
	this.initialize(ss["emojipedia_atlas_4"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.mai_2 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["emojipedia_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["emojipedia_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2574,1524);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.tween_funny_tears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.תאוםפניםבוכותמאושר();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tween_funny_tears, new cjs.Rectangle(0,0,120,120), null);


(lib.liron = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.liron2();
	this.instance.setTransform(0,0,0.25,0.25);

	this.instance_1 = new lib.liron_4();
	this.instance_1.setTransform(1,0,0.25,0.25);

	this.instance_2 = new lib.liron_1();
	this.instance_2.setTransform(1,0,0.25,0.25);

	this.instance_3 = new lib.liron_5pngcopy();
	this.instance_3.setTransform(1,0,0.25,0.25);

	this.instance_4 = new lib.liron_3();
	this.instance_4.setTransform(1,0,0.25,0.25);

	this.instance_5 = new lib.liron_6();
	this.instance_5.setTransform(1,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},10).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.3,111);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_209();
	this.instance.setTransform(26.3,26.15,0.5,0.5);

	this.anout_link = new cjs.Text("לינק", "normal 400 20px 'Heebo'", "#165AFD");
	this.anout_link.name = "anout_link";
	this.anout_link.textAlign = "center";
	this.anout_link.lineHeight = 26;
	this.anout_link.lineWidth = 80;
	this.anout_link.parent = this;
	this.anout_link.setTransform(42.05,2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.anout_link);
	}

	this.instance_1 = new lib.CachedBmp_208();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.anout_link},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.link, new cjs.Rectangle(0,0,84.2,33.5), null);


(lib.upset_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.unamusedface_1f612();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upset_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.tired_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yawningface_1f971();
	this.instance.setTransform(0,0,0.3715,0.3715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tired_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.smile_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smilingfacewithsmilingeyes_1f60a();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.screaming_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facescreaminginfear_1f631();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screaming_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.relieved_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.relievedface_1f60c();
	this.instance.setTransform(0,0,0.3579,0.3579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.relieved_ios, new cjs.Rectangle(0,0,57.3,57.3), null);


(lib.pensive_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pensiveface_1f614_1();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pensive_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.mai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mai_4();
	this.instance.setTransform(0,0,0.25,0.25);

	this.instance_1 = new lib.mai_1();
	this.instance_1.setTransform(-14,4,0.25,0.25);

	this.instance_2 = new lib.mai_3();
	this.instance_2.setTransform(-3,-2,0.25,0.25);

	this.instance_3 = new lib.mai_6();
	this.instance_3.setTransform(-13,-1,0.25,0.25);

	this.instance_4 = new lib.mai_5();
	this.instance_4.setTransform(-4,-3,0.25,0.25);

	this.instance_5 = new lib.mai_2();
	this.instance_5.setTransform(-6,-2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},10).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-3,101.5,122.8);


(lib.love_eyes_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smilingfacewithheartshapedeyes_1f60d_2();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.love_eyes_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.kiss_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facethrowingakiss_1f618();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kiss_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.grimacing_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.grimacingface_1f62c();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grimacing_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.funnytears_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facewithtearsofjoy_1f602();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.funnytears_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.flushed_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flushedface_1f633();
	this.instance.setTransform(0,0,0.3579,0.3579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flushed_ios, new cjs.Rectangle(0,0,57.3,57.3), null);


(lib.angry_ios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.angryface_1f620();
	this.instance.setTransform(0,0,0.4956,0.4956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angry_ios, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.yawningface_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yawningface();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yawningface_ios_grey, new cjs.Rectangle(0,0,60,60), null);


(lib.unamusedface_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.unamusedface();
	this.instance.setTransform(0,0,0.9908,0.9908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.unamusedface_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.smile_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smilingfacewithsmilingeyes();
	this.instance.setTransform(0,0,0.9906,0.9906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.screaming_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facescreaminginfear();
	this.instance.setTransform(0,0,0.9906,0.9906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screaming_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.sad_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pensiveface();
	this.instance.setTransform(0,0,0.9906,0.9906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sad_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.relieved_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.relievedface();
	this.instance.setTransform(0,0,0.9575,0.9575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.relieved_ios_grey, new cjs.Rectangle(0,0,57.5,57.5), null);


(lib.love_eyes_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smilingfacewithheartshapedeyes_1f60d_1();
	this.instance.setTransform(0,0,0.9906,0.9906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.love_eyes_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.kiss_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facethrowingakiss();
	this.instance.setTransform(0,0,0.9908,0.9908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kiss_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.grimacing_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.grinacingface();
	this.instance.setTransform(0,0,0.9908,0.9908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grimacing_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.funnytears_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facewithtearsofjoy();
	this.instance.setTransform(0,0,0.9908,0.9908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.funnytears_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.flushed_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flushedface();
	this.instance.setTransform(0,0,0.9906,0.9906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flushed_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.angry_ios_grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.angry();
	this.instance.setTransform(0,0,0.9906,0.9906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angry_ios_grey, new cjs.Rectangle(0,0,59.5,59.5), null);


(lib.headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_201();
	this.instance.setTransform(0.2,0.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_200();
	this.instance_1.setTransform(-1.6,-1.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline, new cjs.Rectangle(-1.6,-1.6,312.3,54.300000000000004), null);


(lib.surprise_regular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_198();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_199();
	this.instance_1.setTransform(-5,-6.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.surprise_regular, new cjs.Rectangle(-5,-6.3,156,41), null);


(lib.surprise_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_197();
	this.instance.setTransform(12.3,15.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_196();
	this.instance_1.setTransform(0.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.surprise_pink, new cjs.Rectangle(0.1,0,173,56.5), null);


(lib.sad_regular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_194();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_199();
	this.instance_1.setTransform(-54,-8.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sad_regular, new cjs.Rectangle(-54,-8.9,156,41), null);


(lib.sad_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_193();
	this.instance.setTransform(61.9,12.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_192();
	this.instance_1.setTransform(0,-1.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sad_pink, new cjs.Rectangle(0,-1.1,173.5,52.5), null);


(lib.love_regular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_190();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_199();
	this.instance_1.setTransform(-48,-11.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.love_regular, new cjs.Rectangle(-48,-11.9,156,41), null);


(lib.love_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_189();
	this.instance.setTransform(55.7,18.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_188();
	this.instance_1.setTransform(0.5,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.love_pink, new cjs.Rectangle(0.5,0,173,52), null);


(lib.happy_regular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_186();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_199();
	this.instance_1.setTransform(-46,-11.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.happy_regular, new cjs.Rectangle(-46,-11.9,156,41), null);


(lib.happy_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_185();
	this.instance.setTransform(55.35,16.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_184();
	this.instance_1.setTransform(0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.happy_pink, new cjs.Rectangle(0.1,0,173.5,52.5), null);


(lib.confusing_regular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_182();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_183();
	this.instance_1.setTransform(-33,-3.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.confusing_regular, new cjs.Rectangle(-33,-3.9,148,41), null);


(lib.confusing_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_181();
	this.instance.setTransform(37.85,9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_180();
	this.instance_1.setTransform(0.5,-2.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.confusing_pink, new cjs.Rectangle(0.5,-2.4,173,53.5), null);


(lib.anger_regular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_178();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_199();
	this.instance_1.setTransform(-23,-8.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.anger_regular, new cjs.Rectangle(-23,-8,156,41), null);


(lib.anger_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_177();
	this.instance.setTransform(27.8,11.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_176();
	this.instance_1.setTransform(0.75,-1.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.anger_pink, new cjs.Rectangle(0.8,-1.4,173,52.5), null);


(lib.feeling_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.kibua_feelings = new cjs.Text("לחצו לחיצה נוספת ליציאה ממצב זה", "normal 400 22px 'Heebo'");
	this.kibua_feelings.name = "kibua_feelings";
	this.kibua_feelings.textAlign = "right";
	this.kibua_feelings.lineHeight = 23;
	this.kibua_feelings.lineWidth = 206;
	this.kibua_feelings.parent = this;
	this.kibua_feelings.setTransform(135.9872,1.3,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.kibua_feelings);
	}

	this.timeline.addTween(cjs.Tween.get(this.kibua_feelings).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.feeling_text, new cjs.Rectangle(0,0,137.3,38.3), null);


(lib.exit_about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_175();
	this.instance.setTransform(-0.45,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_174();
	this.instance_1.setTransform(-0.45,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.exit_about, new cjs.Rectangle(-0.4,-0.5,44.5,44.5), null);


(lib.exit_conent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_95();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_94();
	this.instance_1.setTransform(0,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.exit_conent, new cjs.Rectangle(0,0,35,35.1), null);


(lib.apple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(24.5,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_69();
	this.instance_1.setTransform(0,13.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apple, new cjs.Rectangle(0,0,49,59.8), null);


(lib.android = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_68();
	this.instance.setTransform(0,22.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_68();
	this.instance_1.setTransform(40,22.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_66();
	this.instance_2.setTransform(10,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_65();
	this.instance_3.setTransform(10,22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.android, new cjs.Rectangle(0,0,47.5,60), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_64();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,27,46), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_63();
	this.instance.setTransform(0.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0.1,0,19.5,98), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_62();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,48,42.5), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_61();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,8,12), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,17.5,16), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_59();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,11,31), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,37,11.5), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_57();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,246.5,198), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,24.5,42), null);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_55();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,18,101.5), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_54();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,43.5,39), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_53();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,7.5,11), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_52();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,16,15), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_51();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,21,17), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_50();
	this.instance_1.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,8.5,55.5), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_49();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,10,28.5), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_48();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,34,10.5), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.CachedBmp_47();
	this.instance_1.setTransform(1.9,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(1.9,0,196,165.5), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.upset_android_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.upset_android();
	this.instance.setTransform(0,0,0.8799,0.8799);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upset_android_1, new cjs.Rectangle(0,0,95.1,95.1), null);


(lib.tired_android_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tired_android();
	this.instance.setTransform(0,0,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tired_android_1, new cjs.Rectangle(0,0,91.8,91.8), null);


(lib.teeth_android_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.teeth_android();
	this.instance.setTransform(0,0,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teeth_android_1, new cjs.Rectangle(0,0,95.1,95.1), null);


(lib.surprised_android = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facescreaming_android();
	this.instance.setTransform(0,0,0.87,0.87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.surprised_android, new cjs.Rectangle(0,0,94,94), null);


(lib.smile_android_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smile_android();
	this.instance.setTransform(0,0,0.87,0.87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smile_android_1, new cjs.Rectangle(0,0,94,94), null);


(lib.relieved_android_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.relieved_android();
	this.instance.setTransform(0,0,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.relieved_android_1, new cjs.Rectangle(0,0,91.8,91.8), null);


(lib.pensive_android = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pensiveface_1f614();
	this.instance.setTransform(0,0,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pensive_android, new cjs.Rectangle(0,0,95.1,95.1), null);


(lib.kiss_android_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kiss_android();
	this.instance.setTransform(0,0,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kiss_android_1, new cjs.Rectangle(0,0,92.9,92.9), null);


(lib.funny_tears_android = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facewithtears_android();
	this.instance.setTransform(0,0,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.funny_tears_android, new cjs.Rectangle(0,0,91.8,91.8), null);


(lib.flushed_android_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flushed_android();
	this.instance.setTransform(0,0,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flushed_android_1, new cjs.Rectangle(0,0,92.9,92.9), null);


(lib.big_love_eyes_android = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smilingfacewithheartshapedeyes_1f60d();
	this.instance.setTransform(0,0,0.9082,0.9082);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_love_eyes_android, new cjs.Rectangle(0,0,98.1,98.1), null);


(lib.angry_android_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.angry_android();
	this.instance.setTransform(0,0,0.87,0.87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angry_android_1, new cjs.Rectangle(0,0,94,94), null);


(lib.amit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.amit_5();
	this.instance.setTransform(0,0,0.25,0.25);

	this.instance_1 = new lib.amit_4();
	this.instance_1.setTransform(0,0,0.25,0.25);

	this.instance_2 = new lib.amit_3();
	this.instance_2.setTransform(0,0,0.25,0.25);

	this.instance_3 = new lib.amit_2();
	this.instance_3.setTransform(0,0,0.25,0.25);

	this.instance_4 = new lib.amit_1();
	this.instance_4.setTransform(0,0,0.25,0.25);

	this.instance_5 = new lib.amit_6();
	this.instance_5.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},10).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,116);


(lib.about_botton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(12.3,19.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_45();
	this.instance_1.setTransform(-4.5,-4.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.about_botton, new cjs.Rectangle(-4.5,-4.5,199,75), null);


(lib.inside_about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.regular_about = new cjs.Text("- פרוייקט שהוגש במסגרת הפקולטה לטכנולוגיות למידה", "normal 300 20px 'Heebo'");
	this.regular_about.name = "regular_about";
	this.regular_about.textAlign = "center";
	this.regular_about.lineHeight = 27;
	this.regular_about.lineWidth = 441;
	this.regular_about.parent = this;
	this.regular_about.setTransform(379.65,75.7);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_about);
	}

	this.anout_link = new lib.link();
	this.anout_link.name = "anout_link";
	this.anout_link.setTransform(139.2,90.3,1,1,0,0,0,42.1,16.6);

	this.exit_about = new lib.exit_about();
	this.exit_about.name = "exit_about";
	this.exit_about.setTransform(37.95,35.9,1,1,0,0,0,21.9,21.8);

	this.title_2about = new cjs.Text(":מגישות", "normal 700 20px 'Heebo'");
	this.title_2about.name = "title_2about";
	this.title_2about.textAlign = "center";
	this.title_2about.lineHeight = 29;
	this.title_2about.lineWidth = 141;
	this.title_2about.parent = this;
	this.title_2about.setTransform(350.15,154.5);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.title_2about);
	}

	this.instance = new lib.liron();
	this.instance.setTransform(457.5,291.5,1,1,0,0,0,38.5,55.5);

	this.instance_1 = new lib.amit();
	this.instance_1.setTransform(345.1,291.8,1,1,0,0,0,40.1,55.8);

	this.instance_2 = new lib.logo50_new();
	this.instance_2.setTransform(12,356,0.6,0.6);

	this.text = new cjs.Text("לירון בלום  |  עמית בן בסט  |  מאי יורמן", "normal 300 20px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 341;
	this.text.parent = this;
	this.text.setTransform(350.15,193.9);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text);
	}

	this.text_1 = new cjs.Text("שנה: 2020", "normal 300 20px 'Heebo'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 112;
	this.text_1.parent = this;
	this.text_1.setTransform(668.05,371.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text_1);
	}

	this.instance_3 = new lib.mai();
	this.instance_3.setTransform(236.35,293.3,1,1,0,0,0,41.1,57.8);

	this.regular_about_1 = new cjs.Text("אשר פותח במסגרת הקורסים \"ארגון וייצוג ידע\" ו\"מבוא לתכנות, אינטראקציה ואנימציה״", "normal 300 20px 'Heebo'");
	this.regular_about_1.name = "regular_about_1";
	this.regular_about_1.textAlign = "center";
	this.regular_about_1.lineHeight = 26;
	this.regular_about_1.lineWidth = 671;
	this.regular_about_1.parent = this;
	this.regular_about_1.setTransform(341.25,108.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_about_1);
	}

	this.title_about = new cjs.Text("המילון לפרוד/ה הטרי/ה", "normal 400 29px 'Heebo'");
	this.title_about.name = "title_about";
	this.title_about.textAlign = "center";
	this.title_about.lineHeight = 36;
	this.title_about.lineWidth = 422;
	this.title_about.parent = this;
	this.title_about.setTransform(338.8,26.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.title_about);
	}

	this.instance_4 = new lib.CachedBmp_207();
	this.instance_4.setTransform(-4.5,-4.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.title_about},{t:this.regular_about_1},{t:this.instance_3},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.title_2about},{t:this.exit_about},{t:this.anout_link},{t:this.regular_about}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_about, new cjs.Rectangle(-4.5,-4.5,691.5,413.5), null);


(lib.static_sign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.title_text = new cjs.Text("לחצו על מערכת ההפעלה שלכם", "normal 700 26px 'Heebo'");
	this.title_text.name = "title_text";
	this.title_text.textAlign = "center";
	this.title_text.lineHeight = 28;
	this.title_text.lineWidth = 394;
	this.title_text.parent = this;
	this.title_text.setTransform(192.7,218.5);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.title_text);
	}

	this.instance = new lib.headline();
	this.instance.setTransform(191.75,154.05,1,1,0,0,0,155.2,26.2);

	this.instance_1 = new lib.CachedBmp_206();
	this.instance_1.setTransform(304.65,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_206();
	this.instance_2.setTransform(57.45,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_204();
	this.instance_3.setTransform(0,108.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.title_text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.static_sign, new cjs.Rectangle(-6.1,0,397.70000000000005,257.1), null);


(lib.static_apple_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.version = new cjs.Text("ios", "normal 700 22px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 26;
	this.version.lineWidth = 35;
	this.version.parent = this;
	this.version.setTransform(41.05,88);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance = new lib.apple();
	this.instance.setTransform(41.25,38.65,0.9185,0.9185,0,0,0,24.8,30.1);

	this.instance_1 = new lib.CachedBmp_203();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.version}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.static_apple_button, new cjs.Rectangle(-0.5,-0.5,83,120.1), null);


(lib.static_android_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.version = new cjs.Text("android", "normal 700 22px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 26;
	this.version.lineWidth = 83;
	this.version.parent = this;
	this.version.setTransform(43.7,88);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance = new lib.CachedBmp_202();
	this.instance.setTransform(1.65,-1,0.5,0.5);

	this.instance_1 = new lib.android();
	this.instance_1.setTransform(43.75,41.05,1,1,0,0,0,23.8,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.version}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.static_android_button, new cjs.Rectangle(0,-1,87.5,120.6), null);


(lib.inside_upset_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_173();
	this.instance.setTransform(124.1,40.7,0.5,0.5);

	this.instance_1 = new lib.upset_ios();
	this.instance_1.setTransform(302,551.85,0.47,0.47,0,0,0,29.8,29.9);

	this.instance_2 = new lib.upset_ios();
	this.instance_2.setTransform(178.35,472.8,0.47,0.47,0,0,0,29.8,29.9);

	this.instance_3 = new lib.upset_android_1();
	this.instance_3.setTransform(251.5,727.5,1,1,0,0,0,47.5,47.5);

	this.instance_4 = new lib.flirt_ios();
	this.instance_4.setTransform(230,373,0.3,0.3);

	this.instance_5 = new lib.upset_ios();
	this.instance_5.setTransform(152.9,727.2,1.58,1.58,0,0,0,29.7,29.7);

	this.instance_6 = new lib.CachedBmp_172();
	this.instance_6.setTransform(167.55,13.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(168.85,14.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_170();
	this.instance_8.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_9 = new lib.CachedBmp_169();
	this.instance_9.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular = new cjs.Text("face, unamused, unhappy", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,630.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_1 = new cjs.Text("״איזה יופי             ״", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 24;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,544.95);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״אני באמת מאוכזב מאוד           ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 380;
	this.regular_2.parent = this;
	this.regular_2.setTransform(407.5,466.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 26;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,597.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 26;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,513.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text("כעס/באסה", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,332.75);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("פרצוף לא מרוצה, פרצוף לא מתרשם", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 381;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,250.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text(",להביע מגוון של רגשות שליליים כגון: הקנטה .רגזנות, אי שביעות רצון, כעס וספקנות", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 26;
	this.regular_5.lineWidth = 403;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 26;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,433.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 26;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,382.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 26;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,299.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 26;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,216.85);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 26;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.exit_content},{t:this.regular},{t:this.version_1},{t:this.instance_9},{t:this.version},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_upset_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_tired_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_166();
	this.instance.setTransform(123.8,44.7,0.5,0.5);

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(28.45,56.8,1,1,0,0,0,17.4,17.4);

	this.instance_1 = new lib.tired_android_1();
	this.instance_1.setTransform(251.9,726.9,1,1,0,0,0,45.9,45.9);

	this.instance_2 = new lib.tired_ios();
	this.instance_2.setTransform(153.1,727.55,1.58,1.58,0,0,0,29.8,29.9);

	this.instance_3 = new lib.tired_ios();
	this.instance_3.setTransform(245.7,560.5,0.4753,0.4753,0,0,0,29.7,29.8);

	this.instance_4 = new lib.tired_ios();
	this.instance_4.setTransform(162.45,473.45,0.4753,0.4753,0,0,0,29.7,29.8);

	this.instance_5 = new lib.very_sad_ios();
	this.instance_5.setTransform(240,379,0.69,0.69);

	this.instance_6 = new lib.CachedBmp_172();
	this.instance_6.setTransform(167.55,13.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(168.85,14.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_170();
	this.instance_8.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_9 = new lib.CachedBmp_169();
	this.instance_9.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular = new cjs.Text("bored, tired, yawn, yawning face", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,638.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.regular_1 = new cjs.Text("״אני ממש עירני!             ״", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 24;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,555);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״אני עייף מאוד מהנושא הזה           ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 381;
	this.regular_2.parent = this;
	this.regular_2.setTransform(409.25,467.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 26;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,606.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 26;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,521.65);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text("המבלבלים", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,338.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("פרצוף משועמם, הבעת עייפות", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 381;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,257.85);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("אמוג'י שנראה שהוא נתפס באמצע פיהוק ועשוי לייצג חוסר שינה מספיק או לרמוז שעמום עם .אדם או נושא", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 381;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 26;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,434.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 26;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,388.1);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 26;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,304.9);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 26;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,224.5);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 26;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.regular},{t:this.version_1},{t:this.instance_9},{t:this.version},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.exit_content},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_tired_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_teeth_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_159();
	this.instance.setTransform(158.1,48.15,0.5,0.5);

	this.instance_1 = new lib.freezing_ios();
	this.instance_1.setTransform(236,391,0.23,0.23);

	this.instance_2 = new lib.grimacing_ios();
	this.instance_2.setTransform(171.8,572.85,0.47,0.47,0,0,0,30,29.9);

	this.instance_3 = new lib.grimacing_ios();
	this.instance_3.setTransform(284.05,492.4,0.47,0.47,0,0,0,30,29.9);

	this.instance_4 = new lib.teeth_android_1();
	this.instance_4.setTransform(250.5,727.5,1,1,0,0,0,47.5,47.5);

	this.instance_5 = new lib.grimacing_ios();
	this.instance_5.setTransform(152.9,727.2,1.58,1.58,0,0,0,29.7,29.7);

	this.instance_6 = new lib.CachedBmp_172();
	this.instance_6.setTransform(167.55,13.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(168.85,14.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_170();
	this.instance_8.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_9 = new lib.CachedBmp_169();
	this.instance_9.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular = new cjs.Text("face, grimace, grimacing face", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,650.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_1 = new cjs.Text("״הייתה שיחה ממש נעימה             ״", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 24;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,564.95);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״לא נעים לי            ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 380;
	this.regular_2.parent = this;
	this.regular_2.setTransform(407.5,486.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 26;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,617.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 26;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,533.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text("כעס/באסה", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,352.75);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("מביך, עצבני", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 381;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,270.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("פנים צהובות עם עיניים פקוחות פשוטות המראות שיניים קפוצות. עשוי לייצג מגוון של רגשות שליליים או מתוחים, במיוחד עצבנות ומבוכה .מתפרש בכמה דרכים", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 403;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 26;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,453.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 26;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,402.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 26;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,319.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 26;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,236.85);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 26;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.exit_content},{t:this.regular},{t:this.version_1},{t:this.instance_9},{t:this.version},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_teeth_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_surprised_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.regular = new cjs.Text("הביטוי שלו מעורר את הציור האייקוני של אדוארד מונק \"הצעקה\". בעוד שהוא נועד לייצג אימה ופחד , הוא מעביר בדרך כלל רגשות כמו .הלם, חוסר אמון והתרגשות עזה כמעריץ צורח", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 24;
	this.regular.lineWidth = 376;
	this.regular.parent = this;
	this.regular.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.instance = new lib.CachedBmp_152();
	this.instance.setTransform(135.5,46.9,0.5,0.5);

	this.instance_1 = new lib.tween_surprise();
	this.instance_1.setTransform(239,388,0.36,0.36);

	this.instance_2 = new lib.surprised_android();
	this.instance_2.setTransform(247,730,1,1,0,0,0,47,47);

	this.instance_3 = new lib.screaming_ios();
	this.instance_3.setTransform(153.6,726.9,1.58,1.58,0,0,0,29.7,29.7);

	this.instance_4 = new lib.flushed_ios();
	this.instance_4.setTransform(306.65,492.9,0.47,0.47,0,0,0,28.6,28.8);

	this.instance_5 = new lib.flushed_ios();
	this.instance_5.setTransform(228.8,573.5,0.47,0.47,0,0,0,28.6,28.8);

	this.instance_6 = new lib.CachedBmp_172();
	this.instance_6.setTransform(167.55,13.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(168.85,14.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_170();
	this.instance_8.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_9 = new lib.CachedBmp_169();
	this.instance_9.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular_1 = new cjs.Text("dazed, face, flushed", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 26;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,652.1);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_2 = new cjs.Text("״זה היה ממש צפוי             ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 381;
	this.regular_2.parent = this;
	this.regular_2.setTransform(409.25,567.95);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.regular_3 = new cjs.Text("״זה מביך             ״", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 380;
	this.regular_3.parent = this;
	this.regular_3.setTransform(407.5,486.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 24;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,618.75);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 24;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,536.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_4 = new cjs.Text("הפתעה/מבוכה, המבלבלים", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 381;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,359.7);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("סמיילי נבוך, ביישן", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 332;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,282.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 24;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,453.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 24;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,404.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 24;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,326.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 24;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,248.85);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 24;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_3},{t:this.regular_2},{t:this.exit_content},{t:this.regular_1},{t:this.version_1},{t:this.instance_9},{t:this.version},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.regular}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_surprised_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_smile_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_145();
	this.instance.setTransform(67,48.15,0.5,0.5);

	this.instance_1 = new lib.tween_smile_ios();
	this.instance_1.setTransform(246,367,0.27,0.27);

	this.instance_2 = new lib.smile_ios();
	this.instance_2.setTransform(195.95,470.5,0.47,0.47,0,0,0,29.7,29.7);

	this.instance_3 = new lib.smile_ios();
	this.instance_3.setTransform(264.2,551.75,0.47,0.47,0,0,0,29.7,29.7);

	this.instance_4 = new lib.smile_android_1();
	this.instance_4.setTransform(249,727,1,1,0,0,0,47,47);

	this.instance_5 = new lib.smile_ios();
	this.instance_5.setTransform(152.9,727.2,1.58,1.58,0,0,0,29.7,29.7);

	this.instance_6 = new lib.CachedBmp_172();
	this.instance_6.setTransform(167.55,13.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(168.85,14.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_170();
	this.instance_8.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_9 = new lib.CachedBmp_169();
	this.instance_9.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular = new cjs.Text("blush, eye, face, smile, smiling face with smiling eyes", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,628.1);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_1 = new cjs.Text("״מעדיפה שלא             ״", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 24;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,543.95);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״מתרגשת לראות אותך             ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 380;
	this.regular_2.parent = this;
	this.regular_2.setTransform(407.5,462.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 24;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,594.75);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 24;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,512.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text(" שמחה", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 26;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,325.7);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("פרצוף מחייך, פרצוף שמח, מביע חיוך ואושר ", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 332;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,228.15);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("מביע תחושות חיוביות ואושר, לעתים קרובות מבטא אושר אמיתי ותחושות חיוביות וחמות", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 376;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 24;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,429.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 24;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,380.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 24;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,292.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 24;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,194.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 24;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.exit_content},{t:this.regular},{t:this.version_1},{t:this.instance_9},{t:this.version},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_smile_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_relieved_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_138();
	this.instance.setTransform(126,40.7,0.5,0.5);

	this.instance_1 = new lib.relieved_android_1();
	this.instance_1.setTransform(251.9,725.9,1,1,0,0,0,45.9,45.9);

	this.instance_2 = new lib.relieved_ios();
	this.instance_2.setTransform(152.05,726.25,1.58,1.58,0,0,0,28.7,28.7);

	this.instance_3 = new lib.relieved_ios();
	this.instance_3.setTransform(249.65,578.7,0.5,0.5,0,0,0,28.8,28.8);

	this.instance_4 = new lib.relieved_ios();
	this.instance_4.setTransform(153.25,501.45,0.5,0.5,0,0,0,28.8,28.9);

	this.instance_5 = new lib.smile_ios();
	this.instance_5.setTransform(253.2,416.75,0.6,0.6,0,0,0,29.9,29.8);

	this.instance_6 = new lib.CachedBmp_172();
	this.instance_6.setTransform(167.55,13.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(168.85,14.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_170();
	this.instance_8.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_9 = new lib.CachedBmp_169();
	this.instance_9.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular = new cjs.Text("face, relieved", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,647.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_1 = new cjs.Text("״אני ממש עירני!             ״", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 24;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,569.55);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״אני עייף מאוד מהנושא הזה           ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 381;
	this.regular_2.parent = this;
	this.regular_2.setTransform(409.25,492.7);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 26;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,622.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 26;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,544.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text("המבלבלים", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,373.1);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("פרצוף שבע רצון, מאושר", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 381;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,297.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("אמוג'י המעביר תחושות נעימות שונות כמו שביעות רצון, רוגע שלווה והקלה. לעיתים עשוי להעביר רגשות של אושר או הומור. אמוג'י זה יכול להביע לעיתים גם תחושות של התנשאות ולכן .חשוב לשים לב כיצד משתמשים בו", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 400;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,120.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 26;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,466.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 26;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,417.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 24;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,345.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 26;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,269.5);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 24;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.exit_content},{t:this.regular},{t:this.version_1},{t:this.instance_9},{t:this.version},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_relieved_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_pensive_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_131();
	this.instance.setTransform(109.25,46.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_130();
	this.instance_1.setTransform(110.75,47.9,0.5,0.5);

	this.instance_2 = new lib.pensive_ios();
	this.instance_2.setTransform(62.7,512.85,0.47,0.47,0,0,0,29.8,29.9);

	this.regular = new cjs.Text("\"         מצטערת שאני לא יכולה לבוא אני חולה\"", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 407;
	this.regular.parent = this;
	this.regular.setTransform(409.25,507.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.instance_3 = new lib.pensive_ios();
	this.instance_3.setTransform(297.05,586.7,0.47,0.47,0,0,0,29.8,29.9);

	this.instance_4 = new lib.sad_tween_ios();
	this.instance_4.setTransform(232,412,0.35,0.35);

	this.instance_5 = new lib.pensive_android();
	this.instance_5.setTransform(254.5,728.5,1,1,0,0,0,47.5,47.5);

	this.instance_6 = new lib.pensive_ios();
	this.instance_6.setTransform(153.6,730.05,1.58,1.58,0,0,0,29.7,29.7);

	this.instance_7 = new lib.CachedBmp_172();
	this.instance_7.setTransform(167.55,13.4,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_171();
	this.instance_8.setTransform(168.85,14.7,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_170();
	this.instance_9.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_10 = new lib.CachedBmp_169();
	this.instance_10.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular_1 = new cjs.Text("dejected, face, pensive", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 26;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,650.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.text = new cjs.Text("\"            תהני בים\"", "normal 400 20px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 381;
	this.text.parent = this;
	this.text.setTransform(409.25,579.15);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 29;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,618.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 24;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,547.65);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_2 = new cjs.Text("עצב, כעס/באסה", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 381;
	this.regular_2.parent = this;
	this.regular_2.setTransform(409.25,380.6);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.regular_3 = new cjs.Text("השתתפות בצער ושותפות גורל, התבאסות מציון במבחן וכו׳", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,285.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("אימוג׳י אשר מביע בעיקר עצב ואכזבה. יכול להיות עצב תהומי בעקבות דברים ממש שטחיים ויכול לשמש גם כאכזבה מאדם מסוים. עשוי להעביר מגוון רגשות עצובים, כולל הרגשת .פגיעה, אכזבה או בדידות", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 398;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 29;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,474.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 29;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,427.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 29;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,347.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 29;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,262);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 29;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_11 = new lib.CachedBmp_168();
	this.instance_11.setTransform(60.9,0,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_167();
	this.instance_12.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_4},{t:this.regular_3},{t:this.regular_2},{t:this.pink_title_1},{t:this.pink_title},{t:this.text},{t:this.exit_content},{t:this.regular_1},{t:this.version_1},{t:this.instance_10},{t:this.version},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.regular},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_pensive_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_love_eyes_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_123();
	this.instance.setTransform(75.6,39.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_172();
	this.instance_1.setTransform(167.55,13.4,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_171();
	this.instance_2.setTransform(168.85,14.7,0.5,0.5);

	this.instance_3 = new lib.love_eyes_ios();
	this.instance_3.setTransform(155.8,728.7,1.4296,1.4296,0,0,0,29.9,29.9);

	this.instance_4 = new lib.big_love_eyes_android();
	this.instance_4.setTransform(253.1,728.6,0.897,0.897,0,0,0,49.1,49.2);

	this.instance_5 = new lib.love_eyes_ios();
	this.instance_5.setTransform(193.95,511.75,0.4543,0.4543,0,0,0,29.9,29.9);

	this.instance_6 = new lib.love_eyes_ios();
	this.instance_6.setTransform(252.45,610.6,0.4543,0.4543,0,0,0,29.9,29.9);

	this.instance_7 = new lib.CachedBmp_170();
	this.instance_7.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_8 = new lib.CachedBmp_169();
	this.instance_8.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.instance_9 = new lib.love_eyes_cat_ios();
	this.instance_9.setTransform(231,412,0.716,0.716);

	this.regular = new cjs.Text("love, smile, smiling face with heart-eyes", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,660.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_1 = new cjs.Text("לא מתאים לתקשורת בנושאי עבודה- \n״נתראה בפגישה             ״", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 24;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,574.15);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״ואווו איזה תינוק מושלם           ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 381;
	this.regular_2.parent = this;
	this.regular_2.setTransform(409.25,502.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 26;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,628.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 26;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,542.65);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text("אהבה, התלהבות, שמחה", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,379.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("התלהבות מחיה חמודה, מקום יפהפה, .אנשים .וסלבריטאים, אוכל וכל דבר מלהיב", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 381;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,282.85);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("אימוג׳י פופולרי מאוד בקרב אנשים אשר רוצים .להביע אהבה/ התלהבות ממשהו שהם אוהבים לעתים קרובות הטון שלו יכול להיות רומנטי או .אפלטוני - מה שבהחלט תלוי בהקשר ", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 381;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 26;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,469.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 26;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,421.1);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 26;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(410.4,345.95);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 26;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,249.5);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 26;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.exit_content},{t:this.regular},{t:this.instance_9},{t:this.version_1},{t:this.instance_8},{t:this.version},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_love_eyes_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_kiss_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_116();
	this.instance.setTransform(125.2,48.65,0.5,0.5);

	this.instance_1 = new lib.kiss_ios();
	this.instance_1.setTransform(161.75,575.85,0.47,0.47,0,0,0,29.9,29.9);

	this.instance_2 = new lib.kiss_ios();
	this.instance_2.setTransform(215.1,503.4,0.47,0.47,0,0,0,29.9,29.9);

	this.instance_3 = new lib.תאוםפניםמפריחותנשיקה();
	this.instance_3.setTransform(236,401,0.25,0.25);

	this.instance_4 = new lib.kiss_android_1();
	this.instance_4.setTransform(252.5,726.5,1,1,0,0,0,46.5,46.5);

	this.instance_5 = new lib.kiss_ios();
	this.instance_5.setTransform(152.9,727.2,1.58,1.58,0,0,0,29.7,29.7);

	this.instance_6 = new lib.CachedBmp_172();
	this.instance_6.setTransform(167.55,13.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(168.85,14.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_170();
	this.instance_8.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_9 = new lib.CachedBmp_169();
	this.instance_9.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular = new cjs.Text("face, face blowing a kiss, kiss", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,642.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_1 = new cjs.Text("״לא כל כך נהנתי מהפגישה             ״", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 24;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,568.95);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״מחכה לראות אותך             ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 380;
	this.regular_2.parent = this;
	this.regular_2.setTransform(407.5,495.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 26;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,609.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 26;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,537.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text("אהבה, שמחה", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,364.75);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("הפרחת נשיקה, ושליחת נשיקה לאהובים חברים ומשפחה", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 332;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,271.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("פרצוף צהוב קורץ בשפתיים מכווצות ומפריחות נשיקה, מתוארות כלב קטן ואדום. עשוי לייצג שלום לברכת או לילה טוב ולהעביר רגשות שלאהבה וחיבה באופן כללי יותר ", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 376;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 26;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,462.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 26;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,413.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 26;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,331.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 26;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,237.85);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 26;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.exit_content},{t:this.regular},{t:this.version_1},{t:this.instance_9},{t:this.version},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_kiss_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_funny_tears_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_109();
	this.instance.setTransform(107.75,40.7,0.5,0.5);

	this.instance_1 = new lib.tween_funny_tears();
	this.instance_1.setTransform(268.05,442.7,0.3,0.3,0,0,0,60.1,60.1);

	this.instance_2 = new lib.funnytears_ios();
	this.instance_2.setTransform(221.75,593.2,0.47,0.47,0,0,0,29.9,29.8);

	this.instance_3 = new lib.funnytears_ios();
	this.instance_3.setTransform(253,593.2,0.47,0.47,0,0,0,29.9,29.8);

	this.instance_4 = new lib.funnytears_ios();
	this.instance_4.setTransform(283.65,593.2,0.47,0.47,0,0,0,29.9,29.8);

	this.instance_5 = new lib.funnytears_ios();
	this.instance_5.setTransform(247.4,517.8,0.47,0.47,0,0,0,29.9,29.8);

	this.instance_6 = new lib.funny_tears_android();
	this.instance_6.setTransform(251.9,728.9,1,1,0,0,0,45.9,45.9);

	this.instance_7 = new lib.funnytears_ios();
	this.instance_7.setTransform(153.25,727.2,1.58,1.58,0,0,0,29.9,29.7);

	this.instance_8 = new lib.CachedBmp_172();
	this.instance_8.setTransform(167.55,13.4,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_171();
	this.instance_9.setTransform(168.85,14.7,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_170();
	this.instance_10.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "normal 700 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 24;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.instance_11 = new lib.CachedBmp_169();
	this.instance_11.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "normal 700 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 24;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version_1);
	}

	this.regular = new cjs.Text("face with tears of joy, joy, laugh, tear", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,647.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_1 = new cjs.Text("״איזה יפה את                         ״", "normal 400 18px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 21;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,585);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״זה קורע מצחוק           ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 380;
	this.regular_2.parent = this;
	this.regular_2.setTransform(407.5,511.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 24;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,623);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 24;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,553.5);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text("שמחה", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,403.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text(",תגובה לבדיחה מצחיקה, סיפור מצחיק שקרה תמונה מצחיקה וכו׳", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 26;
	this.regular_4.lineWidth = 381;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,319.9);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text(".מביע צחוק מאוד חזק ומוגזם ממשהו מסויים אחד מעשרת האמוג'ים הפופולריים ביותר בין השנים 2014–2018 וזכה לתואר ״מילת השנה״ של מילון אוקספורד ב-2015. בשל העובדה שהאימוג׳י הינו אימוג׳י מאוד נפוץ יש הנוטים להשתמש בו בדרך שאינה מושכלת אשר יכולה .ליצור אי נעימויות", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 26;
	this.regular_5.lineWidth = 403;
	this.regular_5.parent = this;
	this.regular_5.setTransform(410.5,119.95);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 24;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,478.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 24;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,436.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 24;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,378.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 24;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,294.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 20px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 24;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_12 = new lib.CachedBmp_168();
	this.instance_12.setTransform(60.9,0,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_167();
	this.instance_13.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.exit_content},{t:this.regular},{t:this.version_1},{t:this.instance_11},{t:this.version},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_funny_tears_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_flushed_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_102();
	this.instance.setTransform(161.35,49.1,0.5,0.5);

	this.instance_1 = new lib.תאוםפניםסמוקות();
	this.instance_1.setTransform(232,387,0.27,0.27);

	this.instance_2 = new lib.flushed_ios();
	this.instance_2.setTransform(306.65,492.9,0.47,0.47,0,0,0,28.6,28.8);

	this.instance_3 = new lib.flushed_ios();
	this.instance_3.setTransform(231.8,571.5,0.47,0.47,0,0,0,28.6,28.8);

	this.instance_4 = new lib.flushed_android_1();
	this.instance_4.setTransform(247.5,725.5,1,1,0,0,0,46.5,46.5);

	this.instance_5 = new lib.flushed_ios();
	this.instance_5.setTransform(153.05,726.85,1.58,1.58,0,0,0,28.7,28.7);

	this.instance_6 = new lib.CachedBmp_172();
	this.instance_6.setTransform(167.55,13.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(168.85,14.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_170();
	this.instance_8.setTransform(72.8,705.4,0.5,0.5);

	this.version = new cjs.Text("ios", "bold 20px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 26;
	this.version.lineWidth = 28;
	this.version.parent = this;
	this.version.setTransform(72.6,736.25);

	this.instance_9 = new lib.CachedBmp_169();
	this.instance_9.setTransform(303.9,705.4,0.5,0.5);

	this.version_1 = new cjs.Text("android", "bold 20px 'Heebo'");
	this.version_1.name = "version_1";
	this.version_1.textAlign = "center";
	this.version_1.lineHeight = 26;
	this.version_1.lineWidth = 72;
	this.version_1.parent = this;
	this.version_1.setTransform(349.8,736.25);

	this.regular = new cjs.Text("dazed, face, flushed", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 381;
	this.regular.parent = this;
	this.regular.setTransform(409.25,648.1);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_1 = new cjs.Text("״זה היה ממש צפוי             ״", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 24;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,563.95);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_2 = new cjs.Text("״זה מביך             ״", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 24;
	this.regular_2.lineWidth = 380;
	this.regular_2.parent = this;
	this.regular_2.setTransform(407.5,482.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 26;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,614.75);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.pink_title_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_1.name = "pink_title_1";
	this.pink_title_1.textAlign = "right";
	this.pink_title_1.lineHeight = 26;
	this.pink_title_1.lineWidth = 382;
	this.pink_title_1.parent = this;
	this.pink_title_1.setTransform(409.25,532.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_1);
	}

	this.regular_3 = new cjs.Text("הפתעה/מבוכה, המבלבלים", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,345.7);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("סמיילי נבוך, ביישן", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 332;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,268.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("נועד לתאר מבוכה אך עם השנים המשמעות שלו התרחבה. מביע רגש של מבוכה ולכן משתמשים בו .גם ללא מילים, כשאין מה .לומר או כשמופתעים", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 376;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.pink_title_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_2.name = "pink_title_2";
	this.pink_title_2.textAlign = "right";
	this.pink_title_2.lineHeight = 26;
	this.pink_title_2.lineWidth = 382;
	this.pink_title_2.parent = this;
	this.pink_title_2.setTransform(409.25,449.2);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_2);
	}

	this.pink_title_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_3.name = "pink_title_3";
	this.pink_title_3.textAlign = "right";
	this.pink_title_3.lineHeight = 26;
	this.pink_title_3.lineWidth = 230;
	this.pink_title_3.parent = this;
	this.pink_title_3.setTransform(409.25,400.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_3);
	}

	this.pink_title_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_4.name = "pink_title_4";
	this.pink_title_4.textAlign = "right";
	this.pink_title_4.lineHeight = 26;
	this.pink_title_4.lineWidth = 230;
	this.pink_title_4.parent = this;
	this.pink_title_4.setTransform(409.25,312.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_4);
	}

	this.pink_title_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_5.name = "pink_title_5";
	this.pink_title_5.textAlign = "right";
	this.pink_title_5.lineHeight = 26;
	this.pink_title_5.lineWidth = 130;
	this.pink_title_5.parent = this;
	this.pink_title_5.setTransform(409.25,234.85);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_5);
	}

	this.pink_title_6 = new cjs.Text(":מידע כללי", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title_6.name = "pink_title_6";
	this.pink_title_6.textAlign = "right";
	this.pink_title_6.lineHeight = 26;
	this.pink_title_6.lineWidth = 130;
	this.pink_title_6.parent = this;
	this.pink_title_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title_6);
	}

	this.instance_10 = new lib.CachedBmp_168();
	this.instance_10.setTransform(60.9,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_167();
	this.instance_11.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.pink_title_6},{t:this.pink_title_5},{t:this.pink_title_4},{t:this.pink_title_3},{t:this.pink_title_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.pink_title_1},{t:this.pink_title},{t:this.regular_2},{t:this.regular_1},{t:this.exit_content},{t:this.regular},{t:this.version_1},{t:this.instance_9},{t:this.version},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_flushed_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.inside_angry_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_93();
	this.instance.setTransform(128.3,44.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_92();
	this.instance_1.setTransform(307.6,40.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_91();
	this.instance_2.setTransform(292.65,40.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_90();
	this.instance_3.setTransform(286.35,40.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_89();
	this.instance_4.setTransform(274.35,40.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_88();
	this.instance_5.setTransform(268.2,40.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_87();
	this.instance_6.setTransform(261.9,40.85,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_86();
	this.instance_7.setTransform(238.95,40.85,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_85();
	this.instance_8.setTransform(232.65,40.85,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_84();
	this.instance_9.setTransform(226.35,40.85,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_83();
	this.instance_10.setTransform(211.35,40.85,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_82();
	this.instance_11.setTransform(190.8,40.85,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_81();
	this.instance_12.setTransform(176.25,40.85,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_80();
	this.instance_13.setTransform(169.95,40.85,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_79();
	this.instance_14.setTransform(154.05,40.85,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_78();
	this.instance_15.setTransform(147.75,40.85,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_77();
	this.instance_16.setTransform(131.5,40.85,0.5,0.5);

	this.instance_17 = new lib.tween_angry_ios();
	this.instance_17.setTransform(227,416,0.35,0.35);

	this.instance_18 = new lib.angry_ios();
	this.instance_18.setTransform(294.95,586.95,0.47,0.47,0,0,0,29.7,29.7);

	this.instance_19 = new lib.angry_ios();
	this.instance_19.setTransform(159.85,515.75,0.47,0.47,0,0,0,29.7,29.7);

	this.instance_20 = new lib.angry_android_1();
	this.instance_20.setTransform(255,729,1,1,0,0,0,47,47);

	this.instance_21 = new lib.angry_ios();
	this.instance_21.setTransform(153.6,730.05,1.58,1.58,0,0,0,29.7,29.7);

	this.regular = new cjs.Text("\"         לא מאמינה שאמרת את זה\"", "normal 400 20px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 26;
	this.regular.lineWidth = 407;
	this.regular.parent = this;
	this.regular.setTransform(409.25,507.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.instance_22 = new lib.CachedBmp_172();
	this.instance_22.setTransform(167.55,13.4,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_171();
	this.instance_23.setTransform(168.85,14.7,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_170();
	this.instance_24.setTransform(72.8,705.4,0.5,0.5);

	this.text = new cjs.Text("ios", "normal 700 18px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 28;
	this.text.parent = this;
	this.text.setTransform(72.6,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text);
	}

	this.instance_25 = new lib.CachedBmp_169();
	this.instance_25.setTransform(303.9,705.4,0.5,0.5);

	this.version = new cjs.Text("android", "normal 700 18px 'Heebo'");
	this.version.name = "version";
	this.version.textAlign = "center";
	this.version.lineHeight = 21;
	this.version.lineWidth = 72;
	this.version.parent = this;
	this.version.setTransform(349.8,736.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.version);
	}

	this.regular_1 = new cjs.Text("angry, face, mad", "normal 400 20px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 26;
	this.regular_1.lineWidth = 381;
	this.regular_1.parent = this;
	this.regular_1.setTransform(409.25,650.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.exit_content = new lib.exit_conent();
	this.exit_content.name = "exit_content";
	this.exit_content.setTransform(26.3,50.75,0.6533,0.6533,0,0,0,17.4,17.4);

	this.regular_2 = new cjs.Text("\"         הכל בסדר\"", "normal 400 20px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 26;
	this.regular_2.lineWidth = 381;
	this.regular_2.parent = this;
	this.regular_2.setTransform(409.25,579.15);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.pink_title = new cjs.Text("TAGS", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.pink_title.name = "pink_title";
	this.pink_title.textAlign = "right";
	this.pink_title.lineHeight = 26;
	this.pink_title.lineWidth = 382;
	this.pink_title.parent = this;
	this.pink_title.setTransform(409.25,618.8);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.pink_title);
	}

	this.text_1 = new cjs.Text(":מה לא כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 382;
	this.text_1.parent = this;
	this.text_1.setTransform(409.25,547.65);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text_1);
	}

	this.regular_3 = new cjs.Text("כעס/באסה", "normal 400 20px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 24;
	this.regular_3.lineWidth = 381;
	this.regular_3.parent = this;
	this.regular_3.setTransform(409.25,380.6);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text("כעס ממשהו שנעשה, כעס על מקרה שקרה", "normal 400 20px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 24;
	this.regular_4.lineWidth = 381;
	this.regular_4.parent = this;
	this.regular_4.setTransform(409.25,295.35);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_5 = new cjs.Text("האמוג'י מעביר אל המקבל תחושה של כעס/זעף .ועשוי לייצג מישהו שמתנהג בצורה מרושעת הבעות הכעס משתנות מאוד בין הפלטפורמות ולכן חשוב לשים לב כאשר משתמשים באותו אמוגי' כדי לא .ליצור אי הבנות", "normal 400 20px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 24;
	this.regular_5.lineWidth = 398;
	this.regular_5.parent = this;
	this.regular_5.setTransform(409.25,128.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.text_2 = new cjs.Text(":מה כדאי לרשום עם האימוג׳י", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 382;
	this.text_2.parent = this;
	this.text_2.setTransform(409.25,474.45);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text_2);
	}

	this.text_3 = new cjs.Text(":אימוג׳י תאום", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 230;
	this.text_3.parent = this;
	this.text_3.setTransform(409.25,427.4);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text_3);
	}

	this.text_4 = new cjs.Text(":הרגש אותו מביע", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 26;
	this.text_4.lineWidth = 230;
	this.text_4.parent = this;
	this.text_4.setTransform(409.25,347.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text_4);
	}

	this.text_5 = new cjs.Text(":שימושים", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 26;
	this.text_5.lineWidth = 130;
	this.text_5.parent = this;
	this.text_5.setTransform(409.25,262);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text_5);
	}

	this.text_6 = new cjs.Text(":מידע כללי", "normal 700 22px 'Heebo'", "#FB5FBE");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 26;
	this.text_6.lineWidth = 130;
	this.text_6.parent = this;
	this.text_6.setTransform(409.25,95.05);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text_6);
	}

	this.instance_26 = new lib.CachedBmp_168();
	this.instance_26.setTransform(60.9,0,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_167();
	this.instance_27.setTransform(-1.5,29.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.regular_5},{t:this.regular_4},{t:this.regular_3},{t:this.text_1},{t:this.pink_title},{t:this.regular_2},{t:this.exit_content},{t:this.regular_1},{t:this.version},{t:this.instance_25},{t:this.text},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.regular},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inside_angry_content, new cjs.Rectangle(-1.5,0,425,789.5), null);


(lib.moving_about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.inside_about = new lib.inside_about();
	this.inside_about.name = "inside_about";
	this.inside_about.setTransform(341.2,865.1,1,1,0,0,0,341.2,202.3);

	this.timeline.addTween(cjs.Tween.get(this.inside_about).wait(1).to({regY:202.2,y:863.85},0).wait(1).to({y:860.4},0).wait(1).to({y:854.6},0).wait(1).to({y:846.6},0).wait(1).to({y:836.25},0).wait(1).to({y:823.55},0).wait(1).to({y:808.6},0).wait(1).to({y:791.35},0).wait(1).to({y:771.75},0).wait(1).to({y:749.9},0).wait(1).to({y:725.75},0).wait(1).to({y:699.3},0).wait(1).to({y:670.55},0).wait(1).to({y:639.45},0).wait(1).to({y:606.05},0).wait(1).to({y:570.4},0).wait(1).to({y:532.45},0).wait(1).to({y:492.15},0).wait(1).to({y:449.6},0).wait(1).to({y:404.7},0).wait(1).to({y:357.5},0).wait(1).to({y:308.05},0).wait(1).to({y:256.3},0).wait(1).to({y:202.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,691.5,1076.3);


(lib.moving_upset_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_upset_content_ios = new lib.inside_upset_content();
	this.inside_upset_content_ios.name = "inside_upset_content_ios";
	this.inside_upset_content_ios.setTransform(267.35,1135.8,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_upset_content_ios).wait(1).to({regX:211,regY:394.7,x:267.25,y:1134.2},0).wait(1).to({y:1129.75},0).wait(1).to({y:1122.25},0).wait(1).to({y:1111.85},0).wait(1).to({y:1098.4},0).wait(1).to({y:1081.95},0).wait(1).to({y:1062.6},0).wait(1).to({y:1040.2},0).wait(1).to({y:1014.85},0).wait(1).to({y:986.5},0).wait(1).to({y:955.2},0).wait(1).to({y:920.85},0).wait(1).to({y:883.55},0).wait(1).to({y:843.3},0).wait(1).to({y:800},0).wait(1).to({y:753.75},0).wait(1).to({y:704.5},0).wait(1).to({y:652.3},0).wait(1).to({y:597.1},0).wait(1).to({y:538.9},0).wait(1).to({y:477.75},0).wait(1).to({y:413.6},0).wait(1).to({y:346.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-48.2,425,1578.7);


(lib.moving_tired_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_tired_content_ios = new lib.inside_tired_content();
	this.inside_tired_content_ios.name = "inside_tired_content_ios";
	this.inside_tired_content_ios.setTransform(267.35,1135.8,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_tired_content_ios).wait(1).to({regX:211,regY:394.7,x:267.25,y:1134.2},0).wait(1).to({y:1129.75},0).wait(1).to({y:1122.25},0).wait(1).to({y:1111.85},0).wait(1).to({y:1098.4},0).wait(1).to({y:1081.95},0).wait(1).to({y:1062.6},0).wait(1).to({y:1040.2},0).wait(1).to({y:1014.85},0).wait(1).to({y:986.5},0).wait(1).to({y:955.2},0).wait(1).to({y:920.85},0).wait(1).to({y:883.55},0).wait(1).to({y:843.3},0).wait(1).to({y:800},0).wait(1).to({y:753.75},0).wait(1).to({y:704.5},0).wait(1).to({y:652.3},0).wait(1).to({y:597.1},0).wait(1).to({y:538.9},0).wait(1).to({y:477.75},0).wait(1).to({y:413.6},0).wait(1).to({y:346.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-48.2,425,1578.7);


(lib.moving_teeth_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_teeth_content_ios = new lib.inside_teeth_content();
	this.inside_teeth_content_ios.name = "inside_teeth_content_ios";
	this.inside_teeth_content_ios.setTransform(267.35,1135.8,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_teeth_content_ios).wait(1).to({regX:211,regY:394.7,x:267.25,y:1134.2},0).wait(1).to({y:1129.75},0).wait(1).to({y:1122.25},0).wait(1).to({y:1111.85},0).wait(1).to({y:1098.4},0).wait(1).to({y:1081.95},0).wait(1).to({y:1062.6},0).wait(1).to({y:1040.2},0).wait(1).to({y:1014.85},0).wait(1).to({y:986.5},0).wait(1).to({y:955.2},0).wait(1).to({y:920.85},0).wait(1).to({y:883.55},0).wait(1).to({y:843.3},0).wait(1).to({y:800},0).wait(1).to({y:753.75},0).wait(1).to({y:704.5},0).wait(1).to({y:652.3},0).wait(1).to({y:597.1},0).wait(1).to({y:538.9},0).wait(1).to({y:477.75},0).wait(1).to({y:413.6},0).wait(1).to({y:346.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-48.2,425,1578.7);


(lib.moving_surprised_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_screaming_content_ios = new lib.inside_surprised_content();
	this.inside_screaming_content_ios.name = "inside_screaming_content_ios";
	this.inside_screaming_content_ios.setTransform(267.35,1135.8,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_screaming_content_ios).wait(1).to({regX:211,regY:394.7,x:267.25,y:1134.2},0).wait(1).to({y:1129.75},0).wait(1).to({y:1122.25},0).wait(1).to({y:1111.85},0).wait(1).to({y:1098.4},0).wait(1).to({y:1081.95},0).wait(1).to({y:1062.6},0).wait(1).to({y:1040.2},0).wait(1).to({y:1014.85},0).wait(1).to({y:986.5},0).wait(1).to({y:955.2},0).wait(1).to({y:920.85},0).wait(1).to({y:883.55},0).wait(1).to({y:843.3},0).wait(1).to({y:800},0).wait(1).to({y:753.75},0).wait(1).to({y:704.5},0).wait(1).to({y:652.3},0).wait(1).to({y:597.1},0).wait(1).to({y:538.9},0).wait(1).to({y:477.75},0).wait(1).to({y:413.6},0).wait(1).to({y:346.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-48.2,425,1578.7);


(lib.moving_smile_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_smile_content_ios = new lib.inside_smile_content();
	this.inside_smile_content_ios.name = "inside_smile_content_ios";
	this.inside_smile_content_ios.setTransform(267.35,1135.8,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_smile_content_ios).wait(1).to({regX:211,regY:394.7,x:267.25,y:1134.2},0).wait(1).to({y:1129.75},0).wait(1).to({y:1122.25},0).wait(1).to({y:1111.85},0).wait(1).to({y:1098.4},0).wait(1).to({y:1081.95},0).wait(1).to({y:1062.6},0).wait(1).to({y:1040.2},0).wait(1).to({y:1014.85},0).wait(1).to({y:986.5},0).wait(1).to({y:955.2},0).wait(1).to({y:920.85},0).wait(1).to({y:883.55},0).wait(1).to({y:843.3},0).wait(1).to({y:800},0).wait(1).to({y:753.75},0).wait(1).to({y:704.5},0).wait(1).to({y:652.3},0).wait(1).to({y:597.1},0).wait(1).to({y:538.9},0).wait(1).to({y:477.75},0).wait(1).to({y:413.6},0).wait(1).to({y:346.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-48.2,425,1578.7);


(lib.moving_relieved_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_relieved_content_ios = new lib.inside_relieved_content();
	this.inside_relieved_content_ios.name = "inside_relieved_content_ios";
	this.inside_relieved_content_ios.setTransform(260.85,1212.65,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_relieved_content_ios).wait(1).to({regX:211,regY:394.7,x:260.75,y:1211.05},0).wait(1).to({y:1206.6},0).wait(1).to({y:1199.1},0).wait(1).to({y:1188.7},0).wait(1).to({y:1175.25},0).wait(1).to({y:1158.8},0).wait(1).to({y:1139.45},0).wait(1).to({y:1117.05},0).wait(1).to({y:1091.7},0).wait(1).to({y:1063.35},0).wait(1).to({y:1032.05},0).wait(1).to({y:997.7},0).wait(1).to({y:960.4},0).wait(1).to({y:920.15},0).wait(1).to({y:876.85},0).wait(1).to({y:830.6},0).wait(1).to({y:781.35},0).wait(1).to({y:729.15},0).wait(1).to({y:673.95},0).wait(1).to({y:615.75},0).wait(1).to({y:554.6},0).wait(1).to({y:490.45},0).wait(1).to({y:423.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.3,28.7,425,1578.6);


(lib.moving_pensive_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_pensive_content_ios = new lib.inside_pensive_content();
	this.inside_pensive_content_ios.name = "inside_pensive_content_ios";
	this.inside_pensive_content_ios.setTransform(211.1,1184.05,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_pensive_content_ios).wait(1).to({regX:211,regY:394.7,x:211,y:1182.45},0).wait(1).to({y:1178},0).wait(1).to({y:1170.5},0).wait(1).to({y:1160.1},0).wait(1).to({y:1146.65},0).wait(1).to({y:1130.2},0).wait(1).to({y:1110.85},0).wait(1).to({y:1088.45},0).wait(1).to({y:1063.1},0).wait(1).to({y:1034.75},0).wait(1).to({y:1003.45},0).wait(1).to({y:969.1},0).wait(1).to({y:931.8},0).wait(1).to({y:891.55},0).wait(1).to({y:848.25},0).wait(1).to({y:802},0).wait(1).to({y:752.75},0).wait(1).to({y:700.55},0).wait(1).to({y:645.35},0).wait(1).to({y:587.15},0).wait(1).to({y:526},0).wait(1).to({y:461.85},0).wait(1).to({y:394.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,425,1578.7);


(lib.moving_content_love_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_love_eyes_content_ios = new lib.inside_love_eyes_content();
	this.inside_love_eyes_content_ios.name = "inside_love_eyes_content_ios";
	this.inside_love_eyes_content_ios.setTransform(211.1,1184.05,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_love_eyes_content_ios).wait(1).to({regX:211,regY:394.7,x:211,y:1182.45},0).wait(1).to({y:1178},0).wait(1).to({y:1170.5},0).wait(1).to({y:1160.1},0).wait(1).to({y:1146.65},0).wait(1).to({y:1130.2},0).wait(1).to({y:1110.85},0).wait(1).to({y:1088.45},0).wait(1).to({y:1063.1},0).wait(1).to({y:1034.75},0).wait(1).to({y:1003.45},0).wait(1).to({y:969.1},0).wait(1).to({y:931.8},0).wait(1).to({y:891.55},0).wait(1).to({y:848.25},0).wait(1).to({y:802},0).wait(1).to({y:752.75},0).wait(1).to({y:700.55},0).wait(1).to({y:645.35},0).wait(1).to({y:587.15},0).wait(1).to({y:526},0).wait(1).to({y:461.85},0).wait(1).to({y:394.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,425,1578.7);


(lib.moving_kiss_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_kiss_content_ios = new lib.inside_kiss_content();
	this.inside_kiss_content_ios.name = "inside_kiss_content_ios";
	this.inside_kiss_content_ios.setTransform(267.35,1135.8,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_kiss_content_ios).wait(1).to({regX:211,regY:394.7,x:267.25,y:1134.2},0).wait(1).to({y:1129.75},0).wait(1).to({y:1122.25},0).wait(1).to({y:1111.85},0).wait(1).to({y:1098.4},0).wait(1).to({y:1081.95},0).wait(1).to({y:1062.6},0).wait(1).to({y:1040.2},0).wait(1).to({y:1014.85},0).wait(1).to({y:986.5},0).wait(1).to({y:955.2},0).wait(1).to({y:920.85},0).wait(1).to({y:883.55},0).wait(1).to({y:843.3},0).wait(1).to({y:800},0).wait(1).to({y:753.75},0).wait(1).to({y:704.5},0).wait(1).to({y:652.3},0).wait(1).to({y:597.1},0).wait(1).to({y:538.9},0).wait(1).to({y:477.75},0).wait(1).to({y:413.6},0).wait(1).to({y:346.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-48.2,425,1578.7);


(lib.moving_funny_tears_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_funnytears_content_ios = new lib.inside_funny_tears_content();
	this.inside_funnytears_content_ios.name = "inside_funnytears_content_ios";
	this.inside_funnytears_content_ios.setTransform(267.35,1135.8,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_funnytears_content_ios).wait(1).to({regX:211,regY:394.7,x:267.25,y:1134.2},0).wait(1).to({y:1129.75},0).wait(1).to({y:1122.25},0).wait(1).to({y:1111.85},0).wait(1).to({y:1098.4},0).wait(1).to({y:1081.95},0).wait(1).to({y:1062.6},0).wait(1).to({y:1040.2},0).wait(1).to({y:1014.85},0).wait(1).to({y:986.5},0).wait(1).to({y:955.2},0).wait(1).to({y:920.85},0).wait(1).to({y:883.55},0).wait(1).to({y:843.3},0).wait(1).to({y:800},0).wait(1).to({y:753.75},0).wait(1).to({y:704.5},0).wait(1).to({y:652.3},0).wait(1).to({y:597.1},0).wait(1).to({y:538.9},0).wait(1).to({y:477.75},0).wait(1).to({y:413.6},0).wait(1).to({y:346.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-48.2,425,1578.7);


(lib.moving_flushed_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_flushed_content_ios = new lib.inside_flushed_content();
	this.inside_flushed_content_ios.name = "inside_flushed_content_ios";
	this.inside_flushed_content_ios.setTransform(267.35,1135.8,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_flushed_content_ios).wait(1).to({regX:211,regY:394.7,x:267.25,y:1134.2},0).wait(1).to({y:1129.75},0).wait(1).to({y:1122.25},0).wait(1).to({y:1111.85},0).wait(1).to({y:1098.4},0).wait(1).to({y:1081.95},0).wait(1).to({y:1062.6},0).wait(1).to({y:1040.2},0).wait(1).to({y:1014.85},0).wait(1).to({y:986.5},0).wait(1).to({y:955.2},0).wait(1).to({y:920.85},0).wait(1).to({y:883.55},0).wait(1).to({y:843.3},0).wait(1).to({y:800},0).wait(1).to({y:753.75},0).wait(1).to({y:704.5},0).wait(1).to({y:652.3},0).wait(1).to({y:597.1},0).wait(1).to({y:538.9},0).wait(1).to({y:477.75},0).wait(1).to({y:413.6},0).wait(1).to({y:346.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-48.2,425,1578.7);


(lib.moving_angry_content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.inside_angry_content_ios = new lib.inside_angry_content();
	this.inside_angry_content_ios.name = "inside_angry_content_ios";
	this.inside_angry_content_ios.setTransform(211.1,1184.05,1,1,0,0,0,211.1,394.8);

	this.timeline.addTween(cjs.Tween.get(this.inside_angry_content_ios).wait(1).to({regX:211,regY:394.7,x:211,y:1182.45},0).wait(1).to({y:1178},0).wait(1).to({y:1170.5},0).wait(1).to({y:1160.1},0).wait(1).to({y:1146.65},0).wait(1).to({y:1130.2},0).wait(1).to({y:1110.85},0).wait(1).to({y:1088.45},0).wait(1).to({y:1063.1},0).wait(1).to({y:1034.75},0).wait(1).to({y:1003.45},0).wait(1).to({y:969.1},0).wait(1).to({y:931.8},0).wait(1).to({y:891.55},0).wait(1).to({y:848.25},0).wait(1).to({y:802},0).wait(1).to({y:752.75},0).wait(1).to({y:700.55},0).wait(1).to({y:645.35},0).wait(1).to({y:587.15},0).wait(1).to({y:526},0).wait(1).to({y:461.85},0).wait(1).to({y:394.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,425,1578.7);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.moving_about = new lib.moving_about();
	this.moving_about.name = "moving_about";
	this.moving_about.setTransform(341.2,-460.5,1,1,0,0,0,341.2,202.3);

	this.timeline.addTween(cjs.Tween.get(this.moving_about).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.about, new cjs.Rectangle(-4.5,-4.5,691.5,413.5), null);


(lib.content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
	}
	this.frame_4 = function() {
		var self = this;
		self.stop();
	}
	this.frame_5 = function() {
		var self = this;
		self.stop();
	}
	this.frame_6 = function() {
		var self = this;
		self.stop();
	}
	this.frame_7 = function() {
		var self = this;
		self.stop();
	}
	this.frame_8 = function() {
		var self = this;
		self.stop();
	}
	this.frame_9 = function() {
		var self = this;
		self.stop();
	}
	this.frame_10 = function() {
		var self = this;
		self.stop();
	}
	this.frame_11 = function() {
		var self = this;
		self.stop();
	}
	this.frame_12 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1));

	// headline
	this.tired_content_ios = new lib.moving_tired_content();
	this.tired_content_ios.name = "tired_content_ios";
	this.tired_content_ios.setTransform(93.6,1197.05,1,1,0,0,0,211.1,1184);

	this.relieved_content_ios = new lib.moving_relieved_content();
	this.relieved_content_ios.name = "relieved_content_ios";
	this.relieved_content_ios.setTransform(150.15,951.6,1,1,0,0,0,260.9,1015.4);

	this.funnytears_content_ios = new lib.moving_funny_tears_content();
	this.funnytears_content_ios.name = "funnytears_content_ios";
	this.funnytears_content_ios.setTransform(150.15,1148.85,1,1,0,0,0,267.4,1135.8);

	this.upset_content_ios = new lib.moving_upset_content();
	this.upset_content_ios.name = "upset_content_ios";
	this.upset_content_ios.setTransform(150.15,1148.85,1,1,0,0,0,267.4,1135.8);

	this.teeth_content_ios = new lib.moving_teeth_content();
	this.teeth_content_ios.name = "teeth_content_ios";
	this.teeth_content_ios.setTransform(150.15,1148.85,1,1,0,0,0,267.4,1135.8);

	this.kiss_content_ios = new lib.moving_kiss_content();
	this.kiss_content_ios.name = "kiss_content_ios";
	this.kiss_content_ios.setTransform(150.15,1148.85,1,1,0,0,0,267.4,1135.8);

	this.smile_content_ios = new lib.moving_smile_content();
	this.smile_content_ios.name = "smile_content_ios";
	this.smile_content_ios.setTransform(150.15,1148.85,1,1,0,0,0,267.4,1135.8);

	this.flushed_content_ios = new lib.moving_flushed_content();
	this.flushed_content_ios.name = "flushed_content_ios";
	this.flushed_content_ios.setTransform(150.15,1148.85,1,1,0,0,0,267.4,1135.8);

	this.screaming_content_ios = new lib.moving_surprised_content();
	this.screaming_content_ios.name = "screaming_content_ios";
	this.screaming_content_ios.setTransform(150.15,1148.85,1,1,0,0,0,267.4,1135.8);

	this.love_eyes_content_ios = new lib.moving_content_love_eyes();
	this.love_eyes_content_ios.name = "love_eyes_content_ios";
	this.love_eyes_content_ios.setTransform(150.1,359.6,1,1,0,0,0,211.1,394.8);

	this.pensive_content_ios = new lib.moving_pensive_content();
	this.pensive_content_ios.name = "pensive_content_ios";
	this.pensive_content_ios.setTransform(150.1,1148.8,1,1,0,0,0,211.1,1184);

	this.angry_content_ios = new lib.moving_angry_content();
	this.angry_content_ios.name = "angry_content_ios";
	this.angry_content_ios.setTransform(150.1,1148.8,1,1,0,0,0,211.1,1184);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tired_content_ios}]},1).to({state:[{t:this.relieved_content_ios}]},1).to({state:[{t:this.funnytears_content_ios}]},1).to({state:[{t:this.upset_content_ios}]},1).to({state:[{t:this.teeth_content_ios}]},1).to({state:[{t:this.kiss_content_ios}]},1).to({state:[{t:this.smile_content_ios}]},1).to({state:[{t:this.flushed_content_ios}]},1).to({state:[{t:this.screaming_content_ios}]},1).to({state:[{t:this.love_eyes_content_ios}]},1).to({state:[{t:this.pensive_content_ios}]},1).to({state:[{t:this.angry_content_ios}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.7,0,425.2,1543.5);


// stage content:
(lib.emojipedia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		var self = this;
		stage.enableMouseOver(24);
		// הפעלת מעבר עכבר
		
		
		ios_restart();
		func_on();
		self.content.visible = false; //כיבוי חלוניות התוכן
		self.about.visible = false;// כיבוי חלונית האודות
		self.feeling_text.visible = false;
		
		var clickCount = 0; //----------- משתנה שנוצר כדי לספור את כמות הלחיצות 
		
		//self.android_button.addEventListener("click", ios_off_restart);
		// לחיצה על כפתור אנדרואיד, איפוס של כל המסך
		
		// כיבוי כל האימוג׳ים הצהובים וכל הרגשות הורודים
		function ios_off_restart() {
			self.tired_ios.visible = false;
			self.relieved_ios.visible = false;
			self.funnytears_ios.visible = false;
			self.upset_ios.visible = false;
			self.teeth_ios.visible = false;
			self.kiss_ios.visible = false;
			self.smile_ios.visible = false;
			self.flushed_ios.visible = false;
			self.screaming_ios.visible = false;
			self.love_eyes_ios.visible = false;
			self.pensive_ios.visible = false;
			self.angry_ios.visible = false;
			self.happy_pink.visible = false;
			self.anger_pink.visible = false;
			self.surprise_pink.visible = false;
			self.sad_pink.visible = false;
			self.love_pink.visible = false;
			self.confusing_pink.visible = false;
			self.grey_tired_ios.alpha = 0.3;
			self.grey_relieved_ios.alpha = 0.3;
			self.grey_funnytears_ios.alpha = 0.3;
			self.grey_upset_ios.alpha = 0.3;
			self.grey_teeth_ios.alpha = 0.3;
			self.grey_kiss_ios.alpha = 0.3;
			self.grey_smile_ios.alpha = 0.3;
			self.grey_flushed_ios.alpha = 0.3;
			self.grey_screaming_ios.alpha = 0.3;
			self.grey_love_eyes_ios.alpha = 0.3;
			self.grey_pensive_ios.alpha = 0.3;
			self.grey_angry_ios.alpha = 0.3;
			self.about.visible = false;
		}
		
		
		// הדלקת כל האימוג׳ים הצהובים וכיבוי כל הרגשות הורודים
		function ios_restart() {
			func_on();
			self.tired_ios.visible = true;
			self.relieved_ios.visible = true;
			self.funnytears_ios.visible = true;
			self.upset_ios.visible = true;
			self.teeth_ios.visible = true;
			self.kiss_ios.visible = true;
			self.smile_ios.visible = true;
			self.flushed_ios.visible = true;
			self.screaming_ios.visible = true;
			self.love_eyes_ios.visible = true;
			self.pensive_ios.visible = true;
			self.angry_ios.visible = true;
			self.happy_pink.visible = false;
			self.anger_pink.visible = false;
			self.surprise_pink.visible = false;
			self.sad_pink.visible = false;
			self.love_pink.visible = false;
			self.confusing_pink.visible = false;
			self.content.visible = false; //כיבוי חלוניות תוכן
			self.about.visible = false;//כיבוי חלונית אודות
		
		}
		
		//כיבוי כל פעולות העכבר
		function func_off() {
			self.tired_ios.mouseEnabled = false;
			self.relieved_ios.mouseEnabled = false;
			self.funnytears_ios.mouseEnabled = false;
			self.upset_ios.mouseEnabled = false;
			self.teeth_ios.mouseEnabled = false;
			self.kiss_ios.mouseEnabled = false;
			self.smile_ios.mouseEnabled = false;
			self.flushed_ios.mouseEnabled = false;
			self.screaming_ios.mouseEnabled = false;
			self.love_eyes_ios.mouseEnabled = false;
			self.pensive_ios.mouseEnabled = false;
			self.angry_ios.mouseEnabled = false;
			self.happy_pink.mouseEnabled = false;
			self.anger_pink.mouseEnabled = false;
			self.surprise_pink.mouseEnabled = false;
			self.sad_pink.mouseEnabled = false;
			self.love_pink.mouseEnabled = false;
			self.confusing_pink.mouseEnabled = false;
			self.happy_regular.mouseEnabled = false;
			self.anger_regular.mouseEnabled = false;
			self.surprise_regular.mouseEnabled = false;
			self.sad_regular.mouseEnabled = false;
			self.love_regular.mouseEnabled = false;
			self.confusing_regular.mouseEnabled = false;
		
			self.happy_regular.removeEventListener("mouseover", over_happy_regular);
			self.happy_pink.removeEventListener("mouseover", over_happy_regular);
			self.happy_pink.removeEventListener("mouseout", ios_restart);
		
			self.anger_regular.removeEventListener("mouseover", over_anger_regular);
			self.anger_pink.removeEventListener("mouseover", over_anger_regular);
			self.anger_pink.removeEventListener("mouseout", ios_restart);
		
			self.surprise_regular.removeEventListener("mouseover", over_surprise_regular);
			self.surprise_pink.removeEventListener("mouseover", over_surprise_regular);
			self.surprise_pink.removeEventListener("mouseout", ios_restart);
		
			self.sad_regular.removeEventListener("mouseover", over_sad_regular);
			self.sad_pink.removeEventListener("mouseover", over_sad_regular);
			self.sad_pink.removeEventListener("mouseout", ios_restart);
		
			self.love_regular.removeEventListener("mouseover", over_love_regular);
			self.love_pink.removeEventListener("mouseover", over_love_regular);
			self.love_pink.removeEventListener("mouseout", ios_restart);
		
			self.confusing_regular.removeEventListener("mouseover", over_confusing_regular);
			self.confusing_pink.removeEventListener("mouseover", over_confusing_regular);
			self.confusing_pink.removeEventListener("mouseout", ios_restart);
		}
		
		
		//הדלקת פעולות העכבר
		function func_on() {
			self.tired_ios.mouseEnabled = true;
			self.relieved_ios.mouseEnabled = true;
			self.funnytears_ios.mouseEnabled = true;
			self.upset_ios.mouseEnabled = true;
			self.teeth_ios.mouseEnabled = true;
			self.kiss_ios.mouseEnabled = true;
			self.smile_ios.mouseEnabled = true;
			self.flushed_ios.mouseEnabled = true;
			self.screaming_ios.mouseEnabled = true;
			self.love_eyes_ios.mouseEnabled = true;
			self.pensive_ios.mouseEnabled = true;
			self.angry_ios.mouseEnabled = true;
			self.happy_pink.mouseEnabled = true;
			self.anger_pink.mouseEnabled = true;
			self.surprise_pink.mouseEnabled = true;
			self.sad_pink.mouseEnabled = true;
			self.love_pink.mouseEnabled = true;
			self.confusing_pink.mouseEnabled = true;
			self.happy_regular.mouseEnabled = true;
			self.anger_regular.mouseEnabled = true;
			self.surprise_regular.mouseEnabled = true;
			self.sad_regular.mouseEnabled = true;
			self.love_regular.mouseEnabled = true;
			self.confusing_regular.mouseEnabled = true;
		
			self.happy_regular.addEventListener("mouseover", over_happy_regular);
			self.happy_pink.addEventListener("mouseover", over_happy_regular);
			self.happy_pink.addEventListener("mouseout", ios_restart);
		
			self.anger_regular.addEventListener("mouseover", over_anger_regular);
			self.anger_pink.addEventListener("mouseover", over_anger_regular);
			self.anger_pink.addEventListener("mouseout", ios_restart);
		
			self.surprise_regular.addEventListener("mouseover", over_surprise_regular);
			self.surprise_pink.addEventListener("mouseover", over_surprise_regular);
			self.surprise_pink.addEventListener("mouseout", ios_restart);
		
			self.love_regular.addEventListener("mouseover", over_love_regular);
			self.love_pink.addEventListener("mouseover", over_love_regular);
			self.love_pink.addEventListener("mouseout", ios_restart);
		
			self.sad_regular.addEventListener("mouseover", over_sad_regular);
			self.sad_pink.addEventListener("mouseover", over_sad_regular);
			self.sad_pink.addEventListener("mouseout", ios_restart);
		
			self.confusing_regular.addEventListener("mouseover", over_confusing_regular);
			self.confusing_pink.addEventListener("mouseover", over_confusing_regular);
			self.confusing_pink.addEventListener("mouseout", ios_restart);
		
			self.tired_ios.addEventListener("mouseover", over_tired_ios);
			self.tired_ios.addEventListener("mouseout", ios_restart);
		
			self.relieved_ios.addEventListener("mouseover", over_relieved_ios);
			self.relieved_ios.addEventListener("mouseout", ios_restart);
		
			self.funnytears_ios.addEventListener("mouseover", over_funnytears_ios);
			self.funnytears_ios.addEventListener("mouseout", ios_restart);
		
			self.upset_ios.addEventListener("mouseover", over_upset_ios);
			self.upset_ios.addEventListener("mouseout", ios_restart);
		
			self.teeth_ios.addEventListener("mouseover", over_teeth_ios);
			self.teeth_ios.addEventListener("mouseout", ios_restart);
		
			self.kiss_ios.addEventListener("mouseover", over_kiss_ios);
			self.kiss_ios.addEventListener("mouseout", ios_restart);
		
			self.smile_ios.addEventListener("mouseover", over_smile_ios);
			self.smile_ios.addEventListener("mouseout", ios_restart);
		
			self.flushed_ios.addEventListener("mouseover", over_flushed_ios);
			self.flushed_ios.addEventListener("mouseout", ios_restart);
		
			self.screaming_ios.addEventListener("mouseover", over_screaming_ios);
			self.screaming_ios.addEventListener("mouseout", ios_restart);
		
			self.love_eyes_ios.addEventListener("mouseover", over_love_eyes_ios);
			self.love_eyes_ios.addEventListener("mouseout", ios_restart);
		
			self.pensive_ios.addEventListener("mouseover", over_pensive_ios);
			self.pensive_ios.addEventListener("mouseout", ios_restart);
		
			self.angry_ios.addEventListener("mouseover", over_angry_ios);
			self.angry_ios.addEventListener("mouseout", ios_restart);
		
		}
		
		//פתיחה וסגירה של חלונית האודות
		self.about_botton.addEventListener("click", click_about);
		self.about_botton.addEventListener("mouseover", mouse_point);
		self.about.moving_about.inside_about.exit_about.addEventListener("mouseover", mouse_point);
		
		//כניסה לאודות
		function click_about(){
				self.about.visible = true;
				self.about.moving_about.gotoAndPlay(1);
		
				self.about.moving_about.inside_about.exit_about.addEventListener("click", out_about);
				
			func_off();
				}
				
				//יציאה מאודות
				function out_about(){
					self.about.visible = false;
					func_on();
					}
					
					self.about.moving_about.inside_about.anout_link.addEventListener("click", goURL);
					self.about.moving_about.inside_about.anout_link.addEventListener("mouseover", mouse_point);
					
					//מעבר לקישור של אתר המכון
					function goURL(){
					window.open("https://www.hit.ac.il/telem/overview");
					}
			
		// מעברי עכבר על כפתורים וטקסטים-----------------------------------------------------------------------------------
		//מעברי עכבר על כפתורי אפל ואנדרואיד
		self.android_button.addEventListener("mouseover", mouse_block);	
		self.apple_button.addEventListener("mouseover", mouse_block);	
					
				//שינוי מעבר עכבר להצבעה	
				function mouse_point(){
				//לחצן יציה מחלונית אודות
				self.about.moving_about.inside_about.exit_about.cursor="pointer";
				//לחצן כניסה לחלונית אודות
				self.about_botton.cursor="pointer";
				//לינק המוביל לאתר המכון
				self.about.moving_about.inside_about.anout_link.cursor="pointer";
				// מעבר על איקסים בחלוניות התוכן
				self.content.tired_content_ios.inside_tired_content_ios.exit_content.cursor="pointer";
				self.content.relieved_content_ios.inside_relieved_content_ios.exit_content.cursor="pointer";
				self.content.funnytears_content_ios.inside_funnytears_content_ios.exit_content.cursor="pointer";
				self.content.upset_content_ios.inside_upset_content_ios.exit_content.cursor="pointer";
				self.content.teeth_content_ios.inside_teeth_content_ios.exit_content.cursor="pointer";
				self.content.kiss_content_ios.inside_kiss_content_ios.exit_content.cursor="pointer";
				self.content.smile_content_ios.inside_smile_content_ios.exit_content.cursor="pointer";
				self.content.flushed_content_ios.inside_flushed_content_ios.exit_content.cursor="pointer";
				self.content.screaming_content_ios.inside_screaming_content_ios.exit_content.cursor="pointer";
				self.content.love_eyes_content_ios.inside_love_eyes_content_ios.exit_content.cursor="pointer";
				self.content.pensive_content_ios.inside_pensive_content_ios.exit_content.cursor="pointer";
				self.content.angry_content_ios.inside_angry_content_ios.exit_content.cursor="pointer";
					}
					
				function mouse_block(){
					self.android_button.cursor="not-allowed";
					self.apple_button.cursor="not-allowed";
					}
					
		//הטמעת פונטים--------------------------------------------------------------------------------------------------			
		
					
					
		//מעברי עכבר אימוג׳ים
		
		//אימוגי מפהק -------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י מפהק אפל
		self.tired_ios.addEventListener("mouseover", over_tired_ios);
		self.tired_ios.addEventListener("mouseout", ios_restart);
		self.tired_ios.addEventListener("click", click_tired_ios);
		
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י המפהק והרגש מבלבלים
		function over_tired_ios() {
			ios_off_restart();
			self.tired_ios.visible = true;
			self.confusing_pink.visible = true;
			func_on();
		}
		
		function click_tired_ios() {
			clickCount++;
			if (clickCount = 1) {
				ios_off_restart();
		
				func_off();
				
				self.content.visible = true;// הדלקת חלונית התוכן
				
				self.tired_ios.visible = true;
				self.confusing_pink.visible = true;
		
				self.tired_ios.removeEventListener("mouseover", over_tired_ios);
				self.tired_ios.removeEventListener("mouseout", ios_restart);
				
				self.content.mouseEnabled = true;
				self.content.gotoAndPlay(0);
				self.content.tired_content_ios.inside_tired_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.tired_content_ios.inside_tired_content_ios.exit_content.addEventListener("mouseover", mouse_point);
		
				} else {
				if (clickCount = 2) {
					self.tired_ios.addEventListener("mouseout", ios_restart);
		
					ios_restart();
					clickCount = 0;
					func_on();
					self.tired_ios.addEventListener("mouseover", over_tired_ios);
					self.tired_ios.addEventListener("mouseout", ios_restart);
		
				}
			}
		}
		
		//אימוג׳י מרוצה -----------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י מרוצה אפל
		self.relieved_ios.addEventListener("mouseover", over_relieved_ios);
		self.relieved_ios.addEventListener("mouseout", ios_restart);
		self.relieved_ios.addEventListener("click", click_relieved_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י המרוצה והרגשות - המבלבלים ושמחה
		function over_relieved_ios() {
			ios_off_restart();
			
			self.relieved_ios.visible = true;
			self.happy_pink.visible = true;
			self.confusing_pink.visible = true;
		}
		
		function click_relieved_ios() {
			clickCount++;
			if (clickCount = 1) {
				ios_off_restart();
		
				func_off();
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.relieved_ios.visible = true;
				
				self.happy_pink.visible = true;
				self.confusing_pink.visible = true;
		
				self.relieved_ios.removeEventListener("mouseover", over_relieved_ios);
				self.relieved_ios.removeEventListener("mouseout", ios_restart);
				
				self.content.mouseEnabled = true;
				self.content.gotoAndPlay(2);
				self.content.relieved_content_ios.inside_relieved_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.relieved_content_ios.inside_relieved_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.relieved_ios.addEventListener("mouseout", ios_restart);
		
					ios_restart();
					clickCount = 0;
					func_on();
					self.relieved_ios.addEventListener("mouseover", over_relieved_ios);
					self.relieved_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		// אימוג׳י בוכה מצחוק ------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י בוכה מצחוק אפל
		self.funnytears_ios.addEventListener("mouseover", over_funnytears_ios);
		self.funnytears_ios.addEventListener("mouseout", ios_restart);
		self.funnytears_ios.addEventListener("click", click_funnytears_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י המרוצה והרגש שמחה
		function over_funnytears_ios() {
			ios_off_restart();
			self.funnytears_ios.visible = true;
			self.happy_pink.visible = true;
		}
		
		function click_funnytears_ios() {
			clickCount++;
			if (clickCount = 1) {
				ios_off_restart();
		
				func_off();
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.funnytears_ios.visible = true;
				
				self.happy_pink.visible = true;
				self.confusing_pink.visible = true;
		
				self.funnytears_ios.removeEventListener("mouseover", over_funnytears_ios);
				self.funnytears_ios.removeEventListener("mouseout", ios_restart);
				
				self.content.mouseEnabled = true;
				self.content.gotoAndPlay(3);
				self.content.funnytears_content_ios.inside_funnytears_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.funnytears_content_ios.inside_funnytears_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.funnytears_ios.addEventListener("mouseout", ios_restart);
		
					ios_restart();
					clickCount = 0;
					func_on();
					self.funnytears_ios.addEventListener("mouseover", over_funnytears_ios);
					self.funnytears_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		
		//אימוג׳י מבואס--------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י מבואס
		self.upset_ios.addEventListener("mouseover", over_upset_ios);
		self.upset_ios.addEventListener("mouseout", ios_restart);
		self.upset_ios.addEventListener("click", click_upset_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י המבואס והרפעלת הרגשות- כעס/באסה ועצב
		function over_upset_ios() {
			ios_off_restart();
			self.upset_ios.visible = true;
			self.anger_pink.visible = true;
			self.sad_pink.visible = true;
		}
		
		function click_upset_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.upset_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.anger_pink.visible = true;
				self.sad_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.upset_ios.removeEventListener("mouseover", over_upset_ios);
				self.upset_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(4);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.upset_content_ios.inside_upset_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.upset_content_ios.inside_upset_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.upset_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.upset_ios.addEventListener("mouseover", over_upset_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.upset_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		//אימוג׳י חושף שיניים-------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י חושף שיניים
		self.teeth_ios.addEventListener("mouseover", over_teeth_ios);
		self.teeth_ios.addEventListener("mouseout", ios_restart);
		self.teeth_ios.addEventListener("click", click_teeth_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י המבואס והרפעלת הרגשות- כעס/באסה ועצב
		function over_teeth_ios() {
			ios_off_restart();
			self.teeth_ios.visible = true;
			self.anger_pink.visible = true;
			self.confusing_pink.visible = true;
			self.surprise_pink.visible = true;
		}
		
		//הפעלת פונקצית ההקלקה
		function click_teeth_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.teeth_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.anger_pink.visible = true;
				self.confusing_pink.visible = true;
				self.surprise_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.teeth_ios.removeEventListener("mouseover", over_teeth_ios);
				self.teeth_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(5);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.teeth_content_ios.inside_teeth_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.teeth_content_ios.inside_teeth_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.teeth_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.teeth_ios.addEventListener("mouseover", over_teeth_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.teeth_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		//אימוג׳י נשיקה ------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י נשיקה
		self.kiss_ios.addEventListener("mouseover", over_kiss_ios);
		self.kiss_ios.addEventListener("mouseout", ios_restart);
		self.kiss_ios.addEventListener("click", click_kiss_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י נשיקה והפעלת הרגש - אהבה
		function over_kiss_ios() {
			ios_off_restart();
			self.kiss_ios.visible = true;
			self.love_pink.visible = true;
		}
		
		// הפעלת פונקציית ההקלקה של האימוג׳י
		function click_kiss_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.kiss_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.love_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.kiss_ios.removeEventListener("mouseover", over_kiss_ios);
				self.kiss_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(6);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.kiss_content_ios.inside_kiss_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.kiss_content_ios.inside_kiss_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.kiss_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.kiss_ios.addEventListener("mouseover", over_kiss_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.kiss_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		//אימוג׳י שמח--------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י שמח
		self.smile_ios.addEventListener("mouseover", over_smile_ios);
		self.smile_ios.addEventListener("mouseout", ios_restart);
		self.smile_ios.addEventListener("click", click_smile_ios);
		
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י השמח והרגש- שמחה
		function over_smile_ios() {
			ios_off_restart();
			self.smile_ios.visible = true;
			self.happy_pink.visible = true;
		}
		
		
		// הפעלת פונקציית ההקלקה של האימוג׳י
		function click_smile_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.smile_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.happy_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.smile_ios.removeEventListener("mouseover", over_smile_ios);
				self.smile_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(7);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.smile_content_ios.inside_smile_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.smile_content_ios.inside_smile_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.smile_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.smile_ios.addEventListener("mouseover", over_smile_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.smile_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		//אימוג׳י נבוך---------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י נבוך
		self.flushed_ios.addEventListener("mouseover", over_flushed_ios);
		self.flushed_ios.addEventListener("mouseout", ios_restart);
		self.flushed_ios.addEventListener("click", click_flushed_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י נבוך הפעלת הרגשות - הפתעה/מבוכה והמבלבלים
		function over_flushed_ios() {
			ios_off_restart();
			self.flushed_ios.visible = true
			self.confusing_pink.visible = true;
			self.surprise_pink.visible = true;
		}
		
		
		// הפעלת פונקציית ההקלקה של האימוג׳י
		function click_flushed_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.flushed_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.confusing_pink.visible = true;
				self.surprise_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.flushed_ios.removeEventListener("mouseover", over_flushed_ios);
				self.flushed_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(8);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.flushed_content_ios.inside_flushed_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.flushed_content_ios.inside_flushed_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.flushed_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.flushed_ios.addEventListener("mouseover", over_flushed_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.flushed_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		//אימוג׳י מופתע----------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י מופתע
		self.screaming_ios.addEventListener("mouseover", over_screaming_ios);
		self.screaming_ios.addEventListener("mouseout", ios_restart);
		self.screaming_ios.addEventListener("click", click_screaming_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י מופתע הפעלת הרגשות - הפתעה/מבוכה
		function over_screaming_ios() {
			ios_off_restart();
			self.screaming_ios.visible = true;
			self.surprise_pink.visible = true;
		}
		
		// הפעלת פונקציית ההקלקה של האימוג׳י
		function click_screaming_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.screaming_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.surprise_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.screaming_ios.removeEventListener("mouseover", over_screaming_ios);
				self.screaming_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(9);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.screaming_content_ios.inside_screaming_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.screaming_content_ios.inside_screaming_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.screaming_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.screaming_ios.addEventListener("mouseover", over_screaming_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.screaming_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		
		
		//אימוג׳י מאוהב----------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י מאוהב
		self.love_eyes_ios.addEventListener("mouseover", over_love_eyes_ios);
		self.love_eyes_ios.addEventListener("mouseout", ios_restart);
		self.love_eyes_ios.addEventListener("click", click_love_eyes_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י המאוהב והרגש- שמחה ואהבה
		function over_love_eyes_ios() {
			ios_off_restart();
			self.love_eyes_ios.visible = true;
			self.happy_pink.visible = true;
			self.love_pink.visible = true;
		}
		
		// הפעלת פונקציית ההקלקה של האימוג׳י
		function click_love_eyes_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.love_eyes_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.happy_pink.visible = true;
				self.love_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.love_eyes_ios.removeEventListener("mouseover", over_love_eyes_ios);
				self.love_eyes_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(10);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.love_eyes_content_ios.inside_love_eyes_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.love_eyes_content_ios.inside_love_eyes_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.love_eyes_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.love_eyes_ios.addEventListener("mouseover", over_love_eyes_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.love_eyes_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
				
		
			
		//אימוג׳י עצוב----------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י עצוב
		self.pensive_ios.addEventListener("mouseover", over_pensive_ios);
		self.pensive_ios.addEventListener("mouseout", ios_restart);
		self.pensive_ios.addEventListener("click", click_pensive_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י הכועס והרשות המופעלים - כעס/באסה ועצב
		function over_pensive_ios() {
			ios_off_restart();
			self.pensive_ios.visible = true;
			self.anger_pink.visible = true;
			self.sad_pink.visible = true;
		}
		
		// הפעלת פונקציית ההקלקה של האימוג׳י
		function click_pensive_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.pensive_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.anger_pink.visible = true;
				self.sad_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.pensive_ios.removeEventListener("mouseover", over_pensive_ios);
				self.pensive_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(11);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.pensive_content_ios.inside_pensive_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.pensive_content_ios.inside_pensive_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.pensive_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.pensive_ios.addEventListener("mouseover", over_pensive_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.pensive_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		//אימוג׳י כועס----------------------------------------------------------------------------------
		//מעבר עכבר על אימוג׳י כועס
		self.angry_ios.addEventListener("mouseover", over_angry_ios);
		self.angry_ios.addEventListener("mouseout", ios_restart);
		self.angry_ios.addEventListener("click", click_angry_ios);
		
		// הפעלת פונקצית הכיבוי והפעלת האימוג׳י הכועס והרשות המופעלים - כעס/באסה 
		function over_angry_ios() {
			ios_off_restart();
			self.angry_ios.visible = true;
			self.anger_pink.visible = true;
		}
		
		
		// הפעלת פונקציית ההקלקה של האימוג׳י
		function click_angry_ios() {
			clickCount++; // העלאת משתנה ההקלקה באחד
			
			if (clickCount = 1) {
				ios_off_restart(); // קריאה לפונקציה המכבה את כל האימוג׳ים הצהובים
				
				func_off();// קריאה לפונקציה המכבה את אירועי העכבר
		
				
				self.content.visible = true; // הדלקת חלונית התוכן
				
				self.angry_ios.visible = true;// הפעלת נראות רגש ההקלקה
				
				// הפעלת נראות הרגשות הרלוונטים
				self.anger_pink.visible = true;
				self.sad_pink.visible = true;
				
				//כיבוי אירועי מעבר העכבר
				self.angry_ios.removeEventListener("mouseover", over_angry_ios);
				self.angry_ios.removeEventListener("mouseout", ios_restart);
				
				// הוספת האפשרות להפעלת אירועי העכבר בחלונית התוכן
				self.content.mouseEnabled = true;
				
				//הפעלת הפריים הרלוונטי בחלוניות התוכן
				self.content.gotoAndPlay(12);
				// יציאה באיקס בתוכן הספציפי לאימוג׳י
				self.content.angry_content_ios.inside_angry_content_ios.exit_content.addEventListener("click", ios_restart);
				self.content.angry_content_ios.inside_angry_content_ios.exit_content.addEventListener("mouseover", mouse_point);
			
				} else {
				if (clickCount = 2) {
					self.angry_ios.addEventListener("mouseout", ios_restart); // הדלקת אירוע יציאת עכבר לאימוג׳י
		
					ios_restart(); // קריאה לפונקציה מאפסת
					clickCount = 0; // איפוס משתנה ההקלקה
					func_on(); // קריאה לפונקציית הפעלת אירועי העכבר
					self.angry_ios.addEventListener("mouseover", over_angry_ios); // הפעלת אירועי עכבר לאימוג׳י
					self.angry_ios.addEventListener("mouseout", ios_restart);
		
		
				}
			}
		}
		
		
		// רגשות
		
		//הרגש שמחה---------------------------------------------------------------------------------
		
		//מעבר עכבר על הרגש שמחה
		self.happy_regular.addEventListener("mouseover", over_happy_regular);
		self.happy_pink.addEventListener("mouseover", over_happy_regular);
		self.happy_pink.addEventListener("mouseout", ios_restart);
		self.happy_pink.addEventListener("click", click_happy_pink);
		
		// הפעלת הרגש שמחה והפעלת האימוג׳ים - מרוצה, צוחק, שמח, מאוהב
		function over_happy_regular() {
			ios_off_restart();
			self.happy_pink.visible = true;
			self.relieved_ios.visible = true;
			self.funnytears_ios.visible = true;
			self.smile_ios.visible = true;
			self.love_eyes_ios.visible = true;
		}
		
		
		//פונקציית הקלקה עם תנאי בלחיצה וביציאה
		function click_happy_pink() {
			clickCount++;
			if (clickCount == 1) {
		
				ios_off_restart();
		
				func_off();
				self.feeling_text.visible = true;
				self.happy_pink.visible = true;
				self.relieved_ios.visible = true;
				self.funnytears_ios.visible = true;
				self.smile_ios.visible = true;
				self.love_eyes_ios.visible = true;
		
		
				self.happy_pink.removeEventListener("mouseout", ios_restart);
				self.relieved_ios.removeEventListener("mouseout", ios_restart);
				self.funnytears_ios.removeEventListener("mouseout", ios_restart);
				self.smile_ios.removeEventListener("mouseout", ios_restart);
				self.love_eyes_ios.removeEventListener("mouseout", ios_restart);
		
				self.happy_regular.removeEventListener("mouseover", over_happy_regular);
				self.relieved_ios.removeEventListener("mouseover", over_relieved_ios);
				self.funnytears_ios.removeEventListener("mouseover", over_funnytears_ios);
				self.smile_ios.removeEventListener("mouseover", over_smile_ios);
				self.love_eyes_ios.removeEventListener("mouseover", over_love_eyes_ios);
		
				self.happy_pink.mouseEnabled = true;
				self.relieved_ios.mouseEnabled = true;
				self.funnytears_ios.mouseEnabled = true;
				self.smile_ios.mouseEnabled = true;
				self.love_eyes_ios.mouseEnabled = true;
			} else {
				if (clickCount == 2) {
					self.happy_pink.addEventListener("mouseout", ios_restart);
					ios_restart();
					clickCount = 0;
					func_on();
					self.feeling_text.visible = false;
		
		
					self.relieved_ios.addEventListener("mouseout", ios_restart);
					self.funnytears_ios.addEventListener("mouseout", ios_restart);
					self.smile_ios.addEventListener("mouseout", ios_restart);
					self.love_eyes_ios.addEventListener("mouseout", ios_restart);
		
					self.happy_regular.addEventListener("mouseover", over_happy_regular);
					self.relieved_ios.addEventListener("mouseover", over_relieved_ios);
					self.funnytears_ios.addEventListener("mouseover", over_funnytears_ios);
					self.smile_ios.addEventListener("mouseover", over_smile_ios);
					self.love_eyes_ios.addEventListener("mouseover", over_love_eyes_ios);
				}
			}
		}
		
		
		//הרגש כעס/באסה------------------------------------------------------------------------------
		
		//מעבר עכבר על הרגש כעס/באסה
		self.anger_regular.addEventListener("mouseover", over_anger_regular);
		self.anger_pink.addEventListener("mouseover", over_anger_regular);
		self.anger_pink.addEventListener("mouseout", ios_restart);
		self.anger_pink.addEventListener("click", click_anger_pink);
		
		// הפעלת הרגש כעס באסה והפעלת האימוג׳ים - חושף שיניים, מבואס, כועס, עצוב
		function over_anger_regular() {
			ios_off_restart();
			self.anger_pink.visible = true;
			self.teeth_ios.visible = true;
			self.upset_ios.visible = true;
			self.angry_ios.visible = true;
			self.pensive_ios.visible = true;
		}
		
		
		//פונקציית הקלקה עם תנאי בלחיצה וביציאה
		function click_anger_pink() {
			clickCount++;
			if (clickCount == 1) {
		
				ios_off_restart();
		
				func_off();
				self.feeling_text.visible = true;
				self.anger_pink.visible = true;
				self.teeth_ios.visible = true;
				self.upset_ios.visible = true;
				self.angry_ios.visible = true;
				self.pensive_ios.visible = true;
		
				self.anger_pink.removeEventListener("mouseout", ios_restart);
				self.teeth_ios.removeEventListener("mouseout", ios_restart);
				self.upset_ios.removeEventListener("mouseout", ios_restart);
				self.angry_ios.removeEventListener("mouseout", ios_restart);
				self.pensive_ios.removeEventListener("mouseout", ios_restart);
		
				self.anger_regular.removeEventListener("mouseover", over_anger_regular);
				self.teeth_ios.removeEventListener("mouseover", over_teeth_ios);
				self.upset_ios.removeEventListener("mouseover", over_upset_ios);
				self.angry_ios.removeEventListener("mouseover", over_angry_ios);
				self.pensive_ios.removeEventListener("mouseover", over_pensive_ios);
		
				self.anger_pink.mouseEnabled = true;
				self.teeth_ios.mouseEnabled = true;
				self.upset_ios.mouseEnabled = true;
				self.angry_ios.mouseEnabled = true;
				self.pensive_ios.mouseEnabled = true;
			} else {
				if (clickCount == 2) {
					self.anger_pink.addEventListener("mouseout", ios_restart);
					ios_restart();
					clickCount = 0;
					func_on();
					self.feeling_text.visible = false;
					self.teeth_ios.addEventListener("mouseout", ios_restart);
					self.upset_ios.addEventListener("mouseout", ios_restart);
					self.angry_ios.addEventListener("mouseout", ios_restart);
					self.pensive_ios.addEventListener("mouseout", ios_restart);
		
					self.anger_regular.addEventListener("mouseover", over_anger_regular);
					self.teeth_ios.addEventListener("mouseover", over_teeth_ios);
					self.upset_ios.addEventListener("mouseover", over_upset_ios);
					self.angry_ios.addEventListener("mouseover", over_angry_ios);
					self.pensive_ios.addEventListener("mouseover", over_pensive_ios);
				}
			}
		}
		//הרגש הפתעה/מבוכה---------------------------------------------------------------------------
		
		//מעבר עכבר על הרגש הפתעה/מבוכה
		self.surprise_regular.addEventListener("mouseover", over_surprise_regular);
		self.surprise_pink.addEventListener("mouseover", over_surprise_regular);
		self.surprise_pink.addEventListener("mouseout", ios_restart);
		self.surprise_pink.addEventListener("click", click_surprise_pink);
		
		// הפעלת הרגש הפתעה/מבוכה והפעלת האימוג׳ים - חושף שיניים, מופתע, נבוך
		function over_surprise_regular() {
			ios_off_restart();
			self.surprise_pink.visible = true;
			self.teeth_ios.visible = true;
			self.screaming_ios.visible = true;
			self.flushed_ios.visible = true;
		}
		
		
		//פונקציית הקלקה עם תנאי בלחיצה וביציאה
		function click_surprise_pink() {
			clickCount++;
			if (clickCount == 1) {
		
				ios_off_restart();
		
				func_off();
				self.feeling_text.visible = true;
				self.surprise_pink.visible = true;
				self.teeth_ios.visible = true;
				self.screaming_ios.visible = true;
				self.flushed_ios.visible = true;
		
				self.surprise_pink.removeEventListener("mouseout", ios_restart);
				self.teeth_ios.removeEventListener("mouseout", ios_restart);
				self.screaming_ios.removeEventListener("mouseout", ios_restart);
				self.flushed_ios.removeEventListener("mouseout", ios_restart);
		
				self.surprise_regular.removeEventListener("mouseover", over_surprise_regular);
				self.teeth_ios.removeEventListener("mouseover", over_teeth_ios);
				self.screaming_ios.removeEventListener("mouseover", over_screaming_ios);
				self.flushed_ios.removeEventListener("mouseover", over_flushed_ios);
		
				self.surprise_pink.mouseEnabled = true;
				self.teeth_ios.mouseEnabled = true;
				self.screaming_ios.mouseEnabled = true;
				self.flushed_ios.mouseEnabled = true;
		
			} else {
				if (clickCount == 2) {
					self.surprise_pink.addEventListener("mouseout", ios_restart);
					ios_restart();
					clickCount = 0;
					func_on();
					self.feeling_text.visible = false;
					self.teeth_ios.addEventListener("mouseout", ios_restart);
					self.screaming_ios.addEventListener("mouseout", ios_restart);
					self.flushed_ios.addEventListener("mouseout", ios_restart);
		
					self.surprise_regular.addEventListener("mouseover", over_surprise_regular);
					self.teeth_ios.addEventListener("mouseover", over_teeth_ios);
					self.screaming_ios.addEventListener("mouseover", over_screaming_ios);
					self.flushed_ios.addEventListener("mouseover", over_flushed_ios);
		
				}
			}
		}
		
		
		//הרגש עצב---------------------------------------------------------------------------------
		
		//מעבר עכבר על הרגש עצב
		self.sad_regular.addEventListener("mouseover", over_sad_regular);
		self.sad_pink.addEventListener("mouseover", over_sad_regular);
		self.sad_pink.addEventListener("mouseout", ios_restart);
		self.sad_pink.addEventListener("click", click_sad_pink);
		
		// הפעלת הרגש עצב והפעלת האימוג׳ים - מבואס ועצוב
		function over_sad_regular() {
			ios_off_restart();
			self.sad_pink.visible = true;
			self.upset_ios.visible = true;
			self.pensive_ios.visible = true;
		}
		
		
		
		//פונקציית הקלקה עם תנאי בלחיצה וביציאה
		function click_sad_pink() {
			clickCount++;
			if (clickCount == 1) {
		
				ios_off_restart(); // פונקציה שמכבה את כל האימוג׳ים הצהובים 
		
				func_off(); // פונקציה 
				self.feeling_text.visible = true;
				self.sad_pink.visible = true;
				self.upset_ios.visible = true;
				self.pensive_ios.visible = true;
		
				self.sad_pink.removeEventListener("mouseout", ios_restart);
				self.upset_ios.removeEventListener("mouseout", ios_restart);
				self.pensive_ios.removeEventListener("mouseout", ios_restart);
		
				self.sad_regular.removeEventListener("mouseover", over_sad_regular);
				self.upset_ios.removeEventListener("mouseover", over_upset_ios);
				self.pensive_ios.removeEventListener("mouseover", over_pensive_ios);
		
				self.sad_pink.mouseEnabled = true;
				self.upset_ios.mouseEnabled = true;
				self.pensive_ios.mouseEnabled = true;
		
			} else {
				if (clickCount == 2) {
					self.sad_pink.addEventListener("mouseout", ios_restart);
					ios_restart();
					clickCount = 0;
					func_on();
					self.feeling_text.visible = false;
					self.upset_ios.addEventListener("mouseout", ios_restart);
					self.pensive_ios.addEventListener("mouseout", ios_restart);
		
					self.sad_regular.addEventListener("mouseover", over_sad_regular);
					self.upset_ios.addEventListener("mouseover", over_upset_ios);
					self.pensive_ios.addEventListener("mouseover", over_pensive_ios);
		
				}
			}
		}
		
		//הרגש אהבה-------------------------------------------------------------------------------
		
		//מעבר עכבר על הרגש אהבה
		self.love_regular.addEventListener("mouseover", over_love_regular);
		self.love_pink.addEventListener("mouseover", over_love_regular);
		self.love_pink.addEventListener("mouseout", ios_restart);
		self.love_pink.addEventListener("click", click_love_pink);
		
		// הפעלת הרגש אהבה והפעלת האימוג׳ים נשיקה ומאוהב
		function over_love_regular() {
			ios_off_restart();
			self.love_pink.visible = true;
			self.kiss_ios.visible = true;
			self.love_eyes_ios.visible = true;
		}
		
		
		//פונקציית הקלקה עם תנאי בלחיצה וביציאה
		function click_love_pink() {
			clickCount++;
			if (clickCount == 1) {
		
				ios_off_restart();
		
				func_off();
				self.feeling_text.visible = true;
				self.love_pink.visible = true;
				self.kiss_ios.visible = true;
				self.love_eyes_ios.visible = true;
		
				self.love_pink.removeEventListener("mouseout", ios_restart);
				self.kiss_ios.removeEventListener("mouseout", ios_restart);
				self.love_eyes_ios.removeEventListener("mouseout", ios_restart);
		
				self.love_regular.removeEventListener("mouseover", over_love_regular);
				self.kiss_ios.removeEventListener("mouseover", over_kiss_ios);
				self.love_eyes_ios.removeEventListener("mouseover", over_love_eyes_ios);
		
				self.love_pink.mouseEnabled = true;
				self.kiss_ios.mouseEnabled = true;
				self.love_eyes_ios.mouseEnabled = true;
		
			} else {
				if (clickCount == 2) {
					self.love_pink.addEventListener("mouseout", ios_restart);
					ios_restart();
					clickCount = 0;
					func_on();
					self.feeling_text.visible = false;
					self.kiss_ios.addEventListener("mouseout", ios_restart);
					self.love_eyes_ios.addEventListener("mouseout", ios_restart);
		
					self.love_regular.addEventListener("mouseover", over_love_regular);
					self.kiss_ios.addEventListener("mouseover", over_kiss_ios);
					self.love_eyes_ios.addEventListener("mouseover", over_love_eyes_ios);
		
				}
			}
		}
		
		//הרגש המבלבלים---------------------------------------------------------------------------
		
		//מעבר עכבר על הרגש המבלבלים
		self.confusing_regular.addEventListener("mouseover", over_confusing_regular);
		self.confusing_pink.addEventListener("mouseover", over_confusing_regular);
		self.confusing_pink.addEventListener("mouseout", ios_restart);
		self.confusing_pink.addEventListener("click", click_confusing_pink);
		
		// הפעלת הרגש המבלבלים והפעלת האימוג׳ים - מפהק, מרוצה, חושף שיניים, נבוך
		function over_confusing_regular() {
			ios_off_restart();
			self.confusing_pink.visible = true;
			self.tired_ios.visible = true;
			self.relieved_ios.visible = true;
			self.teeth_ios.visible = true;
			self.flushed_ios.visible = true;
		
		}
		
		//פונקציית הקלקה עם תנאי בלחיצה וביציאה
		function click_confusing_pink() {
			clickCount++;
			if (clickCount == 1) {
		
				ios_off_restart();
		
				func_off();
				self.feeling_text.visible = true;
				self.confusing_pink.visible = true;
				self.tired_ios.visible = true;
				self.relieved_ios.visible = true;
				self.teeth_ios.visible = true;
				self.flushed_ios.visible = true;
		
				self.confusing_pink.removeEventListener("mouseout", ios_restart);
				self.tired_ios.removeEventListener("mouseout", ios_restart);
				self.relieved_ios.removeEventListener("mouseout", ios_restart);
				self.teeth_ios.removeEventListener("mouseout", ios_restart);
				self.flushed_ios.removeEventListener("mouseout", ios_restart);
		
				self.confusing_regular.removeEventListener("mouseover", over_confusing_regular);
				self.tired_ios.removeEventListener("mouseover", over_tired_ios);
				self.relieved_ios.removeEventListener("mouseover", over_relieved_ios);
				self.teeth_ios.removeEventListener("mouseover", over_teeth_ios);
				self.flushed_ios.removeEventListener("mouseover", over_flushed_ios);
		
				self.confusing_pink.mouseEnabled = true;
				self.tired_ios.mouseEnabled = true;
				self.relieved_ios.mouseEnabled = true;
				self.teeth_ios.mouseEnabled = true;
				self.flushed_ios.mouseEnabled = true;
			} else {
				if (clickCount == 2) {
					self.confusing_pink.addEventListener("mouseout", ios_restart);
					ios_restart();
					clickCount = 0;
					func_on();
					self.feeling_text.visible = false;
					self.tired_ios.addEventListener("mouseout", ios_restart);
					self.relieved_ios.addEventListener("mouseout", ios_restart);
					self.teeth_ios.addEventListener("mouseout", ios_restart);
					self.flushed_ios.addEventListener("mouseout", ios_restart);
		
					self.confusing_regular.addEventListener("mouseover", over_confusing_regular);
					self.tired_ios.addEventListener("mouseover", over_tired_ios);
					self.relieved_ios.addEventListener("mouseover", over_relieved_ios);
					self.teeth_ios.addEventListener("mouseover", over_teeth_ios);
					self.flushed_ios.addEventListener("mouseover", over_flushed_ios);
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// content
	this.content = new lib.content();
	this.content.name = "content";
	this.content.setTransform(490.8,497.75,0.6539,0.6539,0,0,0,211.3,375.4);

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1));

	// about
	this.about = new lib.about();
	this.about.name = "about";
	this.about.setTransform(640.05,780.55,1,1,0,0,0,341.2,-25.7);

	this.about_botton = new lib.about_botton();
	this.about_botton.name = "about_botton";
	this.about_botton.setTransform(1024.5,48.55,0.5751,0.5751,0,0,0,95,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.about_botton},{t:this.about}]}).wait(1));

	// feeling_pink
	this.confusing_pink = new lib.confusing_pink();
	this.confusing_pink.name = "confusing_pink";
	this.confusing_pink.setTransform(497.8,575.25,0.6539,0.6539,0,0,0,86.4,25.6);

	this.love_pink = new lib.love_pink();
	this.love_pink.name = "love_pink";
	this.love_pink.setTransform(497.8,542.65,0.6539,0.6539,0,0,0,86.4,25.9);

	this.sad_pink = new lib.sad_pink();
	this.sad_pink.name = "sad_pink";
	this.sad_pink.setTransform(497.65,510.85,0.6539,0.6539,0,0,0,86.2,25.2);

	this.surprise_pink = new lib.surprise_pink();
	this.surprise_pink.name = "surprise_pink";
	this.surprise_pink.setTransform(498,458.2,0.6539,0.6684,0,0,0,86.7,0.1);

	this.happy_pink = new lib.happy_pink();
	this.happy_pink.name = "happy_pink";
	this.happy_pink.setTransform(497.65,411.1,0.6539,0.6539,0,0,0,86.2,25.8);

	this.anger_pink = new lib.anger_pink();
	this.anger_pink.name = "anger_pink";
	this.anger_pink.setTransform(498,460.5,0.6539,0.6539,0,0,0,87.4,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.anger_pink},{t:this.happy_pink},{t:this.surprise_pink},{t:this.sad_pink},{t:this.love_pink},{t:this.confusing_pink}]}).wait(1));

	// feelings_regular
	this.confusing_regular = new lib.confusing_regular();
	this.confusing_regular.name = "confusing_regular";
	this.confusing_regular.setTransform(495.85,572.9,0.6539,0.6539,0,0,0,46.1,12.8);

	this.love_regular = new lib.love_regular();
	this.love_regular.name = "love_regular";
	this.love_regular.setTransform(497.1,542.85,0.6539,0.6539,0,0,0,30.1,8.4);

	this.sad_regular = new lib.sad_regular();
	this.sad_regular.name = "sad_regular";
	this.sad_regular.setTransform(497.05,509.9,0.6539,0.6539,0,0,0,23.8,11);

	this.surprise_regular = new lib.surprise_regular();
	this.surprise_regular.name = "surprise_regular";
	this.surprise_regular.setTransform(496.15,476.9,0.6539,0.6539,0,0,0,72,13.6);

	this.anger_regular = new lib.anger_regular();
	this.anger_regular.name = "anger_regular";
	this.anger_regular.setTransform(496.2,443.45,0.6539,0.6539,0,0,0,56.6,13.6);

	this.happy_regular = new lib.happy_regular();
	this.happy_regular.name = "happy_regular";
	this.happy_regular.setTransform(496.35,410.95,0.6539,0.6539,0,0,0,29.3,8.8);

	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(449.7,558.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(449.7,525.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(449.7,493.7,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(449.7,457.8,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(449.7,426.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.happy_regular},{t:this.anger_regular},{t:this.surprise_regular},{t:this.sad_regular},{t:this.love_regular},{t:this.confusing_regular}]}).wait(1));

	// emojies_regular
	this.angry_ios = new lib.angry_ios();
	this.angry_ios.name = "angry_ios";
	this.angry_ios.setTransform(848.65,559.2,0.6539,0.6539,0,0,0,29.9,29.9);

	this.pensive_ios = new lib.pensive_ios();
	this.pensive_ios.name = "pensive_ios";
	this.pensive_ios.setTransform(800.9,559.2,0.6539,0.6539,0,0,0,29.8,29.9);

	this.love_eyes_ios = new lib.love_eyes_ios();
	this.love_eyes_ios.name = "love_eyes_ios";
	this.love_eyes_ios.setTransform(753.15,559.2,0.6539,0.6539,0,0,0,29.8,29.9);

	this.screaming_ios = new lib.screaming_ios();
	this.screaming_ios.name = "screaming_ios";
	this.screaming_ios.setTransform(848.65,495.75,0.6539,0.6539,0,0,0,29.9,29.8);

	this.flushed_ios = new lib.flushed_ios();
	this.flushed_ios.name = "flushed_ios";
	this.flushed_ios.setTransform(800.9,495.75,0.6539,0.6539,0,0,0,28.8,28.8);

	this.smile_ios = new lib.smile_ios();
	this.smile_ios.name = "smile_ios";
	this.smile_ios.setTransform(753.15,495.75,0.6539,0.6539,0,0,0,29.8,29.8);

	this.kiss_ios = new lib.kiss_ios();
	this.kiss_ios.name = "kiss_ios";
	this.kiss_ios.setTransform(848.65,432.3,0.6539,0.6539,0,0,0,29.9,29.9);

	this.teeth_ios = new lib.grimacing_ios();
	this.teeth_ios.name = "teeth_ios";
	this.teeth_ios.setTransform(800.9,432.3,0.6539,0.6539,0,0,0,29.8,29.9);

	this.upset_ios = new lib.upset_ios();
	this.upset_ios.name = "upset_ios";
	this.upset_ios.setTransform(753.15,432.3,0.6539,0.6539,0,0,0,29.8,29.9);

	this.funnytears_ios = new lib.funnytears_ios();
	this.funnytears_ios.name = "funnytears_ios";
	this.funnytears_ios.setTransform(848.65,368.9,0.6539,0.6539,0,0,0,29.9,29.9);

	this.relieved_ios = new lib.relieved_ios();
	this.relieved_ios.name = "relieved_ios";
	this.relieved_ios.setTransform(800.95,368.95,0.6561,0.6561,0,0,0,28.8,28.8);

	this.tired_ios = new lib.tired_ios();
	this.tired_ios.name = "tired_ios";
	this.tired_ios.setTransform(753.15,368.9,0.6539,0.6539,0,0,0,29.8,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tired_ios},{t:this.relieved_ios},{t:this.funnytears_ios},{t:this.upset_ios},{t:this.teeth_ios},{t:this.kiss_ios},{t:this.smile_ios},{t:this.flushed_ios},{t:this.screaming_ios},{t:this.love_eyes_ios},{t:this.pensive_ios},{t:this.angry_ios}]}).wait(1));

	// emojies_grey
	this.grey_angry_ios = new lib.angry_ios_grey();
	this.grey_angry_ios.name = "grey_angry_ios";
	this.grey_angry_ios.setTransform(848.65,559.2,0.6539,0.6539,0,0,0,29.9,29.9);

	this.grey_pensive_ios = new lib.sad_ios_grey();
	this.grey_pensive_ios.name = "grey_pensive_ios";
	this.grey_pensive_ios.setTransform(800.9,559.2,0.6539,0.6539,0,0,0,29.8,29.9);

	this.grey_love_eyes_ios = new lib.love_eyes_ios_grey();
	this.grey_love_eyes_ios.name = "grey_love_eyes_ios";
	this.grey_love_eyes_ios.setTransform(753.15,559.2,0.6539,0.6539,0,0,0,29.8,29.9);

	this.grey_screaming_ios = new lib.screaming_ios_grey();
	this.grey_screaming_ios.name = "grey_screaming_ios";
	this.grey_screaming_ios.setTransform(848.65,495.75,0.6539,0.6539,0,0,0,29.9,29.8);

	this.grey_flushed_ios = new lib.flushed_ios_grey();
	this.grey_flushed_ios.name = "grey_flushed_ios";
	this.grey_flushed_ios.setTransform(800.9,495.75,0.6539,0.6539,0,0,0,29.8,29.8);

	this.grey_smile_ios = new lib.smile_ios_grey();
	this.grey_smile_ios.name = "grey_smile_ios";
	this.grey_smile_ios.setTransform(753.15,495.75,0.6539,0.6539,0,0,0,29.8,29.8);

	this.grey_tired_ios = new lib.yawningface_ios_grey();
	this.grey_tired_ios.name = "grey_tired_ios";
	this.grey_tired_ios.setTransform(753.2,368.9,0.6479,0.6479,0,0,0,30.2,30.2);

	this.grey_upset_ios = new lib.unamusedface_ios_grey();
	this.grey_upset_ios.name = "grey_upset_ios";
	this.grey_upset_ios.setTransform(753,432.1,0.6479,0.6479,0,0,0,29.9,29.9);

	this.grey_relieved_ios = new lib.relieved_ios_grey();
	this.grey_relieved_ios.name = "grey_relieved_ios";
	this.grey_relieved_ios.setTransform(800.95,368.7,0.6479,0.6479,0,0,0,28.9,28.8);

	this.grey_kiss_ios = new lib.kiss_ios_grey();
	this.grey_kiss_ios.name = "grey_kiss_ios";
	this.grey_kiss_ios.setTransform(848.4,432.1,0.6479,0.6479,0,0,0,29.8,29.9);

	this.grey_teeth_ios = new lib.grimacing_ios_grey();
	this.grey_teeth_ios.name = "grey_teeth_ios";
	this.grey_teeth_ios.setTransform(800.75,432.1,0.6479,0.6479,0,0,0,29.9,29.9);

	this.grey_funnytears_ios = new lib.funnytears_ios_grey();
	this.grey_funnytears_ios.name = "grey_funnytears_ios";
	this.grey_funnytears_ios.setTransform(848.4,368.7,0.6479,0.6479,0,0,0,29.8,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.grey_funnytears_ios},{t:this.grey_teeth_ios},{t:this.grey_kiss_ios},{t:this.grey_relieved_ios},{t:this.grey_upset_ios},{t:this.grey_tired_ios},{t:this.grey_smile_ios},{t:this.grey_flushed_ios},{t:this.grey_screaming_ios},{t:this.grey_love_eyes_ios},{t:this.grey_pensive_ios},{t:this.grey_angry_ios}]}).wait(1));

	// header
	this.android_button = new lib.static_android_button();
	this.android_button.name = "android_button";
	this.android_button.setTransform(676.65,213.2,0.6539,0.6539,0,0,0,43.8,59.4);

	this.apple_button = new lib.static_apple_button();
	this.apple_button.name = "apple_button";
	this.apple_button.setTransform(600.65,213.4,0.6539,0.6539,0,0,0,41.1,59.7);

	this.big_title = new lib.static_sign();
	this.big_title.name = "big_title";
	this.big_title.setTransform(639.45,66.3,0.6539,0.6539,0,0,0,191.8,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.big_title},{t:this.apple_button},{t:this.android_button}]}).wait(1));

	// background
	this.feeling_text = new lib.feeling_text();
	this.feeling_text.name = "feeling_text";
	this.feeling_text.setTransform(333.05,499.9,1,1,0,0,0,68.7,19.1);

	this.regular = new cjs.Text("עליו לחקירת", "normal 400 22px 'Heebo'");
	this.regular.name = "regular";
	this.regular.textAlign = "right";
	this.regular.lineHeight = 23;
	this.regular.lineWidth = 123;
	this.regular.parent = this;
	this.regular.setTransform(376.9481,442.15,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular);
	}

	this.regular_1 = new cjs.Text("אותו תרצו להביע", "normal 400 22px 'Heebo'");
	this.regular_1.name = "regular_1";
	this.regular_1.textAlign = "right";
	this.regular_1.lineHeight = 23;
	this.regular_1.lineWidth = 187;
	this.regular_1.parent = this;
	this.regular_1.setTransform(415.5495,423.2,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_1);
	}

	this.regular_bold = new cjs.Text("ולחצו", "normal 700 22px 'Heebo'");
	this.regular_bold.name = "regular_bold";
	this.regular_bold.textAlign = "right";
	this.regular_bold.lineHeight = 23;
	this.regular_bold.lineWidth = 71;
	this.regular_bold.parent = this;
	this.regular_bold.setTransform(415.5501,442.15,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_bold);
	}

	this.regular_bold_1 = new cjs.Text("עברו", "normal 700 22px 'Heebo'");
	this.regular_bold_1.name = "regular_bold_1";
	this.regular_bold_1.textAlign = "right";
	this.regular_bold_1.lineHeight = 23;
	this.regular_bold_1.lineWidth = 46;
	this.regular_bold_1.parent = this;
	this.regular_bold_1.setTransform(415.528,404.15,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_bold_1);
	}

	this.regular_2 = new cjs.Text("על הרגש", "normal 400 22px 'Heebo'");
	this.regular_2.name = "regular_2";
	this.regular_2.textAlign = "right";
	this.regular_2.lineHeight = 23;
	this.regular_2.lineWidth = 120;
	this.regular_2.parent = this;
	this.regular_2.setTransform(384.2752,404.1,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_2);
	}

	this.regular_3 = new cjs.Text("עליו לפרטים", "normal 400 22px 'Heebo'");
	this.regular_3.name = "regular_3";
	this.regular_3.textAlign = "right";
	this.regular_3.lineHeight = 23;
	this.regular_3.lineWidth = 123;
	this.regular_3.parent = this;
	this.regular_3.setTransform(968.5481,368.4,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_3);
	}

	this.regular_4 = new cjs.Text(" שאתם רוצים לשלוח", "normal 400 22px 'Heebo'");
	this.regular_4.name = "regular_4";
	this.regular_4.textAlign = "right";
	this.regular_4.lineHeight = 25;
	this.regular_4.lineWidth = 187;
	this.regular_4.parent = this;
	this.regular_4.setTransform(1007.1495,349.45,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_4);
	}

	this.regular_bold_2 = new cjs.Text("ולחצו", "normal 700 22px 'Heebo'");
	this.regular_bold_2.name = "regular_bold_2";
	this.regular_bold_2.textAlign = "right";
	this.regular_bold_2.lineHeight = 23;
	this.regular_bold_2.lineWidth = 71;
	this.regular_bold_2.parent = this;
	this.regular_bold_2.setTransform(1007.1501,368.4,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_bold_2);
	}

	this.regular_bold_3 = new cjs.Text("עברו", "normal 700 22px 'Heebo'");
	this.regular_bold_3.name = "regular_bold_3";
	this.regular_bold_3.textAlign = "right";
	this.regular_bold_3.lineHeight = 23;
	this.regular_bold_3.lineWidth = 46;
	this.regular_bold_3.parent = this;
	this.regular_bold_3.setTransform(1007.128,330.4,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_bold_3);
	}

	this.regular_5 = new cjs.Text(" האימוג׳ים המתאימים", "normal 400 22px 'Heebo'");
	this.regular_5.name = "regular_5";
	this.regular_5.textAlign = "right";
	this.regular_5.lineHeight = 25;
	this.regular_5.lineWidth = 206;
	this.regular_5.parent = this;
	this.regular_5.setTransform(415.5372,460.7,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_5);
	}

	this.regular_6 = new cjs.Text(" על האימוג׳י ", "normal 400 22px 'Heebo'");
	this.regular_6.name = "regular_6";
	this.regular_6.textAlign = "right";
	this.regular_6.lineHeight = 25;
	this.regular_6.lineWidth = 120;
	this.regular_6.parent = this;
	this.regular_6.setTransform(976.6752,330.35,0.6539,0.6539);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.regular_6);
	}

	this.instance_5 = new lib.CachedBmp_44();
	this.instance_5.setTransform(947.65,306.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_43();
	this.instance_6.setTransform(888.65,251.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_42();
	this.instance_7.setTransform(353.4,382.95,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_41();
	this.instance_8.setTransform(354.35,328.7,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_40();
	this.instance_9.setTransform(314.25,692.6,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_39();
	this.instance_10.setTransform(175.75,740.3,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_38();
	this.instance_11.setTransform(476.25,375.5,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_37();
	this.instance_12.setTransform(487.3,376,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_36();
	this.instance_13.setTransform(486,596.25,0.5,0.5);

	this.instance_14 = new lib.Path_1_0_1();
	this.instance_14.setTransform(468.9,733.25,0.5994,0.5994,0,0,0,21.2,9.5);
	this.instance_14.alpha = 0.3008;
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Path_2_1();
	this.instance_15.setTransform(575.35,620.35,0.5994,0.5994,0,0,0,10.2,19.4);
	this.instance_15.alpha = 0.3008;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Path_3_1();
	this.instance_16.setTransform(428,574.05,0.5994,0.5994,0,0,0,9,32.5);
	this.instance_16.alpha = 0.3008;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Path_4_1();
	this.instance_17.setTransform(426.9,539.6,0.5994,0.5994,0,0,0,15.7,13);
	this.instance_17.alpha = 0.3008;
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.Path_9();
	this.instance_18.setTransform(429.45,693.8,0.5991,0.5991,0,0,0,6.5,5.4);
	this.instance_18.alpha = 0.3008;
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.Path_1_1();
	this.instance_19.setTransform(490.2,643.3,0.5991,0.5991,0,0,0,106.8,89.2);
	this.instance_19.alpha = 0.3008;
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Path_5_1();
	this.instance_20.setTransform(566.2,601.95,0.5994,0.5994,0,0,0,13.2,12.7);
	this.instance_20.alpha = 0.2383;
	this.instance_20.compositeOperation = "multiply";

	this.instance_21 = new lib.Path_6_1();
	this.instance_21.setTransform(564.6,518.65,0.5994,0.5994,0,0,0,8.8,10.2);
	this.instance_21.alpha = 0.3516;
	this.instance_21.compositeOperation = "multiply";

	this.instance_22 = new lib.Path_7();
	this.instance_22.setTransform(567.25,550.95,0.5994,0.5994,0,0,0,26.9,24.4);
	this.instance_22.alpha = 0.2383;
	this.instance_22.compositeOperation = "multiply";

	this.instance_23 = new lib.CachedBmp_35();
	this.instance_23.setTransform(561.05,448.15,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_34();
	this.instance_24.setTransform(414,474.65,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_33();
	this.instance_25.setTransform(537.75,618.9,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_32();
	this.instance_26.setTransform(549.85,568.35,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_31();
	this.instance_27.setTransform(562.95,527.75,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_30();
	this.instance_28.setTransform(561.05,448.15,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_29();
	this.instance_29.setTransform(285.8,474.65,0.5,0.5);

	this.instance_30 = new lib.Path_8_1();
	this.instance_30.setTransform(440.2,508.15,0.5994,0.5994,0,0,0,13.6,55.6);
	this.instance_30.alpha = 0.3008;
	this.instance_30.compositeOperation = "multiply";

	this.instance_31 = new lib.CachedBmp_28();
	this.instance_31.setTransform(425.25,587.55,0.5,0.5);

	this.instance_32 = new lib.Path_10();
	this.instance_32.setTransform(553.9,591,0.5994,0.5994,0,0,0,16.8,26.4);
	this.instance_32.alpha = 0.3008;
	this.instance_32.compositeOperation = "multiply";

	this.instance_33 = new lib.CachedBmp_27();
	this.instance_33.setTransform(441.95,394.8,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_26();
	this.instance_34.setTransform(434.25,364.3,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_25();
	this.instance_35.setTransform(853.65,711.6,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_24();
	this.instance_36.setTransform(849.5,766.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_23();
	this.instance_37.setTransform(868.6,754.15,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_24();
	this.instance_38.setTransform(887.7,738.25,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_21();
	this.instance_39.setTransform(905.7,723.4,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_20();
	this.instance_40.setTransform(918.45,707.5,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_19();
	this.instance_41.setTransform(819.9,309.15,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_18();
	this.instance_42.setTransform(773.6,309.85,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_17();
	this.instance_43.setTransform(781.7,600,0.5,0.5);

	this.instance_44 = new lib.Path_1_0();
	this.instance_44.setTransform(842.55,748.35,0.5531,0.5531,0,0,0,21.8,9.5);
	this.instance_44.alpha = 0.3008;
	this.instance_44.compositeOperation = "multiply";

	this.instance_45 = new lib.Path_2();
	this.instance_45.setTransform(705.8,631.7,0.5531,0.5531,0,0,0,9.5,18.9);
	this.instance_45.alpha = 0.3008;
	this.instance_45.compositeOperation = "multiply";

	this.instance_46 = new lib.Path();
	this.instance_46.setTransform(852.35,706.15,0.553,0.553,0,0,0,4.5,4.5);
	this.instance_46.alpha = 0.3008;
	this.instance_46.compositeOperation = "multiply";

	this.instance_47 = new lib.Path_1();
	this.instance_47.setTransform(808.35,650.4,0.553,0.553,0,0,0,128,103.5);
	this.instance_47.alpha = 0.3008;
	this.instance_47.compositeOperation = "multiply";

	this.instance_48 = new lib.Path_3();
	this.instance_48.setTransform(715.1,613.05,0.5531,0.5531,0,0,0,12.3,11.3);
	this.instance_48.alpha = 0.2383;
	this.instance_48.compositeOperation = "multiply";

	this.instance_49 = new lib.Path_4();
	this.instance_49.setTransform(716.7,529.25,0.5531,0.5531,0,0,0,8.2,9.8);
	this.instance_49.alpha = 0.3516;
	this.instance_49.compositeOperation = "multiply";

	this.instance_50 = new lib.Path_5();
	this.instance_50.setTransform(713.5,561.7,0.5531,0.5531,0,0,0,26.8,24.9);
	this.instance_50.alpha = 0.2383;
	this.instance_50.compositeOperation = "multiply";

	this.instance_51 = new lib.CachedBmp_16();
	this.instance_51.setTransform(708.65,458.75,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_15();
	this.instance_52.setTransform(891.35,486.9,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_14();
	this.instance_53.setTransform(719.9,631.2,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_13();
	this.instance_54.setTransform(705.75,580.15,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_12();
	this.instance_55.setTransform(697.45,539.15,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_11();
	this.instance_56.setTransform(706.85,458.75,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_10();
	this.instance_57.setTransform(692.25,485.55,0.5,0.5);

	this.instance_58 = new lib.Path_6();
	this.instance_58.setTransform(881.9,521.3,0.5531,0.5531,0,0,0,14.3,52.5);
	this.instance_58.alpha = 0.3008;
	this.instance_58.compositeOperation = "multiply";

	this.instance_59 = new lib.CachedBmp_9();
	this.instance_59.setTransform(849.9,581.45,0.5,0.5);

	this.instance_60 = new lib.Path_8();
	this.instance_60.setTransform(727.1,601.95,0.5531,0.5531,0,0,0,16.8,26.5);
	this.instance_60.alpha = 0.3008;
	this.instance_60.compositeOperation = "multiply";

	this.instance_61 = new lib.CachedBmp_8();
	this.instance_61.setTransform(727.2,334,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_7();
	this.instance_62.setTransform(717.8,293.9,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_6();
	this.instance_63.setTransform(-2.05,-3.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.regular_6},{t:this.regular_5},{t:this.regular_bold_3},{t:this.regular_bold_2},{t:this.regular_4},{t:this.regular_3},{t:this.regular_2},{t:this.regular_bold_1},{t:this.regular_bold},{t:this.regular_1},{t:this.regular},{t:this.feeling_text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(638,376.9,647,838.4);
// library properties:
lib.properties = {
	id: '5D02604616344F8D9E993AFFDFDEC6DE',
	width: 1280,
	height: 760,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_6.png?1594140292693", id:"CachedBmp_6"},
		{src:"images/emojipedia_atlas_1.png?1594140292502", id:"emojipedia_atlas_1"},
		{src:"images/emojipedia_atlas_2.png?1594140292502", id:"emojipedia_atlas_2"},
		{src:"images/emojipedia_atlas_3.png?1594140292503", id:"emojipedia_atlas_3"},
		{src:"images/emojipedia_atlas_4.png?1594140292505", id:"emojipedia_atlas_4"}
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
an.compositions['5D02604616344F8D9E993AFFDFDEC6DE'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;