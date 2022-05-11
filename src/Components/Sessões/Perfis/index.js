import React from 'react'
import "../../Sessões/session.scss"
import image from '../../../Images/kidsValueProp.png'
const Perfis = () => {
  return (
    <div className='session'>
            <img src={image}></img>
            <div>
                <p className='texto1'>Crie perfis para<br/> crianças.</p>
                <p className='texto2'>Salve seus títulos favoritos e sempre tenha<br />algo para assistir.</p>
            </div>
        </div >
  )
}

export default Perfis