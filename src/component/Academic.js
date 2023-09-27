import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function Academics(){
    return(
        <div className="container mt-5">
            <div className="row">
               <div className="col-md-6">
                  <div className="card">
                    <div className="card-header text-center bg-warning"><b>Post Graduation</b></div>
                    <div className="card-body">
                        <div>Degree:<b> Master In Technology (MTech)</b></div>
                        <div>Stream:<b> Industrial Engineering and Managment</b></div>
                        <div>College:<b> Visvesvaraya National Institute of Technology (VNIT, Nagpur)</b></div>
                        <div>Project: <b>Process Capability Improvement in an Automobile Industry using DMAIC Methodology</b></div>
                    </div>
                    <div className="card-footer">2019-21</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card">
                      <div className="card-header text-center bg-warning"><b>Graduation</b></div>
                      <div className="card-body">
                        <div>Degree:<b> Bachelor In Engineering (B.E)</b></div>
                        <div>Stream:<b> Mechanical Engineering</b></div>
                        <div>College:<b> Kavikulguru Institute of Technology and Science (KITS, Nagpur)</b></div>
                        <div>Project:<b> Design and Fabrication of Treadmill Bicycle</b></div>
                        <div>&nbsp;</div>

                      </div>
                      <div className="card-footer">2014-18</div>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default Academics;
