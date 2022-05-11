import React from 'react'
import { Link } from 'react-router-dom';
import Image2 from '../../../Images/Netflix-Brand-Logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img style={{ width: "15%" }} src={Image2} alt="Logo da netflix"></img>
            <div className='btn_selector'>

                <select className='selector'>

                    <option value="Option 1" >Português</option>
                    <option value="Option 1" >Inglês</option>
                </select>
                <Link to= 'pagina-inicial'>
                    <button className='btn' >Entrar</button>
                </Link>
            </div>
        </div>
    )
}

export default Header