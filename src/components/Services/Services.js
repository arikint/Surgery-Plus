import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
/* --------------------------------------------
 -----Showing services component------------
 ---------------------------------------------*/
const Services = (props) => {
    /* --------------------------------------------
 -----services to be rendered on the UI------------
 ---------------------------------------------*/
    const [displayServices, setDisplayServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                setDisplayServices(data);
            });
    }, []);
    

    return (
        <>
        <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        displayServices.map(serviceItem => <ServiceItem
                            key={serviceItem.key}
                            serviceItem={serviceItem}
                        >
                        </ServiceItem>)
                    }

            </div>
        </div>
        </>
    );
};

export default Services;