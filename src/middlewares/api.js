import { START, SUCCESS, FAIL } from "../constants";

export default store => next => action => {
  const { callAPI, type, ...rest } = action;
  if (!callAPI) return next(action);

  next({
    type: type + START,
    ...rest
  });
  fetch(callAPI)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    })
    .then(response => next({ type: type + SUCCESS, response, ...rest }))
    .catch(err => next({ type: type + FAIL, err, ...rest }));
};
