import React, { useState } from "react";
import { Link } from "../../../../components/Link/Link";
import { Modal } from "../../../../components/Modal";
import { ITopCard } from "./topCardModel";

interface TopCardProps {
    children?: React.ReactNode,
    // switchImg: () => void,
    src: string,
    likesCount: number,
    comments: number,
}

export const TopCard = ({children, src, likesCount, comments}: TopCardProps) => {
const [more, setMore] = useState (false);
const [likes, setLikes] = useState (likesCount);
const [modalImg, setModalImg] = useState(false);
return(
<div className="top__card">
    <div className="top__card-pic">
        <img src={src} alt="" className="top__card-img" onClick={() => setModalImg(prev => !prev)}/>
        <div className="top__card-info">
            <h3 className="top__card-title">
                NAGOYA
            </h3>
            <div className="top__card-stats">
                <button className="top__card-likes" onClick={() => setLikes(prev => prev + 1)}>{likes}</button>
                <span className="top__card-comments">{comments}</span>
            </div>
        </div>
    </div>
    <p className="top__card-desc">
        Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.<br/>
        {more && 'Jump off balcony, onto strangers head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this. Jump off balcony, onto stranges head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.'}
    </p>
    <p onClick={() => setMore(prev => !prev)}>
        <Link linkName="SEE MORE" classes="top__card-more" type="button" />
    </p>
    {modalImg && <Modal title="" onClose={() => setModalImg(prev => !prev)} >
        <img src={src} alt="" className="top__card-img-full" />
    </Modal> }
</div>
)
}