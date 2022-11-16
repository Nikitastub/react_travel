import React from "react";
import { IPlace } from "./Place/placeModel";

export const Place = (place: IPlace) =>
    <div className={`places__card places__card-${place.size}`}>
        <img src={place.src} alt={place.name} className={`places__card-pic ${place.size}`} />
        <h3 className="places__card-desc">
        {place.name}
        </h3>
        <a href="#" className="places__card-link"></a>
    </div>