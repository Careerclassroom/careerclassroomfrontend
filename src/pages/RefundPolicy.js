import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

function RefundPolicy() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div className='privacy-policy-container'>
        <div className='heading'>
          <p>Refund Policy</p>
        </div>

        <div className='paragraph' ><p>Thanks for your interest in GrowthSchool. We ensure to provide an excellent experience and learning to all our users. As with any online
          purchase experience, some terms and conditions govern the Refund Policy. When you purchase a program on Growth School, you agree to <p> our
            Terms & Conditions and refund policy.</p></p></div>

        <div className='paragraph' ><p>Our refund policy is as follows:</p></div>


        <div className='paragraph' ><p>You acknowledge that the Services purchased by you are non-transferable and non-refundable. You acknowledge that we are under no obligation to refund any fees and applicable charges paid by you, in full or partially, under no
          circumstances, including for modifying and extending the duration of the Service, change in the commencement date of the Service, your failure to attend or participate in the Service, modification of the structure or content of the Service.</p></div>


        <div className='paragraph' ><p>If arefund is provided, you hereby agree and acknowledge that such amount to be refunded may either be paid in cash or credit (for purchase
          of any other Services of Growth School of equivalent value) at the sole discretion of Growth School.</p></div>
      </div>


      <Footer />

    </section>

  )
}

export default RefundPolicy