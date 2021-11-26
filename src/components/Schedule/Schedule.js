import React, { useEffect, useState } from 'react';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
/* --------------------------------------------
 -----Showing Schedule component------------
 ---------------------------------------------*/
const Schedule = (props) => {
    /* --------------------------------------------
 -----Schedules to be rendered on the UI------------
 ---------------------------------------------*/
    const [displaySchedule, setDisplaySchedule] = useState([]);

    useEffect(() => {
        fetch('./surgeons.json')
            .then(res => res.json())
            .then(data => {
                setDisplaySchedule(data);
            });
    }, []);
    

    return (
        <>
        <div className="container my-5">
        <div className="mb-5 text-center">
                <h1>Our Booking Schedule</h1>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        displaySchedule.map(scheduleItem => <ScheduleItem
                            key={scheduleItem.key}
                            scheduleItem={scheduleItem}
                        >
                        </ScheduleItem>)
                    }

            </div>
        </div>
        </>
    );
};

export default Schedule;