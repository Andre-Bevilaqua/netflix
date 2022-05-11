import React from 'react';
import './cadastro.scss';

import { Link } from 'react-router-dom';
const Cadastro = () => {
    return (
        <div className='cadastro'>
            <div >
                <p className='texto1'> Filmes, séries e muito mais.<br />Sem limites.</p>
                <p className='texto2'>Assista onde quiser. Cancele quando quiser.</p>
                <p className='texto3'>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            </div>
            <div className='input_btn'>
                <input className='email' placeholder='Email'></input>
                <Link to='pagina-inicial'>
                    <button className='botao'>Vamos lá > </button>
                </Link>
            </div>
        </div>
    )
}

export default Cadastro