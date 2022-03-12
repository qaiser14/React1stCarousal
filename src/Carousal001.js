import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import tissot1 from './Assets/novelity3.webp'
import tissot2 from './Assets/TissotAlpine.webp'
import tissot3 from './Assets/TissotSport100.webp'
import tissot4 from './Assets/TissotTradition.webp'


class Carousal001 extends Component{
    render(){
        return(
            <div style={{width:"35vw", height:"76vh", marginLeft:"30vw", border:"2px solid red"}}>
                 <Carousel>
                    <div>
                        <img src={tissot1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={tissot2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={tissot3} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={tissot4} />
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Carousal001