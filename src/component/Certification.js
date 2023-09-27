import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import BasicCsharpCertificate from '../certificates/BasicCsharpCertificate.jpg'
import BasicCsharpAssessment from '../certificates/BasicCsharpAssessment.jpg';
import AdvanceCsharpCertificate from '../certificates/AdvanceCsharpCertificate.jpg';
import AdvanceCsharpAssessment from '../certificates/AdvanceCsharpAssessment.jpg';
import ASPNetCertificate from '../certificates/ASPNetCertificate.jpg';
import ASPNetAssessment from '../certificates/ASPNetAssessment.jpg';
import BootstrapCertificate from '../certificates/BootstrapCertificate.jpg';
import BootstrapAssessment from '../certificates/BootstrapAssessment.jpg';
import CSS3Certificate from '../certificates/CSS3Certificate.jpg';
import CSS3Assessment from '../certificates/CSS3Assessment.jpg';
import DBMSCertificate from '../certificates/DBMSCertificate.jpg';
import DBMSAssessment from '../certificates/DBMSAssessment.jpg';
import MSSQLServerCertificate from '../certificates/MSSQLServerCertificate.jpg';
import MSSQLServerAssessment from '../certificates/MSSQLServerAssessment.jpg'; 
import EFCoreCertificate from '../certificates/EFCoreCertificate.jpg';
import EFCoreAssessment from '../certificates/EFCoreAssessment.jpg';
import HTML5Certificate from '../certificates/HTML5Certificate.jpg';
import HTML5Assessment from '../certificates/HTML5Assessment.jpg';
import JSCertificate from '../certificates/JSCertificate.jpg';
import JSAssessment from '../certificates/JSAssessment.jpg';
import ReactAssessment from '../certificates/ReactAssessment.jpg';
import ReactCertificate from '../certificates/ReactCertificate.jpg';
import ResponsiveCertificate from '../certificates/ResponsiveCertificate.jpg';
import ResponsiveAssessment from '../certificates/ResponsiveAssessment.jpg';
import SqlCertificate from '../certificates/SQLCertificate.jpg';
import ReactCertificateInfosys from '../certificates/Reactprofessional.jpg';
import Aspdotnet from '../certificates/ASP.NETCertificate.jpg';
import Agile from '../certificates/AgileCertificate.jpg';
import CSharpInfosys from '../certificates/CSharpInfosys.jpg';




