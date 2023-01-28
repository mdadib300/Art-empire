import React from 'react';
import Typewriter from 'typewriter-effect';
import founder from '../../assets/founder.jpg';

const About = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-4xl mb-5 text-white text-center'>
                <Typewriter
                    options={{
                        strings: ['About the Entrepreneur'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <div className="card lg:card-side bg-white text-primary w-3/4 mx-auto">
                <figure><img src={founder} alt="Founder - Ariful Rafi" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-extrabold">Ariful Rafi</h2>
                    <p>The Founder and CEO of "Rafi's Art Empire" is from Munshiganj, Bangladesh. Currently, he is enrolled in a Higher Secondary Education program at "Dania College". His inner talent is also reflected in this initiative that he has taken, Rafi's Art Empire, which expresses what he truly is!</p>
                    <p>Contact: arifulrafi118@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default About;