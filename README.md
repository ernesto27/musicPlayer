musicPlayer
===========

jquery plugin using html5 audio tag

example

$(document).musicPlayer({
  			sourceAudio: [
					{ src : "audio/rain.mp3"},
					{ src : "audio/vibrato.mp3"},
					{ src : "audio/king.mp3"},
					{ src : "audio/too.mp3"}
				],
				autoplay:false,
				loop: true
			});
