;(function($){

	$.fn.musicPlayer = function(options){

		var defaults = {
			autoplay: false,
			loop: false,
			shuffle: false
		}

		var settings = $.extend({}, defaults, options);
		
		/** create music player container and append to page*/

		

		var playControls =
			'<div id="play-controls">' +
				'<a id="play-prev" class="player-icon "></a>' +
				'<a id="play-pause" class="player-icon "></a>' +
				'<a id="play-next" class="player-icon "></a>'+
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

		

		var arraySongs = [];
		var currentSong;
		var intervalProgress;
		var nextPrevPressed = false;
		var playing = false;
		var progresSlider = $("#progress-slider");
		var volumen = true;

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




		getFirstAudioSrc()
		createAudio();
		initVolumenSlider();
	
		/** MUSIC PLAYER  */º

		musicPlayer = {
			controls:{
				playPause: $("#play-pause"), 
				next: $("#play-next"),
				prev: $("#play-prev"),
				muteVolumen: $("#player-volumen")
				
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

			init: function(){
				this.playPause();
				this.setNameSongPlayer();
				this.setVolumenSlider();
				this.muteVolumen();
				this.playNextSong();
				this.playPrevSong();
				
				setMute();	
				

			}
		}

		musicPlayer.init();
	}

})(jQuery)