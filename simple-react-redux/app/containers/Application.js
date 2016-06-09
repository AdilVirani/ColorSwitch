import React from 'react'
import { Provider } from 'react-redux';
import Begin from '../components/Begin';

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <Begin />
      </Provider>
    )
  }
}
