import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";
export default (posts = [], action) => {
  switch (action.type) {
    // FETCH_ALL is a refrence of type from actions
    // payload is { data } that coming from  api to actions then here
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      // we have spread operator because posts are individuals
      return [...posts, action.payload];
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
