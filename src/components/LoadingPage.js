// import React from 'react'
//
// class Loading extends React.Component {
//   state = {
//     loading: true
//   }
//
//   componentDidMount() {
//     setTimeout(() => this.setState({ loading: false }), 2500) // simulates loading of data
//   }
//
//   render() {
//     const { loading } = this.state
//
//     if(loading) { // if your component doesn't have to wait for async data, remove this block
//       return null// render null when app is not ready
//     }
//
//     return (
//       <div>Iam the app</div>
//     )
//   }
// }
//
// export default Loading
