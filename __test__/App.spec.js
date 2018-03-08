import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import {App} from '../src/components/App'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import {getData} from '../src/actions/requestData'
import {createStore} from 'redux'
import dataStore from '../src/reducers/dataStore'

describe('REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = []
    const mockStore = configureStore()
    let store

    beforeEach(()=>{
        store = mockStore(initialState)
    })

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    });
});
