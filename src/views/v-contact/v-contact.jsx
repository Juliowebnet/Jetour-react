import './contact.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'

import Banner from '../../assets/jetour-contacto-hero-1366.png'

export default function VContact() {
    return (
        <div>
            <CHeader />
            <div>
                <img src={Banner} alt="" />
            </div>
            <CFooter />
        </div>
    )
}