import React from 'react';
import '../App.css';
import  place1 from '../img/place-1.jpeg'
import  place2 from '../img/place-2.jpeg'
import  place3 from '../img/place-3.jpeg'
import  place4 from '../img/place-4.jpeg'
import  place5 from '../img/place-5.jpeg'

export function Places() {
  return (
    <section className="places">
            <div className="wrapper-full">
                <div className="places__capture">
                    <h2 className="places__title section-title">
                        Get inspired for your next trip
                    </h2>
                    <a href="#" className="places__view-all base-link link-shape">
                        VIEW ALL
                    </a>
                </div>
                <div className="places__cards">
                    <div className="places__card places__card-lg">
                        <img src={place1} alt="Mount Fuji" className="places__card-pic lg" />
                        <h3 className="places__card-desc">
                            Mount Fuji
                        </h3>
                        <a href="#" className="places__card-link"></a>
                    </div>
                    <div className="places__card places__card-lg">
                        <img src={place2} alt="Mount Fuji" className="places__card-pic lg" />
                        <h3 className="places__card-desc">
                            Mount Fuji
                        </h3>
                        <a href="#" className="places__card-link"></a>
                    </div>
                    <div className="places__card places__card-sm">
                        <img src={place3} alt="Mount Fuji" className="places__card-pic sm" />
                        <h3 className="places__card-desc">
                            Mount Fuji
                        </h3>
                        <a href="#" className="places__card-link"></a>
                    </div>
                    <div className="places__card places__card-sm">
                        <img src={place4} alt="Mount Fuji" className="places__card-pic sm" />
                        <h3 className="places__card-desc">
                            Mount Fuji
                        </h3>
                        <a href="#" className="places__card-link"></a>
                    </div>
                    <div className="places__card places__card-sm">
                        <img src={place5} alt="Mount Fuji" className="places__card-pic sm" />
                        <h3 className="places__card-desc">
                            Mount Fuji
                        </h3>
                        <a href="#" className="places__card-link"></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
