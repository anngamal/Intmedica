import "./CategoriesImages.css"
import React from "react";
import { Link } from "react-router-dom"
import CategoryCard from "./CategoryCard";
import ptsuppliesImg from "./chattnoogaUltraSound.jpg"
import tablesImg from "./tables.jpg" 
import gymmachineImg from "./gymmachine.png"
import accessoriesImg from"./accessories.jpg"
import heaterImg from "./heating.jpg"
import recairImg from "./recoveryair.jpg"
import mainbannerImg from "./MainBanner.png"
import theragunImg from "./theragun.webp"
export default function CategoriesImages(){
    return(
        <div>
            <ul className="cards">
                <Link to="/fitnessathome">
                    <img id="fitnessathomeImg" className="catImage" src={mainbannerImg} />
                    <h4 className="catImgName">Fitness at Home</h4>
                </Link>
                <Link to="/physicaltherapysuplies">
                    <img id="ptsuppliesImg" className="catImage" src={ptsuppliesImg} />
                    <h4 className="catImgName">PT Supplies</h4>
                </Link>
                <Link to="/tables">
                <img id="tablesImg" className="catImage" src={tablesImg} />
                <h4 className="catImgName">Tables/Tractions</h4>
                </Link>
                <Link to="/gymmachines">
                    <img id="gymmachineImg" className="catImage" src={gymmachineImg} />
                    <h4 className="catImgName"> Gym Machines</h4>
                </Link>
                <Link to="/theraguns">
                    <img id="theragunsImg" className="catImage" src={theragunImg} />
                    <h4 className="catImgName"> Theraguns</h4>
                </Link>
                <Link to="/hotandcold">
                    <img id="hotandcoldImg" className="catImage" src={heaterImg} />
                    <h4 className="catImgName"> Hot & Cold</h4>
                </Link>
                <Link to="/accessories">
                    <img id="accessoriesImg" className="catImage" src={accessoriesImg} />
                    <h4 className="catImgName"> Accessories</h4>
                </Link>
                <Link to="/recoveryproducts">
                    <img id="recoveryproductsImg" className="catImage" src={recairImg} />
                    <h4 className="catImgName"> Recovery Products</h4>
                </Link>


            </ul>
        </div>
    )
}