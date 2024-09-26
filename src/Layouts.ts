import { FunctionalComponent, h } from "preact"

const styles = {
  center: {
    margin: 'auto'
  }
} as const;

export const Center: FunctionalComponent = ({ children }) => {
  return h('div', { style: styles.center }, children)
}