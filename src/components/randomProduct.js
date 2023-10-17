// import React, { useState } from 'react';
export default function RandomProduct(){
    return(
        <div>
            
        </div>
    )
}
//     const [isAddedToCart, setAddedToCart] = useState(false);

//     const addToCart = () => {
//       setAddedToCart(true);
//       // You can also trigger a notification here
//       if ("Notification" in window) {
//         Notification.requestPermission().then(function(permission) {
//           if (permission === "granted") {
//             new Notification("Added to Cart");
//           }
//         });
//       }
//     };
//     return(
//         <div>
//             <img src="https://assets.burberry.com/is/image/Burberryltd/A7FEF157-7F5F-4A24-BB66-552D60E393E9?$BBY_V2_SL_1x1$&wid=2500&hei=2500" width="300px" height="200px"/>
//             <p>$35</p>
//             <button onClick={addToCart} id ="addtocartBtn" >Add to cart</button>
//             {isAddedToCart && <p id="p">Added to Cart</p>}
//         </div>
//     )
// }