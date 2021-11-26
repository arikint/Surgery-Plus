import React from 'react';
import Rating from 'react-rating';
/* --------------------------------------------
 -----Showing Toprated component------------
 ---------------------------------------------*/
const TopRatedItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
    const { name,speciality, img, next_available_date,  rating } = props.topRatedItem;

    return (
        <div className="col">
        <div className="card">
            <div>
                <img className="card-img-top" src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p><small>Speciality: {speciality} weeks</small></p>
                <p><small>Next Available on: {next_available_date}</small></p>
                
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                
            </div>
        </div>
        </div>
    );
};

export default TopRatedItem;