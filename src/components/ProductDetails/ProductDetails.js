//when i click on product card i should go to this details 
import react, {useState} from 'react'
import "./ProductDetails.css"
import { useParams } from 'react-router-dom';
import grftsImg from "./gymmachine.png"
import gdcc200Img from"./gdcc200.png"



export default function ProductDetails({ addToCart }){
    const productDetails= [
        {
           "id":1,
           "image":grftsImg,
           "name":"GRFTS",
           "description": "Maximize your workout space and experience the benefits of free-weight-based power rack workouts, cable-based functional trainer workouts, and lat pulldowns with the Body-Solid GPRFTS Power Rack Functional Trainer Attachment. This add-on effortlessly integrates with the Body-Solid GPR400 Power Rack and offers diverse workout routines while saving precious gym floor space.The GPRFTS with the GPR400 Power Rack is like having three machines—a high-quality power rack, an adjustable functional trainer, and a lat pulldown machine—in the space of one. ",
           "price":"$190.99"
         },
         {
           "id":2,
           "image":gdcc200Img,
           "name":"Gdcc200",
           "description": "With the GDCC200, life imitates state-of-the-art in a new space-saving design .Define the motions that are right for you and your individual workout goals with the Body-Solid GDCC200 Functional Training Center. This dual independent weight stack system provides dedicated resistance with true isolateral movements.Core stability training can lead to improved balance, coordination and stability. By efficiently working your body's stabilizer muscles though a limitless number of exercises, the GDCC200 Functional Training Center offers strength-building results to users of all sizes.",
           "price":"$240.99"
         }
       ]
       const [isAddedToCart, setAddedToCart] = useState(false);
       const handleAddToCart = () => {
        addToCart(product); // Call the addToCart function with the product
        setAddedToCart(true);
      };
       const addToCartToggle = () => {
           setAddedToCart(true);
         };
    const { id } = useParams();
    const product = productDetails.find(item => item.id === parseInt(id));
    console.log(id, product)

    if (!product) {
      return <div>Product not found</div>;
    }
   
   


    return(
        <div className="productDetailsDiv">
            <div className="productDetailsImgDiv">
            <img className="productDetailsImg" src={product.image}/>
            </div>
            <div className="productDetailsDetails">
                <p>Product ID: {id}</p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h3>{product.price}</h3>
                {isAddedToCart ? (
                <button disabled id="addtocartBtnDisabled" className="addToCartBtn">
                Added to Cart
                </button>
            ) : (
                <button onClick={() => {
                  addToCartToggle();
                  handleAddToCart();
                }}  id="addtocartBtn" className="addToCartBtn">
                Add to cart
                </button>
            )}
            </div>
        </div>
    )
}
