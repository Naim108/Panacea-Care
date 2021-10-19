import React from 'react';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
             <div className="container mt-5">
            <h1 className="service-name">About us</h1>
            <div className="row ">
                <div className="col-md-8 ">
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <img className="image" src="./images/doctor-1.png" alt="" />

                        </div>
                        <div className="col-md-3"><img className="image" src="./images/doctor-2.png" alt="" /></div>
                    </div>


                </div>
                <div className="col-md-4">
                    <h1 className="service-name">We are the best health Clinic</h1>
                    <p className="fw-bold">
                    The hospital is located in the heart of the City and is very close to the airport. The hospital started functioning in 2001 with 3 beds and initially had only 7 doctors.
<br />
Today, it boasts of 24 beds with Intensive Care Units (ICUs), Operation Theater, the manpower of nearly 180. </p>

                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default About;