import { NavLink } from "react-router-dom";

export function NftKindNavbar() {
    return(
        <div className="d-none d-md-block col-md-3">
        <nav className="nav flex-column bg-primary-color sidebar p-3 menu-investir">
            <a className="nav-link" aria-current="page" href="#"><h6>
            <b>Crédito de Carbono</b></h6>
            </a>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Projetos parceiros</b></h6></NavLink>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Terrenos em uso em projetos ambientais</b></h6></NavLink>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Resultados obtidos</b></h6></NavLink>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Relatórios e publicações</b></h6></NavLink>
            <NavLink className='nav-link' aria-current="page" to='/NFT/List'><h6><b>Monitoramento ambiental</b></h6></NavLink>
        </nav>
    </div>
    )
}