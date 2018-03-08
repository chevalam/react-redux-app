import * as dataAPI from '../utils/dataAPI'

export const GET_DATA = 'GET_DATA'

export function getData (data) {
  return {
    type: GET_DATA,
    data,
  }
}
export const fetchData = () => dispatch =>
dataAPI.getAll()
.then(post => dispatch(getData(post)))
