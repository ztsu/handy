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

const LOAD = "words/load";
const OPEN = "words/open";

export default function main(state = [], action) {

  switch (action.type) {
    case LOAD:
      return action.words;

    case OPEN:
      return state.map((word, n) => ({...word, open: n === action.current || word.open}));

    default:
      return state;
  }
}

function receiveWords(words) {
  return {type: LOAD, words}
}

export function load() {
  return dispatch => {
    return get("/words.json").then(words => dispatch(receiveWords(words.map(word => { return {word: word[0], ipa: word[1], translations: [word[2]], open: false}; }))));
  }
}

export function open(current) {
  return {type: OPEN, current};
}
