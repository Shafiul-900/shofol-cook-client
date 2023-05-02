import React from 'react';
import resipe1 from '../../../assets/image-250x220 (1).jpg'
import resipe2 from '../../../assets/image-250x220 (2).jpg'
import resipe3 from '../../../assets/image-250x220 (3).jpg'
import resipe4 from '../../../assets/image-250x220.jpg'

const Resipe = () => {
    return (
        <div className='mt-4 '>
            <h3>Special Recipe</h3>
            <div className='text-center '>
                <img className='rounded' src={ resipe1} alt="" />
                <h5>Spcia Chotpoti</h5>
                <img className='mt-3 rounded' src={ resipe2} alt="" />
                <h5>Spcia Pasta</h5>
                <img className='mt-3 rounded' src={ resipe3} alt="" />
                <h5>Spcia Mutton</h5>
                <img className='mt-3 rounded' src={ resipe4} alt="" />
                <h5>Spcia potato fry</h5>
            </div>
        </div>
    );
};

export default Resipe;