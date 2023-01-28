import React from 'react';
import cd1 from '../../assets/CharacterDesign/1.jpg';
import cd2 from '../../assets/CharacterDesign/2.jpg';
import cd3 from '../../assets/CharacterDesign/3.jpg';
import cd4 from '../../assets/CharacterDesign/4.jpg';

const CharacterDesign = () => {
    return (
        <div id='character-design' className='pb-20 md:pb-32 px-5 md:px-10 text-white text-center'>
            <h1 className='text-4xl font-semibold mb-5'>Character Design</h1>
            <p>Sample text</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={cd1} alt="Character Design - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Character Design - 1</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={cd2} alt="Character Design - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Character Design - 2</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={cd3} alt="Character Design - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Character Design - 3</h2>
                    </div>
                </div>
                <div className="card bg-white text-primary">
                    <figure>
                        <img src={cd4} alt="Character Design - Rafi's Art Empire" className='w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Character Design - 4</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDesign;