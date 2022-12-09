import { NavLink } from "react-router-dom";

export function NftKindNavbar() {
    return(
        <div className="d-none d-md-block col-md-3">
        <nav className="nav flex-column bg-primary-color sidebar p-3 menu-investir">
            <a className="nav-link" aria-current="page" href="#"><h6>
            <b>Crédito de Carbono</b></h6>
            </a>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Renda Variável</b></h6></NavLink>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Fundos de Investimento</b></h6></NavLink>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Ofertas Públicas</b></h6></NavLink>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Previdência Privada</b></h6></NavLink>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>COE</b></h6></NavLink>
        </nav>
    </div>
    )
}