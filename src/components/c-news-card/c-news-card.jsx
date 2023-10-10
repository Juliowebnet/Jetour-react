import { Link } from 'react-router-dom'

import './news-card.css'

export default function CNewsCard(props) {
    return(
        <div className='c-news-card'>
            <img src={props.image} alt="" className='c-news-card__image'/>
            <div className='c-news-card__text-group'>
                <h2 className='c-news-card__title'>{props.title}</h2>
                <p className='c-news-card__text'>{props.text}</p>
                <div className='c-news-card__footer'>
                    <p className='c-news-card__footer__date'>{props.date}</p>
                    <Link to={'/'} className='c-news-card__footer__arrow-group'>
                        <div className='c-news-card__footer__arrow'></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}