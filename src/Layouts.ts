import { FunctionalComponent, h } from "preact"

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