import React from 'react';

const QuizOption = ({ option, correctAnswer }) => {

    return (
        <div className='w-6/12 mx-auto my-2'>

            <div className="form-control m-5">
                <label className="text-left flex cursor-pointer">
                    <input type="checkbox" onClick={() => console.log(option)} className="checkbox checkbox-primary" />
                    <span className="label-text ml-5">{option}</span>
                </label>
            </div>

        </div>
    );
};

export default QuizOption;