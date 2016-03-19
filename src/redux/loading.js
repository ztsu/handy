const INCREMENT = "loading/increment";
const DECREMENT = "loading/decrement";

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state && state - 1 || 0;
    default: return state;
  }
}

export function increment() {
  return {type: INCREMENT};
}

export function decrement() {
  return {type: DECREMENT};
}
