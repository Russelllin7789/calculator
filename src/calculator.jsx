import React, { Component } from "react";

class Calculator extends Component {
  state = {
    numbers: [
      {
        index: 0,
        number: 1
      },
      {
        index: 1,
        number: 2
      },
      {
        index: 2,
        number: 3
      },
      {
        index: 3,
        number: 4
      },
      {
        index: 4,
        number: 5
      },
      {
        index: 5,
        number: 6
      },
      {
        index: 6,
        number: 7
      },
      {
        index: 7,
        number: 8
      },
      {
        index: 8,
        number: 9
      },
      {
        index: 9,
        number: 0
      },
      {
        index: 10,
        number: 'C'
      },
    ],
    title: 'React Calculator',
    total: 0,
    arithmetic: '',
  }

  handleNumber = (e) => {
    let target = e.target.textContent
    console.log('target:', target)
    if (target !== 'C') {
      // handle user click number rather than 'C'
      target = Number(target)
      if (this.state.arithmetic === '') {
        return
      } else {
        if (this.state.arithmetic === '+') {
          this.setState({
            ...this.state,
            total: this.state.total += target
          }, console.log('total:', this.state.total))
        }
        if (this.state.arithmetic === '-') {
          this.setState({
            ...this.state,
            total: this.state.total -= target
          }, console.log('total:', this.state.total))
        }
        if (this.state.arithmetic === 'x') {
          this.setState({
            ...this.state,
            total: this.state.total *= target
          }, console.log('total:', this.state.total))
        }
        if (this.state.arithmetic === '/') {
          this.setState({
            ...this.state,
            total: this.state.total /= target
          }, console.log('total:', this.state.total))
        }
      }
    } else {
      // handle user click 'C'
      this.setState({
        ...this.state,
        total: 0
      })
    }
  }

  setArithmetic = (e) => {
    const calculator = e.target.textContent

    this.setState({ ...this.state, arithmetic: calculator },
      console.log('calculator:', calculator))
  }

  render() {
    const { title, total, numbers, arithmetic } = this.state
    return (
      <div className='outer-container'>
        <h1 className='title'>{title}</h1>
        <div className="all-container">
          <div className="show-area">
            <div className="total">{total}</div>
            <div className="arithmetic">{arithmetic}</div>
          </div>
          <div className="calculate-area">
            <div className="plus-minus-mutiply-divide-area">
              <button className="plus calculation" onClick={this.setArithmetic}>+</button>
              <button className="minus calculation" onClick={this.setArithmetic}>-</button>
              <button className="multiply calculation" onClick={this.setArithmetic}>x</button>
              <button className="divide calculation" onClick={this.setArithmetic}>/</button>
            </div>
            <div className="number-area">
              {
                numbers.map((number) => {
                  return <button className={`btn number-${number.index}`} onClick={this.handleNumber} key={number.index}>{number.number}</button>
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator