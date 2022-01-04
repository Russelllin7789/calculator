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
        number: ''
      },
      {
        index: 11,
        number: ''
      }
    ],
    total: 0,
    title: 'React Calculator'
  }

  render() {
    return (
      <div className='outer-container'>
        <h1 className='text-3xl font-bold mb-4 mt-4 pb-4 pt-8 text-center text-white'>{this.state.title}</h1>
        <div className="all-container">
          <div className="calculate-result-area total">{this.state.total}</div>
          <div className="calculate-area">
            <div className="plus-minus-mutiply-divide-area">
              <div className="plus calculation">+</div>
              <div className="minus calculation">-</div>
              <div className="multiply calculation">x</div>
              <div className="divide calculation">/</div>
            </div>
            <div className="number-area">
              {
                this.state.numbers.map((number) => {
                  return <div className='btn' key={number.index}>{number.number}</div>
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