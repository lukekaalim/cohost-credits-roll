import {  ComponentChildren, FunctionComponent, h } from "preact"
import { AnimationPlayer } from "./player"
import { useEffect, useRef } from "preact/hooks"

export type FaderProps = {
  enter: number,
  exit: number,

  fadeDuration: number,

  player: AnimationPlayer
}

export const Fader: FunctionComponent<FaderProps> = ({ children, player, enter, exit, fadeDuration }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el)
      return;
    return player.onAnimate.subscribe(({ playbackMilliseconds }) => {
      const fadeIn = (playbackMilliseconds - enter) / fadeDuration;
      const fadeOut =  (1 - (playbackMilliseconds - exit)) / fadeDuration;
      const fade = Math.min(fadeIn, fadeOut);

      if (fade < 1)
        el.style.pointerEvents = 'none';

      el.style.opacity = (fade) * 100 + '%';
    }).unsubscribe
  }, [player]);

  return h('div', { ref }, children)
}