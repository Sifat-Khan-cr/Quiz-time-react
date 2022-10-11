import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const QuizOption = ({ option, correctAnswer, id }) => {
    const checker = data => {
        if (data === correctAnswer) {
            toast("correct");
        } else {
            toast("incorrect");

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
            <ToastContainer
                position="top-center"
                autoClose={100}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />


        </div>
    );
};

export default QuizOption;