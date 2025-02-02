import { Provider } from "react-redux"
import { StaticRouter } from "react-router"
import store from "../store"
import BodyComponent from "../body"
import { render, waitFor,fireEvent } from "@testing-library/react"
import {restoData} from "../../sharedcomponents/constant"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(restoData)
        }
    }
    )
})

test("Shimmer should load on rendering", () => {

    const body = render(
    <StaticRouter>
        <Provider store = {store}>
            <BodyComponent />
        </Provider>
    </StaticRouter> 
    );

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(8)
})

// test("Restaurants should load on Homepage", async() => {

//     const body = render(
//     <StaticRouter>
//         <Provider store = {store}>
//             <BodyComponent />
//             <Search />
//         </Provider>
//     </StaticRouter> 
//     );
//     await waitFor(() => expect(body.getByTestId("btn-search")));
//     const input = body.getByTestId("search-input");
//     fireEvent.change(input, {
//         target: {
//           value: "food",
//         },
//       });
      
//     const searchBtn = body.getByTestId("btn-search")
//     fireEvent.click(searchBtn);
//     console.log(searchBtn)

//     //const restList = body.getByTestId("res-list");
   
// })