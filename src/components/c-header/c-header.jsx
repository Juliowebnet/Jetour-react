import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';

import './header.css'
import Logo from '../../assets/logo.svg' 

export default function CHeader() {
    return(
        <div className='c-header'>
            <div className='c-header__logo-container'>
                <NavLink to={'/'}>
                    <ReactSVG src={Logo} className='c-header__logo'/>
                </NavLink>
            </div>
            <div className='c-header__nav'>
                <NavLink to={'/'} className='c-header__nav__item'>Inicio</NavLink>
                <NavLink to={'/modelos/dashing'} className='c-header__nav__item'>Modelos</NavLink>
                <NavLink to={'/concesionarios'} className='c-header__nav__item'>Concesionarios</NavLink>
                <NavLink to={'/post-venta'} className='c-header__nav__item'>Postventa</NavLink>
                <NavLink to={'/novedades'} className='c-header__nav__item'>Novedades</NavLink>
                <NavLink to={'/contacto'} className='c-header__nav__item'>Contacto</NavLink>
            </div>
        </div>
    )
}