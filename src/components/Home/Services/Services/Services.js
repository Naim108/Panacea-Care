import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Service.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container mt-5" id="services">
            <h2 className="service-name"> Our Top Services</h2>
            <p className="fw-bold">Because every second is critical! We have a 24X7 critical care team for life-changing support & monitoring.</p>
                    <div className="service-container">
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
        </div>

    );
};

export default Services;