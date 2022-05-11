import React from 'react';
import img from '../../../Images/projetoAdam.jpg';
import img1 from '../../../Images/savages.jpg';
import img2 from '../../../Images/the-titan.png';
import img3 from '../../../Images/to-the-bone.jpg';
import img4 from '../../../Images/savages.jpg';
import img5 from '../../../Images/the-titan.png';
import img6 from '../../../Images/to-the-bone.jpg';
import img7 from '../../../Images/projetoAdam.jpg';
import Slider_Card from './Slider_Card';
const Slider = (props) => {

  return (

    <div>
      
     
      <div className='slider' style={{
        transform:`translateX(${props.translate}px)`
      }}>
        <div className='slider_content'>
          <img className='slides' src={img2}>

          </img>
          <Slider_Card />
        </div>
        <div className='slider_content'>
          <img className='slides' src={img3}>
          </img>
          <Slider_Card />
        </div>
        <div className='slider_content'>
          <img className='slides' src={img4}>

          </img>
          <Slider_Card />
        </div>
        <div className='slider_content'>
          <img className='slides' src={img5}>
          </img>
          <Slider_Card />
        </div>
        <div className='slider_content'>
          <img className='slides' src={img6}>
          </img>
          <Slider_Card />
        </div>
        <div className='slider_content'>
          <img className='slides' src={img7}>
          </img>
          <Slider_Card />
        </div>
        <div className='slider_content'>
          <img className='slides' src={img5}>
          </img>
          <Slider_Card />
        </div>
        <div className='slider_content'>
          <img className='slides' src={img6}>
          </img>
          <Slider_Card />
        </div>
        <div className='slider_content'>
          <img className='slides' src={img7}>
          </img>
          <Slider_Card />
        </div>
      </div>


    </div>

  )
}

export default Slider