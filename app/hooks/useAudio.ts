import { useState, useEffect, useRef } from 'react';

export function useAudio(src: string) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.load();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error: any) => {
          console.error('Audio playback failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { isPlaying, handlePlayPause };
}
