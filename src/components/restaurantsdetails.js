import { useParams } from "react-router";
import useRestaurantDetails from "../sharedcomponents/useRestaurantDetails";
import { IMG_CDN_URL } from "../sharedcomponents/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../sharedcomponents/cartSlice";

const RestaurantDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const restoDetails = useRestaurantDetails(id);

  if (restoDetails && restoDetails.length === 0) return null;
  return !restoDetails ? (
    <h2 className="p-4 font-bold text-lg">No RestaurantDetails !!</h2>
  ) : (
    <div className="m-4 flex justify-center">
      <div className="w-3/5"  data-testid="menu">
        <h1 className="p-4 font-bold text-lg">RestaurantDetails page</h1>
        {restoDetails?.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="pt-4 mt-8 shadow-lg flex justify-between items-center"
          > 
            <div className="p-6 w-3/4">
              <p className="font-bold text-xl">{item?.card?.info?.name}</p>
              <p>{item?.card?.info?.description}</p>
              <div className="font-bold text-green-400 flex items-center space-x-8">
              <p>&#8377; {item?.card?.info?.price/100}</p>
              <p>&#9733; {item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
              </div>
              <button
                data-testid="addBtn" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white mt-2 h-10 w-16 font-bold text-lg rounded-lg shadow-md transition duration-300 ease-in-out"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <div className="flex-shrink-0">
              <img
                className="w-40 h-40 object-cover"
                alt="image"
                src={IMG_CDN_URL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
