import React from 'react';

import doctorImg from "../../../img/gallery/team2.png";
import commentImg from "../../../img/gallery/team1.png";
import './DoctorProfile.css';
import { DoctorsData } from '../../../data/Doctors';
import { AppointmentsData } from '../../../data/Appointments';
import { CommentsData } from '../../../data/Comments'
import { useSearchParams } from 'react-router-dom';
import img from "../../../img/gallery/contact_form.png"
export const DoctorProfile =()=>{
    const [queryParameters] = useSearchParams()
    const id = queryParameters.get("id")
    return(
        <>
            <div className='container mt-5'>
                <div className='row mb-5'>
                <div className='col-md-5 offset'>
                    <img src={doctorImg} className='doctorImg' alt="" />
                </div>
                <div className='col-md-6 doctorInfo mt-4'>
                    {
                    DoctorsData.map((doctor)=>{
                        if (doctor.id == id) {
                        return(
                            <div>
                            <h1>{doctor.name}</h1>
                            <h2>Department : <span>{doctor.departmentName}</span> </h2>
                            <h2>Scientific Degree : <span> Master's Degree in {doctor.departmentName}</span> </h2>
                            <h2 className='rate'>Rate :</h2>
                            <h2 className='stars'>&#9733; &#9733; &#9733; &#9734; &#9734;</h2>
                            </div>
                        )
                        }else{
                        return ""
                        }
                    })
                    }
                </div>
                </div>


             

                <div >
                    <h2 className='text-center mt-5 makeappointmentTitle ' >Make an Appointment with Me</h2>
                </div>    

            <div class="contact-form-main mb-50 mt-25 ">
                <div class="container ">
                    <div class="row justify-content-end">
                        <div class="col-xl-7 col-lg-7">
                            <div class="form-wrapper">
                                {/* <!--Section Tittle  --> */}
                                <div class="form-tittle">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="section-tittle section-tittle2">
                                                <span>Appointment Apply Form</span>
                                                <h2>Appointment Form</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--End Section Tittle  --> */}
                                <form id="contact-form" action="#" method="POST">
                                    <div class="row ">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-box user-icon mb-30">
                                                <input className='formAppointInput' type="text" name="name" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-box subject-icon mb-30">
                                                <input className='formAppointInput' type="age" name="age" placeholder="Age"/>
                                            </div>
                                        </div>
                                        
                                        
                                    
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-box email-icon mb-30">
                                                <input className='formAppointInput' type="time" name="time" placeholder="Time"/>
                                            </div>
                                        </div>
                                        <div class="select-input" id="default-select">
                                            <select placeholder='Day' name="day" >
                                                <option value="Sunday">Sunday</option>
                                                <option value="1">Monday</option>
                                                <option value="Monday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-box message-icon mb-65">
                                                <textarea className='formAppointInput' name="Condition" id="Condition" placeholder="Condition"></textarea>
                                            </div>
                                            <div class="submit-info">
                                                <button  class="btn" type="submit">Submit Now <i class="ti-arrow-right"></i> </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- contact left Img--> */}
                <div class="from-left d-none d-lg-block">
                    <img src={img} className='appointmentImg' alt="doctor img"/>
                </div>
            </div>

              
            

            <div className='writeComment mb-100'>
                <h2>Tell us Your Feedback</h2>
                <h5>Your Comment :</h5>
                <textarea name="" id="patientComment" cols="60" rows="7"></textarea>
                <button className='btn btn-info btncomment'>send </button>

            </div>

             {/* comments  */}
             <div className='comments mb-5'>
                <h2>
                Some of Patients's Comments :
                </h2>
                    {
                        CommentsData.map((comment)=>{
                        if (comment.doctorId == id) {
                            return(
                            <div className="container comment-container">
                                <div className="comment">
                                    <img src={commentImg}  alt="User" class="img-fluid"/>
                                    <div className="comment-details">
                                    <h3>{comment.name}</h3>
                                    <p>{comment.comment}</p>
                                    </div>
                                    </div>
                            </div>
                            )
                        }else{
                            return ""
                        }
                        })
                        
                    }
                </div>

            
        </div>
            
        </>
    )
}