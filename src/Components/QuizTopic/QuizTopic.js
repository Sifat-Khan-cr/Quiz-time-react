import React from 'react';

const QuizTopic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Start Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizTopic;