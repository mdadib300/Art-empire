import React from 'react';
import founder from '../../assets/founder.jpg';

const About = () => {
    return (
        <div className='mb-20'>
            <div className="collapse rounded-xl w-4/5 mx-auto">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white text-primary peer-checked:bg-white peer-checked:text-primary">
                    <p>Click to see</p>
                    <h2 className='text-4xl mt-5'>About The Entrepreneur</h2>
                </div>
                <div className="collapse-content bg-white text-primary peer-checked:bg-white peer-checked:text-primary">
                    <div className="card lg:card-side bg-white text-primary">
                        <figure><img src={founder} alt="Founder - Ariful Rafi" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-extrabold">Ariful Rafi</h2>
                            <p>The Founder and CEO of "Rafi's Art Empire" is from Munshiganj, Bangladesh. Currently, he is enrolled in a Higher Secondary Education program at "Dania College". His inner talent is also reflected in this initiative that he has taken, Rafi's Art Empire, which expresses what he truly is!</p>
                            <p>Contact: arifulrafi118@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;