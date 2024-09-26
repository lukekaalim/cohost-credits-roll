import { Ref } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { BehaviorSubject, Observable, Subject } from "rxjs";

export type AnimationPlayer = {
  mode: 'stopped' | 'playing',
  onAnimate: Observable<{ playbackMilliseconds: number }>,
  onScrub: Observable<void>,

  scrub(position: number): void,
  play(): void,
  stop(): void,
  getCurrentPlaybackMilliseconds(): number
}

/**
 * The hook that runs the playback logic + loop
 */
export const useAnimationPlayer = (): AnimationPlayer => {
  const onAnimate = useRef(new BehaviorSubject<{ playbackMilliseconds: number }>({ playbackMilliseconds: 0 })).current;
  const onScrub = useRef(new Subject<void>()).current;
  const playbackStarted = useRef(0);
  const playbackOffset = useRef(0);

  const [mode, setMode] = useState<AnimationPlayer["mode"]>('stopped');

  const getCurrentPlaybackMilliseconds = () => {
    if (mode === 'stopped') {
      return playbackOffset.current;
    } else {
      const now = performance.now();
      const timePassed = now - playbackStarted.current;
      return timePassed + playbackOffset.current;
    }
  }

  const animate = () => {
    const playbackMilliseconds = getCurrentPlaybackMilliseconds();
    onAnimate.next({ playbackMilliseconds });
  };

  useEffect(() => {
    if (mode === 'stopped') {
      animate();
      return;
    } else {
      const animateFrame = () => {
        animate();
        id = requestAnimationFrame(animateFrame);
      };
      let id = requestAnimationFrame(animateFrame);
      return () => {
        cancelAnimationFrame(id);
      }
    }
  }, [mode]);

  return {
    getCurrentPlaybackMilliseconds,

    onAnimate,
    onScrub,
    mode,

    scrub(position) {
      playbackStarted.current = performance.now();
      playbackOffset.current = position;
      animate();
      onScrub.next();
    },
    play() {
      const playbackMilliseconds = getCurrentPlaybackMilliseconds();

      setMode('playing');
      playbackStarted.current = performance.now();
      playbackOffset.current = playbackMilliseconds;
      onScrub.next();
    },
    stop() {
      const playbackMilliseconds = getCurrentPlaybackMilliseconds();

      setMode('stopped');
      playbackOffset.current = playbackMilliseconds;
      onScrub.next();
    },
  }
};