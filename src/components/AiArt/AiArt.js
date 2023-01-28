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
        <div id='characterDesign' className='pb-20 md:pb-32 px-5 md:px-10 bg-primary text-white text-center'>
            <h1 className='text-4xl font-semibold mb-5'>AI Art</h1>
            <p>AI art is created with different drawing and painting styles. AI art includes sketches, portraits, etc. Different types of colors like poster colors, acrylic colors, pastels etc. are used in AI paintings.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa1} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Pori Mori Tori</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa2} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Lalshalu</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa3} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">GhurMuri</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa4} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ShurShuri</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa5} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Pori Mori Tori</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa6} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Lalshalu</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa7} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">GhurMuri</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa8} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ShurShuri</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa9} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Pori Mori Tori</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa10} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Lalshalu</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa11} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">GhurMuri</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={aa12} alt="AI Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ShurShuri</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiArt;