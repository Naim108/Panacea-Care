import './Details.css'
import { useParams } from 'react-router';
import useDetails from '../../../../hooks/useDetails';
import Footer from '../../../Shared/Footer/Footer';

const Details = () => {
    const [details]=useDetails();
    
    const {serviceId}=useParams()
    const newSelected = details?.find((detail) => detail.id === Number(serviceId));
    
    
    

    return (
        <div>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 details">
                    <img src={newSelected.img} alt="" />
                    <h5 className="service-name">{newSelected.name}</h5>
                    <h5>{newSelected.doctor}</h5>
                    <h5>{newSelected.cost}</h5>
                    
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;