import React from 'react';
import newdeveloper from '../assets/newdeveloper.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
function About(){
    const image={
        maxWidth:"50%"
    }
    return(
        <>
        <div className="container mt-5">
            <div className="card bg-warning w-75 mx-auto">
            <div className="card-header "><p className="text-center"><h1>About Me</h1></p></div>
            <div className="card-body text-center">
                <div><img src={newdeveloper} alt="developer" style={image}/></div>
            </div>
            <div className="card-footer"><b className="text-justify">I am a fullstack developer currently working as a System Engineer at Infosys. I am passionate to 
                build beautiful and user-friendly website. I have a strong understanding of both
                front-end and back-end development, and can use my skills in a professional setting. I am 
                a quick learner and a team player, and i am confident that i can be a valuable
                asset to any web development team.</b>
            </div>
        </div>
        
        <br/>
        <div className="text-center"><h2>My Skills</h2></div>
        <div className="card mt-5 mx-auto w-75 border border-white">
            <div className="row">
                <div className="card col-md-4">
                    <div className="card-header bg-warning text-center"><b>FrontEnd</b></div>
                    <div className="card-body text-center">
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>JavaScript</div>
                        <div>Bootstrap</div>
                        <div>React</div>
                        <div>Redux</div>
                    </div>
                </div>
            
                <div className="card col-md-4 ">
                    <div className="card-header bg-warning text-center"><b>BackEnd</b></div>
                    <div className="card-body text-center">
                        <div>C#</div>
                        <div>Entity Framework Core</div>
                        <div>ASP.Net using WEB API</div>
                        <div>DBMS</div>
                        <div>Microsoft SQL Server</div>
                    </div>
                </div>
        
                <div className="card col-md-4">
                    <div className="card-header bg-warning text-center"><b>Other</b></div>
                    <div className="card-body text-center">
                        <div>Postman</div>
                        <div>Github</div>
                        <div>Github Copilot</div>
                        <div>Jira</div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </>
    )
}
export default About;
