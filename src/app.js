import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import BodyComponent from "./components/body";
import { BrowserRouter, Route, Routes, Outlet, HashRouter } from "react-router";
import ContactComponent from "./components/contactus";
import RestaurantDetails from "./components/restaurantsdetails";
import Profile from "./components/profile";
import { Provider } from "react-redux";
import store from "./components/store";
import Cart from "./components/cart";

//Lazy Loading
const About = lazy(() => import("./components/about"));

//Older way to write React

// const heading1 = React.createElement(
//     "h1",
//     {
//         id:"title",
//         key : "h1",
//         className : "heading",
//     },
//     "Heading1 from Parcel");
// const heading2 = React.createElement("h2",{ key : "h2",},"Heading2");
// console.log(heading1)
// const container = React.createElement("div",{id:"container"},[heading1,heading2]);

//JSX =>  React.createElement => object => HTML(DOM)

//React Element
// const heading = (
//     <h1 id="title" key="h1" className="h1">Heading</h1>
// );

//React Functional Component

// const HeadComponent = () => (
//     <div>
//         {/* Passing React Element */}
//         {heading}
//         <h1>Hello Functional Components</h1>
//     </div>
// );

//Composing Components or Component Composition => A component inside a component
// const HeadComponent1 = () => (
//     <div>
//         {/* Passing React Function */}
//         <HeadComponent />
//         <h2>Hello Component Composition</h2>
//     </div>
// );

//New React App

const AppLayout = () => {
  return (
    <Provider store = {store}>
      <HeaderComponent />
      <Outlet />
      <FooterComponent/>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<HashRouter>
<Suspense>
  <Routes>
    <Route path="/" element={<AppLayout />}>

      <Route path="/" element={<BodyComponent />}/>
      <Route path="about" element={<About />} >
        <Route path="profile" element={<Profile/>}></Route>
      </Route>
      <Route index path="contact" element={<ContactComponent />} />
      <Route path="restaurants/:id" element={<RestaurantDetails />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  </Routes>
  </Suspense>
</HashRouter>
);
