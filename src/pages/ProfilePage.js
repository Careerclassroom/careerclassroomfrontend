import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import PageHeaer from '../components/PageHeaer'
import Avatar from "../images/enroll-now.png"
import Avatar2 from "../images/defaultprofile.svg"

function ProfilePage() {
  return (
    <div>
      <Header />
      <PageHeaer heading={"My Profile"} backgroundimage={Avatar} />
      <section className='profile_container' >
        <div className='profile_card_area' >
          <div className='profile_box_1' >
            <div className='profile_avatar'>
              <img src={Avatar2} />
            </div>
            <div className='profile_avatar_content'>
              <div className='pac_name'>
                <div><p>ABCD</p></div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#12037F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#12037F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div className='pac_heading'>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div className='profile_box_2' >
            <div className='pb2c1'>
              <div className='pacn_bio'><p>Bio</p></div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#12037F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#12037F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className='pb2c2'>
              <input />
            </div>

          </div>
          <div className='profile_box_3' >

          <div className='pb2c1'>
              <div className='pacn_bio'><p>Interest</p></div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#12037F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#12037F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className='pb2c2'>
              <input />
            </div>

          </div>
          <div className='profile_box_4' >
            <button className='pb4_button' >Logout</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProfilePage