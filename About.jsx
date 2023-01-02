import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 

const About = () => {
  return (
    <div>
      <section className='about'>
        <div className="heading">
          <h1>about <span className='cng'>us</span> </h1>
        </div>
        <div className="container about_item">
            <div className="row">
                <div className="col-md-12 col-lg-5 about_image">
                 <img src=" s.png" class="img-fluid rounded-circle align-item-center justi }" alt=""/>

                 <div className="row about_d">
                  <h2 className='text-center  mt-3'>abdus sobur</h2>
                 <p className='text-center '>ui/ux designer</p>

                 </div>
                </div>
                <div className="col-md-12 col-lg-7  about_text">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, fugiat! Facilis optio eaque natus eveniet repudiandae omnis, ratione numquam eos!</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic vero vitae nesciunt corrupti. Enim, sit. Blanditiis deleniti molestiae aliquam iure quisquam quos enim architecto distinctio reprehenderit, tempora maiores magni.</p>

                  <div className="row info">
                    <div className="heading">
                      <h2>personal info</h2>
                    </div>
                    <div className="col-md-6">
                        
                          <li><span className='perName'>name</span>: abdus sobur</li>
                          <li><span className='perName'>age</span> : 20 years</li>
                          <li><span className='perName'>nationalty</span> : bangladesh</li>
                          <li><span className='perName'>freelancer</span> : avaible</li>
                          <a name="" id="" class="btn btn-primary mt-4" href="/" role="button">download cv</a>
                       </div>
                    <div className="col-md-6">
              
                          <li><span className='perName'>Address : </span> gobindagonj bangladesh</li>
                          <li><span className='perName'>Phone : </span> 01645726503</li>
                          <li><span className='perName'>Skype : </span>  Deteryplakson22</li>
                          <li><span className='perName'>Email   : </span>  sobur105@gmail.com</li>
                        
                    </div>
                  </div>
                </div>
            </div>
       
        </div>
      </section>
    </div>
  )
}

export default About
