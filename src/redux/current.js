const PREV = "current/prev";
const NEXT = "current/next";

export default function(state = 0, action) {
  switch (action.type) {
    case NEXT:
      return state + 1;

    case PREV:
      return state - 1;

    default:
      return state;
  }
}

export function next() {
  return {type: NEXT};
}

export function prev() {
  return {type: PREV};
}
