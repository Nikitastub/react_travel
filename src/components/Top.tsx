import React from 'react';
import '../App.css';
import  top1 from '../img/top-1.jpeg'
import  top2 from '../img/top-2.jpeg'
import  top3 from '../img/top-3.jpeg'
import  top4 from '../img/top-4.jpeg'
import  top5 from '../img/top-5.jpeg'
import  top6 from '../img/top-6.jpeg'

export function Top() {
  return (
    <div className="top" id="locations">
            <div className="wrapper-full">
                <h2 className="top__header section-title">
                    Today top places to visit
                </h2>
                <div className="top__cards">
                    <div className="top__card">
                        <div className="top__card-pic">
                            <img src={top1} alt="" className="top__card-img" />
                            <div className="top__card-info">
                                <h3 className="top__card-title">
                                    NAGOYA
                                </h3>
                                <div className="top__card-stats">
                                    <span className="top__card-likes">221</span>
                                    <span className="top__card-comments">50</span>
                                </div>
                            </div>
                        </div>
                        <p className="top__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href="" className="top__card-more base-button">
                            SEE MORE
                        </a>
                    </div>
                    <div className="top__card">
                        <div className="top__card-pic">
                            <img src={top2} alt="" className="top__card-img" />
                            <div className="top__card-info">
                                <h3 className="top__card-title">
                                    NIIGATA
                                </h3>
                                <div className="top__card-stats">
                                    <span className="top__card-likes">221</span>
                                    <span className="top__card-comments">50</span>
                                </div>
                            </div>
                        </div>
                        <p className="top__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href="" className="top__card-more base-button">
                            SEE MORE
                        </a>
                    </div>
                    <div className="top__card">
                        <div className="top__card-pic">
                            <img src={top3} alt="" className="top__card-img" />
                            <div className="top__card-info">
                                <h3 className="top__card-title">
                                    OSAKA
                                </h3>
                                <div className="top__card-stats">
                                    <span className="top__card-likes">221</span>
                                    <span className="top__card-comments">50</span>
                                </div>
                            </div>
                        </div>
                        <p className="top__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href="" className="top__card-more base-button">
                            SEE MORE
                        </a>
                    </div>
                    <div className="top__card">
                        <div className="top__card-pic">
                            <img src={top4} alt="" className="top__card-img" />
                            <div className="top__card-info">
                                <h3 className="top__card-title">
                                    SAITAMA
                                </h3>
                                <div className="top__card-stats">
                                    <span className="top__card-likes">221</span>
                                    <span className="top__card-comments">50</span>
                                </div>
                            </div>
                        </div>
                        <p className="top__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href="" className="top__card-more base-button">
                            SEE MORE
                        </a>
                    </div>
                    <div className="top__card">
                        <div className="top__card-pic">
                            <img src={top5} alt="" className="top__card-img" />
                            <div className="top__card-info">
                                <h3 className="top__card-title">
                                    UENO
                                </h3>
                                <div className="top__card-stats">
                                    <span className="top__card-likes">221</span>
                                    <span className="top__card-comments">50</span>
                                </div>
                            </div>
                        </div>
                        <p className="top__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href="" className="top__card-more base-button">
                            SEE MORE
                        </a>
                    </div>
                    <div className="top__card">
                        <div className="top__card-pic">
                            <img src={top6} alt="" className="top__card-img" />
                            <div className="top__card-info">
                                <h3 className="top__card-title">
                                    SHIBUYA
                                </h3>
                                <div className="top__card-stats">
                                    <span className="top__card-likes">221</span>
                                    <span className="top__card-comments">50</span>
                                </div>
                            </div>
                        </div>
                        <p className="top__card-desc">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href="" className="top__card-more base-button">
                            SEE MORE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
