import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import Quiz from '../Quiz/Quiz';

const MainQuiz = () => {
    const quizes = useLoaderData();
    const { id, total, name, logo, questions } = quizes.data;

    return (
        <div>
            <h1 className='text-6xl'>{name} Quiz</h1>
            {/* <img src={logo} alt="logo" /> */}
            <p>Total Questions {total}</p>
            {
                questions.map(question => <Quiz key={question.id} quiz={question}></Quiz>)
            }

        </div>
    );
};

export default MainQuiz;