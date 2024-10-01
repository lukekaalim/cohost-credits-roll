import {  Component, ComponentChildren, FunctionComponent, h, Ref, VNode } from "preact"
import { AnimationPlayer } from "./player"
import { useEffect, useRef } from "preact/hooks"

export type FaderProps = {
  enter: number,
  exit: number,

  fadeDuration: number,

  player: AnimationPlayer
}

export const useFader = (
  { enter, exit, fadeDuration, player }: FaderProps,
  renderWithRef: (ref: Ref<HTMLElement | null>

) => ComponentChildren) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el)
      return;
    return player.onAnimate.subscribe(({ playbackMilliseconds }) => {
      const fadeIn = (playbackMilliseconds - enter) / fadeDuration;
      const fadeOut =  (1 - (playbackMilliseconds - exit)) / fadeDuration;
      const fade = Math.max(0, Math.min(1, Math.min(fadeIn, fadeOut)));

      console.log(fade, fadeIn, fadeOut)

      if (fade < 1)
        el.style.pointerEvents = 'none';
      else
        el.style.pointerEvents = 'auto';

      el.style.opacity = (fade) * 100 + '%';
      el.style.filter = `blur(${(0.5 - (fade / 2)) * 8}px)`
    }).unsubscribe
  }, [player]);

  return renderWithRef(ref);
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
      el.style.filter = `blur(${(0.5 - (fade / 2)) * 8}px)`
    }).unsubscribe
  }, [player]);

  return h('div', { ref }, children)
}