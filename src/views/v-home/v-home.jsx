import { useState } from 'react'
import { Link } from 'react-router-dom'

import './home.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'

import Portada from '../../assets/SLIDER PRINCIPAL.jpg'
import DashingName from '../../assets/model-name0.png'
import X70Name from '../../assets/model-name1.png'
import X70PlusName from '../../assets/model-name3.png'
import X90PlusName from '../../assets/model-name5.png'
import Dashing from '../../assets/dashing-3.png'
import X70 from '../../assets/x70-2.png'
import X70Plus from '../../assets/x70plus-2.png'
import X90Plus from '../../assets/x90plus.png'
import DashingMini from '../../assets/dashing-mini.png'
import X70Mini from '../../assets/x70@2x.png'
import X70MiniFront from '../../assets/x70-small.png'
import X70PlusMini from '../../assets/x70plus@2x.png'
import X70PlusMiniFront from '../../assets/x70plus-small.png'
import X90PlusMini from '../../assets/x90plus@2x.png'
import X90PlusMiniFront from '../../assets/x90plus-small.png'
import InnovationVideo from '../../assets/videos/INNOVACION.mp4'
import SliderButtonBack from '../../assets/slider-button-back.png'
import SliderButtonNext from '../../assets/slider-button-next.png'
import PostImage1 from '../../assets/20220415-JETOUR-DASHENG-PORTADA@2x.png'

