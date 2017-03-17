import { UPDATE_TIME } from './constants';

export function updateTime() {
  return {
    type: UPDATE_TIME,
    current: (new Date()).getTime() / 1000,
  };
}
