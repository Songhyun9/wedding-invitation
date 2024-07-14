import { Volume2, VolumeX } from 'lucide-react';

interface AudioControlProps {
  isPlaying: boolean;
  handlePlayPause: () => void;
}

export default function AudioControl({ isPlaying, handlePlayPause }: AudioControlProps) {
  return (
    <div className="top-5 right-5 absolute">
      <button onClick={handlePlayPause} className="btn btn-circle">
        {isPlaying ? <Volume2 strokeWidth={1} /> : <VolumeX strokeWidth={1} />}
      </button>
    </div>
  );
}
