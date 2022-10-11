import React from 'react';

const QuizOption = ({ option, correctAnswer }) => {

    return (
        <div>

            <div className="form-control w-6/12 mx-auto">
                <label className="label cursor-pointer">
                    <span className="label-text">{option}</span>
                    <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
                </label>
            </div>

        </div>
    );
};

export default QuizOption;