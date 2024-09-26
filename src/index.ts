import { h, render } from "preact";
import { Takeover } from "./Takeover"


const main = async () => {
  console.log('start', window['cohost_credits_roll'])

  const prevState = { ...window['cohost_credits_roll'] } as any;
  if (prevState) {
    if (prevState.entry_element) {
      document.body.removeChild(prevState.entry_element)
      console.log('Removing prev entry')
    } else {
      console.log('no prev entry element')
    }
  } else {
    console.log('no prev entry')
  }
  const entry_element = document.createElement('div');

  render(h(Takeover, {}), entry_element);

  document.body.append(entry_element);

  window['cohost_credits_roll'] = window['cohost_credits_roll'] || {};
  window['cohost_credits_roll'].entry_element = entry_element;

  console.log('end', window['cohost_credits_roll'])
};

main();