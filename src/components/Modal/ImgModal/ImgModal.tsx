import { useState } from "react";
import leftArrow  from "../../../img/left-arrow.svg";
import rightArrow  from "../../../img/right-arrow.svg";

interface ImgModalProps {
    srcArr: Array<string>,
}

export const ImgModal = ({ srcArr }: ImgModalProps) => {
    const [imgCarousel, setImgCarousel] = useState(0);
    return(
        <div className="full-img">
            <img src={srcArr[imgCarousel]} alt="" className="top__card-img-full" />
            <button className="navigation left-arrow" onClick={() => setImgCarousel(prev => prev == 0 ?  srcArr.length - 1: prev - 1 )}>
                <img src={leftArrow} alt="" className="arrow" />
            </button>
            <button className="navigation right-arrow" onClick={() => setImgCarousel(prev => prev == srcArr.length - 1 ? 0:  prev + 1)}>
                <img src={rightArrow} alt="" className="arrow" />
            </button>
        </div>
        )
    }
