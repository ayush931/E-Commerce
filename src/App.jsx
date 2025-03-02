import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product-listing"} exact={true} element={<ProductListing />} />
      </Routes>
      <FooterBanner />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
