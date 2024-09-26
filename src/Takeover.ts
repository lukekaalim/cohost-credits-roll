import { Component, h } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"
import { Controls } from "./Controls";
import { useAnimationPlayer } from "./player";
import { Fader } from "./Fader";
import { Music } from "./Music";
import { Center } from "./Layouts";

const staffRoll = browser.runtime.getURL("resources/staff-roll.mp3");
const hereIAm = browser.runtime.getURL("resources/here-i-am.mp3");
const cohost = browser.runtime.getURL("resources/cohost.svg");

export const styles = {
  takeover: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',

    display: 'flex',
  },
  button: {
    background: 'black',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
  }
} as const;

export const Takeover = () => {
  const player = useAnimationPlayer();
  const audioRef = useRef<null | HTMLAudioElement>(null);

  return h('div', { style: styles.takeover }, [
    h(Music, { player, audioRef }),
    h(Controls, { player, audioRef }),
    
    h(Center, {}, [
      h(Fader, { enter: 0, exit: 10000, fadeDuration: 2000, player }, [
        h('img', { src: cohost }),
      ])
    ]),
  ])
}
