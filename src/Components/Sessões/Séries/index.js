import React from 'react'
import image from '../../../Images/eleven.jpg'
import "../../Sessões/session.scss";
const Series = () => {
    return (
        <div className='session'>
            <img src={image}></img>
            <div>
                <p className='texto1'>Baixe séries para<br/> assistir offline.</p>
                <p className='texto2'>Salve seus títulos favoritos e sempre tenha<br />algo para assistir.</p>
            </div>
        </div >
    )
}

export default Series