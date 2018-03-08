import {GET_DATA} from '../actions'

const initialStoreState = []

function dataStore (state=initialStoreState, action) {
  const {data} = action

  switch (action.type) {
    case GET_DATA:
    state = [...state,...data]
    return state
    default:
    return state
  }
}

export default dataStore
