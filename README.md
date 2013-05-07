musicPlayer
===========

jquery plugin using html5 audio tag


http://musicplayer.rs.af.cm/musicFallback.html

## Install
put styles in the header
```html	
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href="http://code.jquery.com/ui/1.10.2/themes/ui-darkness/jquery-ui.css" rel="stylesheet">
```

load javascript after close body tag
```html	
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.musicPlayer.js"></script>	
```

and copy the folder swf in your project ( for fallback flash if html5 audio is not supported )

## Examples

```javascript

	$(document).musicPlayer({
		sourceAudio: [
			{ src : "audio/song1.mp3"},
			{ src : "audio/song2.mp3"},
		],
		autoplay:true,
		loop: true,
		position: "#music-player" // default bottom of the page
		
	});	
	

```

## Options

### autoplay
Play after load page


### loop
loop over songs
