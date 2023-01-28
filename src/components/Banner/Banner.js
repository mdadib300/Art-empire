import React from 'react';

const Banner = () => {
    return (
        <div id='banner' className="hero py-20 md:py-32 text-white">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-4xl md:text-5xl font-bold">Creating Beauty In Every Brush Stroke, Every Pixel</h1>
                    <p className="py-6">I am here to give you the most creative and colorful service. You can find meaningful logo design and AI art. And if any of you want some fictional characters, you can tell me. At the same time, I can enchant you with traditional and digital art.</p>
                    <div className="tooltip tooltip-bottom tooltip-secondary" data-tip="See my works">
                        <button className="empireBtn">Let's Explore 👀</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;