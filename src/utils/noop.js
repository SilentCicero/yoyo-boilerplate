export function objectNoop() {
  return Object.assign({});
}

export function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (let i = 0; i < len; i += 1) {
    const key = aKeys[i];

    if (!shallowEqualObjects(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
