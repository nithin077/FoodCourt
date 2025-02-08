import { render, waitFor,fireEvent } from "@testing-library/react";
import {menuDetails} from "../../mocks/restoDetails"
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../store";
import HeaderComponent from "../header";
import RestaurantDetails from "../restaurantsdetails";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(menuDetails)
        }
    }
    )
});

test("Add Items to Cart",async () => {
    const body = render(
        <StaticRouter>
          <Provider store={store}>
            <RestaurantDetails />
            <HeaderComponent />
          </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("menu")));

    const addBtn = body.getAllByTestId("addBtn");

    fireEvent.click(addBtn[0]);

    const cart = body.getByTestId("cart");
    
    expect(cart.innerHTML).toBe(" Cart 1-Items ")
})