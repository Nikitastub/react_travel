import React from 'react';
import { TopCard } from './components/Card/TopCard';
import  top1 from '../../img/top-1.jpeg'
import  top2 from '../../img/top-2.jpeg'
import  top3 from '../../img/top-3.jpeg'
import  top4 from '../../img/top-4.jpeg'
import  top5 from '../../img/top-5.jpeg'
import  top6 from '../../img/top-6.jpeg'
import { SectionTitle } from '../../components/SectionTitle';

export const Top = () => 
    <div className="top" id="locations">
            <div className="wrapper-full">
                <SectionTitle text='Today top places to visit' />
                <div className="top__cards">
                    <TopCard src={top1} likesCount={45} comments={4}/>
                    <TopCard src={top2} likesCount={65} comments={9} />
                    <TopCard src={top3} likesCount={34} comments={4} />
                    <TopCard src={top4} likesCount={15} comments={15}/>
                    <TopCard src={top5} likesCount={27} comments={11}/>
                    <TopCard src={top6} likesCount={69} comments={9}/>
                </div>
            </div>
        </div>