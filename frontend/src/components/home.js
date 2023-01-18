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
        </>
    )
};