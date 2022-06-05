import React from 'react';


const Gif = ({ img }) => {

    return (
        <div className='gif'>
            <img className='image' src={img} alt="tenorgif" />
        </div>
    );
}

export default Gif;