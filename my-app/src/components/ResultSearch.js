import React from 'react'

const testtablestyle = {
  border: "3px solid purple",
  borderRadius: "5px",
  backgroundColor: "#f2f2f2",
  margin: "100px",
  padding: "50px"
}


class ResultSearch extends React.Component {
  render() {
    return (
      <div style={testtablestyle}>
        <input
          placeholder="search something">
        </input>
      </div>
    )
  }
}

export default ResultSearch
