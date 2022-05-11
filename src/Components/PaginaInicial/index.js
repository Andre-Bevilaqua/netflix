import React, { useState } from 'react';
import image from '../../Images/knock-down.jpg'
import './PaginaInicial.scss'
import Slider from './Slider';

const PaginaInicial = () => {

const[translate, setTranslate] = useState(0);

  function Previous(){
    if(translate === 0) return;
    setTranslate(translate+1024)
  }
  function Next(){
    if(translate <= -3272) return;
    setTranslate(translate-1024)
  }



  return (

    <div className='inicio'>
      <div className="divImagem">
        <img src={image}></img>
      </div>

      <div className='slider_container'>
          <button className='button btn1' onClick={Previous}><i class="fa-solid fa-angle-left"></i></button>
          <button className='button btn2' onClick={Next}><i class="fa-solid fa-angle-right"></i></button>
      
        <Slider
        translate = {translate}
        />
      </div>
    </div>

  )

}

export default PaginaInicial