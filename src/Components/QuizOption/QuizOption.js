import React from 'react';

const QuizOption = ({ option, correctAnswer, id }) => {

    return (
        <div className='w-6/12 mx-auto my-2'>

            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">{option}</span>
                    <input type="radio" onClick={() => console.log(correctAnswer)} name={id} className="radio checked:bg-blue-500" />
                </label>
            </div>


        </div>
    );
};

export default QuizOption;