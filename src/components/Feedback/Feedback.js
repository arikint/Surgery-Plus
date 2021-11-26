import feedback1 from '../../images/feedback2.jpg';
import feedback2 from '../../images/feedback6.jpg';
import feedback3 from '../../images/feedback5.jpg';
/* --------------------------------------------
 -----Showing feedback component------------
 ---------------------------------------------*/
const Feedback = (props) => {
    /* --------------------------------------------
 -----feedback to be rendered on the UI------------
 ---------------------------------------------*/
 

    return (
        <>
        <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div>
           <div className="carousel-inner">
             <div className="carousel-item active">
             <img src={feedback1} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Robert Wilson</h5>
                 <p>I was severely ill and needed surgery. Thanks to Surgery plus for helping me in those tough situation. If again I face any further problem, I will surely contact them again.</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={feedback2} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Maria devis</h5>
                 <p>I cannot thanks Surgery plus enough. They are amazing. I had really bad condition. But they came to my rescue. Thanks from bottom of my heart.</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={feedback3} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Steven Jarvis</h5>
                 <p>One morning I suddenly got paralized and my legs stopped working. Then my left hand also stopped working. Then with my right hand I booked from this website. It saved my life. Thank you.</p>
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
        </>
    );
};

export default Feedback;