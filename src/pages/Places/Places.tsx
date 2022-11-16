import React from 'react';
import { Link } from '../../components/Link/Link';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import  place1 from '../../img/place-1.jpeg'
import  place2 from '../../img/place-2.jpeg'
import  place3 from '../../img/place-3.jpeg'
import  place4 from '../../img/place-4.jpeg'
import  place5 from '../../img/place-5.jpeg'
import { Place } from './components/Place';

export const Places = () => 
    <section className="places">
            <div className="wrapper-full">
                <div className="places__capture">
                    <SectionTitle text='Get inspired for your next trip' />
                    <Link linkName='VIEW ALL' classes='places__view-all link-shape' />
                </div>
                <div className="places__cards">
                    <Place src={place1} name="Mount Fuji" size='lg' />
                    <Place src={place2} name="Tokio" size='lg' />
                    <Place src={place3} name="Hirosima" size='sm' />
                    <Place src={place4} name="Tanaka" size='sm' />
                    <Place src={place5} name="Tan Dzao" size='sm' />
                </div>
            </div>
        </section>