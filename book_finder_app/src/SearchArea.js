import React from "react";

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form action="">
        <input type="text" onChange={props.handleSearch}></input>
        <input type="submit" value="Search" id="button"></input>
      </form>
    </div>
  );
};

export default SearchArea;
