import React from 'react';
import { TopCard } from './components/Card/TopCard';
import { SectionTitle } from '../../components/SectionTitle';
import cardsArray from '../../data'

export const Top = () => 
    <div className="top" id="locations">
            <div className="wrapper-full">
                <SectionTitle text='Today top places to visit' />
                <div className="top__cards">
                    {cardsArray.map(card => <TopCard src={card.src} city={card.city} likesCount={card.likes} comments={card.comments}/>)}
                </div>
            </div>
        </div>