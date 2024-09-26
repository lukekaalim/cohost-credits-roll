import { Component, h } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"
import { Controls } from "./Controls";
import { useAnimationPlayer } from "./player";
import { Fader } from "./Fader";
import { Music } from "./Music";
import { Center } from "./Layouts";
import "./Takeover.css"

const staffRoll = browser.runtime.getURL("resources/staff-roll.mp3");
const hereIAm = browser.runtime.getURL("resources/here-i-am.mp3");
const cohost = browser.runtime.getURL("resources/cohost.svg");
const jae = browser.runtime.getURL("resources/jae.jpg");
const vogon = browser.runtime.getURL("resources/vogon.png");
const aidan = browser.runtime.getURL("resources/aidan.png");
const kaara = browser.runtime.getURL("resources/kaara.jpg");

const bug_wink = browser.runtime.getURL("resources/bugs/eggbug_wink.png");

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

  return h('div', { style: styles.takeover, class: 'takeover' }, [
    h(Music, { player, audioRef }),
    
    h(Center, {}, [
      h(Fader, { enter: 0, exit: 12000, fadeDuration: 2000, player }, [
        h('div', { style: { display: 'flex', flexDirection: 'column' } }, [
          h('img', { src: cohost }),
          h(Fader, { enter: 5000, exit: 12000, fadeDuration: 2000, player }, [
            h('div', { style: { marginTop: '24px' } }, `cohost is designed, developed, and operated by anti software software club llc`),
          ]),
        ])
      ]),
    ]),

    h(Center, {}, [
      h(Fader, { enter: 12000, exit: 45000, fadeDuration: 2000, player }, [
        h('img', { src: jae }),
      ]),
    ]),
    h(Center, {}, [
      h(Fader, { enter: 45000, exit: 75000, fadeDuration: 2000, player }, [
        h('img', { src: vogon }),
      ]),
    ]),
    h(Center, {}, [
      h(Fader, { enter: 75000, exit: 110000, fadeDuration: 2000, player }, [
        h('img', { src: aidan }),
      ]),
    ]),
    h(Center, {}, [
      h(Fader, { enter: 110000, exit: 135000, fadeDuration: 2000, player }, [
        h('img', { src: kaara }),
      ]),
    ]),

    h(Center, {}, [
      h(Fader, { enter: ((3 * 60) + 30) * 1000, exit: ((3 * 60) + 50) * 1000, fadeDuration: 2000, player }, [
        h('div', {}, `cohost is designed, developed, and operated by anti software software club llc`),
      ]),
    ]),
    h(Center, {}, [
      h(Fader, { enter: ((3 * 60) + 50) * 1000, exit: Number.POSITIVE_INFINITY, fadeDuration: 2000, player }, [
        h('div', {}, h('span', {}, `thanks for using cohost `, h('img', { src: bug_wink, style: { display: 'inline-block' } }))),
      ]),
    ]),

    h(Controls, { player, audioRef }),
  ])
}
