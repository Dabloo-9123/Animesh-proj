let player;
let form=document.getElementById('form')
let butn=document.getElementById('but');

let videoId;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let url=document.getElementById("url").value;
    videoId=YoutubeGetID(url)
    changevideo(videoId)
})
function changevideo(videoId){
player.cueVideoByID({videoId:videoId});
player.pauseVideo()
}
function YoutubeGetID(url){
    var ID="",
    url=url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !==undefined)
    {
        ID=url[2].split(/[^0-9a-z_\-]/i);
        ID=ID[0];
    }
    else{
        ID=url;

    }
    return ID;
}
function startVideo(){
    player.playVideo();
    console.log(butn);
    setTimeout(() => {
        butn.style.display='none';
    }, 1000);
}
function pauseVideo(){
    player.pauseVideo()
}
function onYouTubeIframeAPIReady(){
    console.log("api loaded")
    player=new YT.Player("player",{
        height:500,
        width:900,
        videoId:"1GFbX-spV94",
        playerVars:{
            playersinline:1,
            autoplay:0,
            controls:1,

        },events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    })
}


function onPlayerReady(){
    console.log("Ready")
}

var done=false
function onPlayerStateChange(event){
if(event.data==YT.PlayerState.PLAYING && !done){
    done=true
}
}