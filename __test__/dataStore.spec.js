import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import dataStore from '../src/reducers/dataStore'

describe('Test dataStoreReducers',()=>{
    it('reducer for GET_DATA', () => {
        let state = []
        state = dataStore(state,{type:"GET_DATA",data:["first"]})
        expect(state).toEqual({data:"first"})
    });
});
