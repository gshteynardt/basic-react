import React from 'react'

const originalComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  return HOC
}

export default originalComponent
