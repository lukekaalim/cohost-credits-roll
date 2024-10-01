import { FunctionalComponent, h, Ref } from "preact";
import { SoloFeature } from "./Layouts";
import { AnimationPlayer } from "./player";

import './Slides.css';

const jae = browser.runtime.getURL("resources/jae.jpg");
const bradley = browser.runtime.getURL("resources/bradley.jpeg");

const vogon = browser.runtime.getURL("resources/vogon.png");
const chem = browser.runtime.getURL("resources/chem.png");

const aidan = browser.runtime.getURL("resources/aidan.png");
const streamerEggbug = browser.runtime.getURL("resources/streamer-eggbug.jpg");

const kaara = browser.runtime.getURL("resources/kaara.jpg");
const crow = browser.runtime.getURL("resources/crow.jpg");

export type SlideProps = {
  player: AnimationPlayer,
  rootRef: Ref<HTMLElement | null>,
  start: number,
  end: number,
}

export const Jae: FunctionalComponent<SlideProps> = ({ rootRef, player }) => {
  return h(SoloFeature, {
    player,
    sectionRef: rootRef,
    name: 'jae',
    handle: 'jkap',
    pronouns: 'they/she',
    link: 'https://jkap.io/',
    profileImgURL: jae,
    subtitle: 'CEO of Posting',

    links: [
      {
        title: '🔵 tumblr',
        link: 'yrfriendjkap.tumblr.com/'
      },
      {
        title: '🐘 mastodon',
        link: 'xoxo.zone/@jkap'
      },
      {
        title: '🖼️ icon credit',
        link: 'twitter.com/osmoru'
      },
      {
        title: '🐦 twitter',
        linkText: 'not anymore lol'
      },
      {
        title: '🎬 letterboxd',
        link: 'letterboxd.com/yrfriendjkap/'
      }
    ],

    bannerImgURL: bradley,
  }, [
    h('p', { class: 'comment' }, [
      `butch jewish dyke`,
      h('br', {}),
      `part of @staff, cohost user #1`,
      h('br', {}),
      `married to @kadybat`
    ]),
    h('img', {
      src: 'https://userbox.easrng.workers.dev/?info=This%20user%20can%20say%20it.&font=Atkinson%20Hyperlegible',
      alt: 'This user can say it',
      title: 'This user can say it'
    }),
    h('a', { href: 'https://osu.ppy.sh/users/11459097' }, [
      h('img', {
        src: 'https://osu-sig.vercel.app/card?user=jkap&mode=std&lang=en&blur=6&animation=true&mini=true&w=340&h=102'
      }),
    ])
  ]);
};

export const Vogon: FunctionalComponent<SlideProps> = ({ player, rootRef }) => {
  return h(SoloFeature, {
    flip: true,
    player,
    sectionRef: rootRef,
    name: 'colin',
    handle: 'vogon',
    pronouns: 'he/him',
    link: 'gameboat.org',
    profileImgURL: vogon,
    subtitle: 'the evil "Website Boy"',

    links: [
      {
        title: 'mastodon',
        link: 'mastodon.social/@vogon'
      },
      {
        title: 'twitter (inactive)',
        link: 'twitter.com/vogon'
      },
      {
        title: '🖼️ icon credit',
        link: 'twitter.com/osmoru'
      },
      {
        title: 'bluesky',
        linkText: `if bluesky has a million haters I am one of them, if bluesky has one hater that's me, if bluesky has no haters then I am no more on the earth`,
        link: 'https://cohost.org/vogon/post/1845751-bonus-pure-speculati'
      },
      {
        title: 'irl',
        link: 'seattle, WA'
      }
    ],

    bannerImgURL: chem,
  }, [
    h('p', { class: 'comment' }, [
      `member of @staff, lapsed linguist and drummer, electronics hobbyist`,
      h('br', {}),
      `zip's bf`,
      h('br', {}),
      `no supervisor but ludd means the threads any good`
    ]),
  ]);
};

export const Aidan: FunctionalComponent<SlideProps> = ({ player, rootRef }) => {
  return h(SoloFeature, {
    player,
    sectionRef: rootRef,
    name: 'eggbug enthusiast',
    handle: 'aidan',
    pronouns: 'she/her',
    link: 'https://twitter.com/AerialShading',
    profileImgURL: aidan,
    subtitle: 'former girlboss in chief',

    links: [
      {
        title: 'HIRE ME',
        link: 'https://www.aidangrealish.com/'
      },
    ],

    bannerImgURL: streamerEggbug,
  }, [
    h('p', { class: 'comment' }, [
      `one quarter of @staff! i make the website look good and/or bad depending on your personal taste`
    ]),
  ]);
};

export const Kaara: FunctionalComponent<SlideProps> = ({ player, rootRef }) => {
    return h(SoloFeature, {
      player,
      sectionRef: rootRef,
      name: 'kara',
      handle: 'kaara',
      pronouns: 'it/she',
      link: '',
      profileImgURL: kaara,
      subtitle: 'oh, to be [REDACTED]',
  
      links: [],
  
      bannerImgURL: crow,
    }, [
      h('p', { class: 'comment' }, [
        `1/4th of @staff`,
        h('br', {}),
        `🏳️‍⚧️ t4t`,
        h('br', {}),
        `i feel the wind in my dreams`,
        h('br', {}),
        `Ⓐ`
      ]),
    ]);
}