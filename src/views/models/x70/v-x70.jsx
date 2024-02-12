import { useState } from 'react'
import { Link } from 'react-router-dom'

import './x70.css'
import data from '../../../data/x70.json'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'
import CSlider from '../../../components/c-slider/c-slider'
import CAccordion from '../../../components/c-accordion/c-accordion'

import Banner from '../../../assets/x70-1536x864.jpg'
// import LogoX70 from '../../../assets/X70-1.png'
import X70Red from '../../../assets/x70-red.png'
import X70Blue from '../../../assets/x70-blue.png'
import X70Brown from '../../../assets/x70-brown.png'
import X70White from '../../../assets/x70-white.png'


export default function VX70() {
    const [color, setColor] = useState('red')
    return (
        <div className='v-x70'>
            <CHeader />
            <div className='v-x70__banner'>
                 <img src={Banner} alt="" className='v-x70__banner__image'/>
            </div>
            <div className='v-x70__content-nav'>
                {/* <img src={LogoX70} alt="" className='v-x70__model-nav__logo'/> */}
                <div className='v-x70__model-nav__actions'>
                    <div className='v-x70__model-nav__nav-items'>
                        <a href="#overview"  className='v-x70__model-nav__nav-item'>Visión general</a>
                        <a href="#details"  className='v-x70__model-nav__nav-item'>Detalles</a>
                        <a href="#gallery"  className='v-x70__model-nav__nav-item'>Galerías</a>
                        <a href="#config"  className='v-x70__model-nav__nav-item'>Configuración</a>
                    </div>
                    <Link to={'/cotizar/x70'} className='v-x70__model-nav__button'>Cotizar ahora</Link>
                </div>
            </div>
            <div className='v-x70__section__overview' id='overview'>
                <div className='v-x70__section__overview__info-container'>
                    {color !== 'white' && <div className='v-x70__section__overview__details-container'>
                        <div className='v-x70__section__overview__details-group'>
                            <p className='v-x70__section__overview__detail-title'>Cilindrada (ml)</p>
                            <h2 className='v-x70__section__overview__detail'>1598</h2>
                        </div>
                        <div className='v-x70__section__overview__details-group'>
                            <p className='v-x70__section__overview__detail-title'>Potencia máxima (ps)</p>
                            <h2 className='v-x70__section__overview__detail'>197</h2>
                        </div>
                        <div className='v-x70__section__overview__details-group'>
                            <p className='v-x70__section__overview__detail-title'>Par máximo (N.m)</p>
                            <h2 className='v-x70__section__overview__detail'>290</h2>
                        </div>
                        <a href="https://jetourglobal.com/spain/x70-720" className='v-x70__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/x70'} className='v-x70__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    {color === 'white' && <div className='v-x70__section__overview__details-container'>
                        <div className='v-x70__section__overview__details-group'>
                            <p className='v-x70__section__overview__detail-title text-black'>Cilindrada (ml)</p>
                            <h2 className='v-x70__section__overview__detail text-black'>1598</h2>
                        </div>
                        <div className='v-x70__section__overview__details-group'>
                            <p className='v-x70__section__overview__detail-title text-black'>Potencia máxima (ps)</p>
                            <h2 className='v-x70__section__overview__detail text-black'>197</h2>
                        </div>
                        <div className='v-x70__section__overview__details-group'>
                            <p className='v-x70__section__overview__detail-title text-black'>Par máximo (N.m)</p>
                            <h2 className='v-x70__section__overview__detail text-black'>290</h2>
                        </div>
                        <a href="https://jetourglobal.com/spain/x70-720" className='v-x70__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/x70'} className='v-x70__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    <div className='v-x70__section__overview__colors'>
                        <div className='v-x70__section__overview__color v-x70__section__overview__color-red' onClick={()=>{setColor('red')}}></div>
                        <div className='v-x70__section__overview__color v-x70__section__overview__color-blue' onClick={()=>{setColor('blue')}}></div>
                        <div className='v-x70__section__overview__color v-x70__section__overview__color-brown' onClick={()=>{setColor('brown')}}></div>
                        <div className='v-x70__section__overview__color v-x70__section__overview__color-white' onClick={()=>{setColor('white')}}></div>
                    </div>
                </div>
                { color === 'red' && <div className='v-x70__section__overview__background v-x70__section__overview__background-red'>
                    <div className='v-x70__section__overview__background__title-group'>
                        <h2 className='v-x70__section__overview__background__title'>X70</h2>
                        <p className='v-x70__section__overview__background__text'>Rojo</p>
                    </div>
                </div>}
                { color === 'blue' && <div className='v-x70__section__overview__background v-x70__section__overview__background-blue'>
                    <div className='v-x70__section__overview__background__title-group'>
                        <h2 className='v-x70__section__overview__background__title'>X70</h2>
                        <p className='v-x70__section__overview__background__text'>Azul</p>
                    </div>
                </div>}
                { color === 'brown' && <div className='v-x70__section__overview__background v-x70__section__overview__background-brown'>
                    <div className='v-x70__section__overview__background__title-group'>
                        <h2 className='v-x70__section__overview__background__title'>X70</h2>
                        <p className='v-x70__section__overview__background__text'>Marrón</p>
                    </div>
                </div>}
                { color === 'white' && <div className='v-x70__section__overview__background v-x70__section__overview__background-white'>
                    <div className='v-x70__section__overview__background__title-group'>
                        <h2 className='v-x70__section__overview__background__title text-black'>X70</h2>
                        <p className='v-x70__section__overview__background__text text-black'>Blanco</p>
                    </div>
                </div>}
                {color === 'red' &&
                    <div className='v-x70__section__overview__image-container'>
                        <img src={X70Red} alt="" className='v-x70__section__overview__image'/>
                    </div>
                }   
                {color === 'blue' && 
                    <div className='v-x70__section__overview__image-container'>
                        <img src={X70Blue} alt="" className='v-x70__section__overview__image'/>
                    </div>
                }
                {color === 'brown' &&
                    <div className='v-x70__section__overview__image-container'>
                        <img src={X70Brown} alt="" className='v-x70__section__overview__image'/>
                    </div>
                }
                {color === 'white' &&
                    <div className='v-x70__section__overview__image-container'>
                        <img src={X70White} alt="" className='v-x70__section__overview__image'/>
                    </div>
                }
            </div>
            <div className='v-x70__section__design' id="details">
                <div className='v-x70__section__design__info-container no-show-mobile'>
                    <div className='v-x70__section__design__group-a'></div>
                    <div className='v-x70__section__design__text-group'>
                        <p className='v-x70__section__design__text'>Longitud de 4720 mm,</p>
                        <p className='v-x70__section__design__text'>Anchura de 1900 mm,</p>
                        <p className='v-x70__section__design__text'>Vía de 1600/1595 mm</p>
                    </div>
                </div>
                <div className='v-x70__section__design__info-container'>
                    <div className='v-x70__section__design__text-group'>
                        <h2 className='v-x70__section__design__title'>EXPERIENCIA FLUIDA</h2>
                        <p className='v-x70__section__design__text'>Cubo de rueda supergrande de 20 pulgadas y exquisita llanta de aluminio clásica.</p>
                    </div>
                    <div className='v-x70__section__design__group-b'></div>
                </div>
                <div className='v-x70__section__design__info-container no-show-mobile'>
                    <div className='v-x70__section__design__group-c'></div>
                    <div className='v-x70__section__design__text-group'>
                        <p className='v-x70__section__design__text'>Techo solar panorámico ultra ancho: El techo solar panorámico de 1.1 m2 garantiza una amplia visión, suficiente iluminación diurna, buena ventilación y una bella apariencia.</p>
                    </div>
                </div>
            </div>
            <div className='v-x70__section-slider' id="gallery">
                <CSlider title="GALERÍA INTERIOR" data={data.slider1}/>
            </div>
            <div className='v-x70__section-slider'>
                <CSlider title="GALERÍA EXTERIOR" data={data.slider2} controlColor="black"/>
            </div>
            <div className='v-x70__section-accordion' id="config">
                <CAccordion data={data.techConfig} title="TABLA DE CONFIGURACIÓN"/>
            </div>
            <CFooter />
        </div>
    )
}