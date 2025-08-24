import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const appRoutes = [
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
];

const appRouters = createBrowserRouter(appRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters} />);
