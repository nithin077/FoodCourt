import { FETCH_RESTO_URL } from "../sharedcomponents/constant";
import { useState, useEffect } from "react";

const UseRestaurantList = () => {
    const [filterRestaurant, setfilterRestaurant] = useState([]);
    const [allRestaurant, setAllRestaurant] = useState([]);
  
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
    return [filterRestaurant, allRestaurant, setfilterRestaurant];
}

export default UseRestaurantList;