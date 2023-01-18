import React from 'react';
import "../styles/home.css";

export default function home(){
    return(
        <>
            <div style={{position:"relative"}}>
                <div className='d-flex flex-row gap-5' style={{position:"absolute",top:20,right:50,color:"white",fontSize:"20px"}}>
                    <div className='signin'>SignIn</div>
                    <div className='signin'>SignUp</div>
                </div>
                <div>
                    <img src={require("../assets/clubhub.png")} style={{width:"100%"}} />
                </div>
            </div>


            <ul className="nav mb-3 d-flex flex-row gap-5 justify-content-center mt-5 mb-5 fs-5" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <div className="line nav-link active" id="pills-home-tab" style={{color:"black"}} data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Clubs</div>
                </li>
                <li className="nav-item" role="presentation">
                    <div className="line nav-link" id="pills-profile-tab" style={{color:"black"}} data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Upcoming Events</div>
                </li>
                <li className="nav-item" role="presentation">
                    <div className="line nav-link" id="pills-contact-tab" style={{color:"black"}} data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Your Events</div>
                </li>
            </ul>
            
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">a</div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">b</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">c</div>
            </div>

        </>
    )
};