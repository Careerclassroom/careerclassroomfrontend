import React from "react"
import Header from "./header"




function Checkout() {
    return (
        <>
    <Header/>
            <div>

                <div  style={{position:"relative",top:"80px"}}className='about-main'>
                    <div className=''>
                        <span className='about-text'>Checkout </span>

                    </div>
                    <div style={{ width: "100%", backgroundColor: "rgba(18, 3, 127, 1)", height: "70px", color: "white", fontSize: "30px", padding: "10px", marginTop: "160px" }}>
                        You are just one step away to start new journey
                    </div>
                    <div className="checkout">
                        <div className="checkout-main">
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                                <div >
                                    <h3>
                                        Payment
                                    </h3>
                                    <h6>
                                        of your program
                                    </h6>
                                </div>
                                <div>
                                    <h3>
                                        Your Detail
                                    </h3>
                                    <h6>
                                        For Access
                                    </h6>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div >
                                    <h6>Product</h6>
                                    <h6>4 day boot camp on power BI</h6>
                                </div>
                                <div >
                                    <h6>
                                        Sub Total
                                    </h6>
                                    <h6>
                                        499/
                                    </h6>
                                </div>
                            </div>
                            <hr></hr>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <h6>Sub Total</h6>
                                    <h6>GST</h6>
                                </div>
                                <div>
                                    <h6>
                                        499/
                                    </h6>
                                    <h6>
                                        89/
                                    </h6>
                                </div>
                            </div>
                            <hr></hr>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <h6>Total</h6>

                                </div>
                                <div>

                                    <h6>
                                        588.00
                                    </h6>
                                </div>
                            </div>


                        </div>

                        {/* <div className="coupon">
                            <input className="coupon-code" type="text" placeholder="Have a coupon?"></input><button className="apply-now">Apply</button>

                        </div> */}

                    </div>
                    <div className="Benefits">
                        <div className="Benefits-content">
                            <h6>
                                Benefits
                            </h6>
                            <p>
                                Get Lifetime Access to recordings at Rs 499/-
                            </p>
                            <p>
                                Stay up-to-date with the ever-evolving UX Design field and gain lifetime access to our content updates and recordings! Get all of this for just Rs 499/-. That's a crazy flat Rs 2,500 off :)
                            </p>
                            <input type="checkbox"></input> Yes, I want access

                        </div>

                    </div>
                    <div style={{textAlign:"left",width:"50%",margin:"30px auto"}} >
                   <h2> Credit Card/Debit Card/NetBanking</h2>
                   <h5>Pay securely by Credit or Debit card or Internet Banking through cash free</h5>
                   Pay securely by Credit or Debit card or Internet Banking through Razorpay.
                   <p style={{marginTop:"20px"}}>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                   <button className='Proceed' style={{marginTop:"0px"}} type='submit'>Pay Now</button>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Checkout