import { useEffect, useRef, useState } from "react";

export function PodcastDock({
    isPlaying,
    onToggle,
    onClose
}: {
    isPlaying: boolean;
    onToggle: () => void;
    onClose: () => void;
}) {
    const [seconds, setSeconds] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play().catch((error) => {
                console.error("Unable to play podcast:", error);
            });
        } else {
            audio.pause();
        }

        const id = window.setInterval(
            () => setSeconds((s) => Math.min(291, s + 1)),
            1000
        );

        return () => window.clearInterval(id);
    }, [isPlaying]);

    const done = seconds >= 291;
    const mins = Math.floor(seconds / 60);
    const secs = String(seconds % 60).padStart(2, "0");

    return (
        <div className="podcast-dock" id="podcast">
            <audio
                ref={audioRef}
                src="/pulse-5.mp3"
                preload="metadata"
            />
            <button className="closebtn" aria-label="Close" onClick={onClose}>
                ✕
            </button>
            <button className="playbtn" onClick={onToggle} aria-label={isPlaying ? "Pause podcast" : "Play podcast"}>
                {isPlaying && !done ? "❚❚" : "▶"}
            </button>

            <div className="podcast-info">
                <div className="t1">Today's PulseVow 5</div>
                <div className="t2">
                    5 important stories · 4:51 · RBI rate cut is playing next
                </div>
            </div>

            <div className="progress">
                <div
                    className="bar"
                    style={{ width: `${(seconds / 291) * 100}%` }}
                />
            </div>

            <div className="pod-time">
                {mins}:{secs} / 4:51
            </div>
        </div>
    );
}
