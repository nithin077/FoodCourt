import { restoData } from "../sharedcomponents/constant";
import RestaurantCard from "./restaurantcard";
import { useState, useEffect } from "react";
import ShimmerUi from "./shimmer";
import { Link } from "react-router";
import { FETCH_RESTO_URL } from "../sharedcomponents/constant"

function filterData(searchText, filterRestaurant) {
  const filteredData = filterRestaurant.filter((resto) => {
    return resto.info.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredData;
}

const BodyComponent = () => {
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  async function getRestaurant() {
    const data = await fetch(FETCH_RESTO_URL);
    const json = await data.json();
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurantData)
    setAllRestaurant(restaurantData);
    setfilterRestaurant(restaurantData);
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  if (allRestaurant && allRestaurant.length === 0) return null;

  return (!allRestaurant) ? (
    <h2  className="p-4 font-bold text-lg">No Restaurants to show  at this Moment !!</h2> 
  ) : (
    <>
      <div className="my-5 p-5 bg-neutral-100">
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
      <div className="flex flex-wrap">
        {filterRestaurant.length === 0 ? (
          <h3>No Restaurants Found for {searchText}</h3>
        ) : (
          filterRestaurant.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default BodyComponent;
