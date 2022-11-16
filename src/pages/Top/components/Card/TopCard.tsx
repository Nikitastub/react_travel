import React from "react";
import { ITopCard } from "./topCardModel";

export const TopCard = (card: ITopCard) =>
<div className="top__card">
<div className="top__card-pic">
    <img src={card.src} alt="" className="top__card-img" />
    <div className="top__card-info">
        <h3 className="top__card-title">
            NAGOYA
        </h3>
        <div className="top__card-stats">
            <span className="top__card-likes">{card.likes}</span>
            <span className="top__card-comments">{card.comments}</span>
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