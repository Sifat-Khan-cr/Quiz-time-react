import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='bg-black' src={logo} alt="logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link className="link link-accent" to={`/topic/${id}`}>Start Quiz</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizTopic;