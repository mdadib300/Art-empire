import React from 'react';
import cd1 from '../../assets/CharacterDesign/1.jpg';
import cd2 from '../../assets/CharacterDesign/2.jpg';
import cd3 from '../../assets/CharacterDesign/3.jpg';
import cd4 from '../../assets/CharacterDesign/4.jpg';

const CharacterDesign = () => {
    return (
        <div id='characterDesign' className='pb-20 md:pb-32 px-5 md:px-10 bg-primary text-white text-center'>
            <h1 className='text-4xl font-semibold mb-5'>Character Design</h1>
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="Character Design - Rafi's Art Empire" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Character Design 1</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDesign;