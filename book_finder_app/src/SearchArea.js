import React from "react";

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form action="" onSubmit={props.searchBook}>
        <input type="text" onChange={props.handleSearch}></input>
        <input type="submit" value="Search" id="button"></input>
        <select id="Option" defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Newest First">Newest First</option>
          <option value="Oldest First">Oldest First</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;
