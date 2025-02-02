import { Link, NavLink } from "react-router";
import Logo from "../components/assets/images/foodcourt.png";
import useOnline from "../sharedcomponents/useOnline";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-20 p-3" src={Logo} alt="logo" />
  </a>
);

const HeaderComponent = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between h-20 bg-neutral-50 shadow-lg">
      <Title />
      <div className="nav-list">
        <ul className="flex py-7">
          <NavLink to="/">
            <li className="px-2">Home</li>
          </NavLink>

          <Link to="/about">
            <li className="px-2">About </li>
          </Link>

          <Link to="./contact">
            <li className="px-2">Contact</li>
          </Link>

          <Link to="./cart">
            <li className="px-2" data-testid="cart">
              {" "}
              Cart {cartItems.length}-Items{" "}
            </li>
          </Link>
        </ul>
      </div>
      <h3 data-testid="online-status" className="p-10">
        {isOnline ? "Online ✅" : "Offline ❌"}
      </h3>
    </div>
  );
};

export default HeaderComponent;
