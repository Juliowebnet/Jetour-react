import './locations.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'

import Banner from '../../assets/Mask-Group-15.png'

export default function VLocations() {
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