import React from 'react'

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'}
]

const testtablestyle = {
  border: "5px solid purple",
  margin: "100px",
  padding: "50px"
}

class TestTable extends React.Component {
  render() {
    return (
      <div
        style={testtablestyle}>
        test
      </div>
    )
  }
}

export default TestTable
