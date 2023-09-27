import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Contact(){
    const [details,setDetails]=useState({
        name:"",
        emailId:"",
        contact:"",
        subject:"",
        message:""
    })
    
    const[successMessage,setSuccessMessage]=useState("");
    const[errorMessage,setErrorMessage]=useState("");
    function handleChange(event){
       setDetails({...details,[event.target.name]:event.target.value})
    }
    function handleSubmit(event){
      event.preventDefault();
      axios.post("http://localhost:3010/details",details)
      .then((response)=>{
        setSuccessMessage("Details Send Successfully")
        setErrorMessage("")
      })
      .catch((error)=>{
        setSuccessMessage("")
        setErrorMessage("Some thing went wrong ! please try again later..")
      })
    }
    /*
    <div className="card mx-auto w-50 mt-5">
        <div className="text-center"><b>Contact Me</b></div>
       <nav className="navbar navbar-expand-lg bg-warning">
        <ul className="nav navbar-nav">
            &nbsp; &nbsp;
            <li><b>Phone no: 7028288465</b></li>
            &nbsp; &nbsp;
            <li><b>Email: utkarshnagrale@gmail.com</b></li>
            &nbsp; &nbsp; &nbsp;
            <li>
            <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  </Link>
            </li>
                  &nbsp;
                  &nbsp;
                  &nbsp;
            <li>
                 <Link to="url">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                       <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                 </Link>
            </li>
            </ul>
        </nav>
       <div className="container mt-5">
        <form onClick={handleSubmit}>
            <div className='d-flex'>
            <label for="name">Full Name :</label>
            &nbsp;
            <input
            type="text"
            name="name"
            value={details.name}
            onChange={(event)=>setDetails({...details,name:event.target.value})}
            />
            &nbsp;
            <label for="emailId">Email Id :</label>
            &nbsp;
            <input
            type="email"
            name="emailId"
            value={details.emailId}
            onChange={(event)=>setDetails({...details,emailId:event.target.value})}
            />
            </div>
            <br/>
            <textarea
            type="text"
            name="message"
            value={details.message}
            placeholder='message'
            onChange={(event)=>setDetails({...details,message:event.target.value})}
            cols={70} rows={4}
            ></textarea>
            <br/>
            <br/>
            <button className="btn btn-primary btn-block" type="submit">Submit</button>
        </form>
        <br/>
       </div>
       </div>
       </>
       */
    return(
        <>
        <div className="CreateContact">
                  <div className="row"> 
                     <div className="col-md-6 offset-md-3">
                      <br />
                        <div className="card">
                            <div className="card-header bg-custom bg-warning text-center">
                             <h4>Contact Me&nbsp;&nbsp;&nbsp;
                             <span>
                             <Link>
                  </Link>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                             <span>
                             <Link>
                 </Link>
                             </span>
                             </h4>
                             </div> 
                            <div className="card-body">
                              <form className="form" noValidate 
                                    onSubmit={(event)=>{handleSubmit(event)}} 
                             >

                                 <div className="form-group">
                                     <label>Full Name</label>
                                     <input
                                     required 
                                     type="text"
                                     name="name" 
                                    className="form-control"
                                    placeholder="Enter your full name" 
                                    value={details.name} 
                                    onChange={(event)=>handleChange(event)}       
                                    />
                     
                                </div> 
                                <div className="form-group">
                                     <label>Email Id</label>
                                     <input type="email" 
                                            required
                                            name="emailId"
                                            className="form-control" 
                                            placeholder="Enter your email"
                                            value={details.emailId}  
                                            onChange={(event)=>handleChange(event)}
                                    /> 
                                </div>

                           <div className="form-group">
                                  <label>Contact Number</label> 
                                  <input type="number"  
                                         name="contact"
                                         className="form-control" 
                                         placeholder="Please enter your contact number" 
                                         value={details.contact} 
                                         required
                                         onChange={(event)=>handleChange(event)}
                                         /> 
                           </div>
                           <div className="form-group">
                               <label>Subject</label>
                               <input type="text"  
                                      name="subject" 
                                      className="form-control"
                                      value={details.subject}
                                      required
                                      onChange={(event)=>handleChange(event)} 
                                      /> 
                          </div>
                          <div className="form-group">
                               <label>Message</label>
                               <textarea type="text"  
                                      name="message" 
                                      className="form-control"
                                      value={details.message}
                                      required
                                      placeholder="message"
                                      onChange={(event)=>handleChange(event)} 
                                      ></textarea> 
                          </div>
                          <br />


                         <button type="submit" name="active" className="btn btn-primary"
                          >Submit</button>
                          <div>
                            <span>{(successMessage!=="")? successMessage:null}</span>
                            <span>{(errorMessage!=="")? errorMessage:null}</span>
                          </div>
               </form>
             </div>
           </div>
        </div>
     </div>
</div> 
        </>
    )
}
export default Contact;
