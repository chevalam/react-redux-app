import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import ListData from './ListData'
import {fetchData} from '../actions'

class App extends Component {

componentDidMount() {
  this.props.updateStore()
}
  render() {
    return (
      <BrowserRouter>
      <Route path="/" render ={()=>
      <ListData data={this.props.data}/>}
      />
      </BrowserRouter>
    );
  }
}

function mapStateToProps(data) {
  return {data}
}

function mapDispatchToProps(dispatch){
    return {
      updateStore : () => dispatch(fetchData())
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
