import React from 'react'

const testtablestyle = {
  border: "3px solid purple",
  borderRadius: "5px",
  backgroundColor: "#f2f2f2",
  margin: "100px",
  padding: "50px"
}

const searchbarstyle = {
  border: "3px solid purple",
  borderRadius: "5px",
  boxSizing: "border-box",
  padding: "20px",
  width: "100%"
}

class TestTable extends React.Component {
  render() {
    return (
      <div style={testtablestyle}>
        <input
          style={searchbarstyle}
          placeholder="search something">
        </input>
      </div>
    )
  }
}

export default TestTable
