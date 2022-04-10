import { Redirect, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";
import Error from "./pages/Error/Error";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Header />

      <Route path="/" exact>
        <Redirect to="/HomePage" />
      </Route>
      <Route path="/HomePage">
        <HomePage />
      </Route>

      <Route path="/Product">
        <Product />
      </Route>
      <Route path="/Blog">
        <Blog />
      </Route>
      <Route path="/BlogDetails">
        <BlogDetails />
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
      <Route path="/CheckOut">
        <CheckOut />
      </Route>
      <Route path="/Error">
        <Error />
      </Route>

      <Footer />
    </>
  );
}

export default App;
