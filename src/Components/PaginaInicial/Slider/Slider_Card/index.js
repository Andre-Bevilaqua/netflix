import React from 'react'

const Slider_Card = () => {
    return (
        <div className='slider-footer'>
            <div className='footer_buttons'>
                <div>
                    <button className='footer_btn'><i class="fa-solid fa-caret-right"></i></button>
                    <button className='footer_btn'><i class="fa-solid fa-plus"></i></button>
                    <button className='footer_btn'><i class="fa-solid fa-thumbs-up"></i></button>
                </div>
                <button className='footer_btn'><i class="fa-solid fa-chevron-down"></i></button>
            </div>

            <div className='footer_info'>
                <p style={{ color: 'rgb(109, 255, 109)' }}>
                    % Relevante
                </p>
                <p style={{
                    borderRadius: '0.2rem',
                    backgroundColor: 'black',
                    width: 'fit-content',
                    margin: '5px'
                }}>
                    18
                </p>
                <p>X temporadas</p>
                <p style={{
                    borderRadius: '0.2rem',
                    backgroundColor: 'black',
                    padding: '0px 6px',
                    fontSize: '10px',
                    margin: '5px'
                }}>
                    HD
                </p>
            </div>
            <div className='gender'>
                <p>Drama</p>• 
                <p>Violência</p>•
                <p>Sobrenatural</p>
            </div>
        </div>
    )
}

export default Slider_Card