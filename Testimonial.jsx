 import React, { Component } from 'react'
 import './Testimonial.css'
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card } from 'react-bootstrap';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none",}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none",   width:"20px" }}
      onClick={onClick}
    />
  );
}
 export default class Testimonial extends Component {

  
  
    render() {
     
        const settings = {
        
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 50000,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };

        return (
          <section className="bg-dark">
     
          <div className="container main_container py-5  ">
        

   
         
         <div className="main_item">

         

 
  
            
                <Slider {...settings}>
                  <div className='box'>

                    <div className="row item py-5">
                      <div className="col-lg-2  ">
                       <img src="h.jpeg" className='img-fluid roundedCircle' alt="" />
                      </div>
                      <div className="col-lg-10  ">
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores recusandae perferendis, animi nulla fuga atque eum distinctio aliquam? Architecto.</p>
                       <h4>Mr.John Doe ~ designer</h4>
                      </div>
                    </div>
                </div>

                
                  <div>
                  <div className="row item py-5">
                      <div className="col-lg-2">
                       <img src="h.jpeg" className='img-fluid roundedCircle' alt="" />
                      </div>
                      <div className="col-lg-10">
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores recusandae perferendis, animi nulla fuga atque eum distinctio aliquam? Architecto.</p>
                      <h4>Mr.John Doe ~ designer</h4>
                      </div>
                    </div>
                </div>
                  <div>

                  <div className="row item py-5">
                      <div className="col-lg-2">
                       <img src="g.jpeg" className='img-fluid roundedCircle' alt="" />
                      </div>
                      <div className="col-lg-10">
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores recusandae perferendis, animi nulla fuga atque eum distinctio aliquam? Architecto.</p>
                      <h4>Mr.John Doe ~ designer</h4>
                      </div>
                    </div>
                </div>
                 
                </Slider>
              </div>
              </div>
           
            
         
  
         
         
              </section>
       
     
       
        );
      }
 }
 