/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css";
import { FaBookOpen, FaDollarSign } from 'react-icons/fa';
import Course from '../Course/Course';


const Home = () => {

    const [selectedCourse, setSelectedCourse] = useState([]);
    const [courses, setCourses] = useState([]);
    const [totalCreditHour, setTotalCreditHour] = useState(0);
    const [remainingCreditHour, setRemainingCreditHour] = useState(20);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch("./allCourse.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    const handleSelectBtn = (newCourse) => {
        const alreadyAdded = selectedCourse.find(triggeredCourse => triggeredCourse.course_id == newCourse.course_id);
        let totalCreditHour = newCourse.credit_hours;
        let totalPrice = newCourse.price;
        if (alreadyAdded) {
            return alert('Already Added');
        } else {
            selectedCourse.forEach((courseMoreInfo) => {
                totalPrice += courseMoreInfo.price
                totalCreditHour += courseMoreInfo.credit_hours;

            });
            const remainingCreditHour = 20 - totalCreditHour;
            if (totalCreditHour > 20 || remainingCreditHour < 0) {
                return alert('Sorry Credit Hours Limit meets here');
            } else {
                setRemainingCreditHour(remainingCreditHour);
                setTotalCreditHour(totalCreditHour);

                setTotalPrice(totalPrice);
                setSelectedCourse([...selectedCourse, newCourse]);
            }
        }

    };

    return (
        <div className='main-container'>
            <div className='lg:flex'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center p-12'>
                    
                    {
                        courses.map((course) => (<div className="card max-w-sm bg-base-100 shadow-xl">
                            <div className="course-img">
                                <img className='w-full' src={course.course_cover_img} alt="" />
                            </div>
                            <div className='card-body'>
                            <h2 className='course-title'>{course.course_title}</h2>
                            <p>
                                <small className='font-light text-sm'>{course.course_details}</small>
                            </p>
                            </div>
                            <div className="more-info ">
                                <div>
                                    <FaDollarSign></FaDollarSign>
                                </div>
                                <p>Price: <span>{course.price}</span></p>
                                <div>
                                    <FaBookOpen></FaBookOpen>
                                </div>

                                <p>Credit: <span>{course.credit_hours}</span>hr</p>
                            </div>
                            <button onClick={() => handleSelectBtn(course)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  bg-[#2F80ED] text-white my-4">Select</button>

                        </div>))
                    }
                </div>
                <div>
                    <Course selectedCourse={selectedCourse}
                        totalCreditHour={totalCreditHour}
                        remainingCreditHour={remainingCreditHour}
                        totalPrice={totalPrice}
                    ></Course>
                </div>
            </div>
        </div>
    );
};

export default Home;