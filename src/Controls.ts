import { h } from "preact";
import { AnimationPlayer } from "./player";
import { MutableRef, useEffect, useRef, useState } from "preact/hooks";

import "./Controls.css";

const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2rem',
    display: 'flex',
    gap: '2rem',
    margin: '0 2rem'
  },
  scrubBar: {
    flex: 1,
  },
  time: {
    width: '5rem',
    display: 'flex',
    alignItems: 'center'
  },
} as const;
const classes = {
  button: 'control_button'
} as const;

export type ControlsProps = {
  player: AnimationPlayer,
  audioRef: MutableRef<null | HTMLAudioElement>,
}

export const Controls = ({ player, audioRef }: ControlsProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const timeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return player.onAnimate.subscribe(({ playbackMilliseconds }) => {
      if (ref.current)
        ref.current.valueAsNumber = playbackMilliseconds / 1000;
      if (timeRef.current)
        timeRef.current.textContent = getTimeText();
      
    }).unsubscribe
  }, [player])

  const onInput = () => {
    if (!ref.current)
      return;
    const value = ref.current.valueAsNumber * 1000;
    player.scrub(value);
  }
  const onPlayClick = () => {
    player.play();
  }
  const onStopClick = () => {
    player.stop();
  }

  const [duration, setDuration] = useState<null | number>(null)
  const getTimeText = () => {
     return `${Math.round(player.getCurrentPlaybackMilliseconds() / 1000)}:${Math.round(duration / 1000)}`
  }

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl)
      return;
    if (!Number.isNaN(audioEl.duration)) {
      setDuration(audioEl.duration * 1000)
      return;
    }
    audioEl.addEventListener('loadeddata', () => {
      setDuration(audioEl.duration * 1000)
    })
  }, [])

  if (!duration)
    return;

  return h('div', { style: styles.container }, [
    h('button', { class: classes.button, onClick: onPlayClick }, 'Play'),
    h('button', { onClick: onStopClick }, 'Stop'),
    h('time', { style: styles.time, ref: timeRef }, getTimeText()),
    h('input', {
      style: styles.scrubBar,
      type: 'range',
      min: 0,
      max: duration / 1000,
      step: 0.1,
      value: player.getCurrentPlaybackMilliseconds(),
      ref,
      onInput
    }),
  ])
};
