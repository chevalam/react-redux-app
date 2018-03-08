
import {getData,fetchData} from '../src/actions/requestData'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
import * as dataAPI from '../src/utils/dataAPI'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Test requestData',()=>{
    it('+++ actionCreator getData', () => {
        const result = getData(["first","second"])

        expect(result).toEqual({type:"GET_DATA",data:["first","second"]})
    });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('returns array data when fetching has been done', () => {
    fetchMock
      .getOnce('/photos', { type: "GET_DATA" })
      .catch((error)=>console.log(error))


    const expectedActions = [
      { type: "GET_DATA" }
    ]
    const store = mockStore({ data: [] })

    return store.dispatch(fetchData())
          .then(() => {expect(store.getActions()).toEqual(expectedActions)})
          .catch((error)=>console.log(error))

  })
})
