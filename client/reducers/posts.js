// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of current state

function posts(state = [], action) {
  // console.log('the post will change');
  // console.log(state, action);

  switch(action.type) {
    case 'INCREMENT_LIKES' : 
    // return updated state
    console.log('incrementing likes');
    const i = action.index;
    return [
      ...state.slice(0, i), // before the one we are updating
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1) // after the one we are updating
    ]

    default:
      return state;
  }
}

export default posts;