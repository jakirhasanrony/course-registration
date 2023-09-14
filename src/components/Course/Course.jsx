/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Course = (props) => {
    const { selectedCourse, remainingCreditHour, totalCreditHour, totalPrice} = props;
    return (
        <div>
            <div className='mb-4'>
                <h1 className='font-bold text-[#2F80ED]'>Credit Hour Remaining : {remainingCreditHour}</h1>
            </div>
            <hr />
            <div>
                <h1 className='font-bold my-4'>Course Name</h1>
                {
                    selectedCourse.map((courseName) => (
                        <li key={courseName.course_id}>{courseName.course_title}</li>
                    ))

                }
            </div>
            <hr />
            <div className='my-4'>
                <h1 className='font-medium'>Total Credit Hours : {totalCreditHour}</h1>
            </div>
            <hr />
            <div className='my-4'>
                <h1 className='font-semibold'>Total Price : {totalPrice} USD</h1>
            </div>
        </div>
    );
};

export default Course;