import { Link, NavLink } from "react-router";
import Logo from "../components/assets/images/foodcourt.png";
import useOnline from "../sharedcomponents/useOnline";

const Title = () => (
    <a href="/">
      <img
        className="h-20 p-3"
        src= {Logo}
        alt="logo"
      />
    </a>
  );

  const HeaderComponent = () => {
    
    const isOnline = useOnline();

    return (
      <div className="flex justify-between h-20 bg-neutral-50 shadow-lg">
        <Title />
        <div className="nav-list">
          <ul className="flex py-7">
            <li className="px-2"><NavLink to="/">Home</NavLink></li>
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"><Link to="./contact">Contact</Link></li>
            <li className="px-2">Cart</li>
          </ul>
        </div>
        <h3 className="p-10">{isOnline ? "Online ✅" : "Offline ❌"}</h3>
      </div>
    );
  };

  export default HeaderComponent;