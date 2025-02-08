import { IMG_CDN_URL } from "../sharedcomponents/constant";

const RestaurantCard = ({name,cloudinaryImageId,cuisines,areaName}) => {
    return (
      <div className="w-52 p-2 m-2 shadow-lg h-80 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xxl">
        <img className="h-40"
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <p>{areaName}</p>
      </div>
    );
  };

  export default RestaurantCard;