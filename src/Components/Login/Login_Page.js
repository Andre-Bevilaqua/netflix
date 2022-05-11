import React from 'react';
import Image from '../../Images/BR-pt-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg';
import '../Login/Login_Page.scss';
import Assistir from '../Sessões/Assistir';
import Footer from '../Sessões/Footer';
import Perfis from '../Sessões/Perfis';
import Perguntas_Frequentes from '../Sessões/Perguntas_Frequentes';
import Series from '../Sessões/Séries';
import Tv from '../Sessões/Tv';
import Cadastro from './Cadastro';
import Header from './Header';

const Login_Page = () => {

    return (


        <div className='page' style={{
            backgroundImage: `url(${Image})`,
        }} >
            <div className='overlay' >
                <Header />
                <Cadastro />

            </div>
            <Tv />
            <Series />
            <Assistir />
            <Perfis />
            <Perguntas_Frequentes />
            <Footer />
        </div>

    )
}

export default Login_Page