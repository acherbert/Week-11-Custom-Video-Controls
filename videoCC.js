window.onload = function () {



// Video
var video = document.getElementById("video");

// Buttons
var playButton = document.getElementById("play-pause");

var muteButton = document.getElementById("mute");

var fullScreenButton = document.getElementById("full-screen");

var seekBar = document.getElementById("seek-bar");

var volumeBar = document.getElementById("volume-bar");

// Event listerners
playButton.addEventListener("click", function() {
    if(video.paused ==true) {
        // play the video
        video.play();

        // update the button text to 'pause'
    } else {
        // pause the video
        video.pause();

        // update the button text to 'play'
        playButton.innerHTML = "Play";
    }
});

// event listener for the mute button
muteButton.addEventListener("click",function(){
    if(video.muted ==false){
        // mute the video
        video.muted = true;

    // update the button text
    muteButton.innerHTML = "Unmute";
}else {
    // unmute the video
    video.muted = false;
    // update the button text
    muteButton.innerHTML = "Mute";
    }

});

// Event listener for the full-screen button
fullScreenButton.addEventListener("click", function(){
    if(BiquadFilterNode.requestFullscreen){
        video.requestFullscreen();
        
    } else if (video.mozRequestFullScreen) {
// firefox
        video.mozRequestFullScreen();
    }else if (video.webkitRequestFullscreen){
        // chrome and safari
        video.webkitRequestFullscreen();
    }
});

// event listener for the seek bar
seekBar.addEventListener("change", function(){
    // calculate the new time
    var time = video.duration * (seekBar.value/ 100);

    // update the video time
    video.currentTime = time;
});


// Update the seek bar as the video plays
video.addEventListener("timeupdate", function(){
    // calculate the slider value
    var value = (100/ video.duration) * video.currentTime;

    // update the slider value
    seekBar.value = value;
});

// pause the video when the seek handle is being dragged
seekBar.addEventListener("mousedown", function(){
    video.pause();
});

// Play the video when the seek handle is dropped
seekBar.addEventListener("mouseup", function(){
    video.play();
});

// Event listener for the volume bar
volumeBar.addEventListener("change", function(){
    // update the video volume
    video.volume = volumeBar.value;

    });




}