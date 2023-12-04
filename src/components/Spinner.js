
import React, { Component } from 'react'
import spinner from './spinner.gif'


export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='text-center'>
        <img src={spinner} height="40px" width="40px" alt="loading" />
      </div>
    )
  }
}

export default Spinner