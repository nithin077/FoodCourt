import { useParams } from "react-router";
import useRestaurantDetails from "../sharedcomponents/useRestaurantDetails";
import { IMG_CDN_URL } from "../sharedcomponents/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../sharedcomponents/cartSlice";



const RestaurantDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  const restoDetails = useRestaurantDetails(id);

  if (restoDetails && restoDetails.length === 0) return null;
  return !restoDetails ? (
    <h2 className="p-4 font-bold text-lg">No RestaurantDetails !!</h2>
  ) : (
    <div className="m-4 flex justify-center">
      <div className=" w-3/5">
        <h1 className="p-4 font-bold text-lg">RestaurantDetails page </h1>
        {restoDetails?.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="pt-4 mt-8 shadow-lg flex flex-wrap justify-end"
          >
            <h3 className="p-6 justify-start font-bold text-xl mr-96">
              {item?.card?.info?.name}
            </h3>
            <img
              className="h-40 w-40"
              alt="image"
              src={IMG_CDN_URL + item?.card?.info?.imageId}
            />
            <button className="bg-slate-100 font-bold text-2xl text-green-600">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
