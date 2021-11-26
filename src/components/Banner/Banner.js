import React from 'react';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner4.jpg';
import banner3 from '../../images/banner3.jpg';
import './Banner.css';
/* --------------------------------------------
 -----Showing banner component------------
 ---------------------------------------------*/
const Banner = () => {
    return (
<div className="container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div>
           <div className="carousel-inner">
             <div className="carousel-item active">
             <img src={banner1} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Advanced Equipments</h5>
                 <p>Our Operation room has among the best equipments. We maintain them accordingly and test their validity. We have engineers who go through regular checkup to ensure maximum reliability</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={banner2} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Clean and Tide</h5>
                 <p>All of the materials we use are clean and tide. We can rely on our specially trained workers who make sure that no stain or bacteria is left on the surface and we use special chemical to remove all harmful germs</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={banner3} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>After Surgery Support</h5>
                 <p>We are among the very few clinics where we can proudly say that we are still in touch with hundreds of patients even after a long time. We ensure that we will be of help if any complications arise due to any surgery</p>
               </div>
             </div>
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
</div>
    );
            };
            export default Banner;