import './Details.css'
import { useParams } from 'react-router';
import useDetails from '../../../../hooks/useDetails';
import Footer from '../../../Shared/Footer/Footer';

const Details = () => {
    const [details]=useDetails();
    // details
    const {serviceId}=useParams()
    const newSelected = details?.find((detail) => detail.id === Number(serviceId));
    
    
    

    return (
        <div className="banner3">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 mb-5">
                    <img className="image" src={newSelected?.img} alt="" />
                    <h5 className=" mt-5">Department name: <span className="service-name">{newSelected?.name}</span></h5>
                    <h5>Doctor name: {newSelected?.doctor}</h5>
                    <h5>Total cost: <span className="price"> {newSelected?.cost}</span></h5>
                    
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;