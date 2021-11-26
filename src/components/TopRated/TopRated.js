import React, { useEffect, useState } from 'react';
import TopRatedItem from '../TopRatedItem/TopRatedItem';
/* --------------------------------------------
 -----Showing TopRated component------------
 ---------------------------------------------*/
const Schedule = (props) => {
    /* --------------------------------------------
 -----top rated to be rendered on the UI------------
 ---------------------------------------------*/
    const [displayTopRated, setDisplayTopRated] = useState([]);

    useEffect(() => {
        fetch('./surgeons.json')
            .then(res => res.json())
            .then(data => {
                setDisplayTopRated(data);
            });
    }, []);
    
  
    const newArray=displayTopRated.slice(1, 4)
    return (
        <>
        <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        newArray.map(topRatedItem => <TopRatedItem
                            key={topRatedItem.key}
                            topRatedItem={topRatedItem}
                        >
                        </TopRatedItem>)
                    }

            </div>
        </div>
        </>
    );
};

export default Schedule;