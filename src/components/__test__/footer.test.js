import { render, waitFor,fireEvent } from "@testing-library/react";
import {menuDetails} from "../../mocks/restoDetails"
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../store";
import HeaderComponent from "../header";
import RestaurantDetails from "../restaurantsdetails";
import FooterComponent from "../footer";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(menuDetails)
        }
    }
    )
});

test("Footer Should load on render", () => {
    const body = render(
        <StaticRouter>
          <Provider store={store}>
            <RestaurantDetails />
            <HeaderComponent />
            <FooterComponent />
          </Provider>
        </StaticRouter>
    );

    const footer = body.getByTestId("footer");
    const footerText = body.getByTestId("footerText");

    expect(footerText.innerHTML).toBe("Developed By ");
    expect(footer.innerHTML).toBe("Chilumula Nithin.");
})

