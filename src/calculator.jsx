import React, { Component } from "react";
import { BeakerIcon } from '@heroicons/react/solid'

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
        <div className="title-area">
          <h1 className='title'>{title}</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
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
          <div className="picture-area">
            <img src="https://www.freepik.com/free-vector/calculator-concept-illustration_6982904.htm#query=calculate&position=3&from_view=author" alt="" className="src" />
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator