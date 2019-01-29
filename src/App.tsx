import * as React from 'react'

interface Props {
  name: string
  effort?: number
}

interface State {
  currentEffort: number
}

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!')

export default class App extends React.Component<Props, State> {
  state = {
    currentEffort: this.props.effort || 1,
  }

  updateEffort = (currentEffort: number) => this.setState({ currentEffort })

  onIncrease = () => this.updateEffort(this.state.currentEffort + 1)
  onDecrease = () => this.updateEffort(this.state.currentEffort - 1)

  render() {
    const { name } = this.props
    const { currentEffort } = this.state
    if (currentEffort === 0) {
      throw new Error('Increase your effort!')
    } else if (currentEffort < 0) {
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
