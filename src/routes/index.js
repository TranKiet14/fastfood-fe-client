import LayoutDefault from "../Layout/LayoutDefault";
import Categories from "../pages/Categories";
import Checkout from "../pages/Checkout";
import Foods from "../pages/Foods";
import Home from "../pages/Home";

export const routes = [
    {
        children: [
            {
                path: "/",
                element: <LayoutDefault />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    },
                    {
                        path: "category/:title",
                        element: <Categories />,
                    },
                ]
            },
            {
                path: "checkout/cart",
                element: <Checkout />
            }
        ]
    }
];