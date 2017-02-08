import { CHANGE_LOCATION } from './constants';

export function changeLocation(location) {
  return { type: CHANGE_LOCATION, location };
}
