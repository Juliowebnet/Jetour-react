import { useState } from 'react'
import { Link } from 'react-router-dom'

import './dashing.css'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'

// import DashingVideo from '../../../assets/videos/VIDEO-DASHING.mp4'
import Banner from '../../../assets/dashing1.jpg'
import LogoDashing from '../../../assets/dashing-1.png'
import DashingBlack from '../../../assets/dashing-black.png'
import DashingGray from '../../../assets/dashing-gray.png'
import DashingRed from '../../../assets/dashing-red.png'
import DashingBlue from '../../../assets/dashing-blue.png'
import DashingWhite from '../../../assets/dashing-white.png'

export default function VDashing() {
    const [color, setColor] = useState('black')
    return (
        <div className='v-dashing'>
            <CHeader />
            <div className='v-dashing__banner'>
                 {/* <video src={DashingVideo} className='' autoplay></video> */}
                 <img src={Banner} alt="" className='v-dashing__banner__image'/>
            </div>
            <div className='v-dashing__content-nav'>
                <img src={LogoDashing} alt="" className='v-dashing__model-nav__logo'/>
                <div className='v-dashing__model-nav__actions'>
                    <div className='v-dashing__model-nav__nav-items'>
                        <a href="#overview"  className='v-dashing__model-nav__nav-item'>Visión general</a>
                        <a href="#overview"  className='v-dashing__model-nav__nav-item'>Detalles</a>
                        <a href="#overview"  className='v-dashing__model-nav__nav-item'>Galerías</a>
                        <a href="#overview"  className='v-dashing__model-nav__nav-item'>Configuración</a>
                    </div>
                    <Link to={'/'} className='v-dashing__model-nav__button'>Cotizar ahora</Link>
                </div>
            </div>
            <div className='v-dashing__section__overview' id='overview'>
                <div className='v-dashing__section__overview__info-container'>
                    <div className='v-dashing__section__overview__details-container'>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title'>Cilindrada (ml)</p>
                            <h2 className='v-dashing__section__overview__detail'>1598</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title'>Potencia máxima (ps)</p>
                            <h2 className='v-dashing__section__overview__detail'>197</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title'>Par máximo (N.m)</p>
                            <h2 className='v-dashing__section__overview__detail'>290</h2>
                        </div>
                        <a href="https://platanogeek.com/dashing_720/" className='v-dashing__section__overview__3d-button'>Visualizador 3D</a>
                    </div>
                    <div className='v-dashing__section__overview__colors'>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-black' onClick={()=>{setColor('black')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-gray' onClick={()=>{setColor('gray')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-red' onClick={()=>{setColor('red')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-blue' onClick={()=>{setColor('blue')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-white' onClick={()=>{setColor('white')}}></div>
                    </div>
                </div>
                { color === 'black' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-balck'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Negro</p>
                    </div>
                </div>}
                { color === 'gray' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-gray'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Gris</p>
                    </div>
                </div>}
                { color === 'red' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-red'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Rojo</p>
                    </div>
                </div>}
                { color === 'blue' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-blue'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Azul</p>
                    </div>
                </div>}
                { color === 'white' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-white'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Blanco</p>
                    </div>
                </div>}
                {color === 'black' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingBlack} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }   
                {color === 'gray' && 
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingGray} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
                {color === 'red' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingRed} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
                {color === 'blue' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingBlue} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
                {color === 'white' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingWhite} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
            </div>
            <CFooter />
        </div>
    )
}