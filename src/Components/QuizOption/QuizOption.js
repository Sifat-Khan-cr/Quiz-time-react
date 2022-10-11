import React from 'react';

const QuizOption = ({ option, correctAnswer, id }) => {
    // const checker = data => (data === correctAnswer) ? console.log('incorrect') : console.log('correct');
    const checker = data => {
        if (data === correctAnswer) {
            // console.log('correct')
            alert("correct");
        } else {
            // console.log('incorrect')
            alert("incorrect");

        }
    }

    return (
        <div className='w-6/12 mx-auto my-2'>

            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">{option}</span>
                    <input type="radio" onClick={() => checker(option)} name={id} className="radio checked:bg-blue-500" />
                </label>
            </div>


        </div>
    );
};

export default QuizOption;