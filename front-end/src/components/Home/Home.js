import React from "react";
import CarouselFade from "./corousel.js";
import Deals from "./Deals.js";
import NewProducts from "./newProducts.js";
import Shop from "./Shop.js";

export default function Home(){
    return(
        <div>
            <div id='section'>
              <CarouselFade />
              <Shop />
              <Deals />
              <NewProducts />
            </div>
            
        </div>
    )
}