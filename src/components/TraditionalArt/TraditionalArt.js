import React from 'react';
import ta1 from '../../assets/paintings/10.jpg';
import ta2 from '../../assets/paintings/11.jpg';
import ta3 from '../../assets/paintings/12.jpg';
import ta4 from '../../assets/paintings/12.jpg';

const TraditionalArt = () => {
    return (
        <div id='traditional-art' className='pb-20 md:pb-32 px-5 md:px-10 text-white text-center'>
            <h1 className='text-4xl font-semibold mb-5'>Traditional Art</h1>
            <p>Traditional art is created with different drawing and painting styles. Traditional art includes sketches, portraits, etc. Different types of colors like poster colors, acrylic colors, pastels etc are used in traditional paintings.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={ta1} alt="Traditional Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Traditional Art -1</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={ta2} alt="Traditional Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Lalshalu</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={ta3} alt="Traditional Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">GhurMuri</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={ta4} alt="Traditional Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ShurShuri</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TraditionalArt;