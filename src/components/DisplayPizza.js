import { Carousel} from 'react-bootstrap'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import "../styles/DisplayPizza.css"
const DisplayPizza = () => {
return(
    <div className="display">
        <Carousel interval={1500}>
                    <Carousel.Item>
                        <img src= {img1} height="400px" width="100%" alt="Img1" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src= {img2} height="400px" width="100%" alt="Img2" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} height="400px" width="100%" alt="Img3" />

                    </Carousel.Item>
                </Carousel>
    </div>
)
}

export default DisplayPizza