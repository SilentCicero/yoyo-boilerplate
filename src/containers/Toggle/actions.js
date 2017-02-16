import { OPEN_TOGGLE, CLOSE_TOGGLE, TOGGLE_TOGGLE } from './constants';

export function openToggle(name) {
  return { type: OPEN_TOGGLE, name };
}

export function closeToggle(name) {
  return { type: CLOSE_TOGGLE, name };
}

export function toggleToggle(name) {
  return { type: TOGGLE_TOGGLE, name };
}
