import React from 'react'
import "../../Sessões/session.scss"
import image from '../../../Images/device-pile.png'
const Assistir = () => {
    return (
        <div className='session'>
            <div>
                <p className='texto1'>Assista quando quiser.</p>
                <p className='texto2'>Assista no celular, tablet, Smart TV ou<br /> notebook sem pagar a mais por isso.</p>
            </div>
            <img src={image}></img>
        </div >
    )
}

export default Assistir