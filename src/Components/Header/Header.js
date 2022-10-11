import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Header = () => {
    let topics = useLoaderData();
    // console.log(topics.data);
    topics = topics.data;
    return (
        <div>
            <h1 className='text-6xl font-bold mt-10'>Sifat Quiz Time</h1>
            <p className='my-5 text-xl'>This Quiz Website is created by Sifat Khan cr</p>
            <img className='w-9/12 mx-auto mb-10' src='https://image.shutterstock.com/image-vector/quiz-time-poster-colorful-brush-260nw-1242549271.jpg' alt='image'></img>
            <div className='grid grid-cols-1 gap-4 justify-center md:grid-cols-2 px-20 py-10 mx-auto lg:grid-cols-4'>
                {
                    topics.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
                    // topics.map(topic => console.log(topic))
                }

            </div>

        </div>
    );
};

export default Header;