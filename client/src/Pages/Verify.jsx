import { useContext, useState } from "react";
import OtpBox from "../Components/OtpBox";
import { Button } from "@mui/material";
import { MyContext } from "../App";

function Verify() {
  const context = useContext(MyContext);
  const [otp, setOtp] = useState("");
  function handleOtpChange(value) {
    setOtp(value);
  }

  function verifyOtp(e) {
    e.preventDefault();
    context.openAlertBox("success", otp);
  }
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12">
          <div className="text-center flex items-center justify-center">
            <img
              src="/shield.png"
              alt=""
              className="h-[100px] w-[100px]"
              width={80}
            />
          </div>
          <h3 className="text-center text-[18px] text-black mt-5 px-4">
            Verify OTP
          </h3>
          <p className="text-center my-2">
            OTP send to{" "}
            <span className="text-primary font-bold">ayush@gmail.com</span>
          </p>
          <form onSubmit={verifyOtp}>
            <OtpBox length={6} onChange={handleOtpChange} />
            <div className="flex items-center justify-center mt-5">
              <Button
                type="submit"
                className="btn-org btn-lg w-full"
                onClick={() => context.openAlertBox("success", "OTP Send")}
              >
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Verify;
