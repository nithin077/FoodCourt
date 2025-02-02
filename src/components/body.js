import RestaurantCard from "./restaurantcard";
import { Link } from "react-router";
import UseRestaurantList from "../sharedcomponents/useRestaurantList";
import Search from "./search";
import Shimmer from "./shimmer"

const BodyComponent = () => {
  const [filterRestaurant, allRestaurant, setfilterRestaurant] =
    UseRestaurantList();

  if (!allRestaurant) return <h2 className="p-4 font-bold text-lg">No Restaurants to show at this Moment !!</h2>;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Search
        allRestaurant={allRestaurant}
        setfilterRestaurant={setfilterRestaurant}
      />
      <div className="mx-10">
        <div className="flex flex-wrap" data-testid="res-list">
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
      </div>
    </>
  );
};

export default BodyComponent;
