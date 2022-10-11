import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = ({ quiz, id }) => {
    const { question, options, correctAnswer } = quiz;
    // console.log(options)
    return (
        <div className='my-10 w-4/5 mx-auto'>
            <h1 className='text-3xl'>{question}</h1>
            {
                options.map(option => <QuizOption correctAnswer={correctAnswer} option={option} id={id}></QuizOption>)
                // options.map(option => console.log(option, typeof (option)))

            }


        </div>
    );
};

export default Quiz;