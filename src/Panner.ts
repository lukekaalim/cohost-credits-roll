import { ComponentChildren, FunctionalComponent, Ref } from "preact";
import { Space } from "./space";
import { useEffect, useRef } from "preact/hooks";
import { AnimationPlayer } from "./player";

export type PannerProps = {
  start: Space.Vector2,
  end: Space.Vector2,
  player: AnimationPlayer
};

export const usePanner = ({ player }: PannerProps, render: (ref: Ref<HTMLElement | null>) => ComponentChildren) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el)
      return;
    return player.onAnimate.subscribe(({ playbackMilliseconds }) => {
      ref.current.style.transform = `translate(${-playbackMilliseconds / 1000}px)`
    }).unsubscribe
  }, [player]);


  return render(ref)
}