function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
    // console.log('remove comment');
      return [
        ...state.slice(0, action.i), // from the start to delete comment
        ...state.slice(action.i + 1) // after deleted comment to the end
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // override this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;