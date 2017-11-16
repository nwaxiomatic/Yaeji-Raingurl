if ($('body').hasClass('mobile')) {
  $('.full-height').css({ height: window.innerHeight });
}

window.addEventListener("load",function() {
  setTimeout(function(){
    window.scrollTo(0, 1);
  }, 0);
});

var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
	events: {
	  'onReady': onPlayerReady
	}
  });
}

function onPlayerReady(event) {
  $('.loader').toggleClass('shown');
  $('.buttons').toggleClass('shown');

  var playButton = $("#play-button").click(function() {
	player.playVideo();
	$('.video-cover').toggleClass('shown');
	$('#video').toggleClass('shown');
  });
  
}

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

setInterval(function(){
	$('#loader-img').toggleClass('shown');
}, 2000);