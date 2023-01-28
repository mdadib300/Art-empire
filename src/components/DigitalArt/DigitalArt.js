import React from 'react';
import Typewriter from 'typewriter-effect';
import da1 from '../../assets/digitalArt/5.jpg';
import da2 from '../../assets/digitalArt/6.jpg';
import da3 from '../../assets/digitalArt/7.jpg';
import da4 from '../../assets/digitalArt/8.jpg';
import da5 from '../../assets/digitalArt/9.jpg';

const DigitalArt = () => {
    return (
        <div id='digital-art' className='pb-20 md:pb-32 px-5 md:px-10 text-white text-center'>
            <h1 className='text-4xl mb-5'>
                <Typewriter
                    options={{
                        strings: ['Digital Art'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <p>Digital art is created with different types of software. Here we use "Ibispaint X". In addition to various art, logos/watermarks can also be provided as per your requirements.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={da1} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Earth day</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={da2} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Behula</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={da3} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Aloe !</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={da4} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Peacock and Colors</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary block md:hidden">
                    <figure>
                        <img src={da5} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">The boy</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalArt;