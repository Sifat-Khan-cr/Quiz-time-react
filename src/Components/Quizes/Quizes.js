import React from 'react';
import Quiz from '../Quiz/Quiz';

const Quizes = ({ questions }) => {

    return (
        <div>

            {questions.map(question => <Quiz key={question.id} quiz={question}></Quiz>)}

        </div>
    );
};

export default Quizes;