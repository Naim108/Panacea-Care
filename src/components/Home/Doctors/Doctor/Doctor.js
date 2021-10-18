import React from 'react';


const Doctor = (props) => {
    const {name,department,img}=props.doctor;
    return (
        <div className="service p-4 ">
            <img className="image" src={img} alt="" />
            <h3 className="mt-4 service-name">{name}</h3>
            <h4>{department}</h4>
            <br />
            <img src="" alt="" />
        </div>
    );
};

export default Doctor;