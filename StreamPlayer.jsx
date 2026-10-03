import { useState } from 'react';
import { useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FaVolumeUp, FaVolumeMute} from 'react-icons/fa';

const audioRef = useRef(null);
<audio ref={audioRef} src="https://centova87.shoutcastservices.com/proxy/revolution935/stream" />

function StreamPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    return(
        <div className="stream-player">
            <button className="play-button" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying? <FaPause/> : <FaPlay/>}
                {isPlaying? "Pause" : "Play"}
            </button>
            <button className="mute-button" onClick={() => setIsMuted(!isMuted)}>
                audioRef.current.muted = !audioRef.current.muted;
                {isMuted ? <FaVolumeUp/> : <FaVolumeMute/>}
                {isMuted ? "Unmuted" : "Muted"}
            </button>
        </div>
    );

}

export default StreamPlayer;
