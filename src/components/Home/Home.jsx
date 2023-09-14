/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css";
import { FaBookOpen, FaDollarSign } from 'react-icons/fa';
import Course from '../Course/Course';


const Home = () => {

    const [selectedCourse, setSelectedCourse] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("./allCourse.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    const handleSelectBtn = (newCourse) => {
        const alreadyAdded = selectedCourse.find(triggeredCourse => triggeredCourse.course_id == newCourse.course_id);
        if(alreadyAdded){
            return alert('Already Added');
        }else{
            setSelectedCourse([...selectedCourse, newCourse]);
        }
        
    };

    return (
        <div className='main-container'>
            <div className='home-container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        courses.map((course) => (<div className="course">
                            <div className="course-img">
                                <img src={course.course_cover_img} alt="" />
                            </div>
                            <h2 className='course-title'>{course.course_title}</h2>
                            <p>
                                <small>{course.course_details}</small>
                            </p>
                            <div className="more-info">
                                <div>
                                    <FaDollarSign></FaDollarSign>
                                </div>
                                <p>Price: <span>{course.price}</span></p>
                                <div>
                                    <FaBookOpen></FaBookOpen>
                                </div>

                                <p>Credit: <span>{course.credit_hours}</span>hr</p>
                            </div>
                            <button onClick={()=>handleSelectBtn(course)} className='course-btn'>Select</button>

                        </div>))
                    }
                </div>
                <div>
                   <Course selectedCourse={selectedCourse}></Course>
                </div>
            </div>
        </div>
    );
};

export default Home;