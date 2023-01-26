import React from 'react';
import da1 from '../../assets/digitalArt/5.jpg';
import da2 from '../../assets/digitalArt/6.jpg';
import da3 from '../../assets/digitalArt/7.jpg';
import da4 from '../../assets/digitalArt/8.jpg';
import da5 from '../../assets/digitalArt/9.jpg';

const DigitalArt = () => {
    return (
        <div id='characterDesign' className='pb-20 md:pb-32 px-5 md:px-10 bg-primary text-white text-center'>
            <h1 className='text-4xl font-semibold mb-5'>Digital Art</h1>
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={da1} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Pori Mori Tori</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={da2} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Lalshalu</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={da3} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">GhurMuri</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={da4} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ShurShuri</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary block md:hidden">
                    <figure>
                        <img src={da5} alt="Digital Art - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ShurShuri</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalArt;