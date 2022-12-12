import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBuilding, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export function Index(){
    const {height, width} = useWindowDimensions();

    const isMobile = width < 600 ? 'd-flex flex-column align-items-center mt-4' : 'd-flex flex-row align-items-center mt-4'
    return(
        <div className="w-100 d-flex flex-column align-items-center justify-content-center mt-5">
            <h1 className="fw-bold">Quem é você?</h1>
            <div className={isMobile}>
                <div className="d-flex flex-column align-items-center">
                    <Link to={'/NFT/Register'} className='p-3 bg-start-primary-color d-flex justify-content-center rounded me-2'>
                        <FontAwesomeIcon color="black" size="8x" icon={faBuilding} />
                    </Link>
                    <p className="fw-bold fs-2">SPU</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <Link to={'/Home'} className='p-3 bg-start-secondary-color d-flex justify-content-center rounded ms-2'>
                        <FontAwesomeIcon color='black' size="8x" icon={faEarthAmericas} />
                    </Link>
                    <p className="fw-bold fs-2">Apoiador</p>
                </div>
            </div>
        </div>
    )
}