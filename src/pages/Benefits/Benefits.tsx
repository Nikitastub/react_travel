import React from 'react';
import { Link } from '../../components/Link/Link';
import  church from '../../img/church-ico.svg'
import  man from '../../img/man-ico.svg'
import  shop from '../../img/shop-ico.png'

export const Benefits = () =>
    <section className="benefits">
            <div className="benefits__wrap">
                <h2 className="benefits__title">
                    Benefits of Odigo
                </h2>
                <div className="benefits__cards">
                    <div className="benefits__card">
                        <div className="benefits__card-img">
                            <img src={church} alt="Welcome to Odigo!" className="benefits__card-pic" />
                        </div>
                        <h3 className="benefits__card-title">
                            Welcome to Odigo!
                        </h3>
                        <p className="benefits__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                        </p>
                        <Link linkName='LEARN MORE' classes='benefits__card-more link-shape' />
                    </div>
                    <div className="benefits__card">
                        <div className="benefits__card-img">
                            <img src={man} alt="Your Personal Japan Guide" className="benefits__card-pic" />
                        </div>
                        <h3 className="benefits__card-title">
                            Your Personal Japan Guide
                        </h3>
                        <p className="benefits__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                        </p>
                        <Link linkName='LEARN MORE' classes='benefits__card-more link-shape' />
                    </div>
                    <div className="benefits__card">
                        <div className="benefits__card-img">
                            <img src={shop} alt="Promoting Local Businesses" className="benefits__card-pic" />
                        </div>
                        <h3 className="benefits__card-title">
                            Promoting Local Businesses
                        </h3>
                        <p className="benefits__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                        </p>
                        <Link linkName='LEARN MORE' classes='benefits__card-more link-shape' />
                    </div>
                </div>
            </div>
        </section>
