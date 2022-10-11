import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;
    // console.log(options)
    return (
        <div className='my-10 w-4/5 mx-auto'>
            <h1 className='text-3xl'>{question}</h1>
            {
                options.map(option => <QuizOption key={id} correctAnswer={correctAnswer} option={option}></QuizOption>)
                // options.map(option => console.log(option, typeof (option)))

            }


        </div>
    );
};

export default Quiz;