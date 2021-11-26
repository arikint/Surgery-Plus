import React, { useEffect, useState } from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
/* --------------------------------------------
 -----Showing experience component------------
 ---------------------------------------------*/
const Experience = (props) => {
    /* --------------------------------------------
 -----experience to be rendered on the UI------------
 ---------------------------------------------*/
    const [displayExperiences, setDisplayExperiences] = useState([]);

    useEffect(() => {
        fetch('./experiences.json')
            .then(res => res.json())
            .then(data => {
                setDisplayExperiences(data);
            });
    }, []);
    

    return (
        <>
        <div className="container my-5">
            <div className="mb-5 text-center">
                <h1>Previous Experiences</h1>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        displayExperiences.map(experienceItem => <ExperienceItem
                            key={experienceItem.key}
                            experienceItem={experienceItem}
                        >
                        </ExperienceItem>)
                    }

            </div>
        </div>
        </>
    );
};

export default Experience;