import React, { useState } from "react";
import { Link } from "../../../../components/Link/Link";
import { Modal } from "../../../../components/Modal";
import { ImgModal } from "../../../../components/Modal/ImgModal";

interface TopCardProps {
    children?: React.ReactNode,
    city: string,
    src: Array<string>,
    likesCount: number,
    comments: number,
}

export const TopCard = ({children, city, src, likesCount, comments}: TopCardProps) => {
const [more, setMore] = useState (false);
const [likes, setLikes] = useState (likesCount);
const [modalComments, setModalComments] = useState(false);
const [modalImg, setModalImg] = useState(false);
const [imgCarousel, setImgCarousel] = useState(0);
return(
<div className="top__card">
    <div className="top__card-pic">
        <img src={src[0]} alt="" className="top__card-img" onClick={() => setModalImg(prev => !prev)}/>
        <div className="top__card-info">
            <h3 className="top__card-title">
                {city}
            </h3>
            <div className="top__card-stats">
                <button className="top__card-likes" onClick={() => setLikes(prev => prev + 1)}>{likes}</button>
                <button className="top__card-comments" onClick={() => setModalComments(prev => !prev)}>{comments}</button>
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
        <ImgModal srcArr={src}/>
    </Modal> }
    {modalComments && <Modal title="Comments" onClose={() => setModalComments(prev => !prev)}>
        <div className="comments-modal">
        </div>
    </Modal>}
</div>
)
}