import React, { Component } from 'react';
import { connect } from 'react-redux';
//import from './actions';

class App extends Component {
  componentDidMount() {
    console.log('Mounted');

    //this.props.fetchData();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //fetchData: () => dispatch(fn)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
