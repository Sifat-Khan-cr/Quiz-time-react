import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const MainQuiz = () => {
    const quizes = useLoaderData();
    const { total, name, logo, questions } = quizes.data;
    console.log(questions);

    return (
        <div>
            <h1 className='text-6xl'>{name} Quiz</h1>
            {/* <img src={logo} alt="logo" /> */}
            <p>Total Questions {total}</p>

            {
                questions.map(question => <Quiz key={question.id} quiz={question} id={question.id}></Quiz>)
            }

        </div>
    );
};

export default MainQuiz;