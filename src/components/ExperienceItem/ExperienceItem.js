import React from 'react';
import './ExperienceItem.css';
/* --------------------------------------------
 -----Showing ExperienceItem component------------
 ---------------------------------------------*/
const ExperienceItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
    const { name,surgeon,severity,surgery_duration,required_blood,avg_heart_rate,avg_blood_pressure,avg_oxygen_level, img} = props.experienceItem;

    return (
        <div className="col">
        <div className="card h-100">
            <div>
                <img className="card-img-top" src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p><small>Surgeon: {surgeon}</small></p>
                <p><small>Severity: {severity}</small></p>
                <p><small>Surgery Duration: {surgery_duration} Minutes</small></p>
                <p><small>Required Blood: {required_blood} Liters</small></p>
                <p><small>Average Heart Rate: {avg_heart_rate} bpm</small></p>
                <p><small>Blood Pressure: {avg_blood_pressure} mmHg</small></p>
                <p><small>Average Oxygen Level: {avg_oxygen_level}</small></p>
                
            </div>
        </div>
        </div>
    );
};

export default ExperienceItem;