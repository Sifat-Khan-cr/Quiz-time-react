import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Stats = () => {
    let data = useLoaderData();
    data = data.data;

    return (
        <div>
            <LineChart className='hidden lg:block mt-20 mx-auto' width={500}
                height={300}
                data={data}>
                <YAxis />
                <Tooltip />
                <Legend />
                <XAxis dataKey="name" />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />

            </LineChart>

        </div>
    );
};

export default Stats;