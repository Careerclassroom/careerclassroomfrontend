import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const phonePay = new URL("../images/phonePay.png", import.meta.url);
const phonePay2 = new URL("../images/PhonePe.webp", import.meta.url);

function Checkout() {
  const navigate = useNavigate("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [number, setNumber] = useState("");
  const [ammount, setAmount] = useState("");
  const id = useSelector((state) => state.get_pay_id.pay_id);
  const id2 = useSelector((state) => state.get_pay_id.trans_id);
  useEffect(() => {
    if (!id) {
      navigate("/login-signup", {
        replace: true,
        state: {
          signIn: true,
        },
      });
    } else {
      navigate("/checkout");
      // Assuming fetchData is a function you want to call when 'id' is truthy
    }
  }, [navigate, id]);
  console.log(id, "jkj");
  console.log(id2, "nhbvubhkjnlm.");
  const handlePaynow = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/order/create-order/payment",
        {
          MobileNumber: 916395188310,
          amount: 1,
          redirectUrl: "http://localhost:3000",
        }
      );
      console.log("hiii");

      console.log("Response from backend:", response);
    } catch (error) {
      console.error("Error initiating payment", error);
      toast.error("Error initiating payment");
    }
  };
  return (
    <>
      <Header />
      <div>
        <Toaster />
        <div
          style={{ position: "relative", top: "80px" }}
          className="about-main"
        >
          <div className="">
            <span style={{ color: "#12037F" }} className="about-text">
              Checkout{" "}
            </span>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "rgba(18, 3, 127, 1)",
              height: "auto",
              color: "white",
              fontSize: "30px",
              padding: "10px",
              marginTop: "160px",
            }}
          >
            You are just one step away to start new journey
          </div>
          <div className="checkout" style={{position:"relative"}}>
            <img
              src={phonePay}
              style={{ width: "100px",position:"absolute",top:"0",right:"10px" }}
            ></img>
            <div className="checkout-main">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                  width: "107%",
                }}
              >
                <div>
                  <h3>Payment</h3>
                  <h6>of your program</h6>
                </div>
                <div style={{ textAlign: "left", color: "#737373" }}>
                  <h3>Your Detail</h3>
                  <h6>For Access</h6>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6 style={{ color: "#12037F", fontWeight: "bolder" }}>
                    Product
                  </h6>
                  <h6 style={{ color: "#737373", fontWeight: "bolder" }}>
                    4 day boot camp on power BI
                  </h6>
                </div>
                <div>
                  <h6 style={{ color: "#12037F", fontWeight: "bolder" }}>
                    Sub Total
                  </h6>
                  <h6
                    style={{
                      color: "#737373",
                      fontWeight: "bolder",
                      textAlign: "left",
                    }}
                  >
                    INR 499.00
                  </h6>
                </div>
              </div>
              <hr style={{ border: "1px dashed black" }}></hr>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6
                    style={{
                      color: "#737373",
                      fontWeight: "bolder",
                      marginBottom: "20px ",
                    }}
                  >
                    Sub Total
                  </h6>
                  <h6 style={{ color: "#737373", fontWeight: "bolder" }}>
                    GST
                  </h6>
                </div>
                <div>
                  <h6
                    style={{
                      color: "#737373",
                      fontWeight: "bolder",
                      marginBottom: "20px ",
                    }}
                  >
                    INR 499.00
                  </h6>

                  <h6
                    style={{
                      color: "#737373",
                      fontWeight: "bolder",
                      textAlign: "right",
                    }}
                  >
                    INR 89.00
                  </h6>
                </div>
              </div>
              <hr style={{ border: "1px dashed black" }}></hr>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h6 style={{ color: "#12037F", fontWeight: "bolder" }}>
                    Total
                  </h6>
                </div>
                <div>
                  <h6 style={{ color: "#12037F", fontWeight: "bolder" }}>
                    INR 588.00
                  </h6>
                </div>
              </div>
            </div>

            {/* <div className="coupon">
                            <input className="coupon-code" type="text" placeholder="Have a coupon?"></input><button className="apply-now">Apply</button>

                        </div> */}
          </div>
          {/* <div className="Benefits">
            <div className="Benefits-content">
              <h4 style={{ color: "#11017E" }}>Benefits</h4>
              <p style={{ marginTop: "20px" }}>
                Get Lifetime Access to recordings at Rs 499/-
              </p>
              <p>
                Stay up-to-date with the ever-evolving UX Design field and gain
                lifetime access to our content updates and recordings! Get all
                of this for just Rs 499/-. That's a crazy flat Rs 2,500 off :)
              </p>
              <input
                style={{
                  width: "20px",
                  height: "20px",
                  border: "1px solid #11017E",
                  position: "relative",
                  top: "4px",
                }}
                type="checkbox"
              ></input>{" "}
              <span
                style={{ color: "#11017E", position: "relative", left: "5px" }}
              >
                Yes, I want access
              </span>
            </div>
          </div> */}
          <div className="gateway" style={{}}>
            <h2> Credit Card/Debit Card/NetBanking/UPI <img width="100px" src={phonePay2}></img></h2>
            <br></br>
            <h5 style={{fontSize:"16px", fontWeight:"bold"}}>Pay securely by Credit or Debit card or Internet Banking or UPI by PhonePe secure payment gateway </h5>
           <br></br>
            <div style={{fontWeight:"400",fontSize:"12px"}} >
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </div>
            <br></br>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Link
                style={{ textDecoration: "none" }}
                className="Proceed"
                to={id}
              >
                Pay Now
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Checkout;
