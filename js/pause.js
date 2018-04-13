  //play when video is visible
  var videos = document.getElementsByTagName("iframe"), fraction = 0.5;
  var counting = true;

  function checkScroll() {
    for(var i = 0; i < videos.length; i++) {
      var video = videos[i];
      var x = 0,
          y = 0,
          w = video.width,
          h = video.height,
          r, //right
          b, //bottom
          visibleX, visibleY, visible,
          parent;

      parent = video;
      while (parent && parent !== document.body) {
        x += parent.offsetLeft;
        y += parent.offsetTop;
        parent = parent.offsetParent;
      }

      r = x + parseInt(w);
      b = y + parseInt(h);

      visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
      visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

      visible = visibleX * visibleY / (w * h);

      if (visible > fraction) {
        playVideo();
      console.log("playing the video");

      } else {
        pauseVideo();
      console.log("stopped playing the video");
      }
    }
  };

  //var tag = document.createElement('script');
  //tag.src = "https://www.youtube.com/iframe_api";
  //var firstScriptTag = document.getElementsByTagName('script')[0];
  //firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('largeplayer', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
      window.addEventListener('scroll', checkScroll, false);
      window.addEventListener('resize', checkScroll, false);

      //check at least once so you don't have to wait for scrolling for the    video to start
      window.addEventListener('load', checkScroll, false);
  };


  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
        //console.log("event played");
      } else {
        //console.log("event paused");
      }
  };

  function stopVideo() {
    player.stopVideo();
  };

  function playVideo() {
    player.playVideo();
    counting = true;
    console.log("counting");
  };

  function pauseVideo() {
    player.pauseVideo();
    counting = false;
    console.log("not counting");
  };


window.onload = function(){

    var timer = document.getElementById("timerfield");
    var timeElapsed = 0;

    var interval = setInterval(function(){

      if (counting){
        timeElapsed++;
        timer.setAttribute('value', timeElapsed);
      }
    },1000);
}
