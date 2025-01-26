import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "../sharedcomponents/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const handleClearcart = () => {
    dispatch(clearcart());
  }
  return (
    <div className="flex flex-wrap m-10">
      <h2>Cart page</h2>
      <button className="w-28 border border-black rounded-md font-bold text-xl text-green-600 mx-10" onClick={() => handleClearcart()}>clear cart</button>
    </div>
  );
};

export default Cart;
