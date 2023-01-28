import React from 'react';
import image from '../../assets/pana.png';
import characterDesign from '../../assets/CharacterDesign/2.jpg';
import digitalArt from '../../assets/digitalArt/7.jpg';
import traditionalArt from '../../assets/paintings/10.jpg';
import aiArt from '../../assets/aiArt/20.jpg';

const Services = () => {
    return (
        <div className='pb-20 md:pb-32 px-5 flex flex-col-reverse md:flex-row items-center justify-around text-white'>
            <div className='w-full md:w-1/2'>
                <div className="carousel w-full mb-5">
                    <div id="item1" className="carousel-item w-full">
                        <div className="mx-auto card lg:card-side border bg-white text-primary">
                            <figure><img className='w-full lg:w-80 h-80' src={characterDesign} alt="Character Design" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-medium">Character Design</h2>
                                <p>Click the button to view details and samples.</p>
                                <div className="card-actions justify-end">
                                    <a href='/#character-design' className="empireBtn2">Jump in 😃</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="mx-auto card lg:card-side border bg-white text-primary">
                            <figure><img className='w-full lg:w-80 h-80' src={digitalArt} alt="Digital Art" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-medium text-primary">Digital Art</h2>
                                <p>Click the button to view details and samples.</p>
                                <div className="card-actions justify-end">
                                    <a href='/#digital-art' className="empireBtn2">Jump in 😃</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="mx-auto card lg:card-side border bg-white text-primary">
                            <figure><img className='w-full lg:w-80 h-80' src={traditionalArt} alt="Traditional Art" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-medium text-primary">Traditional Art</h2>
                                <p>Click the button to view details and samples.</p>
                                <div className="card-actions justify-end">
                                    <a href='/#traditional-art' className="empireBtn2">Jump in 😃</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className="mx-auto card lg:card-side border bg-white text-primary">
                            <figure><img className='w-full lg:w-80 h-80' src={aiArt} alt="AI Art" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-medium text-primary">AI Art</h2>
                                <p>Click the button to view details and samples.</p>
                                <div className="card-actions justify-end">
                                    <a href='/#ai-art' className="empireBtn2">Jump in 😃</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-ghost btn-xs">1</a>
                    <a href="#item2" className="btn btn-ghost btn-xs">2</a>
                    <a href="#item3" className="btn btn-ghost btn-xs">3</a>
                    <a href="#item4" className="btn btn-ghost btn-xs">4</a>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold text-center mb-10'>Our Creation</h2>
                <img src={image} alt='Our Creation' className='mb-10 md:mb-0'></img>
            </div>
        </div>
    );
};

export default Services;