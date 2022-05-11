import React from 'react'

const Footer = () => {
    return (
        <div style={{
            backgroundColor: 'black',
            color: 'grey',
            borderTop: 'rgb(58, 58, 58) solid 10px',
            fontSize: '20px',
            paddingLeft: '250px',
            paddingTop: '70px',
            paddingBottom: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        }}>
            <div>Dúvidas? Ligue 0800 591 8942</div>
            <div style={{
                color: "grey",
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                textAlign: 'left',
                fontSize: '15px',
                marginTop: '30px',

            }}>


                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '100px'
                }}>
                    <a color='grey'>Perguntas Frequentes</a>
                    <a className='links'>Relações com Investidores</a>
                    <a className='links'>Formas de assistir</a>
                    <a className='links'>Informações corporativas</a>
                    <a className='links'>Só na Netflix</a>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '100px'

                }}>
                    <a className='links'>Centro de ajuda</a>
                    <a className='links'>Carreiras</a>
                    <a className='links'>Termos de uso</a>
                    <a className='links'>Entre em contato</a>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '100px'

                }}>
                    <a className='links'>Conta</a>
                    <a className='links'>Resgatar cartão pré-pago</a>
                    <a className='links'>Privacidade</a>
                    <a className='links'>Teste de velocidade</a>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '100px'

                }}>
                    <a className='links'>Media center</a>
                    <a className='links'>Comprar cartão pré-pago</a>
                    <a className='links'>Preferência de cookies</a>
                    <a className='links'>Avisos legais</a>
                </div>
            </div>
            <select className='selector' style={{marginTop:'40px', fontWeight:'500', fontSize:'20px', color:'rgb(116, 116, 116)', borderColor:'rgb(116, 116, 116)', padding:'15px 20px'}}>

                <option value="Option 1" >Português</option>
                <option value="Option 1" >Inglês</option>
            </select>
            <p style={{fontSize:'15px', marginTop:'20px'}}>Netflix Brasil</p>
        </div >
    )
}

export default Footer