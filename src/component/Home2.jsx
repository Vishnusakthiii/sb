import React from 'react'
import new1 from './new1.png'
import wl from './wl.png'
import kihg from './kihg.png'
import gb from './gb.webp'
import one2 from './one (2).png'
import hand from './hand.jpg'
import './Home1.css'


export default function Home2() {
  return (
    <div className='container-fluid overflow-x-hidden' id='full' >
      {/* Navbar */}
      <nav id="navbar-example2" className="navbar  mb-3">
        <ul className="nav nav-pills mx-auto">
          <li className="nav-item" >
            <a class="nav-link" href="#about" style={{ textDecoration: 'none', fontStyle: 'oblique', color: 'white' }}>Invitation</a>
          </li>
          <li className="nav-item"  >
            <a class="nav-link" href="#mugutham" style={{ textDecoration: 'none', fontStyle: 'oblique', color: 'whitesmoke' }}>Muhurtham</a>
          </li>


        </ul>
      </nav>
      {/* Navbar */}

      <div data-bs-spy="scroll" id='half' data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
        {/* topsection */}
        <div className="container-lg">
          <div className="row mb-5">
            <div className="col-12 col-sm-12 col-md-6 position-relative ms-0 mt-5">
              <img src={new1} alt="" style={{ height: '360px', width: '210px' }} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 text-center  ">
              <div className='text-center'>
                <img src={one2} className='img-fluid mt-5' alt="" style={{ height: '400px', width: '500px',borderRadius:'50%' }} />
              </div>
            </div>
          </div>
        </div>
        {/* topsection */}

        {/* invitation */}
        <div className=' mt-5 text-center my-5 py-5 ' id='about'>

          <div className="row d-flex justify-content-center align-items-center ms-0 ms-sm-0 " style={{ height: 'auto', width: '100%' }} id='box'>
            <div className='d-flex flex-wrap border border-1 border-dark border-opacity-25 shadow ' style={{ height: 'auto', width: '100%' }}>
              <div className='col-sm-0 d-none col-md-0 d-lg-block col-lg-4'>
                <img src={kihg} alt="" height={350} width={390} style={{ marginTop: '50%' }} />
              </div>
              <div className='col-sm-12  col-md-12  col-lg-4'>
                <h5 className='mt-5 text-center'>DEAR FRIENDS AND FAMILY</h5> <br />
                <h1>We Are Getting <br /> Married</h1> <br />

                <p>Come celebrate with us at our wedding reception for an evening of love,laughter,and happily ever after.. <br /></p>
                <div >
                  <div>
                    <img src={gb} className='img-fluid' alt="" style={{ height: '80px', width: 'auto' }} />
                  </div>
                  <h6>M.SHIVA KUMAR </h6>
                  &
                  <h6> S.BRINDHA </h6>
                  <div>
                    <img src={gb} alt="" className='img-fluid' style={{ height: '80px', width: 'auto' }} />
                    <h6 style={{ padding: '30px' }}>To Have & To Hold </h6>
                  </div>
                </div>
              </div>
              <div className='text-center overflow-hidden col-sm-0 d-none d-lg-block col-md-0 col-lg-4 '>
                <img src={wl} alt="" height={300} width={390} style={{ marginTop: '50%' }} />
              </div>
            </div>
          </div>
        </div>
        {/* invitation */}

        {/* wedding ceromony */}
        <div className="row" id='mugutham' >
          <div className='col-sm-1 col-md-6 col-lg-6 text-center  '>
            <img src='https://png.pngtree.com/png-vector/20240421/ourlarge/pngtree-cute-cartoon-wedding-couple-png-image_12305373.png' alt="" className='img-fluid' style={{ height: '250px', width: '250px', borderRadius: '50%' }} />
            <p className='mt-3'><span> Reception</span></p>

          </div>
          <div className='col-sm-1 col-md-6 col-lg-6 justify-content-center align-items-center text-center '>


            <h5 style={{ marginTop: '50px', marginLeft: '20px' }}>On Sunday, the 09 th March 2025,
              between  6.00 and 9.00 pm  </h5>
            <span style={{ marginTop: '40px' }} id='location'> @ Sri Velan Mahal,Alagumalai.<br /></span>
            <br />
            {/* <a href="</location>"></a> */}
            <div className='text-center'>

              <button className='btn btn-success mt-3'><a href="https://maps.app.goo.gl/Ei56RdvZsyD4nM1eA?g_st=it" style={{ textDecoration: 'none', color: 'white' }}>Location</a></button>
              <div className='col-12 mt-5 ' >
                <small> Note : Click the Location to reach us..</small></div>
            </div>
          </div>
        </div>
        {/* wedding ceromony */}

        {/* mugurtham details */}
        < div className='row mt-5' >
          <div className='col-12 col-sm-1 col-md-6 col-lg-6 mt-5 text-center  '>

            <img src={hand} alt="" style={{ height: '250px', width: '250px', borderRadius: '50%' }} />
            <p className='mt-3'><span>Muhurtham</span></p>
          </div>
          <div className='col-12 col-sm-1 col-md-6 col-lg-6 mt-0 mt-sm-0 mt-md-5 text-center' >


            <h5 style={{ marginTop: '50px', marginLeft: '20px' }}>On Monday,the 10 th March 2025,  between 6.00 and 7.00 am  </h5>
            <span style={{ marginTop: '40px' }} className='home' > @Arulmigu Muthukumaraswamy Thirukkovil, Alagumalai.</span>

            <br />
            <div className='text-center'>
              <button className='btn btn-success mt-3'><a href="https://maps.app.goo.gl/cX7cQrbt8f5HFJedA?g_st=iwb" style={{ textDecoration: 'none', color: 'white' }}>Location</a></button>
              <div className='col-12 mt-5' >
                <small> Note : Click the Location to reach us..</small></div>
            </div>
          </div>

        </div>
        {/* mugurtham details */}

      </div>
      <div className='text-center pb-5 mb-5' style={{ marginTop: '100px' }}>
        <h2>
          'We have decided to share the first day of our life <br />with friends and family
          <br />    So your presence means a lot to us ❤️'

        </h2>

      </div>
      <div className='text-center fixed-bottom' id='footer'>
        <small>2024 © Wedding Invitation  . <br /> Design & Developed by Vishnu</small>
      </div>
    </div>
  )
}
