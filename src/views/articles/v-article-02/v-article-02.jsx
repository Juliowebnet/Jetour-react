import './article-02.css'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'

import Banner from '../../../assets/jetour-novedades-hero-1366.webp'
import Thumbnail from '../../../assets/article-02.jpg'

export default function VNews() {
    return(
        <div className='v-article-02'>
            <CHeader />
            <img src={Banner} alt="" className='v-article-02__banner'/>
            <div className='v-article-02__section'>
                <h2 className='v-article-02__title'>Presentan Jetour</h2>
                <p className='v-article-02__subtitle'>La novedad de Grupo Martí</p>
                <div className='v-article-02__thumbnail-container'>
                    <img src={Thumbnail} alt="jetour" />
                </div>
                <article className='v-article-02__article-container'>
                <p>Grupo Martí presentó <b>Jetour</b>, una marca de vehículos que se encuentra entre los tres grupos automotrices más importantes de China,  con exportación en más de 30 países y regiones del mundo.</p>
                    <p>El lanzamiento se hizo en  showroom, en Evaristo Morales. <b>Jetour</b> cuenta con tres showrooms ubicados estratégicamente en Santo Domingo; espacios dedicados exclusivamente para percibir de cerca todas las cualidades innovadoras de la marca, con planes de expansión en el 2024 hacia la Zona Norte y la Zona Este de República Dominicana.</p>
                    <p>El encuentro estuvo encabezado por los principales miembros del comité ejecutivo de MARTÍ; Don Carlos Martí Besonias, presidente de consejo; Carlos José Martí, presidente ejecutivo; José Martí, vicepresidente ejecutivo; Christian Cabral, CEO del portafolio de vehículos y vicepresidente de negocios; Danilo Bobadilla, vicepresidente de proyectos y desarrollo, entre otros.</p>
                    <p>"Nos sentimos honrados de ser los representantes exclusivos de esta marca en el país, ofreciendo a los clientes el servicio personalizado que nos ha caracterizado durante 10 años, con el respaldo de un equipo local, que se motiva por la pasión de mover personas." comentó Christian Cabral, CEO del portafolio de vehículos y vicepresidente de negocio.</p>
                    <p>Con la entrada de Jetour a su portafolio de vehículos, la empresa recalca su propósito de hacer sentir a los clientes como parte de la familia.Compromiso que se resalta a través de la implementación de nuevas herramientas y brindando diferentes ubicaciones estratégicas para la comodidad de los clientes. A ello, se le suma un equipo de profesionales altamente capacitados para asistir de forma personalizada.</p>
                    <h3>Modelos disponibles</h3>
                    <p><b>X70:</b> Es un SUV compacto que cuenta con tres filas de asientos, luces LED, aros 20", keyless drive & enter, compuerta trasera eléctrica, sensores de parqueo traseros y delanteros, pantalla digital de 10", techo panorámico, cámara 360 grados y motor de 1.5cc 157hp con turbo transmisión automática de 8 velocidades.</p>
                    <p><b>X70 Plus:</b> Más espacioso que el X70, con un imponente diseño exterior, doble pantalla digital de 12.3", cámara 360 grados, aros 20", techo panorámico, 3 filas de asientos en piel, compuerta trasera electrónica, cargador inalámbrico, palanca de cambios e-shifter, freno de estacionamiento electrónico, motor 1.6cc turbo con 196hp transmisión DCT de 7 velocidades.</p>
                    <p><b>X90+:</b> Es el SUV más familiar y espacioso de toda la gama, con doble pantalla digital de 12.3", cámara 360 grados HD, aros 20", techo panorámico, Parqueo Asistido Automático, 3 filas de asientos en piel, cargador inalámbrico, compuerta trasera electrónica, Sistema de sonido Sony, palanca de cambios e-shifter, freno de estacionamiento electrónico, 6 bolsas de aire, dobla aire acondicionado, Motor 2.0 Turbo con 254hp, transmisión DCT de 7 velocidades.</p>
                    <p><b>Dashing:</b> Es el modelo más reciente presentado por la marca, con un diseño exterior deportivo, líneas atrevidas e innovadoras, creado por Hakan Saracoglu. Hace debutar una nueva arquitectura modular propia de Jetour denominada Kunlun, que permite diferentes siluetas, de diferentes tamaños y con opciones variadas de trenes motrices, y opciones de tracción simple y total. Este vehículo cuenta con aros 19", cámara 360 grados, techo panorámico, pantalla Multifuncional de 12", cargador inalámbrico, motor 1.5 turbo con 156hp, asientos en piel eléctricos y ventilados, compuerta trasera eléctrica, 6 bolsa de aire, comando de voz.</p>
                </article>
                <div className='v-article-02__date-container'>
                    <p className='v-article-02__date'>6 Julio, 2023</p>
                </div>
            </div>
            <CFooter />
        </div>
    )
}