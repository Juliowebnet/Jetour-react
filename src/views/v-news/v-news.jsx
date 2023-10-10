import './news.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'
import CNewsCard from '../../components/c-news-card/c-news-card'

import Banner from '../../assets/jetour-novedades-hero-1366.webp'
import PostImage1 from '../../assets/20220415-JETOUR-DASHENG-PORTADA@2x.png'
import PostImage2 from '../../assets/post2.png'

export default function VNews() {
    return(
        <div className='v-news'>
            <CHeader />
            <img src={Banner} alt="" className='v-news__banner'/>
            <div className='v-news__section'>
                <h2 className='v-news__title'>NOVEDADES SOBRE JETOUR</h2>
                <p className='v-news__subtitle'>Todo lo que tienes que saber sobre nuestra marca y vehículos</p>
                <div className='v-news__posts'>
                    <CNewsCard image={PostImage1} title="JETOUR ANUNCIA 2 LANZAMIENTOS PARA EL AÑO 2023" text='La marca líder china, hija dilecta de Chery, prepara dos lanzamientos para año 2023' date='07.01.23'/>
                    <CNewsCard image={PostImage2} title="JETOUR ANUNCIA 2 LANZAMIENTOS PARA EL AÑO 2023" text='La marca líder china, hija dilecta de Chery, prepara dos lanzamientos para año 2023' date='07.01.23'/>
                </div>
            </div>
            <CFooter />
        </div>
    )
}