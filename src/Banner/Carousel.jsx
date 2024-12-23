import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../Banner/Img/01.jpg';
import img2 from '../Banner/Img/02.jpg';
import img3 from '../Banner/Img/03.png';
import img4 from '../Banner/Img/04.jpg';
import img5 from '../Banner/Img/05.png';
import img6 from '../Banner/Img/06.png';
import img7 from '../Banner/Img/banner.jpg';

const Carousels = () => {
    return (
        <div>
                   <Carousel>
                <div>
                    <img src={img1} />
                  
                </div>
                <div>
                    <img src={img2} />
                 
                </div>
                <div>
                    <img src={img3} />
                  
                </div>
                <div>
                    <img src={img4} />
                   
                </div>
                <div>
                    <img src={img5} />
                   
                </div>
                <div>
                    <img src={img6} />
                
                </div>
                <div>
                    <img src={img7} />
                   
                </div>
            
            </Carousel>
        </div>
    );
};

export default Carousels;