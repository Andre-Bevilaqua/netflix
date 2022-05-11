import React, { useState } from 'react'
import '../../Sessões/session.scss'
const Dropdown = (props) => {
    const [maxHeigth, setMaxHeigth] = useState(0);
    const [opacity, setOpacity] = useState(0);

    function ExtensiveQuestions() {
        setMaxHeigth(maxHeigth === 500 ? 0 : 500);
        setOpacity(opacity === 1 ? 0 : 1);
        
    }

    return (
        <div className='Aoba'>
            <div className='drops'>
                <button className='quest' onClick={ExtensiveQuestions}  >{props.titulo} <p>+</p></button>
                <div className='info' style={{ maxHeight: `${maxHeigth}px`, opacity: `${opacity}` , color:'white'}}>
                    {props.texto}
                </div>
            </div>
        </div>
    )
}

export default Dropdown