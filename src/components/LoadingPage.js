import React from 'react'


class LoadingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: true }), 2000 )
  }

  render() {
    const { loading } = this.state
    console.log(this.state.loading)
    if(loading) {
      return <div className="loader"> Loading... </div>
    }
    return (
      null

    )
  }
}

export default LoadingPage
