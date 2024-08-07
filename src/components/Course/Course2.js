import React, { useState } from 'react';
import img1 from '../assets/Co1.jpg';
import img2 from '../assets/A10.jpg';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Course2() {
  const [showModal, setShowModal] = useState(false);

  const handleApplyClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="container mt-5">
        {/* Course Image with Overlay */}
        <div className="position-relative text-center course-container mb-5">
          <img src={img1} className="img-fluid course-image" alt="Course" />
          <div className="course-overlay-text">
            <h4 className="text-light">GERMAN DIPLOMA IN AUTOMOBILE MECHATRONICS</h4>
            <h3>(3 YEARS)</h3>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-9 mt-5">
            <p>
              Open your pathway to a global future with an internationally recognized VET qualification in Automobile Mechatronics.
              The course is accredited by the German Chamber of Industry and Commerce as certificate “A”.
              Students are selected through a demanding selection process which include written aptitude test, assessment Centre and final interview.
              Once selected, students will be part of an exclusive group to receive this world recognized qualification in the South Asian region.
              English Language is part of the program to support future employment chances in various countries itself.
              Train at our world class automotive workshops for both passenger and commercial vehicles.
            </p>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="text-center">
                  <div className="card p-3 shadow-sm course-fee-card">
                    <h4>Course Fee</h4>
                    <p className="lead">LKR 1,700,000</p>
                    <p><small>*Conditions Apply</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-4 mb-5">
            <img src={img2} className="img-fluid rounded custom-image-large" alt="Career" />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h3>Course Content:</h3>
            <ul>
              <li>Orientation and Safety Training</li>
              <li>Basic Meta Work</li>
              <li>Basic information</li>
              <li>Petrol engine</li>
              <li>Diesel engine</li>
              <li>Manual Transmission</li>
              <li>Automatic Transmission</li>
              <li>Differential and Propeller shaft</li>
              <li>Suspension system</li>
              <li>Steering mechanism</li>
              <li>Wheels and Tires</li>
              <li>Basic electrical terminology</li>
              <li>Electromagnetism</li>
              <li>Semiconductor components and devices</li>
              <li>Piezo elements and PWM signals</li>
              <li>Digital Electronics</li>
              <li>Construction and operation of Batteries</li>
              <li>Describe the construction and operation of Vehicle Electrical systems</li>
              <li>Engine electrical</li>
              <li>Engine Management System for Gasoline Engine</li>
              <li>Engine Management System for Diesel Engine</li>
              <li>Brakes system /Air Brakes</li>
              <li>Drive Authorization System (DAS)</li>
              <li>Air Conditioning and Heating System</li>
              <li>Supplemental Restraint Systems</li>
              <li>Alternative Drive system</li>
              <li>Retrofitting additional systems</li>
            </ul>
            <button className="btn btn-danger mt-5" onClick={handleApplyClick}>Apply Now</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block custom-modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Apply Now</h5>
                <button type="button" className="close" onClick={handleClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
