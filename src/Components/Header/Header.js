import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Header = () => {
    let topics = useLoaderData();
    // console.log(topics.data);
    topics = topics.data;
    return (
        <div>
            <h1 className='text-6xl'>Sifat Quiz Time</h1>
            <div className='grid grid-cols-1 gap-4 justify-center md:grid-cols-4 lg:px-20 py-5 mx-auto'>
                {
                    topics.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
                    // topics.map(topic => console.log(topic))
                }

            </div>

        </div>
    );
};

export default Header;