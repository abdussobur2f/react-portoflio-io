import React, {   } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 
import './Education.css'
 
 
 const Education = ()=> {
 
 
    return (
      <div>
         <section className="skills">
         <div className="heading">
          <h1> <span className='cng'>Education</span> & skills   </h1>
        </div>
            <div className="container skil">
                <div className="row ">
                <div className="col-md-6 col-lg-5 col-sm-12">

                    <div className="education_box">
                        <div className="education_item">
                            <h6 className='mt-3'>2013-2014</h6>
                            <h4>graphic design</h4>
                            <h5>sobur instituite</h5>
                            <hr />
                        </div>
                        <div className="education_item">
                        <h6>2013-2014</h6>
                            <h4>graphic design</h4>
                            <h5>sobur instituite</h5>
                            <hr />
                        </div>
                        <div className="education_item">
                            <h6>2013-2014</h6>
                            <h4>graphic design</h4>
                            <h5>sobur instituite</h5>
                        </div>
                        
                    </div>
 

                
 

 
                    </div>
                    <div className="col-md-6 col-lg-7 col-sm-12">

                        <div className="progreess ">
                            <div className='bar'>
                                <div className="head d-flex  justify-content-between">
                                <span>html</span>
                             <span>90%</span>
                                </div>
                                <div className="main">
                        <div className="x" id='htn_fill'>
                           
                        </div>
                        
                   </div>
                            </div>
                        </div>


                        <div className="progreess ">
                        
                            <div className='bar'>
                            <div className="head d-flex  justify-content-between">
                                <span>react js</span>
                             <span>80%</span>
                                </div>
                                <div className="main">
                        <div className="css " id='cssAnimation'>
                           
                        </div>
                   </div>
                            </div>
                        </div>
                        <div className="progreess ">
                            <div className='bar'>
                                <div className="head d-flex  justify-content-between">
                                <span>wordpress</span>
                             <span>85%</span>
                                </div>
                                <div className="main">
                        <div className="js">
                           
                        </div>
                   </div>
                            </div>
                        </div>
                        <div className="progreess ">
                            <div className='bar'>
                                <div className="head d-flex  justify-content-between">
                                <span>css3</span>
                             <span>70%</span>
                                </div>
                                <div className="main">
                        <div className="react">
                           
                        </div>
                   </div>
                            </div>
                     
                        </div>
                        <div className="progrees">
                            <div className='bar'>
                                <div className="head d-flex  justify-content-between">
                                <span>ui/ux</span>
                             <span>65%</span>
                                </div>
                                <div className="main">
                        <div className="ui">
                           
                        </div>
                   </div>
                            </div>
                     
                        </div>

               
                    </div>
                </div>
            </div>
         </section>
      </div>
    )
  }
 
export default Education;