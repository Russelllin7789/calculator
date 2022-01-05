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
      // {
      //   index: 11,
      //   number: ''
      // }
    ],
    total: 0,
    title: 'React Calculator'
  }

  handleNumber = (e) => {
    console.log(e.target.textContent)
  }

  render() {
    return (
      <div className='outer-container'>
        <h1 className='title'>{this.state.title}</h1>
        <div className="all-container">
          <div className="total">{this.state.total}</div>
          <div className="calculate-area">
            <div className="plus-minus-mutiply-divide-area">
              <button className="plus calculation">+</button>
              <button className="minus calculation">-</button>
              <button className="multiply calculation">x</button>
              <button className="divide calculation">/</button>
            </div>
            <div className="number-area">
              {
                this.state.numbers.map((number) => {
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