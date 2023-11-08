import "./SearchByCategory.css"
import React from "react";
import { Link } from "react-router-dom"
import mainbannerImg from "./theragun.webp"
import SearchByCatCard from "./SearchByCatCard";
import ultrasound from "./chattnoogaUltraSound.jpg"
import electrodes from "./electrodes.jpg"
import goggles from "./goggles.jpg"
import mobility from "./mobility.jpg"
import portable from "./portable.jpg"
import powerdot from "./powerdot.webp"
import recair from "./recoverair.webp"
import shockwave from "./shockwave.jpg"
import tables from "./tables.jpg"
import theraface from "./Theraface.webp"
import waveseries from "./Waveseries.webp"
export default function SearchByCatImgs(){
    return(
        <div>
            <ul className="searchByCategoryMainUl">
                <Link to="/category/Theragun">
                    <img id="TheragunSearchByCategoryImg" className="SearchByCatImage" src={mainbannerImg} />
                    <h4 className="catImgName">Theragun</h4>
                </Link>
                <Link to="/category/Powerdot">
                    <img id="PowerdotSearchByCategoryImg" className="SearchByCatImage" src={powerdot} />
                    <h4 className="catImgName">Powerdot</h4>
                </Link>
                <Link to="/category/Tables">
                <img id="tablesSearchByCategoryImg" className="SearchByCatImage" src={tables} />
                <h4 className="catImgName">Tables/Tractions</h4>
                </Link>
                <Link to="/category/Recoveryair">
                    <img id="RecoveryairSearchByCategoryImg" className="SearchByCatImage" src={recair} />
                    <h4 className="catImgName">Recoveryair</h4>
                </Link>
                <Link to="/category/Theraface">
                    <img id="TheraFaceSearchByCategoryImg" className="SearchByCatImage" src={theraface} />
                    <h4 className="catImgName"> TheraFace</h4>
                </Link>
                <Link to="/category/hotandcold">
                    <img id="hotandcoldSearchByCategoryImg" className="SearchByCatImage" src={mainbannerImg} />
                    <h4 className="catImgName"> Hot & Cold</h4>
                </Link>
                <Link to="/category/ClinicSupplies">
                    <img id="ClinicSuppliesSearchByCategoryImg" className="SearchByCatImage" src={ultrasound} />
                    <h4 className="catImgName"> Clinic Supplies</h4>
                </Link>
                <Link to="/category/PortableElectrotherapy">
                    <img id="PortableElectrotherapySearchByCategoryImg" className="SearchByCatImage"src={portable} />
                    <h4 className="catImgName">Portable Electrotherapy</h4>
                </Link>
                <Link to="/category/Electrodes">
                    <img id="ElectrodesSearchByCategoryImg" className="SearchByCatImage" src={electrodes} />
                    <h4 className="catImgName">Electrodes</h4>
                </Link>

                <Link to="/category/WaveSeries">
                    <img id="WaveSeriesSearchByCategoryImg" className="SearchByCatImage" src={waveseries} />
                    <h4 className="catImgName"> WaveSeries </h4>
                </Link>
                <Link to="/category/lightForcetherapy">
                    <img id="LightForceTherapySearchByCategoryImg" className="SearchByCatImage" src={mainbannerImg} />
                    <h4 className="catImgName">LightForce Therapy</h4>
                </Link>
                <Link to="/category/Mobility">
                    <img id="SearchByCategoryImg" className="SearchByCatImage" src={mobility} />
                    <h4 className="catImgName">Mobility</h4>
                </Link>
                <Link to="/category/Smartgoggles">
                    <img id="SmartGogglesSearchByCategoryImg" className="SearchByCatImage" src={goggles} />
                    <h4 className="catImgName">Smart Goggles</h4>
                </Link>
                <Link to="/category/ShockwaveAndRPW">
                    <img id="ShockwaveSearchByCategoryImg" className="SearchByCatImage" src={shockwave} />
                    <h4 className="catImgName">Shockwave & RPW</h4>
                </Link>
                <Link to="/category/VitalstimTherapy">
                    <img id="VitalstimTherapySearchByCategoryImg" className="SearchByCatImage"src={mainbannerImg} />
                    <h4 className="catImgName">Vitalstim Therapy</h4>
                </Link>
                <Link to="/category/Electrotherapy">
                    <img id="ElectrotherapySearchByCategoryImg" className="SearchByCatImage" src={mainbannerImg} />
                    <h4 className="catImgName">Electrotherapy</h4>
                </Link>
                <Link to="/category/RecoveryTherm">
                    <img id="RecoveryThermSearchByCategoryImg" className="SearchByCatImage" src={mainbannerImg} />
                    <h4 className="catImgName"> RecoveryTherm </h4>
                </Link>


            </ul>
        </div>
    )
}