import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from "react";
import { nftData } from "../utils/model";
import { NftItem } from "./NftItem";
import logoSrc from "../assets/img/logo.png";

export function UserHeader(){
    const [mobileMenuIsActivate, setMobileMenuIsActivate] = useState(false);
    const mobileMenu = (<NavLink to='/User/Profile' className="nav-link d-flex-row justify-content-between py-3 py-md-0 px-md-3">Meu perfil</NavLink>)
    const desktopMenu = (
    <NavLink to='/User/Profile' title="Perfil" className="nav-link align-items-center justify-content-between py-3 py-md-0 px-md-3">
        <FontAwesomeIcon className='border rounded-circle border-dark p-1 w-75' size="1x" border icon={faUser}/>
    </NavLink>
    )

    function toggleMobileMenu(){
        mobileMenuIsActivate ? setMobileMenuIsActivate(false) : setMobileMenuIsActivate(true)
    }

    useEffect(()=>{
    },[mobileMenuIsActivate]);

    return(
        <header>
            <Navbar collapseOnSelect expand="lg" bg="white" className="navbar border-bottom p-3" variant="white">
                <Container>
                    <NavLink to='/Home' className="navbar-brand fw-bold" title="home">
                        <img src={logoSrc} width="250"/>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMobileMenu} />
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        className="collapse navbar-collapse justify-content-end"
                        >
                        <Nav className="navbar-nav">
                            <NavLink to='/Home' className="nav-link d-flex-row justify-content-between py-3 py-md-0 px-md-3" aria-current="page">Portfólio</NavLink>
                            <NavLink to='/NFT/List' className="nav-link d-flex-row justify-content-between py-3 py-md-0 px-md-3">Investir</NavLink>
                            <NavLink to='/Help' className="nav-link d-flex-row justify-content-between py-3 py-md-0 px-md-3">Ajuda</NavLink>
                            {
                            mobileMenuIsActivate 
                            ? 
                            mobileMenu
                            :                            
                            desktopMenu
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}