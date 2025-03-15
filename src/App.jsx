import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import ProductDetails from "./Pages/ProductDetails";
import { createContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import ProductZoom from "./components/ProductZoom";
import { IoClose } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetailsComponent";


const MyContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState("xl");
  const [fullWidth, setFullWidth] = useState(true);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
    setOpenProductDetailsModal
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
          </Routes>
          <FooterBanner />
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      <Dialog
        open={openProductDetailsModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseProductDetailsModal}
        aria-describedby="alert-dialog-slide-description"
        className="productDetailsModal relative"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer">
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] ml-5 p-5 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button className="link !bg-[#e4f0d4] !absolute top-[15px] right-[15px] cursor-pointer !rounded-full !w-[40px] !h-[40px]"><IoClose onClick={handleCloseProductDetailsModal} className="!text-black !w-[40px] text-[20px]" /></Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { MyContext };
export default App;
