import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const MainQuiz = () => {
    const quizes = useLoaderData();
    const { total, name, logo, questions } = quizes.data;

    return (
        <div>
            <div className='flex items-center justify-center mt-10'>
                <img className='bg-black rounded-full h-24 mr-10' src={logo} alt="logo" />
                <h1 className='text-6xl'>{name} Quiz</h1>
            </div>
            <p className='text-xl mb-10 mt-5'>Total Questions {total}</p>

            {
                questions.map(question => <Quiz key={question.id} quiz={question} id={question.id}></Quiz>)
            }

        </div>
    );
};

export default MainQuiz;