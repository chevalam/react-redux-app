import * as dataAPI from '../utils/dataAPI'

export const GET_DATA = 'GET_DATA'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'

export function getData (data) {
  return {
    type: GET_DATA,
    data,
  }
}

export function getDataError (data) {
  return {
    type: GET_DATA_ERROR,
    data,
  }
}

export const fetchData = () => dispatch =>
dataAPI.getAll()
.then(post => dispatch(getData(post)))
.catch(error => dispatch(getDataError(error)))
