function get(url) {
  let xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onload = function() {
      if (this.status < 200 || this.status >= 300) {
        reject(new Error(this.responseText));
      } else {
        resolve(JSON.parse(xhr.response));
      }
    };

    xhr.onerror = function () {
      reject(new Error(this.responseText));
    };

    xhr.open("GET", url);
    xhr.send("");
  });
}

const PREV = "prev";
const NEXT = "next";
const LOAD= "load";

export default function main(state = {words: [], current: 0}, action) {
  const { words, current } = state;

  switch (action.type) {
    case LOAD:
      return {...state, words: action.words};
    case NEXT:
      return {...state, current: current + 1 < words.length && current + 1 || words.length - 1};
    case PREV:
      return {...state, current: current > 0 && current - 1 || 0};
    default:
      return state;
  }
}

function receiveWords(words) {
  return {type: LOAD, words}
}

export function load() {
  return dispatch => {
    return get("/words.json").then(words => dispatch(receiveWords(words)));
  }
}

export function next() {
  return {type: NEXT};
}

export function prev() {
  return {type: PREV};
}
