import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto my-10'>
                <h1 className='text-5xl my-5'>Purpose of React Router</h1>
                <p className='text-xl'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='w-4/5 mx-auto my-10'>
                <h1 className='text-5xl my-5'>How does context api works</h1>
                <p className='text-xl'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='w-4/5 mx-auto my-10'>
                <h1 className='text-5xl my-5'>React Useref Hook</h1>
                <p className='text-xl'>useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.</p>
            </div>

        </div>
    );
};

export default Blog;