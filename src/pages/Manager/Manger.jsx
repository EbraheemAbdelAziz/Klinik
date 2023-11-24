import React from 'react';
import "../Manager/Manager.css";
import { DepartmentsData } from '../../data/Departments';
import { DoctorsData } from '../../data/Doctors';
export default function Manger() {
  return (
    <>
    <div className='container '>

        {/* Department Section */}
        <div className='titlesection'>
            <h1>Manage Departments</h1>
            <button className='btn btn-info'>Add New Department</button>
        </div>
        <table className='text-center tableAppoints fw-b'>
        <thead  >
      <tr>
        <th>ID</th>
        <th>Department Name</th>
        <th>Number of Doctors</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        DepartmentsData.map((department)=>{
            return(
              <tr>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>{department.numOfDoctors}</td>
                <td><button className='me-2 btn-warning actionButton'>Update</button> <button className='actionButton btn-danger'>Delete</button> </td>
              </tr>
            )
        })
      }
    </tbody>
        </table>
        <div className='line'>
        </div>

        
        {/* Doctors section */}
        <div className='titlesection'>
            <h1>Manage Doctors</h1>
            <button className='btn btn-info'>Add New Doctor</button>
        </div>
        <table className='text-center tableAppoints fw-b'>
        <thead  >
      <tr>
      <th>Profile</th>
        <th>ID</th>
        <th>Name</th>
        <th>departmentName</th>
        <th>rate</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        DoctorsData.map((doctor)=>{
            return(
              <tr>
                <td> <img className='doctorImage' src={doctor.img} alt="" /></td>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.departmentName}</td>
                <td>{doctor.rate}</td>
                <td><button className='me-2 btn-warning actionButton'>Update</button> <button className='actionButton btn-danger'>Delete</button> </td>
              </tr>
            )
        })
      }
    </tbody>
        </table>
        <div className='line'>
        </div>

      </div>
    </>
  );
}
