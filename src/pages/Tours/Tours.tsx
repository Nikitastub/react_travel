import React from 'react';
import { Link } from '../../components/Link/Link';
import  tour1 from '../../img/tour-1.jpeg'
import  tour2 from '../../img/tour-2.jpeg'

export const Tours = () =>
    <div className="tours" id="articles">
            <div className="wrapper-full">
                <div className="tours__wrap">
                    <div className="tours__tour">
                        <div className="tours__tour-img">
                            <img src={tour1} alt="Prefecture in Focus: Tottori" className="tours__tour-pic" />
                        </div>
                        <div className="tours__tour-info">
                            <h3 className="tours__tour-title">
                                Prefecture in Focus: Tottori
                            </h3>
                            <p className="tours__tour-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, 
                            </p>
                            <Link linkName='VIEW PREFECTURE' classes='tours__tour-more link-shape' type='link' />
                        </div>
                    </div>
                    <div className="tours__tour">
                        <div className="tours__tour-info">
                            <h3 className="tours__tour-title">
                                Featured Neighborhood: Kyoto’s Arashiyama
                            </h3>
                            <p className="tours__tour-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, 
                            </p>
                            <Link linkName='VIEW NEIGHBORHOOD' classes='tours__tour-more link-shape' type='link' />
                        </div>
                        <div className="tours__tour-img">
                            <img src={tour2} alt="Featured Neighborhood: Kyoto’s Arashiyama" className="tours__tour-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>