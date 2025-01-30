import { useState } from "react";
import { filterData } from "../sharedcomponents/helper";

const Search = ({ setfilterRestaurant, allRestaurant }) => {
  const [searchText, setsearchText] = useState("");

  return (
    <div className="my-5 p-5 bg-neutral-100 flex items-center">
      <input
        type="text"
        className="search-input h-10 border-2 border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400"
        placeholder="Search"
        value={searchText}
        onChange={(event) => {
          setsearchText(event.target.value);
        }}
      />
      <button
        className="ml-3 h-10 px-6 bg-blue-500 hover:bg-blue-800 text-white rounded-md font-bold shadow-md transition duration-300 ease-in-out"
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
