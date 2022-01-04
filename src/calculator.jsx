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
    ]
  }

  render() {
    return (
      <div>
        <h1 className='text-3xl font-bold underline'>Hello Calculator!</h1>
        <div className="number-area" style={{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {
            this.state.numbers.map((number) => {
              return <div className='btn' key={number.index}>{number.number}</div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Calculator