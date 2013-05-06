musicPlayer
===========

jquery plugin using html5 audio tag

## Demo
http://musicplayer.rs.af.cm/music.html

## Install
put styles in the header
```html	
	<link rel="stylesheet" type="text/css" href="css/styles.css">	
```

load javascript after jquery
```html	
	<script type="text/javascript" src="js/jquery.musicPlayer.js"></script>	
```

## Examples

```javascript

	$(document).musicPlayer({
		sourceAudio: [
			{ src : "audio/song1.mp3"},
			{ src : "audio/song2.mp3"},
		],
		
	});	
	

```

## Options

### autoplay
Play after load page


### loop
loop over songs
