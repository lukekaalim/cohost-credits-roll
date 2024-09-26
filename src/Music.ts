import { FunctionComponent, h, Ref } from "preact";
import { AnimationPlayer } from "./player";
import { MutableRef, useEffect, useRef } from "preact/hooks";

const hereIAm = browser.runtime.getURL("resources/here-i-am.mp3");

export type MusicProps = {
  player: AnimationPlayer,
  audioRef?: MutableRef<null | HTMLAudioElement>,
}

export const Music: FunctionComponent<MusicProps> = ({ player, audioRef }) => {
  const ref = audioRef || useRef<null | HTMLAudioElement>(null);

  useEffect(() => {
    const syncPlayer = () => {
      ref.current.currentTime = player.getCurrentPlaybackMilliseconds() / 1000;
      if (player.mode === 'playing' && ref.current.paused)
        ref.current.play();
      if (player.mode === 'stopped' && !ref.current.paused)
        ref.current.pause();
    }
    syncPlayer();

    return player.onScrub.subscribe(() => {
      syncPlayer();
    }).unsubscribe
  }, [player])

  return h('audio', { src: hereIAm, ref });
};
