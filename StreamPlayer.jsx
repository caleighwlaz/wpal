import { useState } from 'react';
import { useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function StreamPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const handlePlayToggle = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
        else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const [isMuted, setIsMuted] = useState(false);
    const handleMuteToggle = () => {
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(!isMuted);
    }

    return(
        <div className="stream-player">
            <audio ref={audioRef} src="https://centova87.shoutcastservices.com/proxy/revolution935/stream" preload="none"/>
            <button className="play-button" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying? <FaPause/> : <FaPlay/>}
                {isPlaying? "Pause" : "Play"}
            </button>
            <button className="mute-button" onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}
                {isMuted ? "Mute" : "Unmute"}
            </button>
        </div>
    );

}

export default StreamPlayer;
