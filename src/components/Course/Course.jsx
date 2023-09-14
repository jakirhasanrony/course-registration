/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Course = (props) => {
    console.log(props.selectedCourse);
    return (
        <div>
            <h1 className='font-bold'>Course Name</h1>
            {
                props.selectedCourse.map((courseName)=>(
                   <li key={courseName.course_id}>{courseName.course_title}</li> 
                ))
            }
            <hr />
            <div>

            </div>
        </div>
    );
};

export default Course;