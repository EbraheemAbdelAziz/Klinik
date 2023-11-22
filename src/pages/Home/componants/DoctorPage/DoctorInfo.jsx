import React from 'react';

import doctorImg from "../../../../img/gallery/team2.png";
import commentImg from "../../../../img/gallery/team1.png";
import '../DoctorPage/DoctorInfo.css';
export default function DoctorInfo() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row mb-5'> 
          <div className='col-md-5 offset'>
            <img src={doctorImg} className='doctorImg' alt="" />
          </div>
          <div className='col-md-6 doctorInfo mt-4'>
              <div>
                  <h1>Alvin Maxwell Smith</h1>
                  <h2>Department : <span>Dentistry</span> </h2>
                  <h2>Scientific Degree : <span> Master's Degree in Dentistry</span> </h2>
                  <h2 className='rate'>Rate :</h2>
                  <h2 className='stars'>&#9733; &#9733; &#9733; &#9734; &#9734;</h2>
              </div>
          </div>
        </div>
        <div className='appoints'>
        <h1 className='mt-3 text-center'>Your Appointments This Week</h1>
        <table className='text-center tableAppoints fw-b'>
        <thead  > 
      <tr  >
        <th> Patient Name</th>
        <th>Age</th>
        <th>Condition</th>
        <th>Day</th>
        <th>Time</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>35</td>
        <td>tooth decay</td>
        <td>sunday</td>
        <td>6:00 pm</td>
      </tr>
      <tr>
        
        <td>Jane Smith</td>
        <td>45</td>
        <td>tooth decay</td>
        <td>monday</td>
        <td>6:00 pm</td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>28</td>
        <td>Endodontics</td>
        <td>monday</td>
        <td>7:00 pm</td>
      </tr>
      <tr>
        <td>Alex smith</td>
        <td>28</td>
        <td>Extractions</td>
        <td>Thursday</td>
        <td>7:00 pm</td>
      </tr>
    </tbody>
        </table>
        </div>

        {/* comments  */}
         <div className='comments mb-5'>
          <h2>
          Patients's Comments :
          </h2>

              <div className="container comment-container">
                    <div className="comment">
                      <img src={commentImg}  alt="User" class="img-fluid"/>
                      <div className="comment-details">
                        <h3>John Doe</h3>
                        <p>This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                        </div>
                </div>

              <div className="container comment-container">
                <div className="comment">
                  <img src={commentImg}  alt="User" class="img-fluid"/>
                  <div className="comment-details">
                    <h3>Bob Johnson</h3>
                    <p>This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                    </div>
                 </div>

              <div className="container comment-container">
                <div className="comment">
                  <img src={commentImg} alt="User" class="img-fluid"/>
                  <div className="comment-details">
                    <h3>Alex smith</h3>
                    <p>This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                    </div>
                 </div>

               <div className="container comment-container">
                <div className="comment">
                  <img src={commentImg} alt="User" class="img-fluid"/>
                  <div className="comment-details">
                    <h3>Alex smith</h3>
                    <p>This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                    </div>
                  </div>

          </div>
      </div>
    </>
  );
}
