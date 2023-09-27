import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import 'bootstrap/dist/css/bootstrap.min.css';

// npm i @emailjs/browser

const Newcontact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_czy55sx", //replace with service_id
        "template_4tgo8mi",  //replace with template id
        form.current,
        "62sMU1zhrKBF9CTSL" //replace with user id
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-header bg-custom bg-warning text-center"><b>Contact</b></div>
    <div className="card-body">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
           <label>Name</label>
           <input 
           required 
          className="form-control"
          placeholder="Enter your full name" 
           type="text" name="user_name" />
        </div>
        <div className="form-group">
           <label>Email</label>
           <input 
           required
           placeholder="Enter your Email Id"
           className="form-control"
           type="email" name="user_email" />
        </div>
        <div className="form-group">
            <label>Message</label>
            <textarea 
            required
            className="form-control"
            placeholder="message"
            name="message" />
        </div>
        &nbsp;
        <div className="form-group">
             <input type="submit" value="Send"/>
        </div>
        
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Newcontact;

