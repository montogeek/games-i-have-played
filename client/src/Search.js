import React from 'react'

const SearchInput = ({ onChange }) => {
  return [
    <label className="f3" htmlFor="name">Enter game name: </label>,
    <input type="text" id="name" onChange={onChange} />
  ]
}

export default SearchInput