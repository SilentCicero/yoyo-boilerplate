function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); // eslint-disable-line
}

export default function guidGenerator() {
  return `${S4()}${S4()}-${S4()}${S4()}`;
}