export default function VHome() {
    const [dashingHover, setDashingHover] = useState(false);
    const [x70Hover, setX70Hover] = useState(false);
    const [x70PlusHover, setX70PlusHover] = useState(false);
    const [x90PlusHover, setX90PlusHover] = useState(false);
    const [modelSelected, setModelSelected] = useState('dashing')

    const DashingHoverEnter = () => {
        setDashingHover(true)
    }
    const DashingHoverLeave = () => {
        setDashingHover(false)
    }
    const X70HoverEnter = () => {
        setX70Hover(true)
    }
    const X70HoverLeave = () => {
        setX70Hover(false)
    }
    const X70PlusHoverEnter = () => {
        setX70PlusHover(true)
    }
    const X70PlusHoverLeave = () => {
        setX70PlusHover(false)
    }
    const X90PlusHoverEnter = () => {
        setX90PlusHover(true)
    }
    const X90PlusHoverLeave = () => {
        setX90PlusHover(false)
    }

    return (
        <div className='v-home'>
            <CHeader />
            <div className='v-home__banner-container'>
                <img src={Portada} alt="Portada" className='v-home__banner__img'/>
            </div>
            <div className='v-home__section__models'>
                {modelSelected === 'dashing' && <div className='v-home__section__model__header'>
                    <img src={DashingName} alt="" className='v-home__section__model__header_image'/>
                    <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2>
                    <Link to={'/models/dashing'} className='v-home__section__model__header__button'>Más información</Link>
                </div>}
                {modelSelected === 'x70' && <div className='v-home__section__model__header'>
                    <img src={X70Name} alt="" className='v-home__section__model__header_image'/>
                    <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2>
                    <div className='v-home__section__model__header__button'>Más información</div>
                </div>}
                {modelSelected === 'x70-plus' && <div className='v-home__section__model__header'>
                    <img src={X70PlusName} alt="" className='v-home__section__model__header_image'/>
                    <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2>
                    <div className='v-home__section__model__header__button'>Más información</div>
                </div>}
                {modelSelected === 'x90-plus' && <div className='v-home__section__model__header'>
                    <img src={X90PlusName} alt="" className='v-home__section__model__header_image'/>
                    <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2>
                    <div className='v-home__section__model__header__button'>Más información</div>
                </div>}
                <div className='v-home__section__model-selected'>
                    {modelSelected === 'dashing' && <img src={Dashing} alt="" className='v-home__section__model-selected-image'/>}
                    {modelSelected === 'x70' && <img src={X70} alt="" className='v-home__section__model-selected-image'/>}
                    {modelSelected === 'x70-plus' && <img src={X70Plus} alt="" className='v-home__section__model-selected-image'/>}
                    {modelSelected === 'x90-plus' && <img src={X90Plus} alt="" className='v-home__section__model-selected-image'/>}
                </div>
                <div className='v-home__section__models__options'>
                    <div className='v-home__section__models__option-group' onMouseEnter={DashingHoverEnter} onMouseLeave={DashingHoverLeave} onClick={()=>{setModelSelected('dashing')}}>
                        {dashingHover || modelSelected === 'dashing' ? <img src={DashingMini} alt="dashing" className='v-home__section__models__option-image'/> : <img src={Dashing} alt="dashing" className='v-home__section__models__option-image'/> }
                        <p>DASHING</p>
                    </div>
                    <div className='v-home__section__models__option-group' onMouseEnter={X70HoverEnter} onMouseLeave={X70HoverLeave} onClick={()=>{setModelSelected('x70')}}>
                        {x70Hover || modelSelected === 'x70' ? <img src={X70MiniFront} alt="x70" className='v-home__section__models__option-image'/> : <img src={X70Mini} alt="x70" className='v-home__section__models__option-image'/>}
                        <p>X70</p>
                    </div>
                    <div className='v-home__section__models__option-group' onMouseEnter={X70PlusHoverEnter} onMouseLeave={X70PlusHoverLeave} onClick={()=>{setModelSelected('x70-plus')}}>
                        {x70PlusHover || modelSelected === 'x70-plus' ? <img src={X70PlusMiniFront} alt="x70plus" className='v-home__section__models__option-image'/> : <img src={X70PlusMini} alt="x70plus" className='v-home__section__models__option-image'/>}
                        <p>X70 PLUS</p>
                    </div>
                    <div className='v-home__section__models__option-group' onMouseEnter={X90PlusHoverEnter} onMouseLeave={X90PlusHoverLeave} onClick={()=>{setModelSelected('x90-plus')}}>
                        {x90PlusHover || modelSelected === 'x90-plus' ? <img src={X90PlusMiniFront} alt="x90plus" className='v-home__section__models__option-image'/> : <img src={X90PlusMini} alt="x90plus" className='v-home__section__models__option-image'/>}
                        <p>X90 PLUS</p>
                    </div>
                </div>
            </div>
            <div className='v-home__section__innovation'>
                <div className='v-home__section__innovation__group'>
                    <h2 className='v-home__section__innovation__title'>INNOVACIÓN</h2>
                    <p className='v-home__section__innovation__text'>Impulsado por la innovación y con la búsqueda de la excelencia, Chery Holding está decidido a ser un líder en cada uno de sus campos y convertirse en una marca influyente y confiable del grupo.</p>
                    <div className='v-home__section__innovation__button'>Conoce más sobre nosotros</div>
                </div>
                <div className='v-home__section__innovation__group'>
                    <video src={InnovationVideo} className='v-home__section__innovation__video' controls></video>
                </div>
            </div>
            <div className='v-home__section__features'>
                <div className='v-home__section__features__items'>
                    <div className='v-home__section__features__item-a'>
                        <div className='v-home__section__features__item__text-group'>
                            <p>X70</p>
                            <h2>ESTABILIDAD y SEGURIDAD</h2>
                        </div>
                    </div>
                    <div className='v-home__section__features__item-b'>
                        <div className='v-home__section__features__item__text-group'>
                            <p>X90</p>
                            <h2>FUERZA y BELLEZA</h2>
                        </div>
                    </div>
                    <div className='v-home__section__features__item-c'>
                        <div className='v-home__section__features__item__text-group'>
                            <p>DASHING</p>
                            <h2>DISEÑO y CONFORT</h2>
                        </div>
                    </div>
                    <div className='v-home__section__features__item-d'>
                        <div className='v-home__section__features__item__text-group'>
                            <p>X70 PLUS</p>
                            <h2>INNOVACIÓN y DESARROLLO</h2>
                        </div>
                    </div>
                </div>
                <div className='v-home__section__features__button'>Conoce más sobre nuestros modelos</div>
            </div>
            <div className='v-home__section__news'>
                <div className='v-home__section__news__group'>
                    <h2 className='v-home__section__news__title'>
                        NOVE DADES
                    </h2>
                    <div className='v-home__section__news__button'>Ver todas las novedades de Jetour Dominicana</div>
                    <div className='v-home__section__news__slider-buttons-group'>
                        <img src={SliderButtonBack} alt="" className='v-home__section__news__slider-button'/>
                        <img src={SliderButtonNext} alt="" className='v-home__section__news__slider-button'/>
                    </div>
                </div>
                <div className='v-home__section__news__group'>
                    <div className='v-home__section__news__item'>
                        <p className='v-home__section__news__item__title'>EL X90 PLUS: UN CLÁSICO MUY COMPLETO</p>
                        <p className='v-home__section__news__item__text'>07.01.23</p>
                        <img src={PostImage1} alt="" className='v-home__section__news__item__image'/>
                    </div>
                </div>
            </div>
            <CFooter />
        </div>
    )
}