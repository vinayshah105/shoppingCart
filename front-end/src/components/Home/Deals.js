import React from "react";
import "../../components CSS/Home CSS/Deals.css";

export default function Deals() {
    return (
        <div>
            <h2 id="dealHead">Deal Of the Day</h2>
            <div className="deal">
                <img className="dealImg1" src="assets/Home/seasonalDeal.png" alt="Seasonal" />
                <img className="dealImg2" src="assets/Home/EveryDayDeal.png" alt="Deal" />
            </div>
            <div>
                <img className="dealImgPoster" src="assets/Home/DealPoster.png" alt="Deal" />
            </div>
        </div>
    )
}