function Certification(){
    const [dialog, setDialog] = useState({
        d1:false,
        d2:false,
        d3:false,
        d4:false,
        d5:false,
        d6:false,
        d7:false,
        d8:false,
        d9:false,
        d10:false,
        d11:false,
        d12:false,
    });
   
    const toggleDialog = (event) => {
        let name=event.target.name;
        let val=event.target.value;
        console.log("I am triggered")
        console.log(name)
        console.log(val)
        console.log(typeof(val))
        if(val=="true"){
        setDialog({...dialog,[name]:false});
        console.log("i am inside if")
        }
        else{
            setDialog({...dialog,[name]:true});
            console.log("I am inside else") 
        }
        console.log(dialog)
    };

    const image2={
        maxWidth:"100%",
        height:"50%",
        objectFit:"cover",
      }
    
      const image3={
        maxWidth:"100%",
        height:"100%",
        objectFit:"contain",
      }

    return(
        <div className="container">
        
             <div className="text-center bg-warning p-1"><h4><b>Infosys Internal Certification</b></h4></div>
             <br/>
             <div className="row gx-3">
                  <div className="col-md-4">
                    <div className="card h-100">
                     <div className="card-header bg-warning">
                           Infosys Certified DOTNET Core Developer
                      </div>
                     <div className="card-body">
                            <img src={Aspdotnet} alt="Certification" style={image3}/>
                            <hr></hr>
                      </div>
                      <div className="card-footer">
                            <Link to="https://drive.google.com/file/d/1rHZneFgHedvNieyaav5NLqNtt8BnQnUA/view?usp=drive_link">
                              <button className="btn btn-primary">Download Certificate</button>
                            </Link> 
                       </div>
                      </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-header bg-warning">
                            Infosys Certified React Professional
                      </div>
                      <div className="card-body">
                            <img src={ReactCertificateInfosys} alt="Certification" style={image3}/>
                            <hr></hr>
                      </div>
                      <div className="card-footer">
                      <Link to="https://drive.google.com/file/d/1rQKlfPG_0IM4RRZP8kKofmZ1RCrXSlDU/view?usp=drive_link">
                        <button className="btn btn-primary">Download Certificate</button>
                      </Link>
                       </div>
                      </div>
                  </div>
               
                  <div className="col-md-4">
                    <div className="card h-100">
                       <div className="card-header bg-warning">
                             Infosys Certified Front End Developer
                       </div>
                       <div className="card-body">
                             <img src="" alt="Certification"/>
                             <hr></hr>
                       </div>
                       <div className="card-footer">
                       <Link to=""><button className="btn btn-primary">Download Certificate</button></Link>
                       </div>
                       </div>
                  </div>
               </div>

    
               <br/>
            
               <div className="row gx-3">
                  <div className="col-md-4">
                    <div className="card h-100">
                     <div className="card-header bg-warning">
                           Infosys Certified Database and SQL Professional
                      </div>
                     <div className="card-body">
                            <img src={SqlCertificate} alt="Certification" style={image3}/>
                            <hr></hr>
                      </div>
                      <div className="card-footer">
                      <Link to="https://drive.google.com/file/d/1rb4kV3HkxmX8PRsM_ZN631yveTBuuM5x/view?usp=drive_link">
                        <button className="btn btn-primary">Download Certificate</button>
                      </Link>
                       </div>
                      </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-header bg-warning">
                            Infosys Certified Agile Developer
                      </div>
                      <div className="card-body">
                            <img src={Agile} alt="Certification" style={image3}/>
                            <hr></hr>
                      </div>
                      <div className="card-footer">
                      <Link to="https://drive.google.com/file/d/1rF_zS19Y2HEE9kBvu6lucp7HhSg00pRZ/view?usp=drive_link">
                        <button className="btn btn-primary">Download Certificate</button>
                      </Link>
                       </div>
                      </div>
                  </div>
               
                  <div className="col-md-4">
                    <div className="card h-100">
                       <div className="card-header bg-warning">
                             Infosys CSharp Developer
                       </div>
                       <div className="card-body">
                             <img src={CSharpInfosys} alt="Certification" style={image3}/>
                             <hr></hr>
                       </div>
                       <div className="card-footer">
                       <Link to="https://drive.google.com/file/d/16YRbhXhH1kwzgZM7Nfk-hCrPCmwUaYU5/view?usp=drive_link">
                        <button className="btn btn-primary">Download Certificate</button>
                      </Link>
                       </div>
                       </div>
                  </div>
                  </div>
               <br/>
               <div className="text-center bg-warning p-1" ><h4><b>Infosys Course Completion and Assesment Badges</b></h4></div>
                <br/>
               <div className="row gx-3">
                   <div className="col-md-4">
                    <div className="card h-100">
                       <div className="card-header bg-warning">
                              Basic CSharp Programming
                       </div> 
                       <div className="card-body">
                             <div><img src={BasicCsharpCertificate} alt="Certification" style={image2}/></div>
                             <hr></hr>
                        </div>
                        <div className="card-footer">
                             
                            <button name="d1" value={dialog.d1} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d1 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d1" value={dialog.d1} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={BasicCsharpAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100">
                         <div className="card-header bg-warning">
                                Advance CSharp Programming
                         </div>
                         <div className="card-body">
                              <div><img src={AdvanceCsharpCertificate} style={image2} alt="Certification"/></div>
                              <hr></hr>
                         </div>
                         <div className="card-footer">
                             
                            <button name="d2" value={dialog.d2} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d2 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d2" value={dialog.d2} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={AdvanceCsharpAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
                        </div>
                    </div>

                   <div className="col-md-4">
                    <div className="card h-100">
                          <div className="card-header bg-warning">
                                 Entity Framework Core
                          </div>
                          <div className="card-body"> 
                          <div><img src={EFCoreCertificate} style={image2} alt="Certification"/></div>
                                <hr></hr>
                          </div>
                          <div className="card-footer">
                             
                            <button name="d3" value={dialog.d3} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d3 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d3" value={dialog.d3} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={EFCoreAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
                        </div>
                   </div>
               </div>
               <br/>
        <div className="row gx-3">
               <div className="col-md-4">
                <div className="card h-100">
                   <div className="card-header bg-warning">
                        ASP.Net Core Web API
                   </div>
                   <div className="card-body">
                   <div><img src={ASPNetCertificate} style={image2} alt="Certification"/></div>
                      <hr></hr>
                   </div>
                   <div className="card-footer">
                             
                            <button name="d4" value={dialog.d4} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d4 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d4" value={dialog.d4} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={ASPNetAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                    </div>
                   </div>
               </div>

               <div className="col-md-4">
                <div className="card h-100">
                <div className="card-header bg-warning">
                    Microsoft SQL Server
                </div>
                <div className="card-body">
                <div><img src={MSSQLServerCertificate} style={image2} alt="Certification"/></div>
                      <hr></hr>
                </div>
                <div className="card-footer">
                             
                            <button name="d5" value={dialog.d5} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d5 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d5" value={dialog.d5} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={MSSQLServerAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                    </div>
               </div>
               </div>

               <div className="col-md-4">
                <div className="card h-100">
                <div className="card-header bg-warning">
                    DataBase Management System
                </div>
                <div className="card-body">
                <div><img src={DBMSCertificate} style={image2} alt="Certification"/></div>
                      <hr></hr>
                </div>
                <div className="card-footer">
                             
                             <button name="d6" value={dialog.d6} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                             {dialog.d6 && (
                                          <div className="dialog">
                                               <div className="dialog-content">
                                                 <button name="d6" value={dialog.d6} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                 <img src={DBMSAssessment} alt="Popup" style={image2} />
                                               </div>
                                          </div>
                                         )
                             }
                     </div>
               </div>
               </div>
        </div>
        <br/>
        <div className="row gx-3">
               <div className="col-md-4">
                <div className="card h-100">
                <div className="card-header bg-warning">
                    HTML5
                </div>
                <div className="card-body">
                <div><img src={HTML5Certificate} style={image2} alt="Certification"/></div>
                    <hr></hr>
                </div>
                <div className="card-footer">
                             
                            <button name="d7" value={dialog.d7} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d7 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d7" value={dialog.d7} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={HTML5Assessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
               </div>
               </div>

               <div className="col-md-4">
                <div className="card h-100">
                <div className="card-header bg-warning">
                    Cascading Style Sheet-CSS3
                </div>
                <div className="card-body">
                <div><img src={CSS3Certificate} style={image2} alt="Certification"/></div>
                    <hr></hr>
                </div>
                <div className="card-footer">
                             
                            <button name="d8" value={dialog.d8} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d8 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d8" value={dialog.d8} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={CSS3Assessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
               </div>
               </div>

               <div className="col-md-4">
                <div className="card h-100">
                <div className="card-header bg-warning">
                    JavaScript Essentials
                </div>
                <div className="card-body">
                <div><img src={JSCertificate} style={image2} alt="Certification"/></div>
                    <hr></hr>
                </div>
                <div className="card-footer">
                             
                            <button name="d9" value={dialog.d9} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d9 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d9" value={dialog.d9} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={JSAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
               </div>
               </div>
        </div>
        <br/>

        <div className="row gx-3">
               <div className="col-md-4">
                <div className="card h-100">
                <div className="card-header bg-warning">
                    Bootstrap5
                </div>
                <div className="card-body">
                <div><img src={BootstrapCertificate} style={image2} alt="Certification"/></div>
                    <hr></hr>
                </div>
                <div className="card-footer">
                             
                            <button name="d10" value={dialog.d10} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d10 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d10" value={dialog.d10} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={BootstrapAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
               </div>
               </div>

               <div className="col-md-4">
                <div className="card h-100">
                <div className="card-header bg-warning">
                    React JS
                </div>
                <div className="card-body">
                <div><img src={ReactCertificate} style={image2} alt="Certification"/></div>
                    <hr></hr>
                </div>
                <div className="card-footer">
                             
                            <button name="d11" value={dialog.d11} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d11 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d11" value={dialog.d11} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={ReactAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
               </div>
               </div>

               <div className="col-md-4">
                <div className="card h-100">
                <div className="card-header bg-warning">
                    Responsive Web Design
                </div>
                <div className="card-body">
                <div><img src={ResponsiveCertificate} style={image2} alt="Certification"/></div>
                    <hr></hr>
                </div>
                <div className="card-footer">
                             
                            <button name="d12" value={dialog.d12} onClick={(event)=>toggleDialog(event)} className="btn btn-primary">Assesment Score</button>
                            {dialog.d12 && (
                                         <div className="dialog">
                                              <div className="dialog-content">
                                                <button name="d12" value={dialog.d12} onClick={(event)=>toggleDialog(event)} className="close-icon">&times;</button>
                                                <img src={ResponsiveAssessment} alt="Popup" style={image2} />
                                              </div>
                                         </div>
                                        )
                            }
                        </div>
               </div>
        </div>
        </div>
        </div>

        
        
    )
}
export default Certification;
