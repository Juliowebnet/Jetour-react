import './article-01.css'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'

import Banner from '../../../assets/jetour-novedades-hero-1366.webp'

export default function VNews() {
    return(
        <div className='v-article-01'>
            <CHeader />
            <img src={Banner} alt="" className='v-article-01__banner'/>
            <div className='v-article-01__section'>
                <h2 className='v-article-01__title'>MARTÍ presenta a Jetour</h2>
                <p className='v-article-01__subtitle'>Su nueva marca de vehículos livianos</p>
                <div className='v-article-01__thumbnail-container'>
                    <img src={process.env.PUBLIC_URL + "/Images/x90PLus-exterior4.jpg"} alt="x90+" />
                </div>
                <article className='v-article-01__article-container'>
                    <p>Los vehículos de Jetour son comercializados con mantenimiento preventivo básico incluido y cinco años o 150,000 kilómetros de garantía</p>
                    <p>Los modelos X70, X70 Plus, X90+ y Dashing forman parte de la gama de la marca Jetour, los cuales introdujo el grupo empresarial MARTÍ a su portafolio de vehículos livianos en República Dominicana.</p>
                    <p>El encuentro, realizado en su principal “showroom”, que sirvió de escenario para presentar los planes de expansión, estuvo encabezado por los miembros del comité ejecutivo de MARTÍ: Carlos Martí Besonias, presidente de consejo; Carlos José Martí, presidente ejecutivo; José Martí, vicepresidente ejecutivo; Christian Cabral, director del portafolio de vehículos y vicepresidente de negocios; Danilo Bobadilla, vicepresidente de proyectos y desarrollo, entre otros.</p>
                    <p>“Nos sentimos honrados de ser los representantes exclusivos de esta marca en el país, ofreciendo a los clientes el servicio personalizado que nos ha caracterizado durante 10 años, con el respaldo de un equipo local, que se motiva por la pasión de mover personas”, comentó Cabral.</p>
                    <p>Además, explicó que todos los vehículos de Jetour son comercializados con mantenimiento preventivo básico incluido y cinco años o 150,000 kilómetros de garantía.</p>
                    <h3>Características de los modelos disponibles</h3>
                    <p><b>X70:</b> Es un SUV compacto que cuenta con tres filas de asientos, luces LED, aros 20”, compuerta trasera eléctrica, sensores de parqueo traseros y delanteros, pantalla digital de 10”, techo panorámico, cámara 360 grados y motor de 1.5cc 157hp con turbo transmisión automática de 8 velocidades.</p>
                    <p><b>X90+:</b> Es el SUV más familiar y espacioso de toda la gama, con doble pantalla digital de 12.3”, cámara 360 grados HD, aros 20”, techo panorámico, Parqueo Asistido Automático, 3 filas de asientos en piel, cargador inalámbrico, compuerta trasera electrónica, Sistema de sonido Sony, palanca de cambios e-shifter, freno de estacionamiento electrónico, 6 bolsas de aire, dobla aire acondicionado, Motor 2.0 Turbo con 254hp, transmisión DCT de 7 velocidades.</p>
                    <p><b>Dashing:</b> Es el modelo más reciente presentado por la marca, con un diseño exterior deportivo, líneas atrevidas e innovadoras, creado por Hakan Saracoglu. diseño exterior deportivo, líneas atrevidas e innovadoras, creado por Hakan Saracoglu. Hace debutar una nueva arquitectura modular denominada Kunlun, que permite diferentes siluetas, de diferentes tamaños y con opciones variadas de trenes motrices, y opciones de tracción simple y total.</p>
                </article>
                <div className='v-article-01__date-container'>
                    <p className='v-article-01__date'>5 Julio, 2023</p>
                </div>
            </div>
            <CFooter />
        </div>
    )
}