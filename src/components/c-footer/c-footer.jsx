import './footer.css'

import Logo from '../../assets/logo-white.png'
import IconInstagram from '../../assets/icon-instagram-white.png'
import IconFacebook from '../../assets/icon-facebook-white.png'
import LogoMoviti from '../../assets/logo-moviti.png'

export default function CFooter() {
    return(
        <div className='c-footer'>
            <div className='c-footer'>
                <img src={Logo} alt="" className='c-footer__logo'/>
                <div className='c-footer__rrss-group'>
                    <img src={IconInstagram} alt="" className='c-footer__rrss-image'/>
                    <img src={IconFacebook} alt="" className='c-footer__rrss-image'/>
                </div>
                <img src={LogoMoviti} alt="" className='c-footer__logo-moviti'/>
            </div>
        </div>
    )
}