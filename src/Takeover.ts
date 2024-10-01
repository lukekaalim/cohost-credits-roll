import { Component, h } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"
import { Controls } from "./Controls";
import { useAnimationPlayer } from "./player";
import { Fader, useFader } from "./Fader";
import { Music } from "./Music";
import { Center } from "./Layouts";
import "./Takeover.css"
import { time } from "./time";
import { Aidan, Jae, Kaara, Vogon } from "./Slides";

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
      h(Fader, { enter: 0, exit: time({ seconds: 5 }), fadeDuration: time({ seconds: 1 }), player }, [
        h('div', { style: { display: 'flex', flexDirection: 'column' } }, [
          h('img', { src: cohost }),
        ])
      ]),
    ]),

    h(Fader, { enter: time({ seconds: 6 }), exit: time({ seconds: 11 }), fadeDuration: time({ seconds: 1 }), player }, [
      h('div', { style: { marginTop: '24px', position: 'absolute' } }, `cohost is designed, developed, and operated by anti software software club llc`),
    ]),

    useFader({ enter: time({ seconds: 10 }), exit: time({ seconds: 10 + 24 }), fadeDuration: 2000, player }, ref => (
      h(Jae, { rootRef: ref, start: 0, end: 0, player })
    )),
    useFader({ enter: time({ seconds: 10 + 24 }), exit: time({ seconds: 10 + 48 }), fadeDuration: 2000, player }, ref => (
      h(Vogon, { rootRef: ref, start: 0, end: 0, player })
    )),
    useFader({ enter: time({ seconds: 10 + 48 }), exit: time({ seconds: 10 + 72 }), fadeDuration: 2000, player }, ref => (
      h(Aidan, { rootRef: ref, start: 0, end: 0, player })
    )),
    useFader({ enter: time({ seconds: 10 + 72 }), exit: time({ seconds: 10 + 96 }), fadeDuration: 2000, player }, ref => (
      h(Kaara, { rootRef: ref, start: 0, end: 0, player })
    )),
    h(Center, {}, [
      h(Fader, { enter: time({ seconds: 106 }), exit: time({ seconds: 130 }), fadeDuration: 2000, player }, [
        h('p', {}, `cohost launched in private alpha on february 3, 2022, and to the public on june 28, 2022.`),
        h('p', {}, `thank you to our alpha testers, our first 150 users.`),
      ]),
    ]),
    h(Center, {}, [
      h(Fader, { enter: time({ seconds: 130 }), exit: time({ seconds: 142 }), fadeDuration: 2000, player }, [
        h('p', {}, `"The Host" emoji set was designed by @SilverStarsIllustration`),
      ]),
    ]),
    h(Center, {}, [
      h(Fader, { enter: time({ seconds: 142 }), exit: time({ seconds: 142 + 12 }), fadeDuration: 2000, player }, [
        h('p', {}, `the new eggbug emoji set was designed by @dzuk`),
      ]),
    ]),
    h(Center, {}, [
      h(Fader, { enter: time({ seconds: 142 + 12 }), exit: time({ seconds: 142 + 24 }), fadeDuration: 2000, player }, [
        h('p', {}, `"Fuck Computers" was designed by @girlfiend; the phrase was borrowed from our friend astrid`),
      ]),
    ]),
    h(Center, {}, [
      h(Fader, { enter: time({ seconds: 142 + 24 + 12 }), exit: time({ seconds: 142 + 24 + 24 }), fadeDuration: 2000, player }, [
        h('p', {}, `"anonbug" (icon used in anonymous asks) was designed by @easrng`),
      ]),
    ]),
    useFader({ enter: time({ seconds: (142 + 24 + 24) }), exit: Number.POSITIVE_INFINITY, player, fadeDuration: 4000 }, ref =>
      h('div', { ref }, [
        h('img', { src: 'https://staging.cohostcdn.org/attachment/613545d0-cf63-45b7-ab8d-738dd4b5bbc8/cohost%20sunset.png' })
      ]),
    ),
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
