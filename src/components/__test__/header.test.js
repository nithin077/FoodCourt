import { render } from "@testing-library/react"
import HeaderComponent from "../header"
import { StaticRouter } from "react-router"
import { Provider } from "react-redux"
import store from "../store"


test("Logo should load on rendering", () => {

    //Load Header
    const header = render(
    <StaticRouter>
        <Provider store = {store}>
        <HeaderComponent />
        </Provider>
    </StaticRouter>
    );

    const logo = header.getByTestId("logo");
    expect(logo.src).toBe("http://localhost/dummy.png");
});

test("Online Status should be green on rendering header", () => {

    //Load Header
    const header = render(
    <StaticRouter>
        <Provider store = {store}>
        <HeaderComponent />
        </Provider>
    </StaticRouter>
    );

    const onlineStatus = header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe("Online ✅");
});

test("Cart should be 0 on rendering header", () => {

    //Load Header
    const header = render(
    <StaticRouter>
        <Provider store = {store}>
        <HeaderComponent />
        </Provider>
    </StaticRouter>
    );

    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe(" Cart 0-Items ");
})