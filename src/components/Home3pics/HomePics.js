import "./HomePics.css"
import gympic from "./gympic.avif"
import yogapic from "./yogapic.webp"
import massagepic from "./massagepic.jpg"
import excerciseathome from "./dumbbells.jpg"

export default function HomePics(){
    return(
        <div className="Home3PicContainer">
        <div className="Home3picsDiv">
          <div className="image-container">
            <img src={gympic} id="gympicImg" className="Home3PicsImg" />
            <h4 id="gympicH4" className="Home3PicsH4">Get all you need for your gym from us</h4>
          </div>
        </div>
        <div className="Home3picsDiv">
          <div className="image-container">
            <img src={excerciseathome} id="yogapicImg" className="Home3PicsImg" />
            <h4 id="yogapicH4" className="Home3PicsH4">Home exercise supplies</h4>
          </div>
        </div>
        <div className="Home3picsDiv">
          <div className="image-container">
            <img src={massagepic} id="massagepicImg" className="Home3PicsImg" />
            <h4 id="massagepicH4" className="Home3PicsH4">Our massager can help you relieve your pain at home</h4>
          </div>
        </div>
      </div>
      
        
    )
}

