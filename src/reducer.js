
import { GET_THING_START } from './actions';

export default function thing(state = {}, action) {
  switch (action.type) {
    case GET_THING_START:
      return {
        ...state,
        thing: 'thing'
      }
    default:
      return state
  }
}
