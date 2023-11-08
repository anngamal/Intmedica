import MainVideo from './video1 (1).mov'
export default function Mainvideo(){
    return(
        <div class="video-container">
        <video controls autoplay id="mainVideo" >
            <source src={MainVideo} type="video/mp4" />
        </video>
        </div>
        
    )
}