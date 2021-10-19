import React from 'react';
import Footer from '../Shared/Footer/Footer';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="bg-image ">
                    <div className="container half-width">
            <div className="row">
            <div class="col-md-12">
<div>
    
    <div className="service-name fs-5 mt-5" >Appoinment Today</div>
    <hr/>
   <p class="header_p">Even though walk-ins are Welcome, 
    we encourage you to contact us via the form below to 
    set your appointment. You will be contacted within 24 hours 
    for confirmation.</p>
    <hr/>   
    <div class="form-group1">
      <label for="Select">Contac By:</label>
      <select id="Select" class="form-control"><option>Email</option><option>Phone</option></select>
    </div>  
    <div class="form-group1">
        <label for="inputfullname"></label>
        <input type="fullname" class="form-control" id="inputFullname" placeholder="Your Name"/>
    </div>
    <div class="form-group1">
        <label for="inputemail"></label>
        <input type="email" class="form-control" id="inputemail" placeholder="Your Email"/>
    </div>
     <div class="form-group1">
        <label for="inputphone"></label>
        <input type="phone" class="form-control" id="inputphone" placeholder="Your Phone"/>
    </div>
    <hr/>

    <p>Appointment Date:</p>


     
<div class="form-group">
    <div class="input-group date" id="datetimepicker8">
    <input type="text" class="form-control"/>
    <span class="input-group-addon"><span class="fa fa-calendar"></span></span>
</div>
</div>         



<div class="form-group">
    <label for="Select">Desired Service:</label>
    <select id="Select" class="form-control">
    <option>Cardiology</option>
    <option>Diabetis test</option>
    <option>Neurology Surgery</option>
    <option>Nephron Kidney</option>
    <option>Pelvic Diaphragm</option>
    <option>Gastroenterology</option>
    <option>Orthopedic Surgery</option>
    
    </select>
</div>

    
<div class="form-group">
    <textarea class="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7">

    </textarea>
                        
</div>


 <div class="checkbox">
        <label><input type="checkbox"/>Terms &amp; conditions</label>
    </div>
    
    <button  type="submit" class="btn btn-success m-2">Submit</button>
    <button type="submit" class="btn btn-warning">Cancel</button>
    
</div>
</div>
            </div>

        </div>
        {/* footer part */}
        <Footer></Footer>
        </div>
    );
};

export default Appointment;