import React from 'react';
import '../App.css';

export const Videos = () => 
    <div className="videos" id="videos">
            <div className="videos__wrapper">
                <div className="video__item"></div>
                <iframe className="video__full" src="https://www.youtube.com/embed/8ypRvNZhocU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    
            </div>
        </div>