import hyperx from 'hyperx'; // eslint-disable-line
import { createElement } from 'bel'; // eslint-disable-line
import yoyo from 'yo-yo';

function createComponent(tag, props, children) {
  const yoChildren = children || [''];

  if (props.yo) {
    const injectedProps = Object.assign({}, props, { children: yoChildren });
    delete injectedProps.yo;

    return props.yo(injectedProps, yoChildren);
  }

  return createElement(tag, props, children);
}

export default function yo(...args) {
  return hyperx(createComponent)(...args);
}
yo.update = yoyo.update;
