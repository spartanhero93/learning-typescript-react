import * as React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'

// class Root extends React.Component {
//   state = {
//     text: '',
//     Family: ['Maria', 'Jose', 'Luis', 'Sarah', 'Carla'],
//   }

//   handleChange = (event: any) => this.setState({ text: event.target.value })
//   addMember = () =>
//     this.setState({ Family: [...this.state.Family, this.state.text], text: '' })

//   render() {
//     const { Family } = this.state
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//         {Family.map(members => (
//           <App name={members} />
//         ))}

//         <div style={{ position: 'absolute', bottom: '1rem' }}>
//           <input
//             onKeyPress={event => (event.key === 'Enter' ? this.addMember() : 'sad')}
//             type='text'
//             onChange={this.handleChange}
//           />
//         </div>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App name='Luis' effort={1} />, document.getElementById(
  'root'
) as HTMLElement)

serviceWorker.unregister()
