export function manageFriends(state = { friends: [] }, action){

  switch(action.type, action.friend){

    
    case "ADD_FRIEND":
      const newState = {...state, friends: [...state.friends, action.friend]}
      return newState
      

    // case "REMOVE_FRIEND":

  }

}

