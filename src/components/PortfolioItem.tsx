interface Props{
    name: string
    percentage: number
    criptoInvested : number
}

export function PortfolioItem(props:Props){
    return(
        <div className="row py-1">
            <div className="col-8">{props.name}</div>
            <div className="col-2">{props.percentage}%</div>
            <div className="col-2">ETH {props.criptoInvested}</div>
        </div>
    )
}