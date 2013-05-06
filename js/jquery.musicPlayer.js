/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20130324 ("Mahalo" Edition)
 */
(function(k,g){function U(U,ia){function V(b){return c.preferFlash&&D&&!c.ignoreFlash&&c.flash[b]!==g&&c.flash[b]}function m(b){return function(c){var d=this._s;return!d||!d._a?null:b.call(this,c)}}this.setupOptions={url:U||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};
this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs\x3d"mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs\x3d"mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs\x3dvorbis"],required:!1},opus:{type:["audio/ogg; codecs\x3dopus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs\x3d"1"',
"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=ia||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20130324";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,
eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var Ja,c=this,Ka=null,h=null,W,q=navigator.userAgent,ja=k.location.href.toString(),n=document,ka,La,la,l,x=[],M=!1,N=!1,r=!1,v=!1,ma=!1,O,u,na,X,oa,E,F,G,Ma,pa,Y,qa,Z,ra,H,sa,P,ta,$,I,Na,ua,Oa,va,Pa,Q=null,wa=null,y,xa,J,aa,ba,K,p,R=!1,ya=!1,Qa,Ra,Sa,ca=0,S=null,da,Ta=[],t=null,Ua,ea,T,B,za,Aa,Va,s,eb=Array.prototype.slice,z=!1,Ba,D,Ca,Wa,A,fa,ga=q.match(/(ipad|iphone|ipod)/i),Xa=
q.match(/android/i),C=q.match(/msie/i),fb=q.match(/webkit/i),Da=q.match(/safari/i)&&!q.match(/chrome/i),Ea=q.match(/opera/i),Fa=q.match(/(mobile|pre\/|xoom)/i)||ga||Xa,Ya=!ja.match(/usehtml5audio/i)&&!ja.match(/sm2\-ignorebadua/i)&&Da&&!q.match(/silk/i)&&q.match(/OS X 10_6_([3-7])/i),Ga=n.hasFocus!==g?n.hasFocus():null,ha=Da&&(n.hasFocus===g||!n.hasFocus()),Za=!ha,$a=/(mp3|mp4|mpa|m4a|m4b)/i,Ha=n.location?n.location.protocol.match(/http/i):null,ab=!Ha?"http://":"",bb=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
cb="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),gb=RegExp("\\.("+cb.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Ha;var Ia;try{Ia=Audio!==g&&(Ea&&opera!==g&&10>opera.version()?new Audio(null):new Audio).canPlayType!==g}catch(hb){Ia=!1}this.hasHTML5=Ia;this.setup=function(b){var e=!c.url;b!==g&&(r&&t&&c.ok()&&(b.flashVersion!==g||b.url!==g||b.html5Test!==g))&&K(y("setupLate"));na(b);e&&(P&&b.url!==g)&&c.beginDelayedInit();
!P&&(b.url!==g&&"complete"===n.readyState)&&setTimeout(H,1);return c};this.supported=this.ok=function(){return t?r&&!v:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return W(b)||n[b]||k[b]};this.createSound=function(b,e){function d(){a=aa(a);c.sounds[a.id]=new Ja(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!r||!c.ok())return K(void 0),!1;e!==g&&(b={id:b,url:e});a=u(b);a.url=da(a.url);if(p(a.id,!0))return c.sounds[a.id];ea(a)?(f=d(),f._setup_html5(a)):(8<l&&null===a.isMovieStar&&
(a.isMovieStar=!(!a.serverURL&&!(a.type&&a.type.match(bb)||a.url.match(gb)))),a=ba(a,void 0),f=d(),8===l?h._createSound(a.id,a.loops||1,a.usePolicyFile):(h._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f))),!a.serverURL&&(a.autoLoad||a.autoPlay)&&f.load(a));!a.serverURL&&a.autoPlay&&f.play();
return f};this.destroySound=function(b,e){if(!p(b))return!1;var d=c.sounds[b],a;d._iO={};d.stop();d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,e){return!p(b)?!1:c.sounds[b].load(e)};this.unload=function(b){return!p(b)?!1:c.sounds[b].unload()};this.onposition=this.onPosition=function(b,e,d,a){return!p(b)?!1:c.sounds[b].onposition(e,d,a)};this.clearOnPosition=function(b,e,d){return!p(b)?
!1:c.sounds[b].clearOnPosition(e,d)};this.start=this.play=function(b,e){var d=!1;return!r||!c.ok()?(K("soundManager.play(): "+y(!r?"notReady":"notOK")),d):!p(b)?(e instanceof Object||(e={url:e}),e&&e.url&&(e.id=b,d=c.createSound(e).play()),d):c.sounds[b].play(e)};this.setPosition=function(b,e){return!p(b)?!1:c.sounds[b].setPosition(e)};this.stop=function(b){return!p(b)?!1:c.sounds[b].stop()};this.stopAll=function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return!p(b)?
!1:c.sounds[b].pause()};this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return!p(b)?!1:c.sounds[b].resume()};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return!p(b)?!1:c.sounds[b].togglePause()};this.setPan=function(b,e){return!p(b)?!1:c.sounds[b].setPan(e)};this.setVolume=function(b,e){return!p(b)?!1:c.sounds[b].setVolume(e)};this.mute=function(b){var e=
0;b instanceof String&&(b=null);if(b)return!p(b)?!1:c.sounds[b].mute();for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return!p(b)?!1:c.sounds[b].unmute();for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return!p(b)?!1:c.sounds[b].toggleMute()};this.getMemoryUse=function(){var b=
0;h&&8!==l&&(b=parseInt(h._getMemoryUse(),10));return b};this.disable=function(b){var e;b===g&&(b=!1);if(v)return!1;v=!0;for(e=c.soundIDs.length-1;0<=e;e--)Oa(c.sounds[c.soundIDs[e]]);O(b);s.remove(k,"load",F);return!0};this.canPlayMIME=function(b){var e;c.hasHTML5&&(e=T({type:b}));!e&&t&&(e=b&&c.ok()?!!(8<l&&b.match(bb)||b.match(c.mimePattern)):null);return e};this.canPlayURL=function(b){var e;c.hasHTML5&&(e=T({url:b}));!e&&t&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=
function(b){return b.type!==g&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b,e){if(!b)throw Error("soundManager.getSoundById(): sID is null/_undefined");return c.sounds[b]};this.onready=function(b,c){if("function"===typeof b)c||(c=k),oa("onready",b,c),E();else throw y("needFunction","onready");return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=k),oa("ontimeout",b,c),E({type:"ontimeout"});else throw y("needFunction","ontimeout");return!0};this._wD=
this._writeDebug=function(b,c){return!0};this._debug=function(){};this.reboot=function(b,e){var d,a,f;for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].destruct();if(h)try{C&&(wa=h.innerHTML),Q=h.parentNode.removeChild(h)}catch(g){}wa=Q=t=h=null;c.enabled=P=r=R=ya=M=N=v=z=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};if(b)x=[];else for(d in x)if(x.hasOwnProperty(d)){a=0;for(f=x[d].length;a<f;a++)x[d][a].fired=!1}c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;k.setTimeout(function(){ra();
e||c.beginDelayedInit()},20);return c};this.reset=function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return h&&"PercentLoaded"in h?h.PercentLoaded():null};this.beginDelayedInit=function(){ma=!0;H();setTimeout(function(){if(ya)return!1;$();Z();return ya=!0},20);G()};this.destruct=function(){c.disable(!0)};Ja=function(b){var e,d,a=this,f,w,db,L,k,n,m=!1,q=[],r=0,s,v,t=null;d=e=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=u(b);this.pan=this.options.pan;
this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(b){var c=null,e;b!==g?a._iO=u(b,a.options):(b=a.options,a._iO=b,t&&t!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=da(a._iO.url);e=a.instanceOptions=a._iO;if(e.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&e.onload&&fa(a,function(){e.onload.apply(a,[!!a.duration])}),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ea(e))c=
a._setup_html5(e),c._called_load||(a._html5_canplay=!1,a.url!==e.url&&(a._a.src=e.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0,e.autoPlay&&a.play());else try{a.isHTML5=!1,a._iO=ba(aa(e)),e=a._iO,8===l?h._load(a.id,e.url,e.stream,e.autoPlay,e.usePolicyFile):h._load(a.id,e.url,!!e.stream,!!e.autoPlay,e.loops||1,!!e.autoLoad,e.usePolicyFile)}catch(d){I({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}a.url=e.url;return a};this.unload=function(){0!==a.readyState&&
(a.isHTML5?(L(),a._a&&(a._a.pause(),za(a._a,"about:blank"),t="about:blank")):8===l?h._unload(a.id,"about:blank"):h._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(L(),a._a&&(a._a.pause(),za(a._a),z||db(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,h._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,c){var e,d;d=!0;d=null;c=c===g?!0:c;b||(b={});a.url&&(a._iO.url=a.url);a._iO=u(a._iO,a.options);a._iO=u(b,a._iO);a._iO.url=da(a._iO.url);a.instanceOptions=
a._iO;if(a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ea(a._iO)&&(a._setup_html5(a._iO),k());1===a.playState&&!a.paused&&((e=a._iO.multiShot)||(d=a));if(null!==d)return d;b.url&&b.url!==a.url&&a.load(a._iO);a.loaded||(0===a.readyState?(a.isHTML5||(a._iO.autoPlay=!0),a.load(a._iO),a.instanceOptions=a._iO):2===a.readyState&&(d=a));if(null!==d)return d;!a.isHTML5&&(9===l&&0<a.position&&a.position===a.duration)&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||
0<a.position))a.resume();else{a._iO=u(b,a._iO);if(null!==a._iO.from&&null!==a._iO.to&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){e=function(){a._iO=u(b,a._iO);a.play(a._iO)};if(a.isHTML5&&!a._html5_canplay)a.load({oncanplay:e}),d=!1;else if(!a.isHTML5&&!a.loaded&&(!a.readyState||2!==a.readyState))a.load({onload:e}),d=!1;if(null!==d)return d;a._iO=v()}(!a.instanceCount||a._iO.multiShotEvents||!a.isHTML5&&8<l&&!a.getAutoPlay())&&a.instanceCount++;a._iO.onposition&&0===a.playState&&n(a);
a.playState=1;a.paused=!1;a.position=a._iO.position!==g&&!isNaN(a._iO.position)?a._iO.position:0;a.isHTML5||(a._iO=ba(aa(a._iO)));a._iO.onplay&&c&&(a._iO.onplay.apply(a),m=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?(k(),d=a._setup_html5(),a.setPosition(a._iO.position),d.play()):(d=h._start(a.id,a._iO.loops||1,9===l?a.position:a.position/1E3,a._iO.multiShot||!1),9===l&&!d&&a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&
(a._onbufferchange(0),a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),s(),c.to&&a.clearOnPosition(c.to),a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),L()):(h._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(h._setAutoPlay(a.id,b),b&&!a.instanceCount&&1===a.readyState&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};
this.setPosition=function(b){b===g&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(a.isHTML5){if(a._a&&a._html5_canplay&&a._a.currentTime!==b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(e){}}else b=9===l?a.position:b,a.readyState&&2!==a.readyState&&h._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);a.isHTML5&&a.paused&&a._onTimer(!0);return a};
this.pause=function(b){if(a.paused||0===a.playState&&1!==a.readyState)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),L()):(b||b===g)&&h._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),k()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),h._pause(a.id,b.multiShot));!m&&b.onplay?(b.onplay.apply(a),m=!0):b.onresume&&b.onresume.apply(a);return a};
this.togglePause=function(){if(0===a.playState)return a.play({position:9===l&&!a.isHTML5?a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===g&&(b=0);c===g&&(c=!1);a.isHTML5||h._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,e){b===g&&(b=100);e===g&&(e=!1);a.isHTML5?a._a&&(a._a.volume=Math.max(0,Math.min(1,b/100))):h._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;e||(a.volume=b,a.options.volume=
b);return a};this.mute=function(){a.muted=!0;a.isHTML5?a._a&&(a._a.muted=!0):h._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==g;a.isHTML5?a._a&&(a._a.muted=!1):h._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,e){q.push({position:parseInt(b,10),method:c,scope:e!==g?e:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c;a=parseInt(a,
10);if(isNaN(a))return!1;for(c=0;c<q.length;c++)if(a===q[c].position&&(!b||b===q[c].method))q[c].fired&&r--,q.splice(c,1)};this._processOnPosition=function(){var b,c;b=q.length;if(!b||!a.playState||r>=b)return!1;for(b-=1;0<=b;b--)c=q[b],!c.fired&&a.position>=c.position&&(c.fired=!0,r++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=q.length;if(!b)return!1;for(b-=1;0<=b;b--)c=q[b],c.fired&&a<=c.position&&(c.fired=!1,r--);return!0};v=function(){var b=a._iO,
c=b.from,e=b.to,d,f;f=function(){a.clearOnPosition(e,f);a.stop()};d=function(){if(null!==e&&!isNaN(e))a.onPosition(e,f)};null!==c&&!isNaN(c)&&(b.position=c,b.multiShot=!1,d());return b};n=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};s=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};k=function(){a.isHTML5&&Qa(a)};L=function(){a.isHTML5&&Ra(a)};f=function(b){b||(q=[],r=0);m=!1;
a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,g={};
if(a._hasTimer||b){if(a._a&&(b||(0<a.playState||1===a.readyState)&&!a.paused))c=a._get_html5_duration(),c!==e&&(e=c,a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==d&&(d=c,f=!0),(f||b)&&a._whileplaying(c,g,g,g,g);return f}};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){b=u(a._iO,
b);var c=z?Ka:a._a,e=decodeURI(b.url),d;z?e===decodeURI(Ba)&&(d=!0):e===decodeURI(t)&&(d=!0);if(c){if(c._s)if(z)c._s&&(c._s.playState&&!d)&&c._s.stop();else if(!z&&e===decodeURI(t))return a._apply_loop(c,b.loops),c;d||(f(!1),c.src=b.url,Ba=t=a.url=b.url,c._called_load=!1)}else a._a=b.autoLoad||b.autoPlay?new Audio(b.url):Ea&&10>opera.version()?new Audio(null):new Audio,c=a._a,c._called_load=!1,z&&(Ka=c);a.isHTML5=!0;a._a=c;c._s=a;w();a._apply_loop(c,b.loops);b.autoLoad||b.autoPlay?a.load():(c.autobuffer=
!1,c.preload="auto");return c};w=function(){if(a._a._added_events)return!1;var b;a._a._added_events=!0;for(b in A)A.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,A[b],!1);return!0};db=function(){var b;a._a._added_events=!1;for(b in A)A.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,A[b],!1)};this._onload=function(b){var c=!!b||!a.isHTML5&&8===l&&a.duration;a.loaded=c;a.readyState=c?3:2;a._onbufferchange(0);a._iO.onload&&fa(a,function(){a._iO.onload.apply(a,[c])});return!0};this._onbufferchange=
function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,e){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(a,b,c,e)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||(s(),a.playState=
0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},L(),a.isHTML5&&(a.position=0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&fa(a,function(){b.apply(a)}))};this._whileloading=function(b,c,e,d){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(e);a.bufferLength=d;a.durationEstimate=!a.isHTML5&&!f.isMovieStar?f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10):a.duration;a.isHTML5||(a.buffered=[{start:0,end:a.duration}]);
(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,e,d,f){var w=a._iO;if(isNaN(b)||null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<l&&(w.usePeakData&&(c!==g&&c)&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),w.useWaveformData&&(e!==g&&e)&&(a.waveformData={left:e.split(","),right:d.split(",")}),w.useEQData&&(f!==g&&f&&f.leftEQ)&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==g&&f.rightEQ&&(a.eqData.right=
f.rightEQ.split(","))));1===a.playState&&(!a.isHTML5&&(8===l&&!a.position&&a.isBuffering)&&a._onbufferchange(0),w.whileplaying&&w.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var e={},d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.metadata=e;a._iO.onmetadata&&a._iO.onmetadata.apply(a)};this._onid3=function(b,c){var e=[],d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.id3=u(a.id3,
e);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,p(a.id)&&(a.getAutoPlay()?a.play(g,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(b){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};ta=function(){return n.body||n._docElement||n.getElementsByTagName("div")[0]};W=function(b){return n.getElementById(b)};u=function(b,e){var d=b||{},a,f;a=e===g?c.defaultOptions:e;
for(f in a)a.hasOwnProperty(f)&&d[f]===g&&(d[f]="object"!==typeof a[f]||null===a[f]?a[f]:u(d[f],a[f]));return d};fa=function(b,c){!b.isHTML5&&8===l?k.setTimeout(c,0):c()};X={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};na=function(b,e){var d,a=!0,f=e!==g,w=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array||b[d]instanceof RegExp)f&&X[e]!==g?c[e][d]=b[d]:w[d]!==g?(c.setupOptions[d]=b[d],c[d]=b[d]):X[d]===g?(K(y(c[d]===
g?"setupUndef":"setupError",d),2),a=!1):c[d]instanceof Function?c[d].apply(c,b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if(X[d]===g)K(y(c[d]===g?"setupUndef":"setupError",d),2),a=!1;else return na(b[d],d);return a};s=function(){function b(a){a=eb.call(a);var b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(b,e){var g=b.shift(),h=[a[e]];if(d)g[h](b[0],b[1]);else g[h].apply(g,b)}var d=k.attachEvent,a={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":
"removeEventListener"};return{add:function(){c(b(arguments),"add")},remove:function(){c(b(arguments),"remove")}}}();A={abort:m(function(){}),canplay:m(function(){var b=this._s,c;if(b._html5_canplay)return!0;b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position!==g&&!isNaN(b._iO.position)?b._iO.position/1E3:null;if(b.position&&this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:m(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,
b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),ended:m(function(){this._s._onfinish()}),error:m(function(){this._s._onload(!1)}),loadeddata:m(function(){var b=this._s;!b._loaded&&!Da&&(b.duration=b._get_html5_duration())}),loadedmetadata:m(function(){}),loadstart:m(function(){this._s._onbufferchange(1)}),play:m(function(){this._s._onbufferchange(0)}),playing:m(function(){this._s._onbufferchange(0)}),progress:m(function(b){var c=this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var g=b.total||
1;c.buffered=[];if(f&&f.length){d=0;for(a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));d=f/(1E3*b.target.duration)}isNaN(d)||(c._onbufferchange(0),c._whileloading(d,g,c._get_html5_duration()),d&&(g&&d===g)&&A.canplaythrough.call(this,b))}),ratechange:m(function(){}),suspend:m(function(b){var c=this._s;A.progress.call(this,b);c._onsuspend()}),stalled:m(function(){}),timeupdate:m(function(){this._s._onTimer()}),waiting:m(function(){this._s._onbufferchange(1)})};
ea=function(b){return b.serverURL||b.type&&V(b.type)?!1:b.type?T({type:b.type}):T({url:b.url})||c.html5Only};za=function(b,c){b&&(b.src=c,b._called_load=!1);z&&(Ba=null)};T=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=b.url||null;b=b.type||null;var d=c.audioFormats,a;if(b&&c.html5[b]!==g)return c.html5[b]&&!V(b);if(!B){B=[];for(a in d)d.hasOwnProperty(a)&&(B.push(a),d[a].related&&(B=B.concat(d[a].related)));B=RegExp("\\.("+B.join("|")+")(\\?.*)?$","i")}a=e?e.toLowerCase().match(B):
null;!a||!a.length?b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,e):b).substr(6)):a=a[1];a&&c.html5[a]!==g?e=c.html5[a]&&!V(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),e=(c.html5[a]=e)&&c.html5[b]&&!V(b));return e};Va=function(){function b(a){var b,d,f=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){b=0;for(d=a.length;b<d;b++)if(c.html5[a[b]]||e.canPlayType(a[b]).match(c.html5Test))f=!0,c.html5[a[b]]=!0,c.flash[a[b]]=!!a[b].match($a);b=f}else a=e&&"function"===typeof e.canPlayType?
e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=Audio!==g?Ea&&10>opera.version()?new Audio(null):new Audio:null,d,a,f={},h;h=c.audioFormats;for(d in h)if(h.hasOwnProperty(d)&&(a="audio/"+d,f[d]=b(h[d].type),f[a]=f[d],d.match($a)?(c.flash[d]=!0,c.flash[a]=!0):(c.flash[d]=!1,c.flash[a]=!1),h[d]&&h[d].related))for(a=h[d].related.length-1;0<=a;a--)f["audio/"+h[d].related[a]]=f[d],c.html5[h[d].related[a]]=f[d],c.flash[h[d].related[a]]=f[d];f.canPlayType=
e?b:null;c.html5=u(c.html5,f);return!0};qa={};y=function(){};aa=function(b){8===l&&(1<b.loops&&b.stream)&&(b.stream=!1);return b};ba=function(b,c){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};K=function(b){};ka=function(){return!1};Oa=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=ka)};va=function(b){b===g&&(b=!1);(v||b)&&c.disable(b)};Pa=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=
b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts\x3d"+(new Date).getTime());return b};pa=function(){l=parseInt(c.flashVersion,10);8!==l&&9!==l&&(c.flashVersion=l=8);var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&(!c.html5Only&&c.audioFormats.mp4.required&&9>l)&&(c.flashVersion=l=9);c.version=c.versionNumber+(c.html5Only?
" (HTML5-only mode)":9===l?" (AS3/Flash 9)":" (AS2/Flash 8)");8<l?(c.defaultOptions=u(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=u(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+cb.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==l?"flash9":"flash8"];c.movieURL=(8===l?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=
c.features.eqData=8<l};Na=function(b,c){if(!h)return!1;h._setPolling(b,c)};ua=function(){c.debugURLParam.test(ja)&&(c.debugMode=!0)};p=this.getSoundById;J=function(){var b=[];c.debugMode&&b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};xa=function(){y("fbHandler");var b=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?c.oMC&&(c.oMC.className=[J(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":
"")].join(" ")):(t&&(c.oMC.className=J()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,E({type:"ontimeout",ignoreInit:!0,error:e}),I(e))};oa=function(b,c,d){x[b]===g&&(x[b]=[]);x[b].push({method:c,scope:d||null,fired:!1})};E=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!r&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||v&&!b.ignoreInit))return!1;var e={success:b&&b.ignoreInit?c.ok():!v},d=b&&b.type?x[b.type]||[]:[],a=[],f,e=[e],g=t&&!c.ok();b.error&&(e[0].error=
b.error);b=0;for(f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length){b=0;for(f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,e):a[b].method.apply(this,e),g||(a[b].fired=!0)}return!0};F=function(){k.setTimeout(function(){c.useFlashBlock&&xa();E();"function"===typeof c.onload&&c.onload.apply(k);c.waitForWindowLoad&&s.add(k,"load",F)},1)};Ca=function(){if(D!==g)return D;var b=!1,c=navigator,d=c.plugins,a,f=k.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&(c["application/x-shockwave-flash"]&&
c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description)&&(b=!0);else if(f!==g&&!q.match(/MSAppHost/i)){try{a=new f("ShockwaveFlash.ShockwaveFlash")}catch(h){}b=!!a}return D=b};Ua=function(){var b,e,d=c.audioFormats;if(ga&&q.match(/os (1|2|3_0|3_1)/i))c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none");else if(c.useHTML5Audio&&(!c.html5||!c.html5.canPlayType))c.hasHTML5=!1;if(c.useHTML5Audio&&c.hasHTML5)for(e in d)if(d.hasOwnProperty(e)&&
(d[e].required&&!c.html5.canPlayType(d[e].type)||c.preferFlash&&(c.flash[e]||c.flash[d[e].type])))b=!0;c.ignoreFlash&&(b=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};da=function(b){var e,d,a=0;if(b instanceof Array){e=0;for(d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=e;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Qa=function(b){b._hasTimer||(b._hasTimer=!0,!Fa&&c.html5PollingInterval&&(null===S&&0===
ca&&(S=setInterval(Sa,c.html5PollingInterval)),ca++))};Ra=function(b){b._hasTimer&&(b._hasTimer=!1,!Fa&&c.html5PollingInterval&&ca--)};Sa=function(){var b;if(null!==S&&!ca)return clearInterval(S),S=null,!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};I=function(b){b=b!==g?b:{};"function"===typeof c.onerror&&c.onerror.apply(k,[{type:b.type!==g?b.type:null}]);b.fatal!==g&&b.fatal&&c.disable()};Wa=function(){if(!Ya||
!Ca())return!1;var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d))if(c.html5[d]=!1,b[d]&&b[d].related)for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=!1};this._setSandboxType=function(b){};this._externalInterfaceOK=function(b,e){if(c.swfLoaded)return!1;c.swfLoaded=!0;ha=!1;Ya&&Wa();setTimeout(la,C?100:1)};$=function(b,e){function d(a,b){return'\x3cparam name\x3d"'+a+'" value\x3d"'+b+'" /\x3e'}if(M&&N)return!1;if(c.html5Only)return pa(),c.oMC=W(c.movieID),
la(),N=M=!0,!1;var a=e||c.url,f=c.altURL||a,h=ta(),k=J(),l=null,l=n.getElementsByTagName("html")[0],m,r,p,l=l&&l.dir&&l.dir.match(/rtl/i);b=b===g?c.id:b;pa();c.url=Pa(Ha?a:f);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(q.match(/msie 8/i)||!C&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))Ta.push(qa.spcWmode),c.wmode=null;h={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:ab+"www.macromedia.com/go/getflashplayer",
title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(h.FlashVars="debug\x3d1");c.wmode||delete h.wmode;if(C)a=n.createElement("div"),r=['\x3cobject id\x3d"'+b+'" data\x3d"'+e+'" type\x3d"'+h.type+'" title\x3d"'+h.title+'" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase\x3d"'+ab+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d6,0,40,0"\x3e',d("movie",e),d("AllowScriptAccess",
c.allowScriptAccess),d("quality",h.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",h.FlashVars):"","\x3c/object\x3e"].join("");else for(m in a=n.createElement("embed"),h)h.hasOwnProperty(m)&&a.setAttribute(m,h[m]);ua();k=J();if(h=ta())if(c.oMC=W(c.movieID)||n.createElement("div"),c.oMC.id)p=c.oMC.className,c.oMC.className=(p?p+" ":"movieContainer")+(k?" "+k:""),c.oMC.appendChild(a),C&&(m=c.oMC.appendChild(n.createElement("div")),m.className=
"sm2-object-box",m.innerHTML=r),N=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+k;m=k=null;c.useFlashBlock||(c.useHighPerformance?k={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(k={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},l&&(k.left=Math.abs(parseInt(k.left,10))+"px")));fb&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(p in k)k.hasOwnProperty(p)&&(c.oMC.style[p]=k[p]);try{C||c.oMC.appendChild(a),h.appendChild(c.oMC),
C&&(m=c.oMC.appendChild(n.createElement("div")),m.className="sm2-object-box",m.innerHTML=r),N=!0}catch(s){throw Error(y("domError")+" \n"+s.toString());}}return M=!0};Z=function(){if(c.html5Only)return $(),!1;if(h||!c.url)return!1;h=c.getMovie(c.id);h||(Q?(C?c.oMC.innerHTML=wa:c.oMC.appendChild(Q),Q=null,M=!0):$(c.id,c.url),h=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};G=function(){setTimeout(Ma,1E3)};Ma=function(){var b,e=!1;if(!c.url||R)return!1;R=
!0;s.remove(k,"load",G);if(ha&&!Ga)return!1;r||(b=c.getMoviePercent(),0<b&&100>b&&(e=!0));setTimeout(function(){b=c.getMoviePercent();if(e)return R=!1,k.setTimeout(G,1),!1;!r&&Za&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&xa():E({type:"ontimeout",ignoreInit:!0}):0!==c.flashLoadTimeout&&va(!0))},c.flashLoadTimeout)};Y=function(){if(Ga||!ha)return s.remove(k,"focus",Y),!0;Ga=Za=!0;R=!1;G();s.remove(k,"focus",Y);return!0};O=function(b){if(r)return!1;if(c.html5Only)return r=!0,
F(),!0;var e=!0,d;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())r=!0,v&&(d={type:!D&&t?"NO_FLASH":"INIT_TIMEOUT"});if(v||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=J()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),E({type:"ontimeout",error:d,ignoreInit:!0}),I(d),e=!1;v||(c.waitForWindowLoad&&!ma?s.add(k,"load",F):F());return e};La=function(){var b,e=c.setupOptions;for(b in e)e.hasOwnProperty(b)&&(c[b]===g?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};la=function(){if(r)return!1;
if(c.html5Only)return r||(s.remove(k,"load",c.beginDelayedInit),c.enabled=!0,O()),!0;Z();try{h._externalInterfaceTest(!1),Na(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||h._disableDebug(),c.enabled=!0,c.html5Only||s.add(k,"unload",ka)}catch(b){return I({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),va(!0),O(),!1}O();s.remove(k,"load",c.beginDelayedInit);return!0};H=function(){if(P)return!1;P=!0;La();ua();!D&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Va();c.html5.usingFlash=
Ua();t=c.html5.usingFlash;!D&&t&&(Ta.push(qa.needFlash),c.setup({flashLoadTimeout:1}));n.removeEventListener&&n.removeEventListener("DOMContentLoaded",H,!1);Z();return!0};Aa=function(){"complete"===n.readyState&&(H(),n.detachEvent("onreadystatechange",Aa));return!0};sa=function(){ma=!0;s.remove(k,"load",sa)};ra=function(){if(Fa&&(c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,ga||Xa&&!q.match(/android\s2\.3/i)))ga&&(c.ignoreFlash=!0),z=!0};ra();Ca();s.add(k,"focus",Y);s.add(k,"load",
G);s.add(k,"load",sa);n.addEventListener?n.addEventListener("DOMContentLoaded",H,!1):n.attachEvent?n.attachEvent("onreadystatechange",Aa):I({type:"NO_DOM2_EVENTS",fatal:!0})}var ia=null;if(void 0===k.SM2_DEFER||!SM2_DEFER)ia=new U;k.SoundManager=U;k.soundManager=ia})(window);


;(function($){

	$.fn.musicPlayer = function(options){

		var defaults = {
			autoplay: false,
			loop: false
		}

		var settings = $.extend({}, defaults, options);
		
		/** create music player container and append to page*/

		

		var playControls =
			'<div id="play-controls">' +
				'<a id="play-prev" class="player-icon "></a>' +
				'<a id="play-pause" class="player-icon "></a>' +
				'<a id="play-next" class="player-icon "></a>'+
				'<a id="shuffle" class="player-icon" title="aleatorio"></a>' +
			'</div>';

		var sliderWrap = 
			'<div id="slider-wrapper">' +
				'<span id="song-name">namesong </span>' +
				'<span id="song-time"><span id="current-time">0:00</span> / <span id="song-duration">00:00</span></span>' +
				'<div id="progress-slider"></div>' +
				'<img src="img/loading.gif" id="loading" style="display:none">'+
			'</div>';

		var playerOptions = 
			'<div id="player-options">' +
				'<div id="wrapper-volumen">' +
					'<div id="volumen-slider" style="position: absolute;top: -95px;margin-left: 7px;"></div>' +
					'<a id="player-volumen" class="player-icon"></a>' +
				'</div>' + 
			'</div>';

		$("<div/>",{
			"id" : "music-player-container",
			html: playControls + sliderWrap + playerOptions
		})
		.appendTo("body");

		//************************************
		var arraySongs = [];
		var currentSong;
		var intervalProgress;
		var nextPrevPressed = false;
		var playing = false;
		var progresSlider = $("#progress-slider");
		var volumen = true;
		var shuffle = false;

		function getFirstAudioSrc(){
		
			$.each(options.sourceAudio,function(index,val){
				if(index === 0){
					currentSong = val.src;		
				}

				arraySongs.push(val.src);		
			});

		}

		function createAudio(){
			soundManager.setup({
				url: 'swf/',
			  	// optional: use 100% HTML5 mode where available
			  	preferFlash: false,
			  	onready: function() {
			    	var mySound = soundManager.createSound({
			      		id: 'aSound',
			      		url: currentSong,

			      		onload:function(){  		
			    			musicPlayer.setDurationSong(convertMS(this.duration));
			    			var that = this;

			    			musicPlayer.elements.loading.hide();
			    			/** INIT JQUERY UI SLIDER*/
			    			initSliderSong(that);

			    			if(localStorage.volumen == 0){
			    				soundManager.setVolume('aSound',0);
			    				console.log("mute volumen")
			    			}else{
			    				soundManager.setVolume('aSound',getCurrentVolumenStorage());
			    			}		
			    			
			    		},
			    		onfinish:function() {
			    			// play next song in the queue
			  				musicPlayer.handlerNextSong("next");
				  	 	}
			    	});
			    	
			    	if(settings.autoplay || nextPrevPressed){

			    		progresSlider.hide();	    		
			    		musicPlayer.elements.loading.show();
			    		mySound.play();
			    		musicPlayer.controls.playPause.addClass("playing")
			    	} 
			  	},
			  	ontimeout: function() {
			    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
			  	}
			});
		}	

		function convertMS(ms) {
			var d, h, m, s;
		  	s = Math.floor(ms / 1000);
		  	m = Math.floor(s / 60);
		  	s = s % 60;
		  	h = Math.floor(m / 60);
		  	m = m % 60;
		  	d = Math.floor(h / 24);
		  	h = h % 24;
		  	//return { d: d, h: h, m: m, s: s };
		  	if(s < 10){
				s = "0" + s;
			}
			return m  + ":" + s;
		};


		function initSliderSong(that){
			progresSlider.slider({     
				range: "min",
				min: 0,
				max:that.duration,
				value: 1,
				step:0.1,
				change: function(e, ui){		
					if(e.eventPhase){

						soundManager.setPosition('aSound',ui.value);
			
					}	
				}
			}).show();

			setIntervalSong(that);
		}

		function setIntervalSong(that){
			intervalProgress = setInterval(function(){
				console.log("interval")
		  	  	progresSlider
					.slider( "option", "value", that.position);

				// setCurrent time song

				musicPlayer.elements.currentTime
					.text(convertMS( that.position));
		  	},1000);
		}

		function initVolumenSlider(){
			$("#volumen-slider").slider({
		    	orientation: "vertical",
		    	range: "min",
		    	min: 0,
		   		max: 100,
		    	value: getCurrentVolumenStorage(),
		    	step: 10,
		    	change: function(event, ui){
		    		soundManager.setVolume('aSound',ui.value);
		    		localStorage.currentVolumen = ui.value;
		    		localStorage.volumen = 1;
		    		musicPlayer.controls.muteVolumen.removeClass("mute");
		    	}

			});
		}

		function resetAudio(){
			soundManager.destroySound('aSound');
			nextPrevPressed = true;
			clearInterval(intervalProgress);
			createAudio();
			musicPlayer.setNameSongPlayer(currentSong);
		}

		function supportStorage(){
			try{
				return 'localStorage' in window && window.localStorage !== null;
			}catch(e){
				return false;
			}
		}


		function setMute(){
			if(supportStorage()){
				if(localStorage.volumen == 0){
					musicPlayer.controls.muteVolumen.addClass("mute");
					volumen = false;
						
				}
			}
		}

		function getCurrentVolumenStorage(){
			return localStorage.currentVolumen ? localStorage.currentVolumen : 100;
		}

		function getRandomSong(){
			var len = arraySongs.length;
			var rand = Math.floor(Math.random() * len);
			var randomSong = arraySongs[rand];


			while(currentSong === randomSong){
				rand = Math.floor(Math.random() * len);
				randomSong = arraySongs[rand];
			}

			currentSong = arraySongs[rand];
			return arraySongs[rand];	
		}



		getFirstAudioSrc()
		createAudio();
		initVolumenSlider();

		
		/** MUSIC PLAYER  */

		musicPlayer = {
			controls:{
				playPause: $("#play-pause"), 
				next: $("#play-next"),
				prev: $("#play-prev"),
				muteVolumen: $("#player-volumen"),
				shuffle: $("#shuffle")
				
			},

			elements:{
				songName: $("#song-name"),
				songDuration: $("#song-duration"),
				currentTime: $("#current-time"),
				wrapVolumen: $("#wrapper-volumen"),
				volumenSlider: $("#volumen-slider"),
				loading: $("#loading")
			},

			playPause:function(){
				musicPlayer.controls.playPause.on("click",function(e){
					e.preventDefault();
					var that = $(this);
					console.log(soundManager.position)

					if(!that.hasClass("playing")){
						that.addClass("playing");
						soundManager.play("aSound");
						//clearInterval(intervalProgress);
					}else{
						that.removeClass("playing");
						soundManager.pause("aSound");
						//clearInterval(intervalProgress);
		
					}
							
				});
			},

			setNameSongPlayer: function(){
				musicPlayer.elements.songName.text(currentSong);		
			},

			setDurationSong:function(duration){
				musicPlayer.elements.songDuration.text(duration);
			},

			setVolumenSlider: function(){
				musicPlayer.elements.wrapVolumen.hover(function(){
					musicPlayer.elements.volumenSlider.show();
				},function(){
					musicPlayer.elements.volumenSlider.hide();
				});
			},

			muteVolumen:function(){
				musicPlayer.controls.muteVolumen.on("click",function(e){
					e.preventDefault();
					var that = $(this);

					if(!that.hasClass("mute")){
						that.addClass("mute");
						soundManager.setVolume('aSound',0);
						localStorage.volumen = 0; 
					}else{
						that.removeClass("mute");
						soundManager.setVolume('aSound',100);
						localStorage.volumen = 1; 
					}		
				});
			},

			playNextSong:function(){
				musicPlayer.controls.next.on("click",function(e){
					e.preventDefault();
					musicPlayer.handlerNextSong("next");	
				});
			},

			playPrevSong:function(){
				musicPlayer.controls.prev.on("click",function(e){
					e.preventDefault();
					musicPlayer.handlerNextSong("prev");
				});
			},

			handlerNextSong:function(type){

				if(shuffle){
					currentSong = getRandomSong();
					resetAudio();
					return false;
				}

				for(var i = 0; i < arraySongs.length; i++ ){
					if(currentSong === arraySongs[i]){

						if(type === "next"){
							if(arraySongs[i + 1] === undefined){
								if(settings.loop){
									currentSong = arraySongs[0];
									resetAudio();
									break;
								}else{
									return;
								}
							}else{
								currentSong = arraySongs[i + 1];
								resetAudio();
								break;	
							}
									
						}else if(type === "prev"){
							if(arraySongs[i - 1] === undefined) return;
							currentSong = arraySongs[i - 1];
							resetAudio();
							break;
						}		
					}
				}
				
			},

			shuffleSongs: function(){
				musicPlayer.controls.shuffle.on("click",function(e){
					var that = $(this);

					if(!that.hasClass("active-shuffle")){
						that.addClass("active-shuffle");					
						shuffle =  true;
					}else{
						that.removeClass("active-shuffle");
						shuffle = false;
					}

				})
			},

			init: function(){
				this.playPause();
				this.setNameSongPlayer();
				this.setVolumenSlider();
				this.muteVolumen();
				this.playNextSong();
				this.playPrevSong();
				this.shuffleSongs();
				
				setMute();	
			}
		}

		musicPlayer.init();
	}

})(jQuery)