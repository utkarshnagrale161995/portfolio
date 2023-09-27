import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Professional(){
    return(
        <div className="container mt-5">
            <div className="card mx-auto w-75">
                <div className="card-header text-center bg-warning"><b>Experience - 1.5 Years</b></div>
                <div className="card-body">
                    <div><b>Infosys IT Services and IT Consulting</b> </div>
                    <div><b>March,2022 - Present</b></div>
                    <div><b>Designation: System Engineer</b></div>
                    <br/>
                    <div>
                        <div><b>FrontEnd Developer - React, Redux</b></div>
                        <ul>
                            <li>Designed multiple components using HTML5, CSS3, Javascript, React, Redux.</li>
                            <li>Designed and Developed App component faster by using AI tool Github Copilot</li>
                            <li>Designed high-performance web apps by maintaining data flow in a single direction.</li>
                            <li>Created interactive rich web apps using Bootstrap5 and CSS3.</li>
                            <li>Managed the state of the application efficiently using Redux with React.</li>
                            <li>Worked closely with an agile team of 10 members and provided end-to-end solutions for clients.</li>
                        </ul>
                        <div><b>BackEnd Developer - Dot Net</b></div>
                        <ul>
                            <li>Worked on a team to develop and maintain web application using 
                                C#, MS-SQL Server, Dot Net Core for Infosys Project.
                            </li>
                            <li>Creacted Data Access Layer using Data First Approach and Code First Approach.</li>
                            <li>Worked on DataBase and created HTTP services using ASP.Net Core Web API.</li>
                            <li>Worked on business layer of application by creating methods in Data Access Layer(DAL) for Business logic as per the Client 
                                requirment. 
                            </li>
                            <li>Created Methods in the Controller classes for handling validation of request(input) data
                                and for handling Actions that invokes HTTP Request and send response
                                in the form of JSON data.
                            </li>
                            <li>Implemented RESTful APIs using ASP.NET Web API</li>

                            <li>Used third party tool Postman for testing HTTP Request</li>
                        </ul>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Professional
