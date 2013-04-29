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
			'</div>';

		var sliderWrap = 
			'<div id="slider-wrapper">' +
				'<span id="song-name">namesong </span>' +
				'<span id="song-time"><span id="current-time">00:00</span> / <span id="song-duration">00:00</span></span>' +
				'<div id="progress-slider"></div>' +
			'</div>';

		var playerOptions = 
			'<div id="player-options">' +
				'<div id="wrapper-volumen">' +
					'<div id="volumen-slide"></div>' +
					'<a id="player-volumen" class="player-icon"></a>' +
				'</div>' + 
			'</div>';

		$("<div/>",{
			"id" : "music-player-container",
			html: playControls + sliderWrap + playerOptions
		})
		.appendTo("body");


		var currentSong,
			audioTag,
			nextPrevPressed,
			intervalSlider,
			arraySongs = []
		;


		/** create audio tag and insert into DOM*/

		function createAudioTag(sourceAudio){
			// remove and create current audio tag, neccesary to load other song

			$("#audio-tag").remove();

			var audio = document.createElement("audio");
			var srcAudio = document.createElement("source");

			srcAudio.setAttribute("src",sourceAudio);

			audio.id = "audio-tag";
			audio.appendChild(srcAudio);
			document.body.appendChild(audio);

			//audio.play();
			audioTag = $("#audio-tag")[0];
			
			initMetaData();
			

		}

		function initMetaData(){

			setTimeout(function(){
				musicPlayer.elements.songDuration
					.text(getTimeSong(audioTag.duration));
				setCurrentTime();
				initSliderProgress();
				initVolumenSlider();
				
			},1000);

			/** 
			 //if config autoplay is true play after load, 
			 //or play if next or prev button are pressed 
			*/
			if(settings.autoplay || nextPrevPressed){
				audioTag.play();
				updateSlider();
			}
		}


		/** init jquery ui slider */

		function initSliderProgress(){
			$("#progress-slider").slider({     
				range: "min",
				min: 0,
				max: audioTag.duration,
				value: 0,
				change: function(e, ui){		
			    	if(e.eventPhase){
			    		/** if change the progress slider change the audio currentTime value*/
			    		setSlider(ui.value);
			    	}	
				}
			});

		}

		function updateSlider(){
			intervalSlider = setInterval(function(){
				var currentTime = musicPlayer.elements.progressSlider.slider("option","value");
				musicPlayer.elements.progressSlider
					.slider( "option", "value", currentTime + 1);
			},1000);
		}

		function setSlider(currentTime){
			audioTag.currentTime = currentTime;
		}

		function initVolumenSlider(){
			$("#volumen-slide").slider({
		    	orientation: "vertical",
		    	range: "min",
		    	min: 0,
		   		max: 1,
		    	value: 10,
		    	step: 0.1,
		    	change: function(event, ui){
		    		audioTag.volume = ui.value;
		    	}

			});
		}

		
		function getFirstAudioSrc(){
			$.each(options.sourceAudio,function(index,val){
				if(index === 0){
					currentSong = val.src;		
				}
				arraySongs.push(val.src);
			});

		}

		function getTimeSong(audioTagDuration){
			var minutes = Math.floor(audioTagDuration / 60);
			var seconds  = Math.floor(audioTagDuration  - minutes * 60);
			if(seconds < 10){
				seconds = "0" + seconds;
			}
			return minutes  + ":" + seconds;

		}

		function setCurrentTime(){
	
			var currentInterval = setInterval(function(){
				musicPlayer.elements.currentTime
					.text(getTimeSong(audioTag.currentTime));

				/** check for end song and play next*/
				musicPlayer.playNextSongQueue();
			},1000);
		}


		getFirstAudioSrc();	
		createAudioTag(currentSong);

		


		var musicPlayer = {

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
				progressSlider: $("#progress-slider"),
				wrapVolumen: $("#wrapper-volumen"),
				volumenSlider: $("#volumen-slide")
			},

			/** handlers */

			playPause:function(){
				musicPlayer.controls.playPause.on("click",function(e){
					e.preventDefault();
					var that = $(this);

					if(!that.hasClass("playing")){
						that.addClass("playing");
						audioTag.play();
						updateSlider();
					}else{
						that.removeClass("playing");
						audioTag.pause();
						// stop update interval slider
						clearInterval(intervalSlider);
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
									break;
								}else{
									return;
								}
								
							}else{
								currentSong = arraySongs[i + 1];
								break;
							}
							
						}else if(type === "prev"){
							if(arraySongs[i - 1] === undefined) return;
							currentSong = arraySongs[i - 1];
							break;
						}		
					}
				}

				audioTag.pause();
				clearInterval(intervalSlider);
	
				musicPlayer.controls.playPause.addClass("playing");
				nextPrevPressed = true;
				musicPlayer.setNameSongPlayer();
				createAudioTag(currentSong);
			},

			playNextSongQueue: function(){
				if(audioTag.ended){
					musicPlayer.handlerNextSong("next");
				}
				
			},

			muteVolumen:function(){
				musicPlayer.controls.muteVolumen.on("click",function(e){
					e.preventDefault();
					var that = $(this);

					if(!that.hasClass("mute")){
						that.addClass("mute");
						audioTag.volume = 0;
					}else{
						that.removeClass("mute");
						audioTag.volume = 1;	
					}		
				});
			},

			setVolumenSlider: function(){
				musicPlayer.elements.wrapVolumen.hover(function(){
					musicPlayer.elements.volumenSlider.show();
				},function(){
					musicPlayer.elements.volumenSlider.hide();
				});
			},



			/** elements */

			setNameSongPlayer: function(){
				musicPlayer.elements.songName.text(currentSong);		
			},



			/** intitialize */
			init:function(){
				this.playPause();
				this.setNameSongPlayer();
				this.playNextSong();
				this.playPrevSong();
				this.muteVolumen();
				this.setVolumenSlider();
				this.playNextSongQueue();
			}


		}

		musicPlayer.init();
		
	}

})(jQuery)