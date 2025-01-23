import { FETCH_RESTO_DETAILS_URL } from "./constant";
import { useEffect, useState} from "react";

const useRestaurantDetails = (id) => {
  const [restoDetails, setRestoDetails] = useState([]);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(FETCH_RESTO_DETAILS_URL+id );
    const json = await data.json();
    const itemDeatils =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
        ?.card?.itemCards;
        console.log(itemDeatils)
    setRestoDetails(itemDeatils);
  }
  return restoDetails;
};

export default useRestaurantDetails;
