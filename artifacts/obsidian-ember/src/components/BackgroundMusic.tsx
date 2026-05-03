import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music2, Pause, Play, SkipForward } from "lucide-react";

const TRACKS = [
  {
    title: "Ember Drift",
    artist: "Royalty-free ambient",
    src: `${import.meta.env.BASE_URL}ember-drift.mp3`,
  },
];

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [armed, setArmed] = useState(false);
  const track = TRACKS[0];

  const percent = useMemo(() => {
    if (!duration) return 0;
    return Math.min(100, Math.max(0, (progress / duration) * 100));
  }, [duration, progress]);

  useEffect(() => {
    const start = () => setArmed(true);
    window.addEventListener("pointerdown", start, { once: true, passive: true });
    window.addEventListener("keydown", start, { once: true });
    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
  }, []);

  useEffect(() => {
    if (!armed) return;
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;
    void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [armed]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-sm rounded-2xl border p-4"
      style={{
        background: "rgba(6,4,2,0.72)",
        borderColor: "rgba(245,158,11,0.16)",
        boxShadow: "0 0 28px rgba(245,158,11,0.06)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(245,158,11,0.12)", color: "#f59e0b" }}
        >
          <Music2 className="w-5 h-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-mono" style={{ color: "rgba(245,158,11,0.6)" }}>
            Background music
          </p>
          <p className="text-sm font-semibold truncate" style={{ color: "#fef3c7" }}>
            {track.title}
          </p>
          <p className="text-xs truncate" style={{ color: "rgba(245,158,11,0.5)" }}>
            {track.artist}
          </p>
        </div>

        <button
          type="button"
          onClick={toggle}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-95"
          style={{ background: "rgba(245,158,11,0.12)", color: "#f59e0b" }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={nextTrack}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-95"
          style={{ background: "rgba(245,158,11,0.08)", color: "#f59e0b" }}
          aria-label="Restart track"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(245,158,11,0.08)" }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${percent}%`, background: "linear-gradient(90deg, #dc2626, #f59e0b)" }}
        />
      </div>

      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
        loop
        muted={!armed}
        onTimeUpdate={(e) => {
          const audio = e.currentTarget;
          setProgress(audio.currentTime);
          setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
        }}
        onLoadedMetadata={(e) => {
          const audio = e.currentTarget;
          setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
      />

      <p className="mt-2 text-[10px] font-mono" style={{ color: "rgba(245,158,11,0.38)" }}>
        Starts after your first interaction.
      </p>
    </motion.div>
  );
}
