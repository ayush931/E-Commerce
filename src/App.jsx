import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/productListing"} exact={true} element={<ProductListing />} />
        <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails />} />
      </Routes>
      <FooterBanner />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
