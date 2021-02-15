import React from 'react'

const SearchBox = (props) => {
  return (
    <div>
      <input 
        type="text" 
        className="p-1 form-control"
        placeholder="Type to search..." 
        value={props.value} 
        onChange={(e) => props.setSearchValue(e.target.value)} 
      ></input>
    </div>
  )
}

export default SearchBox
