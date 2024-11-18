import React from 'react'
import new1 from './new1.png'
import gb from './gb.webp'
import sb from './sb.jpg'
import hand from './hand.jpg'
import './Home1.css'


export default function Home2() {
  return (
    <div className='' >
      {/* Navbar */}
      <nav id="navbar-example2" className="navbar  mb-3">
        <ul className="nav nav-pills mx-auto">
          <li className="nav-item" >
            <a class="nav-link" href="#about" style={{ textDecoration: 'none', fontStyle: 'oblique', color: 'white' }}>Invitation</a>
          </li>
          <li className="nav-item"  >
            <a class="nav-link" href="#mugutham" style={{ textDecoration: 'none', fontStyle: 'oblique', color: 'whitesmoke' }}>Mugurtham</a>
          </li>


        </ul>
      </nav>
      {/* Navbar */}

      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
        {/* topsection */}
        <div className="container-lg">
          <div className="row mb-5">
            <div className="col-12 col-sm-12 col-md-6 position-relative mt-5">

              <img src={new1} className='img-fluid' height={450} width={390} alt="" />
            </div>
            <div className="col-12 col-sm-12 col-md-6 text-center  ">
              <div className='text-center'>
                <img src={sb} className='img-fluid mt-5' alt="" style={{ height: '400px', width: '400px', borderRadius: '50%' }} />
              </div>
            </div>
          </div>
        </div>
        {/* topsection */}

        {/* invitation */}
        <div className='mt-5 text-center my-5 py-5' id='about'>
          <div className="row d-flex justify-content-center align-items-center ms-3 ms-sm-0 " style={{ height: 'auto', width: '100%' }} id='box'>
            <div className='col-sm-12 col-md-12 col-lg-12 flex-wrap border border-1 border-dark border-opacity-25 shadow ' style={{ height: 'auto', width: '500px' }}>
              <h5 className='mt-5'>DEAR FRIENDS AND FAMILY</h5> <br />
              <h1>We Are Getting <br /> Married</h1> <br />
              <p>Mr.Murugesh - Mrs.Vishalakshi</p>
              <p>&</p>
              <p>Mr.R.Sakthivel - Mrs.S.Vanisri</p> <br />
              <p>Cordially solicit your gracious presence with family and <br /> friends on the auspicious occasion of the marriage of our children <br /></p>
              <div >
                <div>
                  <img src={gb} className='img-fluid' alt="" style={{ height: '80px', width: 'auto' }} />
                </div>
                <h6>M.SIVA KUMAR </h6>
                &
                <h6> S.BRINDHA </h6>
                <div>
                  <img src={gb} alt="" className='img-fluid' style={{ height: '80px', width: 'auto' }} />
                  <h6 style={{ padding: '30px' }}>To Have & To Hold </h6>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* invitation */}

        {/* wedding ceromony */}
        <div className="row" id='mugutham'>
          <div className='col-sm-1 col-md-6 col-lg-6 text-center'>
            <img src='https://static.vecteezy.com/system/resources/previews/035/537/557/non_2x/ai-generated-cartoon-wedding-couple-wedding-clipart-wedding-clipart-wedding-clipart-free-png.png' alt="" className='img-fluid' style={{ height: '200px', borderRadius: '50%' }} />
            <p><span> Reception</span></p>

          </div>
          <div className='col-sm-1 col-md-6 col-lg-6 justify-content-center align-items-center text-center'>


            <h5 style={{ marginTop: '50px', marginLeft: '20px' }}>On Sunday,the 09 th March 2025 <br /> between  6.00 pm and 9.00 pm <br /> <br /></h5>
            <span style={{ marginTop: '40px' }} id='location'> @  Velan Mahal,Alagumalai ,<br /> Tirupur.</span>
            <br />
            {/* <a href="</location>"></a> */}
            <div className='text-center'>

              <button className='btn btn-success mt-5'><a href="https://maps.app.goo.gl/Ei56RdvZsyD4nM1eA?g_st=it" style={{ textDecoration: 'none', color: 'white' }}>Location</a></button>
            </div>
          </div>
        </div>
        {/* wedding ceromony */}

        {/* mugurtham details */}
        < div className='row mt-5' >
          <div className='col-12 col-sm-1 col-md-6 col-lg-6 mt-5 text-center'>

            <img src={hand} alt="" style={{ height: '300px', width: '300px', borderRadius: '50%' }} />
            <p><span>Muhurtham</span></p>
          </div>
          <div className='col-12 col-sm-1 col-md-6 col-lg-6 mt-0 mt-sm-0 mt-md-5 text-center' >


            <h5 style={{ marginTop: '50px', marginLeft: '20px' }}>On Monday,the 10 th March 2025 <br /> between 6.00 am and 7.00 am  <br /></h5>
            <span style={{ marginTop: '40px' }} className='home' > @Arulmigu Muthukkaumarswamy Thirukovil, <br /> Alagumalai</span>

            <br />
            <div className='text-center'>
              <button className='btn btn-success mt-5'><a href="https://maps.app.goo.gl/sLXgRzUo2mkK1T9K7?g_st=ic" style={{ textDecoration: 'none', color: 'white' }}>Location</a></button>
            </div>
          </div>

        </div>
        {/* mugurtham details */}

      </div>
      <div className='text-center ' style={{ marginTop: '100px' }}>
        <h2>
          'We have decided to share the first day of our life <br />with friends and family
          <br />    so your presence means a lot to us '

        </h2>
      </div>
      <div className='col-12 text-center' id='footer'>
        <p>2025 © Wedding Invitation . Design & Developed by Vishnu</p>
      </div>
    </div>
  )
}
