import { FunctionalComponent, h, Ref } from "preact"

import "./SoloFeature.css";
import { usePanner } from "./Panner";
import { AnimationPlayer } from "./player";
import { Space } from "./space";

const styles = {
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`
  }
} as const;

export const Center: FunctionalComponent = ({ children }) => {
  return h('div', { style: styles.center }, children)
}

export type SoloFeatureProps = {
  player: AnimationPlayer,

  flip?: boolean,

  sectionRef: Ref<HTMLElement | null>,

  name: string,
  profileImgURL: string,
  subtitle: string,
  handle: string,
  pronouns: string,
  link: string,

  links: {
    title: string,
    linkText?: string,
    link?: string,
  }[]

  bannerImgURL: string
};

const soloFeatureStyles = {

} as const;

export const SoloFeature: FunctionalComponent<SoloFeatureProps> = ({
  player,

  name, profileImgURL,
  subtitle,
  handle,
  pronouns,
  link,
  children,
  bannerImgURL,

  flip,

  links,

  sectionRef
}) => {
  return h('section', { class: 'solo-feature', ref: sectionRef, style: { flexDirection: flip ? 'row' : 'row-reverse' } }, [
    h('div', { class: 'left-pane' }, [
      h('div', { class: 'floating-profile' }, [
        h('img', { src: profileImgURL }),
        h('h2', {}, name),
        h('a', { class: 'username', href: `https://cohost.org/${handle}` }, '@' + handle),
        h('div', {}, pronouns),
        h('a', { class: 'link', href: link }, link),
        h('div', { class: 'subtitle' }, subtitle),
      ])
    ]),
    h('div', { class: 'right-pane' }, [
      h('div', { class: 'floating-details' }, [
        children,
        links.length > 0 && h('nav', {}, [
          links.map(link => h('li', {}, [
            h('div', { class: 'link-title' }, link.title),
            h('a', {
              href: link.link,
            }, link.linkText || link.link)
          ]))
        ])
      ])
    ]),
    h('div', { class: 'banner' }, [
      usePanner({ player, start: new Space.Vector2(0, 0), end: new Space.Vector2(0, 0) }, ref =>
        h('img', { src: bannerImgURL, ref })
      )
    ])
  ])
};