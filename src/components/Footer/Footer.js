import "./Footer.css"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
<footer id="footer">
<table id="footerTable">
    <tbody>
        <tr id="footerTitles">
        <th>About</th>
        <th>Our Hours</th>
        <th>Contact Us</th>
        <th>Work With Us </th>
        </tr>
        <tr id="footerContent">
            <td>
                <Link to="aboutus">
                <h4 className="h4Link">About Us</h4>
                </Link>
            </td>
            <td>
            <p id="p1">8:00AM-5:00PM (est)</p>
            </td>
            <td>
            <p id="p3">anngamal14@gmail.com</p>  
            </td>
            <td>
          <Link to="/partnership">
          <h4 className="h4Link">Partnerships & Inquiries</h4>
          </Link>
            </td>
        </tr>
        <tr>
            <td>
                <Link to="/refundpolicy">
            <h4 className="h4Link">Refund policy</h4>
            </Link>
            </td>
            <td>
            <p id="p2">5:00AM-2:00PM (pst)</p>
            </td>
            <td>
            <p id="p4">347-403-8425</p>
            </td>
            {/* <td>
            <button id="subscribeBtn">Subscribe</button> 
            </td> */}
        </tr>
    </tbody>
</table>


</footer>
    )
}
