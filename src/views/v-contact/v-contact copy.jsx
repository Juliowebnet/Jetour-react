import { Link } from 'react-router-dom'

import './contact.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'

import Banner from '../../assets/x70PLus-exterior3.jpg'
import LogoBlue from '../../assets/logo-blue.png'
import Instagram from '../../assets/insta-blue.png'
import Facebook from '../../assets/facebook-blue.png'

export default function VContact() {
    return (
        <div className='v-contact'>
            <CHeader />
            <img src={Banner} alt="" className='v-contact__banner'/>
            <div className='v-contact__content'>
                <div className='v-contact__section-left'>
                    <div className='v-contact__section-left__title-container'>
                        <h2 className='v-contact__section-left__title'>CONTACTO</h2>
                    </div>
                    <div className='v-contact__section-left__info-group'>
                        <div className='v-contact__section-left__logo-group'>
                            <img src={LogoBlue} alt="" className='v-contact__section-left__logo'/>
                            <p className='v-contact__section-left__logo-text'>República Dominicana</p>
                        </div>
                        <div className='v-contact__section-left__contact-info-group'>
                            {/* <p className='v-contact__section-left__contact-info-group__text'>ventas@jetourdominicana.com</p> */}
                            <p className='v-contact__section-left__contact-info-group__text'>¡Síguenos!</p>
                            <div className='v-contact__section-left__contact-info-group__rrss'>
                               <a href="https://www.instagram.com/holajetour/">
                                    <img src={Instagram} alt="" className='v-contact__section-left__contact-info-group__rrss__icon'/>
                                </a> 
                                <a href="https://web.facebook.com/profile.php?id=100092172548080">
                                    <img src={Facebook} alt="" className='v-contact__section-left__contact-info-group__rrss__icon'/>
                                </a>
                            </div>
                            {/* <p className='v-contact__section-left__contact-info-group__text-bold'>Atención Personalizada</p>
                            <p className='v-contact__section-left__contact-info-group__text'>Puedes obtener asistencia personalizada en alguna de nuestras concesionarias oficiales en todo el país</p> */}
                        </div>
                        <div className='v-contact__section-left__contact-info-group__button-container'>
                            <Link to={'/concesionarios'} className='v-contact__section-left__contact-info-group__button'>Busca un concesionario</Link>
                        </div>
                    </div>
                </div>
                <div className='v-contact__section-right'>
                    <div className='v-contact__section-right__form-container'>
                        <div className='v-contact__section-right__form-subcontainer'>
                            <h2 className='v-contact__section-right__title'>ESCRÍBENOS</h2>
                            <p className='v-contact__section-right__text'>Por favor completa el formulario para que podamos asesorarte</p>
                            <form action="" className='v-contact__section-right__form'>
                                <div className='v-contact__section-right__form__input-group'>
                                    <input type="text" className='v-contact__section-right__form__input' placeholder='*Nombre Completo'/>
                                </div>
                                <div className='v-contact__section-right__form__input-group'>
                                    <input type="text" className='v-contact__section-right__form__half-input' placeholder='*Correo electrónico'/>
                                    <input type="text" className='v-contact__section-right__form__half-input' placeholder='*Teléfono Móvil'/>
                                </div>
                                <div className='v-contact__section-right__form__input-group'>
                                    <input type="text" className='v-contact__section-right__form__half-input' placeholder='*Lugar de residencia'/>
                                    <input type="text" className='v-contact__section-right__form__half-input' placeholder='*Provincia de residencia'/>
                                </div>
                                <div className='v-contact__section-right__form__separator'></div>
                                <div className='v-contact__section-right__form__input-group'>
                                    <input type="text" className='v-contact__section-right__form__input' placeholder='*Motivo de contacto'/>
                                </div>
                                <div className='v-contact__section-right__form__input-group'>
                                    <input type="text" className='v-contact__section-right__form__input' placeholder='Modelo de interés (opcional)'/>
                                </div>
                                <div className='v-contact__section-right__form__input-group'>
                                    <textarea className='v-contact__section-right__form__input-block' placeholder='Comentarios'/>
                                </div>
                                <div className='v-contact__section-right__form__input-group'>
                                    <div className='v-contact__section-right__form__button'>ENVIAR</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <CFooter />
        </div>
    )
}