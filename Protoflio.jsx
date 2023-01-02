import React, { useState } from 'react'
 import {imageglary} from './ProtiflioApi'
 import   './Protoflio.css'
const Protoflio = () => {

    const [data,setData] = useState(imageglary);

    const fillterUItem =(catItem)=>{
         const updatesItem = imageglary.filter((curlrm)=>{
            return curlrm.catagory===catItem;
         });
         setData(updatesItem);
    }
 
  return (
 
        <div className='im' >
  
          <div className="container Proto">



       <div className='col-md-12'>
        <button className='bbuto' onClick={()=>fillterUItem('old')}>old item</button>
        <button className='bbuto' onClick={()=>fillterUItem('four')}>four item</button>
        <button className='bbuto' onClick={()=>fillterUItem('thre')}>thre item</button>
        <button className='bbuto' onClick={()=> setData(imageglary)}>all</button>
       </div>
        
           
                 <div className="row">
                  <div className="col-lg-12">
                    <div className="row">

                 
                  
                  
           {          
                     
              data.map((elem) =>{
               const {image,text,catagory}=elem
           
             
           return(
            <>
              <div className="col-lg-4 col-md-4 main_box">
               <div className='gll'>
               <p>{text}</p>
                <img className="img-fluid" src={image} alt="" />
               </div>
              </div>
            </>
           )
                  
                  
              }
              )
            }    
              
                 
 
                
                
 </div>
              
                </div>
                </div>
            
            
        
 
        </ div>
        </div>
    
  )
}

export default Protoflio
