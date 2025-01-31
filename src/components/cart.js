import { useDispatch, useSelector } from "react-redux";
import { clearcart, removeItem } from "../sharedcomponents/cartSlice";
import { IMG_CDN_URL } from "../sharedcomponents/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearcart = () => {
    dispatch(clearcart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  if (cartItems && cartItems.length === 0)
    return <p className="p-4 font-bold text-lg">Cart is Empty!!</p>;
  return !cartItems ? (
    <p className="p-4 font-bold text-lg">Cart is Empty!!</p>
  ) : (
    <div className="m-10">
      <div className="flex flex-wrap">
        <h2 className="h-10 py-2">Cart page</h2>
        <button
          className="h-10 px-6 ml-3 rounded-md shadow-md font-bold transition duration-300 ease-in-out bg-red-500 hover:bg-red-800 text-white"
          onClick={() => handleClearcart()}
        >
          Clear Cart
        </button>
      </div>

      <div className="m-4 flex flex-wrap justify-end">
        <div className="w-2/4">
          <h1 className="p-4 font-bold text-lg">Cart Details</h1>
          {cartItems?.map((item, index) => (
            <div
              key={item?.card?.info?.id}
              className="pt-4 mt-8 shadow-lg flex justify-end items-center"
            >
              <div className="p-6 w-3/4">
                <p className="font-bold text-xl">{item?.card?.info?.name}</p>
                <p>{item?.card?.info?.description}</p>
                <div className="font-bold text-green-400 flex items-center space-x-8">
                  <p>&#8377; {item?.card?.info?.price / 100}</p>
                  <p>
                    &#9733;{" "}
                    {item?.card?.info?.ratings?.aggregatedRating?.rating}
                  </p>
                </div>
                <button
                  className="bg-gradient-to-r from-red-400 to-blue-500 hover:from-red-500-500 hover:to-blue-600 text-white mt-2 h-10 w-20 font-bold text-lg rounded-lg shadow-md transition duration-300 ease-in-out"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
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
    </div>
  );
};

export default Cart;
