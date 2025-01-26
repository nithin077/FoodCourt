import RestaurantCard from "./restaurantcard";
import { Link } from "react-router";
import UseRestaurantList from "../sharedcomponents/useRestaurantList";
import Search from "./search";

const BodyComponent = () => {
  const [filterRestaurant, allRestaurant, setfilterRestaurant] =
    UseRestaurantList();

  if (allRestaurant && allRestaurant.length === 0) return null;

  return !allRestaurant ? (
    <h2 className="p-4 font-bold text-lg">
      No Restaurants to show at this Moment !!
    </h2>
  ) : (
    <>
      <Search
        allRestaurant={allRestaurant}
        setfilterRestaurant={setfilterRestaurant}
      />
      <div className="mx-10">
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
      </div>
    </>
  );
};

export default BodyComponent;
