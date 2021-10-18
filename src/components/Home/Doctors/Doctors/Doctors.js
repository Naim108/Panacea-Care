import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className="container mb-5" id="doctors">
            <h2 className="service-name mt-5">Our Certified Doctors</h2>
            <p className="fw-bold">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="service-container">
            {
                doctors.map(doctor=><Doctor
                key={doctor.id}
                doctor={doctor}
                ></Doctor>)
            }
        </div>
        </div>

    );
};

export default Doctors;