import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ServiceItem.css';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
/* --------------------------------------------
 -----Showing serviceitem component------------
 ---------------------------------------------*/
const ServiceItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
    const { name,surgeon, img, no_of_patients, price, rating } = props.serviceItem;
    return (
        <div className="col">
        <div className="card h-100">
            <div>
                <img className="card-img-top" src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p><small>Surgeon: {surgeon}</small></p>
                <p><small>Patients Recovered: {no_of_patients}</small></p>
                <p><small>Surgery Price: ${price}</small></p>
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
              <div className="btnPosition">
                <NavLink className="btn btn-primary"
                           to={ `/serviceitem/${props.serviceItem?.key}`  }
                           
                        > 
                           <FontAwesomeIcon icon={faArrowRight} />  Details
                      </NavLink>
              </div>
                
            </div>
        </div>
        </div>
    );
};

export default ServiceItem;