import { combineReducers } from 'redux';
import { toPageTitle } from 'utils/strings';
import { LOCATION_CHANGE } from './routing';

export const NOT_FOUND = 'NOT_FOUND';

export function pageNotFound() {
  return { type: NOT_FOUND };
}

function toolbarTitle(state = '', action) {
  if (action.type === LOCATION_CHANGE) {
    return toPageTitle(action.payload.location.pathname);
  } else if (action.type === NOT_FOUND) {
    return 'Not Found!';
  }

  return state;
}

function toolbarProminent(state = false, action) {
  if (action.type === LOCATION_CHANGE) {
    const { pathname } = action.payload.location;
    return !pathname.match(/minimzing/) && !!pathname.match(/components|customization/);
  } else if (action.type === NOT_FOUND) {
    return false;
  }

  return state;
}

function visibleBoxShadow(state = true, action) {
  if (action.type === LOCATION_CHANGE) {
    const { pathname } = action.payload.location;
    return !pathname || pathname !== '/';
  } else if (action.type === NOT_FOUND) {
    return false;
  }

  return state;
}

export default combineReducers({
  toolbarTitle,
  toolbarProminent,
  visibleBoxShadow,
});
