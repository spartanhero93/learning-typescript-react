import * as React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

interface Props {
  name: string
  effort?: number
}

interface State {
  currentEffort: number
}

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!')

class App extends React.Component<Props, State> {
  state = {
    currentEffort: this.props.effort || 1,
  }

  updateEffort(currentEffort: number) {
    this.setState({ currentEffort })
  }

  onIncrease = () => this.updateEffort(this.state.currentEffort + 1)
  onDecrease = () => this.updateEffort(this.state.currentEffort - 1)

  render() {
    const { name } = this.props
    const { currentEffort } = this.state

    if (currentEffort <= 0) {
      throw new Error('Increase your effort!')
    }

    return (
      <div style={{ border: '2px solid', margin: '0 1rem', padding: '1rem' }}>
        <h1>Hello {name + getExclamationMarks(currentEffort)}</h1>

        <div>
          <button onClick={this.onIncrease}>+</button>
          <button onClick={this.onDecrease}>-</button>
        </div>
      </div>
    )
  }
}

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

ReactDOM.render(<App name='Luis' />, document.getElementById('root') as HTMLElement)

serviceWorker.unregister()
