import './after-sales.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'

import Banner from '../../assets/jetour-postventa-hero-1920.webp'

export default function VAfterSales() {
    return(
        <div>
            <CHeader />
            <div>
                <img src={Banner} alt="" />
            </div>
            <CFooter />
        </div>
    )
}