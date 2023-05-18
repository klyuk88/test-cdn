if (Hls.isSupported()) {
  const $video = document.getElementById('video');
  const $bufferSize = document.querySelector('.bufferSize')
  const $videoTime = document.querySelector('.videoTime')
  const videoSrc = 'https://live-streams.cdnvideo.ru/cdnvideo/caminandes/playlist.m3u8'

  const hls = new Hls();

  hls.attachMedia($video);
  hls.loadSource(videoSrc);
  
  hls.on(Hls.Events.LEVEL_LOADED, function () {
    
    $videoTime.innerHTML = Math.round(hls.liveSyncPosition) 
  });

 
  $bufferSize.innerHTML = Hls.DefaultConfig.maxBufferSize

 
} else if(video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = videoSrc;
}