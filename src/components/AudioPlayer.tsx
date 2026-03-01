"use client";

import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
    isPlaying: boolean;
    onToggle: (state: boolean) => void;
}

export default function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            // Play returns a promise that could be rejected if autoplay rules prevent it,
            // but since it's triggered by a click in EntranceOverlay, it should work.
            audioRef.current.play().catch(err => console.error("Audio play failed:", err));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    if (!mounted) return null;

    return (
        <>
            {/* We use the provided mp4 file. The audio tag will play the audio track. */}
            <audio
                ref={audioRef}
                src="/paulaxv/Taylor Swift - Lover (Official Music Video).mp4"
                loop
            />

            <div className="fixed bottom-8 left-0 w-full z-[9000] pointer-events-none flex justify-center">
                <div className="w-full max-w-[430px] relative">
                    <button
                        onClick={() => onToggle(!isPlaying)}
                        className="absolute bottom-0 right-6 pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-warm-50/80 backdrop-blur shadow-lg border border-warm-200 text-ink/70 hover:text-accent hover:bg-white transition-all duration-300 cursor-pointer"
                        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
                    >
                        {isPlaying ? (
                            // Pause Icon
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            // Play Icon
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current ml-1">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </>
    );
}
