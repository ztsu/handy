const words = [
  ["cosy", "[ˈkəʊzɪ]", "уютный"],
  ["throughout", "[θruːˈaʊt]", "через, везде"],
  ["consecutive", "[kənˈsɛkjʊtɪv]", "последовательный"],
  ["sequential", "[sɪˈkwɛnʃ(ə)l]", "следующий"],
  ["insist", "[ɪnˈsɪst]", "настаивать"],
  ["convenient", "[kənˈviːnɪənt]", "удобный"],
  ["suitable", "[ˈs(j)uːtəb(ə)l]", "подходящий"],
  ["predecessor", "[ˈpriːdɪsɛsə]", "предшественник"]
];

const PREV = "prev";
const NEXT = "next";

export default function main(state = {words, current: 0}, action) {
  const { words, current } = state;

  switch (action.type) {
    case NEXT:
      return {...state, current: current + 1 < words.length && current + 1 || words.length - 1};
    case PREV:
      return {...state, current: current > 0 && current - 1 || 0};
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
