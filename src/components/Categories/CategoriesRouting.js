import React from 'react';
import "./CategoriesRouting.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchByBodyPart from './Search By Body Part';
import SearchByBrand from './Search By Brand';
// import SearchByCategories from './NavSearchByCategory'
import GymMachines from './Gym Machines';
import FitnessAtHome from './Fitness at Home';
import PtSupplies from './Physical Therapy Supplies';

export default function CategoriesRouting(){
    return(
        <div id="categoriesRoutingDiv" className="categories-container">
            {/* <h3>Search </h3> */}
             <ul id="categoriesRoutingUl"  className="categories-list">
            <li><Link to="/searchbybrand" className='categoriesLinks'>Search By Brand</Link></li>
            <li><Link to="/searchbybodypart" className='categoriesLinks'>Search By Body Part</Link></li>
            <li><Link to="/searchbycategory"className='categoriesLinks' >Search By Category</Link></li>
            <li><Link to="/gymmachines" className='categoriesLinks'>Gym Machines</Link></li>
            <li><Link to="/physicaltherapysuplies" className='categoriesLinks' >Physical Therapy Supplies</Link></li>
            <li><Link to="/fitnessathome" className='categoriesLinks' >Fitness at Home</Link></li>
            </ul>
        </div>
    )
}