import React from 'react';
import "../../Sessões/session.scss";
import image from '../../../Images/tv.png'

const Tv = () => {
    return (
        <div className='session'>
            <div >
                <p className='texto1'>Aproveite na TV.</p>
                <p className='texto2'>Assista em Smart TVs, PlayStation, Xbox,<br /> Chromecast, Apple TV, aparelhos de Blu-ray e<br /> outros dispositivos.</p>
            </div>
            <img src={image}></img>

        </div>
    )
}

export default Tv