import image1 from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import image3 from "../images/beverages.jpg"
const CategoryComponent = () =>{
  
    return ( 
        <div className="category-container">
            <div className="category">
                <a href="/customerHome/menuList/vegPizza" >
                    <img className="image" src={image1} alt="Veg Pizza"/>
                </a>
            </div>
            <div className="category">
                <a href="/customerHome/menuList/nonVegPizza">
                    <img className="image" src={image2} alt="Non-Veg Pizza"/>
                </a>
            </div>
            <div className="category">
                <a href="/customerHome/menuList/beverages">
                    <img className="image" src={image3} alt="Beverages" />
                </a>
            </div>
        </div>
    )
}
export default CategoryComponent;