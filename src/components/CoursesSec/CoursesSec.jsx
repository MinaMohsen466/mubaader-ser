import React from 'react';
import './CoursesSec.css';
import CourseImg from '../../../images/courseImg.jpg';

const CoursesSec = ({ language }) => {
    return (
        <div className="courses-section">
            <div className="container">
                <div className="course-info">
                    <img src={CourseImg} alt="Business Marketing Secrets" className="course-image" />
                    <div className="course-details">
                        {/* <h3>Business Marketing Secrets <span>{"{Instagram Brain}"}</span></h3>
                        <p className="course-type">Online Course</p> */}
                        {/* <div className="instructor">
                            <p className="name">Eng.Ahmad A. Al-Mutawa</p>
                            <p className="role">CEO MUBAADER SERVICES, Business Coach</p>
                        </div> */}
                        <a href="https://ahmadalmutawa.com" className="website">ahmadalmutawa.com</a>
                        <div className="registration">
                            <span>For Registration</span>
                            <a href="tel:+96596033960">+965 96033960</a>
                        </div>
                    </div>
                </div>

                <div className="get-started">
                    <h2>Get Started</h2>
                    <a href="https://ahmadalmutawa.com" className="services-btn">
                        SERVICES REQUEST
                    </a>
                    <div className="services">
                        <p>need to start a business?</p>
                        <p>need a feasibility study?</p>
                        <p>want to design your interiors?</p>
                        <p>need photos and videos of your product?</p>
                        <p>need a location for your store?</p>
                        <p>need an experienced staff?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesSec;
