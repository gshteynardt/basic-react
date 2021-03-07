export function arrToMap (arr) {
  return arr.reduce((acc, comment) => ({...acc, [comment.id]: comment}), {});
};
