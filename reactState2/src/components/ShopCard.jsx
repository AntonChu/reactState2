import shoe1 from '../i/1.jpg';
import shoe2 from '../i/2.jpg';
import shoe3 from '../i/3.jpg';
import shoe4 from '../i/4.jpg';
import shoe5 from '../i/5.jpg';
import shoe7 from '../i/7.jpg';
const imgs = {1: shoe1, 2: shoe2, 3: shoe3, 4: shoe4, 5: shoe5, 7: shoe7};

const ShopCard = (props) => {
  const getImg = (number) => {
    return imgs[number];
  }  
  return (
    <div className="product-box" key={props.name + '' + props.color}>
      <h3 className="product-name">{props.name}</h3>
      <p className="product-color">{props.color}</p>
      <div className="img-container">
        <img className="product-img" src={getImg(props.img)}></img>
      </div>
      <div className="flex">
        <div className="product-price">${props.price}</div>
        <button className="add-to-basket">Add to Cart</button>
      </div>
    </div>
  )
}

export default ShopCard