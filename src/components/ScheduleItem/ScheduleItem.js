import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
/* --------------------------------------------
 -----Showing Scheduleitem component------------
 ---------------------------------------------*/
const ScheduleItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
    const { name, availability, next_available_date, surgery_in_qeue, img, rating } = props.scheduleItem;
// 
    return (
        <div className="col">
        <div className="card h-100">
            <div>
                <img className="card-img-top" src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p><small>Availability: {availability}</small></p>
                <p><small>Next Available on: {next_available_date}</small></p>
                <p><small>Surgery in Waiting: {surgery_in_qeue}</small></p>
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
              <div className="btnPosition">
                  <button
                    className="btn"
                ><FontAwesomeIcon icon={faCalendarCheck} /> Request Schedule</button>
              </div>
                
            </div>
        </div>
        </div>
    );
};

export default ScheduleItem;