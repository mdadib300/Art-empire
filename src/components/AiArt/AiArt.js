import React from 'react';
import aa1 from '../../assets/aiArt/13.jpg';
import aa2 from '../../assets/aiArt/14.jpg';
import aa3 from '../../assets/aiArt/15.jpg';
import aa4 from '../../assets/aiArt/16.jpg';
import aa5 from '../../assets/aiArt/17.jpg';
import aa6 from '../../assets/aiArt/18.jpg';
import aa7 from '../../assets/aiArt/19.jpg';
import aa8 from '../../assets/aiArt/20.jpg';
import aa9 from '../../assets/aiArt/21.jpg';
import aa10 from '../../assets/aiArt/22.jpg';
import aa11 from '../../assets/aiArt/23.jpg';
import aa12 from '../../assets/aiArt/24.jpg';

const AiArt = () => {
    return (
        <div id='ai-art' className='pb-20 md:pb-32 px-5 md:px-10 text-white text-center'>
            <h1 className='text-4xl font-semibold mb-5'>AI Art</h1>
            <p>Basically we use midjourneyAI to make AI arts. Character designs, photo transformations, logos/watermarks, and more can be created.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa1} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 1</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa2} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 2</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa3} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 3</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa4} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 4</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa5} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 5</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa6} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 6</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa7} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 7</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa8} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 8</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa9} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 9</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa10} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 10</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa11} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 11</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa12} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">AI Art Sample - 12</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiArt;