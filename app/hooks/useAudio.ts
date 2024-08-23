import { useState, useEffect, useRef } from 'react';

export function useAudio(src: string) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.load();

    // 오디오 로드가 완료되면 자동 재생
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsPlaying(true);
      audioRef.current?.play().catch((error: any) => {
        console.error('Audio autoplay failed:', error);
        setIsPlaying(false);
      });
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', () => {});
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
