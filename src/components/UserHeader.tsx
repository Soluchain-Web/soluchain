import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function UserHeader(){
    return(
        <header>
                <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
                    <div className="container">
                        <NavLink to='/Home' className="navbar-brand fw-bold" title="home">CarbonGov</NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to='/Home' className="nav-link d-flex-row justify-content-between py-3 py-md-0 px-md-3" aria-current="page">Portfólio</NavLink>
                                <NavLink to='/NFT/List' className="nav-link d-flex-row justify-content-between py-3 py-md-0 px-md-3">Investir</NavLink>
                                <NavLink to='/Help' className="nav-link d-flex-row justify-content-between py-3 py-md-0 px-md-3">Ajuda</NavLink>
                                <NavLink to='/User/Profile' title="Perfil" className="nav-link d-flex-row align-items-center justify-content-between py-3 py-md-0 px-md-3">
                                    <FontAwesomeIcon className='border rounded-circle border-dark p-1 w-75' size="1x" border icon={faUser}/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    )
}