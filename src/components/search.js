import { useState } from "react";
import { filterData } from "../sharedcomponents/helper";

const Search = ({ setfilterRestaurant, allRestaurant }) => {
  const [searchText, setsearchText] = useState("");

  return (
    <div className="my-5 p-5 bg-neutral-100 flex justify-center">
      <input
        type="text"
        className="search-input h-8 border-black"
        placeholder="Search"
        value={searchText}
        onChange={(event) => {
          setsearchText(event.target.value);
        }}
      />
      <button
        className="p-2 m-2 h-10 w-16 bg-blue-600 text-white rounded-md"
        onClick={() => {
          const data = filterData(searchText, allRestaurant);
          setfilterRestaurant(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
