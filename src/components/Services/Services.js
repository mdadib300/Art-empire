import React from 'react';
import image from '../../assets/pana.png';
import characterDesign from '../../assets/CharacterDesign/2.jpg';
import digitalArt from '../../assets/digitalArt/7.jpg';
import paintings from '../../assets/paintings/10.jpg';
import aiArt from '../../assets/aiArt/20.jpg';

const Services = () => {
    return (
        <div className='my-32 mx-5 flex flex-col-reverse md:flex-row items-center justify-around'>
            <div className='w-full md:w-1/2'>
                <div className="carousel w-full mb-5">
                    <div id="item1" className="carousel-item w-full">
                        <div className="mx-auto card lg:card-side">
                            <figure><img className='w-80 h-80' src={characterDesign} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-medium text-primary">Character Design</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="empireBtn2">Let's See 👀</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="mx-auto card lg:card-side">
                            <figure><img className='w-80 h-80' src={digitalArt} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-medium text-primary">Digital Art</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="empireBtn2">Let's See 👀</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="mx-auto card lg:card-side">
                            <figure><img className='w-80 h-80' src={paintings} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-medium text-primary">Paintings</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="empireBtn2">Let's See 👀</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className="mx-auto card lg:card-side">
                            <figure><img className='w-80 h-80' src={aiArt} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-medium text-primary">AI Art</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="empireBtn2">Let's See 👀</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-primary text-white btn-xs">1</a>
                    <a href="#item2" className="btn btn-primary text-white btn-xs">2</a>
                    <a href="#item3" className="btn btn-primary text-white btn-xs">3</a>
                    <a href="#item4" className="btn btn-primary text-white btn-xs">4</a>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold text-center text-primary mb-10'>What we create?</h2>
                <img src={image} alt='What we do?' className='mb-20 md:mb-0'></img>
            </div>
        </div>
    );
};

export default Services;