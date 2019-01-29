import * as React from 'react'

export interface Props {
  name: string
  effort?: number
}

interface State {
  currentEffort: number
}

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!')

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      currentEffort: props.effort || 1,
    }
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
      <div>
        <h1>Hello {name + getExclamationMarks(currentEffort)}</h1>

        <div>
          <button onClick={this.onIncrease}>+</button>
          <button onClick={this.onDecrease}>-</button>
        </div>
      </div>
    )
  }
}
