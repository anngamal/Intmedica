import "./Contactus.css";
import contactusImg from "./Theragun-mini-Black-Carousel-04.webp"
export default function Contactus(){
    return(
        <div className="contactusdiv">
            <div>
                <img className="contactusImg" src={contactusImg}/>
            </div>
            <div id="contactUsForm">
            <form id="contactUSformInfo" >
                    <h2 id="h2Contactus">SEND US A MESSAGE</h2>
                    <input type="text" id="nameContact" name="name" placeholder="Name"  />
                    <input type="email" id="emailContact" name="email" placeholder="Email"  />
                    <input type="message" id="msgContact" name="message" placeholder="Message"  />
                    <button id="ContactUsBtn">Contact US</button>
                </form>
            </div>

        </div>
    )
}